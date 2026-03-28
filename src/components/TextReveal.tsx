"use client";

import { motion } from "framer-motion";

/*
  Staggered text reveal — each word fades in sequentially.
  Used on the hero name for an engaging first impression.
  Words start at low opacity with a blur and animate to full,
  creating a calm, intentional reveal.

  Reduced motion is handled at the CSS level via
  @media (prefers-reduced-motion: reduce) in globals.css.
  This avoids hydration mismatches from useReducedMotion().
*/
export function TextReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
