import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "CarHunter",
  description: "Aplikace CarHunteru — specifikace, shortlist a deal room.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
