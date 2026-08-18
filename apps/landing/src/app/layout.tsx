import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";

import { RevealObserver } from "@/components/RevealObserver";
import { SITE_URL } from "@/lib/links";

import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/layout.css";
import "@/styles/components.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-sans",
});

const TITLE = "CarHunter — AI agent, který vám najde auto";
const DESCRIPTION =
  "Popíšete auto, které hledáte. CarHunter prochází inzeráty v Česku i v Německu, doptá se prodejců na to, co chybí, a každé ráno v 08:00 pošle krátký report: pár aut, na která má smysl volat.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    title: TITLE,
    description:
      "272 inzerátů v databázi, 12 vybraných aut. Report každé ráno v 08:00 — kam volat jako první a proč.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f9f6f0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={instrumentSans.variable}>
      <head>
        {/* Erode (Fontshare) — display serif včetně pravých kurzívových řezů. */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=erode@400,401,500,501,700,701&display=swap"
        />
      </head>
      <body>
        <a className="skip-link" href="#obsah">
          Přeskočit na obsah
        </a>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
