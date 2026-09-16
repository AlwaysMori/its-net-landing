import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://its-net-landing.vercel.app"),
  title: {
    default: "IT.SEMESTA — Internet Dedicated Stabil untuk Bisnis",
    template: "%s | IT.SEMESTA",
  },
  description:
    "IT.SEMESTA menyediakan internet dedicated yang stabil dan cepat untuk kantor dan bisnis. Fiber optik sendiri, support IT 24 jam. Cek coverage lokasi Anda via WhatsApp.",
  keywords: [
    "internet dedicated",
    "internet bisnis",
    "fiber optik",
    "IT.SEMESTA",
    "internet kantor stabil",
  ],
  authors: [{ name: "IT.SEMESTA" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "IT.SEMESTA",
    title: "IT.SEMESTA — Internet Dedicated, Selalu Stabil",
    description:
      "Internet dedicated 100 Mbps – 1 Gbps untuk bisnis. Fiber optik sendiri, support 24 jam. Cek coverage dan hubungi sales via WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT.SEMESTA — Internet Dedicated, Selalu Stabil",
    description:
      "Internet dedicated untuk bisnis yang membutuhkan koneksi stabil. Cek coverage dan konsultasi via WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2A6B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#0B1526] antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InternetServiceProvider",
              name: "IT.SEMESTA",
              slogan: "Innovation to High — Selalu Stabil",
              areaServed: "Indonesia — konfirmasi coverage via WhatsApp",
              telephone: "+62-853-5362-6364",
            }),
          }}
        />
      </body>
    </html>
  );
}
