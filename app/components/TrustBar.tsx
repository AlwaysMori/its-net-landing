import Reveal from "./Reveal";

const ITEMS = [
  {
    title: "Dedicated Network",
    desc: "Bandwidth khusus, tidak rebutan.",
    icon: "◈",
  },
  {
    title: "High Speed",
    desc: "100 Mbps hingga 1 Gbps.",
    icon: "⚡",
  },
  {
    title: "Stable Connection",
    desc: "Selalu stabil untuk operasional.",
    icon: "◎",
  },
  {
    title: "24/7 Support",
    desc: "Support IT siaga 24 jam.",
    icon: "✆",
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Keunggulan singkat" className="border-b border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-6 sm:px-6 lg:grid-cols-4">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 70}>
            <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#F4F7FE]/60 px-4 py-3.5">
              <span
                aria-hidden="true"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0B3BA8] text-lg text-white"
              >
                {it.icon}
              </span>
              <span>
                <strong className="font-display block text-sm font-bold text-[#0B1526]">
                  {it.title}
                </strong>
                <span className="block text-[13px] text-[#5B6B84]">{it.desc}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
