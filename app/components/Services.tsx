import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { WA_GENERAL } from "@/lib/site";

export default function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Layanan"
          title="Satu fokus: internet dedicated yang stabil"
          desc="Kami tidak menjual banyak hal. Kami fokus membangun koneksi dedicated untuk operasional bisnis Anda."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <article className="flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#0A2A6B] p-7 text-white sm:p-9">
              <div>
                <p className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                  Internet Dedicated
                </p>
                <h3 className="font-display mt-3 text-2xl font-bold sm:text-3xl">
                  Bandwidth 1:1 untuk operasional kritis
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-slate-300">
                  Berbeda dengan broadband biasa yang sharing, koneksi dedicated
                  dialokasikan khusus untuk Anda. Cocok untuk kasir, absensi,
                  CCTV, server, dan aktivitas kantor yang tidak boleh putus.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-slate-200">
                  {[
                    "Untuk kantor, sekolah, hotel, gudang, dan instansi",
                    "Kecepatan 100 Mbps – 1 Gbps via fiber optik",
                    "Didukung support IT 24 jam",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <span aria-hidden="true" className="text-[#22D3EE]">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-11 w-fit items-center rounded-full bg-white px-6 text-sm font-bold text-[#0A2A6B] transition hover:bg-cyan-100"
              >
                Konsultasi kebutuhan →
              </a>
            </article>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={100}>
              <article className="rounded-3xl border border-slate-200 bg-[#F4F7FE] p-6">
                <h3 className="font-display text-lg font-bold text-[#0B1526]">
                  Fiber Optic Infrastructure
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6B84]">
                  Jaringan fiber optik sendiri yang terus berkembang. Cek
                  lokasi Anda — dalam maupun luar jalur, bisa diajukan survey.
                </p>
              </article>
            </Reveal>
            <Reveal delay={180}>
              <article className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-[#0B1526]">
                  Billing & Management Otomatis
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6B84]">
                  Sistem billing otomatis dan network management untuk
                  pengalaman berlangganan yang rapi dan terpantau.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
