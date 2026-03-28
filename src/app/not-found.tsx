import Link from "next/link";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="py-32 text-center">
      <h1 className="font-serif text-8xl text-sage mb-4">404</h1>
      <p className="text-lg text-sage-dark/70 mb-8">Page not found</p>
      <Link
        href="/"
        className="inline-block px-6 py-2 text-sm border border-sage text-sage rounded-full hover:bg-sage hover:text-custard transition-colors"
      >
        Back to home
      </Link>
    </Section>
  );
}
