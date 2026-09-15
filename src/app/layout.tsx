import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site.config";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Dry Cleaners of Hampstead | Dry Cleaning · Silk · Belsize Park",
    template: "%s | Dry Cleaners of Hampstead",
  },
  description:
    "Dry cleaning, silk specialist care, alterations and shoe repair on Haverstock Hill, Belsize Park, London NW3. Call 020 7284 4905 to enquire.",
  keywords: [
    "Belsize Park dry cleaners",
    "Haverstock Hill",
    "silk dry cleaning NW3",
    "Hampstead dry cleaning",
    "alterations Belsize Park",
    "shoe repair NW3",
  ],
  openGraph: {
    title: "Dry Cleaners of Hampstead | Silk · Belsize Park",
    description:
      "Pressed. Protected. Ready. Neighbourhood dry cleaners on Haverstock Hill — call 020 7284 4905.",
    type: "website",
    locale: "en_GB",
    url: "https://androidkrayze.github.io/dry-cleaners-hampstead-demo/",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL(
    "https://androidkrayze.github.io/dry-cleaners-hampstead-demo/"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${newsreader.variable}`}>
      <body className="min-h-screen bg-crisp font-sans antialiased pb-20 md:pb-0">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
        <span className="sr-only">{siteConfig.name}</span>
      </body>
    </html>
  );
}
