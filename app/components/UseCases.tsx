import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CASES = [
  { t: "Kantor & Perusahaan", d: "Email, cloud, meeting online tanpa putus.", icon: "🏢" },
  { t: "UMKM & Ruko", d: "Kasir digital, stok, dan operasional harian.", icon: "🏪" },
  { t: "Sekolah & Edukasi", d: "Belajar online, ujian CBT, dan lab komputer.", icon: "🎓" },
  { t: "Hotel, Cafe & Resto", d: "WiFi tamu stabil dan sistem reservasi.", icon: "☕" },
  { t: "Gudang & CCTV", d: "Monitoring 24 jam dan perangkat IoT.", icon: "📹" },
  { t: "Instansi", d: "Layanan publik yang butuh koneksi andal.", icon: "🏛️" },
];

export default function UseCases() {
  return (
    <section aria-label="Cocok untuk" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <SectionHeading
          eyebrow="Use case"
          title="Cocok untuk bisnis yang operasionalnya digital"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.t} delay={(i % 3) * 70}>
              <article className="flex gap-3 rounded-2xl border border-slate-200 p-5">
                <span aria-hidden="true" className="text-2xl">{c.icon}</span>
                <span>
                  <strong className="font-display block text-[15px] font-bold text-[#0B1526]">{c.t}</strong>
                  <span className="mt-1 block text-sm text-[#5B6B84]">{c.d}</span>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
