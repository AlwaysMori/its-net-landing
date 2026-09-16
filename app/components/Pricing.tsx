import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PACKAGES, waPackage } from "@/lib/site";

function formatPrice(p: string) {
  return p;
}

export default function Pricing() {
  return (
    <section id="paket" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Paket"
          title="Pilih bandwidth sesuai kebutuhan bisnis"
          desc="Harga promo di bawah ini sesuai brosur resmi. Klik paket untuk konsultasi langsung via WhatsApp."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.speed} delay={(i % 4) * 80}>
              <article
                className={`relative flex h-full flex-col rounded-3xl border p-6 ${
                  p.featured
                    ? "border-[#0B3BA8] bg-[#0A2A6B] text-white shadow-[0_24px_60px_-24px_rgba(10,42,107,0.6)]"
                    : "border-slate-200 bg-white"
                }`}
              >
                {p.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#22D3EE] px-3 py-1 text-[11px] font-bold tracking-wide text-[#060F24] uppercase">
                    Paling dipilih
                  </span>
                ) : null}
                <p
                  className={`font-display text-4xl font-extrabold tracking-tight ${
                    p.featured ? "text-white" : "text-[#0B1526]"
                  }`}
                >
                  {p.mbps}
                  <span className="ml-1 text-base font-bold">Mbps</span>
                </p>
                <p className={`mt-1 text-sm font-semibold ${p.featured ? "text-cyan-200" : "text-[#0B3BA8]"}`}>
                  {p.speed} Dedicated
                </p>
                <p className={`mt-2 text-[13px] leading-relaxed ${p.featured ? "text-slate-300" : "text-[#5B6B84]"}`}>
                  {p.desc}
                </p>
                <div className="mt-5">
                  <p className={`text-xs ${p.featured ? "text-slate-400" : "text-[#5B6B84]"}`}>
                    <span className="line-through">{formatPrice(p.normal)}</span>{" "}
                    <span
                      className={`ml-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                        p.featured ? "bg-[#22D3EE]/15 text-cyan-300" : "bg-red-50 text-red-600"
                      }`}
                    >
                      Promo
                    </span>
                  </p>
                  <p className={`font-display mt-1 text-xl font-extrabold ${p.featured ? "text-white" : "text-[#0B1526]"}`}>
                    {formatPrice(p.promo)}
                    <span className={`ml-1 text-xs font-medium ${p.featured ? "text-slate-300" : "text-[#5B6B84]"}`}>
                      /bulan
                    </span>
                  </p>
                </div>
                <a
                  href={waPackage(p.speed)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pilih paket ${p.speed}`}
                  className={`mt-6 inline-flex h-11 items-center justify-center rounded-full text-sm font-bold transition ${
                    p.featured
                      ? "bg-white text-[#0A2A6B] hover:bg-cyan-100"
                      : "bg-[#0B3BA8] text-white hover:bg-[#0A2A6B]"
                  }`}
                >
                  Pilih {p.speed}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[#5B6B84]">
          Data harga sesuai materi brosur resmi IT.SEMESTA.
        </p>
      </div>
    </section>
  );
}
