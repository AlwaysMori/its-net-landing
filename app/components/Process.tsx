import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { WA_COVERAGE, WA_GENERAL } from "@/lib/site";

const STEPS = [
  { t: "Cek coverage", d: "Chat WA, sebutkan lokasi usaha Anda." },
  { t: "Konsultasi", d: "Diskusi kebutuhan bandwidth dan jumlah perangkat." },
  { t: "Survey lokasi", d: "Tim cek jarak dan kesiapan jalur fiber." },
  { t: "Instalasi", d: "Penarikan dan perangkat dipasang." },
  { t: "Aktivasi", d: "Internet dedicated siap digunakan." },
];

export default function Process() {
  return (
    <section id="proses" className="scroll-mt-20 bg-[#F4F7FE]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          eyebrow="Cara berlangganan"
          title="Proses sederhana, tanpa ribet"
          desc="Draft alur di bawah ini mengikuti praktik umum ISP. Konfirmasi final mengikuti kebijakan operasional IT.SEMESTA."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 70}>
              <li className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_-20px_rgba(10,42,107,0.4)]">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B3BA8] font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="font-display mt-3 text-[15px] font-bold text-[#0B1526]">{s.t}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-[#5B6B84]">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-8 text-center">
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WA_COVERAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#0B3BA8] px-6 text-sm font-bold text-white hover:bg-[#0A2A6B]"
            >
              Mulai dari cek coverage
            </a>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-[#0B1526] hover:border-[#0B3BA8]"
            >
              Konsultasi dulu
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
