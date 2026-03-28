import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

/*
  Fonts: Instrument Serif for headings (elegant, not heavy),
  DM Sans for body text (clean, humanist sans-serif).
  Both loaded via next/font for zero layout shift.
*/
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Pranay Yalamanchali",
    template: "%s — Pranay Yalamanchali",
  },
  description:
    "Math-CS student at UC San Diego interested in systems, infrastructure, and building tools that work.",
  openGraph: {
    title: "Pranay Yalamanchali",
    description:
      "Math-CS student at UC San Diego interested in systems, infrastructure, and building tools that work.",
    url: "https://pranayy.com",
    siteName: "Pranay Yalamanchali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pranay Yalamanchali",
    description:
      "Math-CS student at UC San Diego interested in systems, infrastructure, and building tools that work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
