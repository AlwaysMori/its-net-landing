"use client";

import { useState } from "react";
import { waCoverageLocation } from "@/lib/site";

export default function CoverageChecker({
  variant = "dark",
  id = "lokasi",
}: {
  variant?: "dark" | "light";
  id?: string;
}) {
  const [loc, setLoc] = useState("");
  const isDark = variant === "dark";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waCoverageLocation(loc), "_blank", "noopener,noreferrer");
      }}
      className="w-full"
    >
      <label
        htmlFor={id}
        className={`text-xs font-semibold tracking-widest uppercase ${
          isDark ? "text-cyan-200" : "text-[#0B3BA8]"
        }`}
      >
        Cek coverage lokasi Anda
      </label>
      <div
        className={`mt-2 flex flex-col gap-2 rounded-2xl p-2 sm:flex-row sm:items-center ${
          isDark ? "bg-white/10" : "bg-[#F4F7FE] border border-slate-200"
        }`}
      >
        <input
          id={id}
          type="text"
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          placeholder="cth: nama jalan / desa / kecamatan / patokan"
          autoComplete="street-address"
          className={`h-11 w-full rounded-xl bg-transparent px-3.5 text-sm outline-none placeholder:text-sm ${
            isDark
              ? "text-white placeholder:text-slate-400 focus:bg-white/10"
              : "text-[#0B1526] placeholder:text-[#5B6B84] focus:bg-white"
          }`}
        />
        <button
          type="submit"
          className={`inline-flex h-11 shrink-0 items-center justify-center rounded-xl px-5 text-sm font-bold transition ${
            isDark
              ? "bg-[#22D3EE] text-[#060F24] hover:bg-cyan-300"
              : "bg-[#0B3BA8] text-white hover:bg-[#0A2A6B]"
          }`}
        >
          Cek via WA
        </button>
      </div>
      <p className={`mt-2 text-xs ${isDark ? "text-slate-400" : "text-[#5B6B84]"}`}>
        Tanpa daftar — klik akan membuka WhatsApp dengan pesan lokasi otomatis.
        Luar jalur fiber tetap bisa diajukan untuk survey.
      </p>
    </form>
  );
}
