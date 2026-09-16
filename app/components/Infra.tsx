import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  { t: "Fiber Optic", d: "Backbone FO terpasang" },
  { t: "Network Infra", d: "Dikelola & dimonitor" },
  { t: "Dedicated", d: "Bandwidth 1:1 khusus" },
  { t: "Customer", d: "Bisnis Anda online stabil" },
];

export default function Infra() {
  return (
    <section aria-label="Infrastruktur" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Infrastruktur"
          title="Alur koneksi yang sederhana dan transparan"
          desc="Tanpa jargon berlebihan — Anda tahu dari mana koneksi berasal dan bagaimana sampai ke lokasi."
        />
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 70}>
              <li className="relative rounded-2xl border border-slate-200 bg-[#F4F7FE] p-5">
                <span className="font-display text-xs font-bold tracking-widest text-[#0B3BA8] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display mt-1 font-bold text-[#0B1526]">{s.t}</p>
                <p className="mt-1 text-sm text-[#5B6B84]">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
