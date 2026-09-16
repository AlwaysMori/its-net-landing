"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { WA_GENERAL } from "@/lib/site";

const FAQS = [
  {
    q: "Apa itu internet dedicated?",
    a: "Internet dedicated adalah koneksi dengan bandwidth khusus 1:1 untuk Anda. Tidak dibagi dengan pengguna lain seperti broadband biasa, sehingga lebih stabil terutama di jam sibuk.",
  },
  {
    q: "Apa bedanya dengan internet biasa?",
    a: "Internet biasa (broadband/shared) kecepatannya bisa turun saat banyak pemakai. Dedicated IT.SEMESTA dialokasikan khusus, cocok untuk kasir, CCTV, server, meeting online, dan operasional kritis.",
  },
  {
    q: "Apakah tersedia di lokasi saya?",
    a: "Fokus kami di sepanjang jalur FO Simpang Pematang – Pasar KTM Mesuji Timur dengan 25 closure. Cara tercepat: klik Cek Coverage dan kirim lokasi Anda via WhatsApp untuk pengecekan.",
  },
  {
    q: "Berapa lama proses instalasi?",
    a: "Tergantung hasil survey lokasi dan jarak ke titik fiber terdekat. Setelah konsultasi WA, tim akan menjadwalkan survey lalu menginformasikan estimasi pemasangan.",
  },
  {
    q: "Apakah ada biaya instalasi dan kontrak minimum?",
    a: "Untuk detail biaya instalasi dan skema berlangganan (saat ini tanpa kontrak jangka panjang / bulanan), silakan konsultasi langsung via WhatsApp agar sesuai kondisi lokasi Anda.",
  },
  {
    q: "Apakah dapat IP Public dan SLA?",
    a: "Detail IP Public dan SLA belum kami publikasikan di website. Sampaikan kebutuhan Anda (mis. untuk server, VPN, CCTV remote) saat chat sales agar diberikan solusi yang tepat.",
  },
  {
    q: "Bagaimana sistem pembayaran?",
    a: "IT.SEMESTA menggunakan sistem billing otomatis. Detail metode pembayaran dan invoice akan dijelaskan tim sales saat proses berlangganan.",
  },
  {
    q: "Apakah ada support 24/7?",
    a: "Ya. Support IT 24 jam via WhatsApp di 0853 5362 6364 untuk bantuan teknis.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering ditanyakan"
          desc="Tidak menemukan jawaban? Langsung tanya via WhatsApp."
        />
        <div className="mt-8 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={Math.min(i * 40, 200)}>
                <div
                  className={`rounded-2xl border transition-colors duration-300 ease-out ${
                    isOpen ? "border-[#0B3BA8] bg-[#F4F7FE]" : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-[15px] font-bold text-[#0B1526]">{f.q}</span>
                    <span
                      aria-hidden="true"
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-lg transition-[transform,background-color,color] duration-300 ease-out ${
                        isOpen
                          ? "rotate-45 bg-[#0B3BA8] text-white"
                          : "rotate-0 bg-slate-100 text-[#0B1526]"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-[#3D4E68]">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-[#5B6B84]">
          Masih ragu?{" "}
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0B3BA8] underline"
          >
            Chat sales sekarang
          </a>
          .
        </p>
      </div>
    </section>
  );
}
