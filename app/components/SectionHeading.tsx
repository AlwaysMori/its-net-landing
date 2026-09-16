import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  const alignCls =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-3 ${alignCls}`}>
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D3E0F7] bg-[#F4F7FE] px-3 py-1 text-xs font-semibold tracking-widest text-[#0B3BA8] uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display text-2xl font-bold tracking-tight text-[#0B1526] text-balance sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="text-base leading-relaxed text-[#5B6B84]">{desc}</p>
      ) : null}
    </Reveal>
  );
}
