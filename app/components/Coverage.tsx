import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { WA_COVERAGE } from "@/lib/site";

export default function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-20 bg-[#060F24] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Coverage"
          title="Apakah layanan tersedia di area Anda?"
          desc="Jaringan luas dan terus berkembang di sepanjang jalur fiber Simpang Pematang – Pasar KTM Mesuji Timur."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
              <p className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                Area layanan kami
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold">
                FO terpasang: Simpang Pematang – Pasar KTM Mesuji Timur
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Tersedia 25 closure di sepanjang jalur FO. Jika lokasi usaha Anda
                berada di sekitar jalur ini, kemungkinan besar sudah tercover.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-2xl bg-[#0A1A3D] p-4">
                  <p className="font-display text-2xl font-extrabold text-white">25</p>
                  <p className="text-xs text-slate-400">Closure tersedia</p>
                </div>
                <div className="rounded-2xl bg-[#0A1A3D] p-4">
                  <p className="font-display text-2xl font-extrabold text-white">FO</p>
                  <p className="text-xs text-slate-400">Jalur fiber terpasang</p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WA_COVERAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-[#22D3EE] px-6 text-sm font-bold text-[#060F24] transition hover:bg-cyan-300"
                >
                  Cek Ketersediaan
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Ganti file gambar peta resmi di sini setelah Anda mengunggah peta coverage.
                Untuk sekarang kami tampilkan visual jalur, tanpa titik fiktif.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div
              role="img"
              aria-label="Visual jalur fiber dari Simpang Pematang ke Pasar KTM Mesuji Timur"
              className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[#0A1A3D] p-6"
            >
              <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
                <path
                  d="M30 260 C 120 220, 160 240, 210 180 S 300 120, 370 90"
                  stroke="#1E6BFF"
                  strokeWidth="3"
                />
                <path
                  d="M30 260 C 120 220, 160 240, 210 180 S 300 120, 370 90"
                  stroke="#22D3EE"
                  strokeWidth="3"
                  className="fiber-flow"
                />
                {[
                  [30, 260],
                  [120, 228],
                  [210, 180],
                  [290, 128],
                  [370, 90],
                ].map(([x, y], i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r={i === 0 || i === 4 ? 8 : 5} fill="#22D3EE" />
                    <circle cx={x} cy={y} r={i === 0 || i === 4 ? 14 : 9} stroke="#22D3EE" strokeOpacity="0.4" />
                  </g>
                ))}
              </svg>
              <div className="relative flex h-full flex-col justify-between">
                <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  Jaringan luas & terus berkembang
                </span>
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-400">Titik awal</p>
                    <p className="font-display text-sm font-bold">Simpang Pematang</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Titik akhir</p>
                    <p className="font-display text-sm font-bold">Pasar KTM Mesuji Timur</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
