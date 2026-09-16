import Reveal from "./Reveal";
import { WA_COVERAGE, WA_GENERAL } from "@/lib/site";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-[#060F24] pt-16">
      {/* backdrop */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[480px] w-[680px] rounded-full bg-[#1250D6]/40 blur-[120px]" />
        <div className="absolute bottom-[-30%] left-[-10%] h-[420px] w-[560px] rounded-full bg-[#00B8FF]/20 blur-[120px]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          viewBox="0 0 1200 640"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#1E6BFF" strokeOpacity="0.35" strokeWidth="1.5">
            <path d="M-40 520 C 240 440, 420 560, 640 460 S 980 380, 1260 440" />
            <path d="M-40 560 C 260 490, 460 600, 700 500 S 1020 430, 1260 490" className="fiber-flow" />
            <path d="M-40 180 C 300 240, 520 140, 780 210 S 1060 260, 1260 200" strokeOpacity="0.22" />
            <path d="M120 0 C 160 180, 120 380, 180 640" strokeOpacity="0.18" />
            <path d="M520 0 C 560 200, 520 420, 580 640" strokeOpacity="0.18" />
            <path d="M920 0 C 960 200, 920 420, 980 640" strokeOpacity="0.18" />
          </g>
          <g fill="#22D3EE">
            <circle cx="180" cy="505" r="4" />
            <circle cx="640" cy="460" r="5" />
            <circle cx="980" cy="415" r="4" />
            <circle cx="520" cy="200" r="3" />
            <circle cx="780" cy="210" r="3.5" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060F24]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-14 pb-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-20 lg:pb-20">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-cyan-100 uppercase">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#22D3EE]" />
              Internet Dedicated • Mesuji Timur
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-5 text-3xl leading-[1.08] font-extrabold tracking-tight text-balance text-white sm:text-5xl lg:text-[3.4rem]">
              Internet Dedicated untuk Bisnis yang Butuh Koneksi{" "}
              <span className="bg-gradient-to-r from-[#22D3EE] to-[#7DD3FC] bg-clip-text text-transparent">
                Selalu Stabil
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              IT.SEMESTA membangun jaringan fiber optik sendiri dari Simpang
              Pematang hingga Pasar KTM Mesuji Timur — lebih cepat, lebih stabil,
              untuk masa depan bisnis yang lebih baik.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-[#0A2A6B] transition hover:bg-cyan-100"
              >
                Hubungi Sales
              </a>
              <a
                href="#coverage"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Cek Coverage
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <dt className="sr-only">Kecepatan</dt>
                <dd>
                  <strong className="font-display text-white">100 Mbps–1 Gbps</strong>{" "}
                  <span className="text-slate-400">dedicated</span>
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">Infrastruktur</dt>
                <dd>
                  <strong className="font-display text-white">25 closure</strong>{" "}
                  <span className="text-slate-400">sepanjang jalur FO</span>
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">Support</dt>
                <dd>
                  <strong className="font-display text-white">Support IT 24 Jam</strong>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-4">
          <div className="rounded-3xl border border-white/12 bg-white/[0.07] p-5 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-widest text-cyan-200 uppercase">
                Jalur Fiber Terpasang
              </p>
              <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                ● Live Network
              </span>
            </div>
            <div className="mt-4 rounded-2xl bg-[#0A1A3D] p-5">
              <p className="text-sm text-slate-300">Simpang Pematang</p>
              <div aria-hidden="true" className="my-3 flex items-center gap-1.5">
                {Array.from({ length: 18 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${i % 4 === 0 ? "bg-[#22D3EE]" : "bg-[#1E6BFF]/50"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-300">Pasar KTM Mesuji Timur</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[
                  ["25", "Closure"],
                  ["FO", "Fiber Optik"],
                  ["24/7", "Support"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl bg-white/5 px-2 py-3">
                    <p className="font-display text-lg font-extrabold text-white">{v}</p>
                    <p className="text-[11px] tracking-wide text-slate-400 uppercase">{l}</p>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={WA_COVERAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex h-11 items-center justify-center rounded-full bg-[#22D3EE] px-5 text-sm font-bold text-[#060F24] transition hover:bg-cyan-300"
            >
              Cek apakah lokasi saya tercover
            </a>
            <p className="mt-2.5 text-center text-xs text-slate-400">
              Tanpa form — langsung chat WhatsApp sales.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
