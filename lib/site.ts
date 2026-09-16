export const WA_NUMBER = "6285353626364";
export const WA_DISPLAY = "0853 5362 6364";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL = waLink(
  "Halo IT.SEMESTA, saya ingin mengetahui informasi layanan internet dedicated."
);

export const WA_COVERAGE = waLink(
  "Halo IT.SEMESTA, saya ingin cek ketersediaan coverage di lokasi saya. Lokasi saya di: "
);

export function waCoverageLocation(location: string) {
  const loc = location.trim() || "[isi lokasi / patokan / kecamatan]";
  return waLink(
    `Halo IT.SEMESTA, saya ingin cek coverage internet dedicated. Lokasi saya di: ${loc}. Apakah sudah tercover / bisa survey?`
  );
}

export function waPackage(speed: string) {
  return waLink(
    `Halo IT.SEMESTA, saya tertarik dengan paket ${speed}. Saya ingin mengetahui detail layanan dan ketersediaannya.`
  );
}

export type Pkg = {
  speed: string;
  mbps: string;
  promo: string;
  normal: string;
  featured?: boolean;
  desc: string;
};

export const PACKAGES: Pkg[] = [
  {
    speed: "100 Mbps",
    mbps: "100",
    promo: "Rp 4.500.000",
    normal: "Rp 5.500.000",
    desc: "Untuk kantor kecil, sistem kasir, dan operasional harian.",
  },
  {
    speed: "200 Mbps",
    mbps: "200",
    promo: "Rp 8.000.000",
    normal: "Rp 12.000.000",
    desc: "Untuk kantor berkembang, CCTV, dan banyak perangkat.",
  },
  {
    speed: "500 Mbps",
    mbps: "500",
    promo: "Rp 15.000.000",
    normal: "Rp 20.000.000",
    featured: true,
    desc: "Paling dipilih untuk operasional padat dan multi-cabang.",
  },
  {
    speed: "1 Gbps",
    mbps: "1000",
    promo: "Rp 28.000.000",
    normal: "Rp 35.000.000",
    desc: "Untuk kebutuhan enterprise dan trafik intensif.",
  },
];
