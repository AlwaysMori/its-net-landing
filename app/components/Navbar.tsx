"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WA_GENERAL } from "@/lib/site";

const LINKS = [
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#paket", label: "Paket" },
  { href: "#coverage", label: "Coverage" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_-18px_rgba(10,42,107,0.4)] backdrop-blur"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#beranda" className="flex items-center gap-2.5" aria-label="IT.SEMESTA beranda">
          <Image
            src="/logo/logo-its.png"
            alt="Logo IT.SEMESTA"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-xl bg-white object-contain"
          />
          <span className="leading-tight">
            <span className="font-display block text-base font-extrabold tracking-tight text-[#0B1526]">
              IT.SEMESTA
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.18em] text-[#5B6B84] uppercase">
              Innovation to High
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-[#3D4E68] lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-[#0B3BA8]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-[#0B3BA8] px-5 text-sm font-semibold text-white transition hover:bg-[#0A2A6B]"
          >
            Hubungi Kami
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-[#0B1526] transition-colors duration-200 hover:bg-slate-50 lg:hidden"
        >
          <span
            aria-hidden="true"
            className={`text-xl leading-none transition-transform duration-300 ease-out ${open ? "rotate-90 scale-110" : "rotate-0"}`}
          >
            {open ? "×" : "☰"}
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows,opacity,transform] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={`overflow-hidden ${open ? "visible" : "invisible"}`}>
          <div
            className={`border-t border-slate-200 bg-white px-4 pt-2 pb-5 transition-transform duration-300 ease-out ${
              open ? "translate-y-0" : "-translate-y-2"
            }`}
          >
            <ul className="flex flex-col gap-1 text-[15px] font-medium text-[#0B1526]">
              {LINKS.map((l, i) => (
                <li
                  key={l.href}
                  className={`transition-[opacity,transform] duration-300 ease-out ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                  }`}
                  style={open ? { transitionDelay: `${i * 40}ms` } : undefined}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className="block rounded-lg px-3 py-2.5 hover:bg-[#F4F7FE]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="mt-3 flex h-11 items-center justify-center rounded-full bg-[#0B3BA8] px-5 text-sm font-semibold text-white"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
