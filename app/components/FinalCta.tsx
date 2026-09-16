import Reveal from "./Reveal";
import { WA_COVERAGE, WA_DISPLAY, WA_GENERAL } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="kontak" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0A2A6B] px-6 py-12 text-center text-white sm:px-12 lg:py-16">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#1E6BFF]/40 blur-[100px]" />
              <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[#00B8FF]/30 blur-[100px]" />
            </div>
            <div className="relative">
              <p className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">
                Selalu stabil
              </p>
              <h2 className="font-display mx-auto mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Siap mendapatkan koneksi yang lebih stabil?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-300">
                Konsultasikan kebutuhan internet bisnis Anda dengan tim IT.SEMESTA.
                Tanpa form — langsung terhubung ke WhatsApp.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-[#0A2A6B] hover:bg-cyan-100"
                >
                  Hubungi {WA_DISPLAY}
                </a>
                <a
                  href={WA_COVERAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Cek Coverage
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-400">
                Support IT 24 jam • Respon mengikuti jam operasional tim
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
