import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CoverageChecker from "./CoverageChecker";

export default function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-20 bg-[#060F24] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Coverage"
          title="Cek apakah lokasi Anda tercover"
          desc="Ketik lokasi usaha Anda, langsung terhubung ke WhatsApp. Di dalam maupun luar jalur fiber, tim kami bantu cek dan survey."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
              <CoverageChecker id="coverage-lokasi" variant="dark" />
              <ol className="mt-5 space-y-2.5 text-sm text-slate-300">
                {[
                  "1. Tulis patokan lokasi (jalan / desa / kecamatan).",
                  "2. Klik Cek via WA — pesan otomatis terkirim.",
                  "3. Tim balas: sudah tercover atau perlu survey lanjutan.",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <span aria-hidden="true" className="text-[#22D3EE]">✓</span>
                    {t}
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-2xl bg-[#0A1A3D] p-5">
                <p className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                  Coverage tersedia
                </p>
                <p className="font-display mt-1.5 text-base font-bold">
                  ✅ Simpang Pematang - Pasar KTM Mesuji Timur
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                  Backbone FO Simpang Pematang – Pasar KTM Mesuji Timur dengan
                  25 closure di sepanjang jalur. Sekitar jalur ini umumnya
                  paling cepat tercover. Di luar area tersebut? Tetap bisa
                  diajukan — hasil akhir mengikuti survey lapangan.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div
              role="img"
              aria-label="Visual backbone fiber dari Simpang Pematang ke Pasar KTM Mesuji Timur, coverage tersedia Simpang Pematang"
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
                  ✅ Tersedia: Simpang Pematang • Jaringan berkembang
                </span>
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-400">Tersedia</p>
                    <p className="font-display text-sm font-bold">Simpang Pematang</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Backbone FO</p>
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
