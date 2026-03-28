"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/*
  Reusable fade-up-on-scroll wrapper using Framer Motion.
  Triggers once when the element enters the viewport.
  The motion is subtle — 20px upward translate with opacity fade.
  Think: a leaf landing on water.
*/
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
