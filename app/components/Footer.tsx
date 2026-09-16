import Image from "next/image";
import { WA_DISPLAY, WA_GENERAL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#060F24] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo/logo-its.png"
              alt="Logo IT.SEMESTA"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl bg-white object-contain"
            />
            <span>
              <span className="font-display block text-lg font-extrabold text-white">
                IT.SEMESTA
              </span>
              <span className="block text-[11px] font-semibold tracking-[0.18em] text-slate-400 uppercase">
                Innovation to High
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Internet dedicated yang stabil dan cepat untuk kantor dan bisnis.
            Cek coverage lokasi Anda via WhatsApp.
          </p>
        </div>
        <nav aria-label="Navigasi footer">
          <p className="text-sm font-bold text-white">Jelajahi</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["#layanan", "Layanan"],
              ["#keunggulan", "Keunggulan"],
              ["#paket", "Paket"],
              ["#coverage", "Coverage"],
              ["#faq", "FAQ"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-bold text-white">Kontak</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:underline"
              >
                WhatsApp: {WA_DISPLAY}
              </a>
            </li>
            <li className="text-slate-400">Coverage berkembang — cek via WhatsApp</li>
            <li className="text-slate-400">Support IT 24 jam via WhatsApp</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} IT.SEMESTA. Seluruh hak cipta dilindungi.</p>
          <p>Harga dan coverage mengacu pada brosur resmi.</p>
        </div>
      </div>
    </footer>
  );
}
