"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/*
  Subtle page fade wrapper.
  Wraps page content and animates opacity on route changes:
    - Fade in:  opacity 0 → 1 over 0.3s
    - Fade out: opacity 1 → 0 over 0.2s

  Keyed by pathname so AnimatePresence detects route changes.

  Accessibility: when reduced motion is preferred, content
  renders immediately with no opacity transition.
*/
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={
          prefersReducedMotion
            ? { opacity: 1, transition: { duration: 0 } }
            : { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }
        }
        exit={
          prefersReducedMotion
            ? { opacity: 1, transition: { duration: 0 } }
            : { opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }
        }
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
