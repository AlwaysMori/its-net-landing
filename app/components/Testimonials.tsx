import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// DUMMY — wajib diganti data asli sebelum go-live publik.
const DUMMIES = [
  {
    q: "Koneksi lebih stabil untuk operasional kasir dan admin.",
    n: "Pemilik Ruko",
    init: "R",
  },
  {
    q: "CCTV dan perangkat kantor jalan tanpa rebutan bandwidth.",
    n: "Admin Kantor",
    init: "A",
  },
  {
    q: "Support fast respon saat butuh bantuan teknis.",
    n: "Operator Sekolah",
    init: "S",
  },
];

export default function Testimonials() {
  return (
    <section aria-label="Testimoni" className="bg-[#F4F7FE]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Testimoni"
          title="Dipercaya operasional bisnis"
        />
        <p className="mx-auto mt-3 max-w-xl rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-center text-xs font-medium text-amber-800">
          Data dummy — ganti dengan testimoni asli pelanggan sebelum tayang publik.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {DUMMIES.map((t, i) => (
            <Reveal key={t.n} delay={i * 80}>
              <figure className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                <div aria-label="Rating 5 dari 5" className="text-sm tracking-widest text-amber-400">
                  ★★★★★
                </div>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-[#0B1526]">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full bg-[#0B3BA8] font-display text-sm font-bold text-white">
                    {t.init}
                  </span>
                  <span className="text-sm font-semibold text-[#3D4E68]">{t.n}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
