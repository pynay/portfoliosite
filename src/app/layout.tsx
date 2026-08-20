import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*
  Redaction typeface (redaction.us) — dual-licensed SIL OFL 1.1 / LGPL 2.1.
  License: public/fonts/OFL.txt. Redaction 50 is the degraded cut, used
  for the name only.
*/
const redaction = localFont({
  variable: "--font-redaction",
  src: [
    {
      path: "../../public/fonts/Redaction-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Redaction-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Redaction-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const redaction50 = localFont({
  variable: "--font-redaction-50",
  src: "../../public/fonts/Redaction50-Regular.woff2",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pranay.fyi"),
  title: {
    default: "pranay yalamanchali",
    template: "%s — pranay yalamanchali",
  },
  description:
    "Co-founder & CEO of Netra, building counter-drone defense. Math-CS at UC San Diego.",
  openGraph: {
    title: "pranay yalamanchali",
    description:
      "Co-founder & CEO of Netra, building counter-drone defense. Math-CS at UC San Diego.",
    url: "https://pranay.fyi",
    siteName: "pranay yalamanchali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "pranay yalamanchali",
    description:
      "Co-founder & CEO of Netra, building counter-drone defense. Math-CS at UC San Diego.",
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
      className={`${redaction.variable} ${redaction50.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
