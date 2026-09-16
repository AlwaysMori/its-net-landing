"use client";

import { useEffect, useState } from "react";
import { WA_GENERAL } from "@/lib/site";

export default function StickyWa() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WA_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp IT.SEMESTA"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_-12px_rgba(22,163,74,0.7)] transition-[opacity,transform,background-color] duration-500 ease-out hover:bg-[#15803d] sm:right-6 sm:bottom-6 ${
        show
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-95 opacity-0"
      }`}
    >
      <span aria-hidden="true" className="text-base">✆</span>
      Chat Sales
    </a>
  );
}
