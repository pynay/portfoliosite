import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pranay.fyi"),
  title: {
    default: "pranay yalamanchali",
    template: "%s — pranay yalamanchali",
  },
  description:
    "Math-CS student at UC San Diego interested in systems, infrastructure, and building tools that work.",
  openGraph: {
    title: "pranay yalamanchali",
    description:
      "Math-CS student at UC San Diego interested in systems, infrastructure, and building tools that work.",
    url: "https://pranay.fyi",
    siteName: "pranay yalamanchali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "pranay yalamanchali",
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
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="site-title">
            pranay yalamanchali
          </Link>
          <nav>
            <Link href="/">home</Link>
            <Link href="/projects">projects</Link>
            <Link href="/resume">resume</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <a
            href="https://github.com/pynay"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{" "}
          ·{" "}
          <a
            href="https://linkedin.com/in/pranay-yalamanchali"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>{" "}
          · <a href="mailto:pranay.yalaman@gmail.com">email</a>
        </footer>
      </body>
    </html>
  );
}
