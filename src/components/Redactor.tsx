"use client";

import { useEffect } from "react";

/*
  Hover redaction: each word steps through the degraded Redaction cuts
  (10 -> 20 -> 35 -> 50 -> 70 -> 100) while hovered, ends as a solid
  bar, and resets on mouse-out. Words inside the h1 already render in
  Redaction 50, so they start further along the sequence.
*/

const LEVELS = [
  "Redaction 10",
  "Redaction 20",
  "Redaction 35",
  "Redaction 50",
  "Redaction 70",
  "Redaction 100",
];
const STEP_MS = 140;

export function Redactor() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const roots = document.querySelectorAll("h1, .bio p, footer");
    roots.forEach((root) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      while (walker.nextNode()) nodes.push(walker.currentNode as Text);
      nodes.forEach((node) => {
        const frag = document.createDocumentFragment();
        for (const part of (node.textContent ?? "").split(/(\s+)/)) {
          if (part === "") continue;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
          } else {
            const span = document.createElement("span");
            span.className = "rw";
            if ((root as HTMLElement).tagName === "H1") {
              span.dataset.start = "4";
            }
            span.textContent = part;
            frag.appendChild(span);
          }
        }
        node.parentNode?.replaceChild(frag, node);
      });
    });

    const timers = new Map<HTMLElement, number>();

    const step = (el: HTMLElement, level: number) => {
      if (level < LEVELS.length) {
        el.style.fontFamily = `"${LEVELS[level]}", var(--font-redaction), serif`;
        timers.set(
          el,
          window.setTimeout(() => step(el, level + 1), STEP_MS)
        );
      } else {
        el.classList.add("rw-full");
      }
    };

    const reset = (el: HTMLElement) => {
      const t = timers.get(el);
      if (t !== undefined) window.clearTimeout(t);
      timers.delete(el);
      el.style.fontFamily = "";
      el.classList.remove("rw-full");
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(
        ".rw"
      ) as HTMLElement | null;
      if (!el || timers.has(el)) return;
      step(el, Number(el.dataset.start ?? 0));
    };

    const onOut = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(
        ".rw"
      ) as HTMLElement | null;
      if (!el) return;
      const to = e.relatedTarget as Element | null;
      if (to && el.contains(to)) return;
      reset(el);
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return null;
}
