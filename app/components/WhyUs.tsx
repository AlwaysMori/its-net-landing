import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    t: "Dedicated 1:1, bukan sharing",
    d: "Bandwidth dialokasikan khusus. Performa tidak turun saat jam sibuk seperti broadband biasa.",
  },
  {
    t: "High speed sampai 1 Gbps",
    d: "Pilihan 100, 200, 500 Mbps hingga 1 Gbps untuk skala kecil sampai enterprise.",
  },
  {
    t: "Fiber optik milik sendiri",
    d: "Infrastruktur FO sendiri yang terus berkembang. Detail contoh backbone ada di section Coverage.",
  },
  {
    t: "Support IT 24 jam",
    d: "Tim siaga membantu saat gangguan operasional, bukan sekadar call center.",
  },
  {
    t: "Billing otomatis",
    d: "Sistem pembayaran dan penagihan otomatis yang rapi untuk administrasi bisnis.",
  },
  {
    t: "Network management",
    d: "Jaringan dimonitor dan dikelola agar tetap stabil untuk kebutuhan kritis.",
  },
];

export default function WhyUs() {
  return (
    <section id="keunggulan" className="scroll-mt-20 bg-[#F4F7FE]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Kenapa IT.SEMESTA"
          title="Dibangun untuk operasional yang tidak boleh mati"
          desc="Internet biasa cukup untuk browsing. Bisnis butuh koneksi yang bisa diandalkan setiap hari."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.t} delay={(i % 3) * 80}>
              <article className="h-full rounded-2xl border border-slate-200/80 bg-white p-6">
                <h3 className="font-display text-base font-bold text-[#0B1526]">{r.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6B84]">{r.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-[#D3E0F7] bg-white p-5 text-sm text-[#3D4E68] sm:flex sm:items-center sm:justify-between sm:gap-4">
            <p>
              <strong className="text-[#0B1526]">Dedicated vs broadband biasa:</strong> broadband
              sharing turun saat banyak pemakai. Dedicated IT.SEMESTA dialokasikan khusus 1:1.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
