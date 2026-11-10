"use client";

import Link from "next/link";

// Bento features grid (layout meniru Supabase, isi = fitur Red John)
// Row 1: 3 kartu — Kuis Kriminal | Akun & Peringkat | Radar Berita
// Row 2: 4 kartu — Pemindai Pesan | Darurat Golden Hour | Mesin Analisis | API Terbuka

export default function BentoFeatures() {
  return (
    <section id="modul" className="pb-20 px-6 bg-[#0c0d0d] font-sans">
      <div className="max-w-[1200px] mx-auto">

        {/* =====================================================================
            ROW 1 — 3 Cards: Crime Quiz (large) | Auth | News Feeds
            ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

          {/* ── CARD 1: Automatic Crime Quiz ── */}
          <Link
            href="/quiz"
            className="group md:col-span-2 rounded-2xl bg-[#161817] border border-white/[0.08] p-7 flex flex-col justify-between relative overflow-hidden min-h-[340px] hover:border-white/[0.14] transition-colors"
          >
            {/* Background video — dekoratif, overlay menjaga kontras teks */}
            <video
              className="absolute inset-0 size-full object-cover opacity-70 pointer-events-none motion-reduce:hidden"
              src="/pixel-boat.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
              tabIndex={-1}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161817]/90 via-[#161817]/30 to-transparent pointer-events-none" />

            {/* Header */}
            <div className="relative">
              <div className="flex items-center gap-2.5 mb-3">
                {/* Quiz / clipboard-check icon */}
                <svg className="size-6 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M9 3.75h6a1.5 1.5 0 0 1 1.5 1.5v.75H16.5a1.5 1.5 0 0 0-1.5 1.5v.75h-6v-.75a1.5 1.5 0 0 0-1.5-1.5H6.75v-.75a1.5 1.5 0 0 1 1.5-1.5Zm7.5 3.75h2.25a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V9a1.5 1.5 0 0 1 1.5-1.5H7.5" />
                </svg>
                <h3 className="text-[16px] font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>Kuis Kriminal Otomatis</h3>
              </div>

              <p className="text-[13.5px] text-[#D4D4D4] leading-relaxed max-w-[280px]">
                Uji naluri waspada dengan <strong className="text-white font-semibold">kuis otomatis</strong> berisi modus kriminal digital yang benar-benar terjadi di Indonesia.
              </p>
            </div>

            {/* Checklist */}
            <div className="relative mt-auto">
              <ul className="space-y-2 text-[14px] text-[#D4D4D4] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <li className="flex items-center gap-2">
                  <span className="text-[#3ECF8E] text-sm">✓</span>
                  <span>Modus asli Indonesia</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3ECF8E] text-sm">✓</span>
                  <span>Diperbarui <span className="text-[#3ECF8E] underline underline-offset-2">setiap hari</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3ECF8E] text-sm">✓</span>
                  <span>Tanpa biaya</span>
                </li>
              </ul>

              <div className="mt-5 inline-flex items-center gap-2 text-[12px] text-[#3ECF8E] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <span>Mulai kuis</span>
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
              </div>
            </div>

          </Link>

          {/* ── CARD 2: Akun & Peringkat ── */}
          <div className="rounded-2xl bg-[#161817] border border-white/[0.08] p-7 flex flex-col justify-between relative overflow-hidden min-h-[340px] hover:border-white/[0.14] transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                {/* Lock Icon */}
                <svg className="size-5 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z" />
                </svg>
                <h3 className="text-[13px] font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>Akun &amp; Peringkat</h3>
              </div>

              <p className="text-[13px] text-[#A0A0A0] leading-relaxed">
                <span className="text-white font-bold underline underline-offset-2">Daftar</span> atau <span className="text-white font-bold underline underline-offset-2">masuk</span> untuk menyimpan skor kuis ke papan peringkat harian. Data Anda dijaga dengan Row Level Security.
              </p>
            </div>

            {/* Mock form pills — username + password */}
            <div className="mt-6 space-y-2">
              {/* Row 1 — identitas */}
              <div className="grid grid-cols-2 gap-2">
                <div className="px-3 py-2 rounded-lg bg-[#0d0e0d] border border-white/[0.08] text-[11px] text-[#666] truncate" style={{ fontFamily: "var(--font-supa-mono)" }}>
                  nama pengguna
                </div>
                <div className="px-3 py-2 rounded-lg bg-[#0d0e0d] border border-white/[0.08] text-[11px] text-[#666] truncate" style={{ fontFamily: "var(--font-supa-mono)" }}>
                  email@contoh.id
                </div>
              </div>
              {/* Row 2 — password dots */}
              <div className="grid grid-cols-2 gap-2">
                <div className="px-3 py-2 rounded-lg bg-[#0d0e0d] border border-white/[0.08] flex items-center gap-1">
                  {[...Array(8)].map((_, i) => (
                    <span key={i} className="size-1.5 rounded-full bg-[#555] inline-block" />
                  ))}
                </div>
                <div className="px-3 py-2 rounded-lg bg-[#0d0e0d] border border-[#3ECF8E]/30 flex items-center justify-center gap-1.5 text-[11px] text-[#3ECF8E]" style={{ fontFamily: "var(--font-supa-mono)" }}>
                  <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  masuk
                </div>
              </div>
              {/* Row 3 — peringkat harian */}
              <div className="grid grid-cols-2 gap-2">
                <div className="px-3 py-2 rounded-lg bg-[#0d0e0d] border border-white/[0.08] text-[11px] text-[#A0A0A0] truncate" style={{ fontFamily: "var(--font-supa-mono)" }}>
                  #1 · skor tertinggi
                </div>
                <div className="px-3 py-2 rounded-lg bg-[#0d0e0d] border border-white/[0.08] text-[11px] text-[#666] truncate" style={{ fontFamily: "var(--font-supa-mono)" }}>
                  reset tiap hari
                </div>
              </div>
              <Link href="/quiz/leaderboard" className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-[#3ECF8E] hover:underline underline-offset-2">
                Lihat papan peringkat
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* ── CARD 3: Radar Berita ── */}
          <Link
            href="/berita"
            className="group rounded-2xl bg-[#161817] border border-white/[0.08] p-7 flex flex-col justify-between relative overflow-hidden min-h-[340px] hover:border-white/[0.14] transition-colors"
          >
            {/* Background video — dekoratif, overlay menjaga kontras teks */}
            <video
              className="absolute inset-0 size-full object-cover opacity-70 pointer-events-none motion-reduce:hidden"
              src="/pixel-floating-island.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
              tabIndex={-1}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161817]/90 via-[#161817]/30 to-transparent pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-2.5 mb-3">
                {/* Radar / broadcast icon */}
                <svg className="size-5 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
                <h3 className="text-[13px] font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>Radar Berita</h3>
                <span className="ml-auto flex items-center gap-1.5 text-[10px] tracking-wider text-[#3ECF8E] uppercase">
                  <span className="relative flex size-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ECF8E] opacity-75" />
                    <span className="relative inline-flex rounded-full size-1.5 bg-[#3ECF8E]" />
                  </span>
                  terkini
                </span>
              </div>

              <p className="text-[13px] text-[#A0A0A0] leading-relaxed">
                Kumpulan <span className="text-white font-bold">berita penipuan terverifikasi</span>: modus penipuan digital terbaru dari media nasional, dikurasi otomatis tiap hari.
              </p>
            </div>

            <div className="relative mt-auto pt-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0d0e0d]/80 backdrop-blur-sm border border-[#3ECF8E]/30 text-[12px]" style={{ fontFamily: "var(--font-supa-mono)" }}>
                <span className="text-[#3ECF8E]">$</span>
                <span className="text-white">redjohn</span>
                <span className="text-[#3ECF8E]">berita</span>
                <span className="text-white group-hover:translate-x-0.5 transition-transform" aria-hidden>↵</span>
              </div>
            </div>
          </Link>

        </div>

        {/* =====================================================================
            ROW 2 — 4 Kartu: Pemindai Pesan | Darurat Golden Hour | Mesin Analisis | API Terbuka
            ===================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* ── CARD 4: Pemindai Pesan ── */}
          <Link
            href="/pemindai"
            className="group rounded-2xl bg-[#161817] border border-white/[0.08] p-6 flex flex-col justify-between relative overflow-hidden min-h-[300px] hover:border-white/[0.14] transition-colors"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                {/* Archive box icon */}
                <svg className="size-4.5 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <h3 className="text-[13px] font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>Pemindai Pesan</h3>
              </div>
              <p className="text-[13px] text-[#A0A0A0] leading-relaxed">
                Tempel SMS, chat, atau tautan. Skor risiko keluar dalam hitungan detik, dan pesan tidak disimpan di server.
              </p>
            </div>

            {/* Daftar sinyal yang dicek */}
            <div className="mt-6 grid grid-cols-4 gap-1.5">
              {["SMS", "WhatsApp", "Email", "Notifikasi", "APK", "Tautan", "Rekening", "OTP"].map((tag) => (
                <div
                  key={tag}
                  className="aspect-square rounded-lg bg-[#0d0e0d] border border-white/[0.07] flex items-center justify-center text-[10px] text-zinc-500"
                  style={{ fontFamily: "var(--font-supa-mono)" }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </Link>

          {/* ── CARD 5: Darurat Golden Hour ── */}
          <Link
            href="/lapor-cepat"
            className="group rounded-2xl bg-[#161817] border border-white/[0.08] p-6 flex flex-col justify-between relative overflow-hidden min-h-[300px] hover:border-white/[0.14] transition-colors"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                {/* Cursor/realtime icon */}
                <svg className="size-4.5 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                </svg>
                <h3 className="text-[13px] font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>Darurat Golden Hour</h3>
              </div>
              <p className="text-[13px] text-[#A0A0A0] leading-relaxed">
                Baru tertipu transfer? Buat <span className="text-white font-bold">paket laporan</span> blokir rekening &amp; draft laporan polisi dalam 5 menit. Data tetap di perangkat Anda.
              </p>
            </div>

            {/* Urutan tindakan berbasis jam */}
            <div className="mt-6 space-y-1.5 text-[11px] relative" style={{ fontFamily: "var(--font-supa-mono)" }}>
              <div className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-md bg-[#0d0e0d] border border-white/[0.05]">
                <span className="text-[#A0A0A0] truncate">T+0 · blokir bank tujuan</span>
                <span className="text-[#E9B949] text-[10px] shrink-0">sekarang</span>
              </div>
              <div className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-md bg-[#0d0e0d] border border-white/[0.05]">
                <span className="text-[#A0A0A0] truncate">T+15 mnt · lapor IASC</span>
                <span className="text-[#3ECF8E] text-[10px] shrink-0 flex items-center gap-1">
                  <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  tercatat
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-md bg-[#0d0e0d] border border-white/[0.05]">
                <span className="text-[#A0A0A0] truncate">T+1 hari · SPKT Polres</span>
                <span className="text-[#E9B949] text-[10px] shrink-0">terjadwal</span>
              </div>
            </div>

          </Link>

          {/* ── CARD 6: Mesin Analisis ── */}
          <div className="rounded-2xl bg-[#161817] border border-white/[0.08] p-6 flex flex-col justify-between relative overflow-hidden min-h-[300px] hover:border-white/[0.14] transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                {/* Cube icon */}
                <svg className="size-4.5 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <h3 className="text-[13px] font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>Mesin Analisis</h3>
              </div>
              <p className="text-[13px] text-[#A0A0A0] leading-relaxed">
                Gabungan <span className="text-white font-bold">aturan penipuan</span> dan <span className="text-white font-bold">model ML lokal</span>: setiap skor disertai alasan, bukan kotak hitam.
              </p>
            </div>

            {/* Kubus wireframe + komponen penilaian */}
            <div className="mt-4 flex flex-col items-center gap-4">
              {/* Cube SVG */}
              <svg viewBox="0 0 120 100" className="w-28 h-20 stroke-zinc-500 fill-none">
                {/* Front face */}
                <path d="M30 35 L60 20 L90 35 L90 65 L60 80 L30 65 Z" strokeWidth="1" />
                {/* Top face edges */}
                <path d="M60 20 L60 50" strokeWidth="0.8" />
                <path d="M30 35 L60 50" strokeWidth="0.8" />
                <path d="M90 35 L60 50" strokeWidth="0.8" />
                {/* Hidden back edges (dashed) */}
                <path d="M60 50 L60 80" strokeWidth="0.6" strokeDasharray="2 2" />
                {/* Accent dots */}
                <circle cx="60" cy="20" r="2.5" fill="#3ECF8E" stroke="none" />
                <circle cx="30" cy="35" r="2" fill="white" stroke="none" opacity="0.7" />
                <circle cx="90" cy="35" r="2" fill="white" stroke="none" opacity="0.7" />
                <circle cx="60" cy="80" r="2" fill="#A0A0A0" stroke="none" />
              </svg>

              {/* Dua lapisan penilaian */}
              <div className="w-full space-y-1.5">
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#0d0e0d] border border-white/[0.07]">
                  <svg className="size-3.5 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M9 3.75h6a1.5 1.5 0 0 1 1.5 1.5v.75H16.5a1.5 1.5 0 0 0-1.5 1.5v.75h-6v-.75a1.5 1.5 0 0 0-1.5-1.5H6.75v-.75a1.5 1.5 0 0 1 1.5-1.5Zm7.5 3.75h2.25a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V9a1.5 1.5 0 0 1 1.5-1.5H7.5" />
                  </svg>
                  <span className="text-[12px] text-[#A0A0A0] font-medium">10 aturan penipuan</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 7: API Terbuka ── */}
          <div className="rounded-2xl bg-[#161817] border border-white/[0.08] p-6 flex flex-col justify-between relative overflow-hidden min-h-[300px] hover:border-white/[0.14] transition-colors">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                {/* API / chart icon */}
                <svg className="size-4.5 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <h3 className="text-[13px] font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>API Terbuka</h3>
              </div>
              <p className="text-[13px] text-[#A0A0A0] leading-relaxed">
                Semua yang dipakai web ini <span className="text-white font-bold">tersedia sebagai REST API</span> — untuk bot Discord, aplikasi lain, atau riset.
              </p>
            </div>

            {/* Endpoint table */}
            <div className="mt-6 space-y-1 text-[11px]" style={{ fontFamily: "var(--font-supa-mono)" }}>
              {[
                { table: "check", route: "/api/check" },
                { table: "scan", route: "/api/scan/{jenis}" },
                { table: "news", route: "/api/news" },
                { table: "quiz", route: "/api/quiz/questions" },
                { table: "leaderboard", route: "/api/quiz/leaderboard" },
                { table: "model", route: "/api/model/status" },
              ].map((row) => (
                <div
                  key={row.table}
                  className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-md bg-[#0d0e0d] border border-white/[0.05]"
                >
                  <span className="text-[#666] flex items-center gap-1.5">
                    <svg className="size-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                    </svg>
                    {row.table}
                  </span>
                  <span className="text-[#3ECF8E] text-[10px]">{row.route}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
