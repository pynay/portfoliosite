"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { TextReveal } from "./TextReveal";

/*
  Hero section — the first thing visitors see.
  Uses staggered animations with standardized timing:
    Base duration: 0.5s
    Delay intervals: 0.15, 0.3, 0.6, 0.9

  1. Italic greeting fades in          (delay 0.15)
  2. Name reveals word-by-word          (built-in stagger)
  3. Tagline fades up                   (delay 0.6)
  4. Decorative line grows from left    (delay 0.9)

  The scroll hint is hidden on viewports shorter than 700px
  via [@media(max-height:700px)]:hidden.

  Reduced motion is handled at the CSS level via
  @media (prefers-reduced-motion: reduce) in globals.css.
  This avoids hydration mismatches from useReducedMotion().
*/
export function HeroSection() {
  return (
    <Section className="relative min-h-screen flex flex-col justify-center pt-20">
      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
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
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        className="text-neutral-500 text-lg max-w-xl leading-relaxed tracking-wide"
      >
        math-cs ∩ cogsci ml ∈ ucsd · software developer
      </motion.p>

      {/* Decorative line — grows from left */}
      <motion.hr
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 64, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
        className="border-sage/30 mt-10 border-t"
      />

      {/* Scroll hint — hidden on short viewports (< 700px height) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 [@media(max-height:700px)]:hidden"
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
