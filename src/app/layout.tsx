import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pranay.fyi"),
  title: {
    default: "pranay yalamanchali",
    template: "%s — pranay yalamanchali",
  },
  description:
    "Building Netra. Math-CS at UC San Diego. Interested in systems, infrastructure, and tools that work.",
  openGraph: {
    title: "pranay yalamanchali",
    description:
      "Building Netra. Math-CS at UC San Diego. Interested in systems, infrastructure, and tools that work.",
    url: "https://pranay.fyi",
    siteName: "pranay yalamanchali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "pranay yalamanchali",
    description:
      "Building Netra. Math-CS at UC San Diego. Interested in systems, infrastructure, and tools that work.",
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
    <html lang="en" className={newsreader.variable}>
      <body>{children}</body>
    </html>
  );
}
