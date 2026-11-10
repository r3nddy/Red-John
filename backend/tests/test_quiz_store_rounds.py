"""Alokasi round_number di quiz_store: otomatis + retry 23505, eksplisit tanpa retry."""
from __future__ import annotations

import asyncio

import pytest
from postgrest.exceptions import APIError
from pydantic import ValidationError

from app import quiz_store
from app.news_harvester import store
from app.quiz import QuizQuestionCreate, QuizQuestionUpdate
from tests.test_quiz import question_data


def _conflict() -> APIError:
    return APIError({"code": "23505", "message": "duplicate", "details": "", "hint": ""})


class _Table:
    def __init__(self, conflict_times: int) -> None:
        self.conflict_times = conflict_times
        self.inserted: list[dict] = []
        self._count = 0

    def insert(self, row: dict) -> "_Table":
        self.row = row
        return self

    async def execute(self):
        self._count += 1
        if self._count <= self.conflict_times:
            raise _conflict()
        self.inserted.append(self.row)
        return type("R", (), {"data": [self.row]})()


class _SelectTable:
    def __init__(self, numbers: list[int]) -> None:
        self.numbers = numbers

    def select(self, *_: str) -> "_SelectTable":
        return self

    def order(self, *_: str, **__) -> "_SelectTable":
        return self

    def limit(self, *_: int) -> "_SelectTable":
        return self

    async def execute(self):
        data = [{"round_number": n} for n in self.numbers[:1]]
        return type("R", (), {"data": data})()


def _install(tables: list) -> None:
    class _Client:
        def __init__(self) -> None:
            self._queue = list(tables)

        def table(self, _: str):
            return self._queue.pop(0)

    store._client = _Client()  # type: ignore[assignment]


def _cleanup() -> None:
    store._client = None


def test_nomor_otomatis_dialokasikan_dan_retry():
    insert_table = _Table(conflict_times=1)
    select_table = _SelectTable([6])
    # next_round_number() lalu insert pada jeda _Table; antrean: select, insert, select, insert.
    _install([select_table, insert_table, select_table, insert_table])
    try:
        payload = QuizQuestionCreate.model_validate(
            {**question_data(), "round_number": None}
        )
        row = asyncio.run(quiz_store.create_question(payload))
        assert row["round_number"] == 7  # nomor terpakai 6 -> alokasi 7, konflik -> ulang
        assert len(insert_table.inserted) == 1
    finally:
        _cleanup()


def test_nomor_eksplisit_tidak_di_retry():
    insert_table = _Table(conflict_times=5)
    _install([insert_table])
    try:
        payload = QuizQuestionCreate.model_validate(
            {**question_data(), "round_number": 1}
        )
        with pytest.raises(APIError):
            asyncio.run(quiz_store.create_question(payload))
        assert insert_table.inserted == []
    finally:
        _cleanup()


def test_tabel_kosong_mulai_dari_satu():
    _install([_SelectTable([])])
    try:
        assert asyncio.run(quiz_store.next_round_number()) == 1
    finally:
        _cleanup()


def test_create_boleh_tanpa_nomor_tapi_update_wajib():
    data = {**question_data(), "round_number": None}
    assert QuizQuestionCreate.model_validate(data).round_number is None
    with pytest.raises(ValidationError):
        QuizQuestionUpdate.model_validate(data)
