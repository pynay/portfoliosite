"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { TextReveal } from "./TextReveal";

/*
  Hero section — the first thing visitors see.
  Uses staggered animations:
  1. Italic greeting fades in
  2. Name reveals word-by-word with blur-to-sharp effect
  3. Tagline fades up
  4. Decorative line grows from left

  Separated into its own client component because it needs
  framer-motion for the orchestrated entrance sequence.
*/
export function HeroSection() {
  return (
    <Section className="min-h-screen flex flex-col justify-center pt-20">
      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-serif italic text-neutral-500 text-lg mb-2"
      >
        hello, i&apos;m
      </motion.p>

      {/* Name with staggered word reveal */}
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-sage leading-tight mb-5">
        <TextReveal text="Pranay Yalamanchali" />
      </h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-neutral-500 text-lg max-w-xl leading-relaxed tracking-wide"
      >
        math-cs @ ucsd · software developer
      </motion.p>

      {/* Decorative line — grows from left */}
      <motion.hr
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 64, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
        className="border-sage/30 mt-10 border-t"
      />

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-sage/20"
        />
      </motion.div>
    </Section>
  );
}
