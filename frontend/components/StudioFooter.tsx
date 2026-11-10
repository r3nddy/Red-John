"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StudioFooter() {
  const [timeStr, setTimeStr] = useState("");
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "Asia/Jakarta",
        }) + " WIB"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a] pt-16 pb-12 relative z-10 font-sans">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
        {/* Giant brand lettering ala HeroUI footer */}
        <div className="mb-14 flex items-center gap-6 sm:gap-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/red-john-logo.png"
            alt=""
            width={215}
            height={301}
            className="h-28 sm:h-40 w-auto opacity-90 drop-shadow-[0_0_30px_rgba(255,0,0,0.35)]"
          />
          <div className="select-none overflow-hidden">
            <div className="text-[clamp(2.8rem,10vw,9rem)] font-black uppercase tracking-tighter leading-none text-white/[0.05] hover:text-white/[0.1] transition-colors font-[family-name:var(--font-display)]">
              RED JOHN
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06] text-xs text-zinc-400">
          <div>
            <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] font-mono">
              TENTANG SISTEM
            </div>
            <p className="leading-relaxed">
              Intelijen penipuan mandiri, heuristik forensik, dan mesin pemantau manipulasi siber yang dirancang untuk ekosistem digital Indonesia modern.
            </p>
          </div>

          <div>
            <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] font-mono">
              MODUL UTAMA
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/pemindai" className="hover:text-white transition-colors">
                  &bull; Pemindai Anomali Pesan (SMS &amp; WA)
                </Link>
              </li>
              <li>
                <Link href="/lapor-cepat" className="hover:text-white transition-colors">
                  &bull; Lapor Tautan Mencurigakan
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-white transition-colors">
                  &bull; Radar Feeds Berita Terkini
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-white transition-colors">
                  &bull; Simulasi Kognitif: Red John vs Jane
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] font-mono">
              TRANSPARANSI &amp; ETIKA
            </div>
            <p className="leading-relaxed mb-3">
              Tanpa penyimpanan telemetri data. Tidak ada pesan pribadi, URL sensitif, atau nomor kontak yang dikoleksi ke server pihak ketiga.
            </p>
          </div>

          <div>
            <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] font-mono">
              STATUS SISTEM &amp; WAKTU
            </div>
            <div className="text-lg text-white font-bold mb-2 font-mono">
              {timeStr || "12:00:00 WIB"}
            </div>
            <div className="flex items-center gap-2 text-[11px] text-zinc-300 mb-1 font-mono">
              <span className="size-2 rounded-full bg-white animate-pulse" />
              <span>SINKRONISASI AKTIF</span>
            </div>
            <p className="text-[11px] text-zinc-500 font-mono">
              SIMPUL: JAKARTA (-6.2088° S, 106.8456° E)<br />
              ENGINE: HEURISTIK LOKAL
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-zinc-500 font-sans">
          <div>
            &copy; {year} RED JOHN &bull; PLATFORM INTELIJEN SIBER INDONESIA. HAK CIPTA DILINDUNGI.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://discord.gg/YzwhfBepy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#5865F2] transition-colors"
            >
              <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              DISCORD
            </a>
            <a
              href="https://github.com/r3nddy/Red-John"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GITHUB
            </a>
            <span className="size-1 rounded-full bg-zinc-600" />
            <span className="text-zinc-400">BEBAS TELEMETRI &amp; PELACAKAN</span>
            <span className="size-1 rounded-full bg-zinc-600" />
            <a href="#top" className="text-zinc-400 hover:text-white transition-colors">
              KEMBALI KE ATAS &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
