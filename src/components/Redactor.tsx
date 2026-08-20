"use client";

import { useEffect } from "react";

/*
  Hover redaction: each word steps through the degraded Redaction cuts
  (10 -> 20 -> 35 -> 50 -> 70 -> 100) while hovered, ends as a solid
  bar, then steps back down to clean text after the mouse leaves.
  Words inside the h1 already render in Redaction 50, so they start
  further along the sequence.
*/

const LEVELS = [
  "Redaction 10",
  "Redaction 20",
  "Redaction 35",
  "Redaction 50",
  "Redaction 70",
  "Redaction 100",
];
const BAR = LEVELS.length; // one past the last cut: solid bar
const STEP_MS = 140;

interface WordState {
  level: number;
  dir: 1 | -1;
  timer: number;
}

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

    const state = new Map<HTMLElement, WordState>();

    const clean = (el: HTMLElement) => {
      state.delete(el);
      el.style.fontFamily = "";
      el.classList.remove("rw-full");
    };

    const tick = (el: HTMLElement) => {
      const s = state.get(el);
      if (!s) return;
      const start = Number(el.dataset.start ?? 0);
      s.level = Math.min(BAR, s.level + s.dir);

      if (s.level < start) {
        clean(el);
        return;
      }

      el.classList.toggle("rw-full", s.level >= BAR);
      el.style.fontFamily = `"${LEVELS[Math.min(s.level, BAR - 1)]}", var(--font-redaction), serif`;

      if (s.dir === 1 && s.level >= BAR) return; // fully redacted; hold
      s.timer = window.setTimeout(() => tick(el), STEP_MS);
    };

    const steer = (el: HTMLElement, dir: 1 | -1) => {
      const s = state.get(el);
      if (s) {
        if (s.dir === dir) return;
        s.dir = dir;
        window.clearTimeout(s.timer);
        s.timer = window.setTimeout(() => tick(el), STEP_MS);
      } else if (dir === 1) {
        const start = Number(el.dataset.start ?? 0);
        state.set(el, { level: start - 1, dir: 1, timer: 0 });
        tick(el);
      }
    };

    const wordOf = (e: MouseEvent) =>
      ((e.target as Element | null)?.closest?.(".rw") ??
        null) as HTMLElement | null;

    const onOver = (e: MouseEvent) => {
      const el = wordOf(e);
      if (el) steer(el, 1);
    };

    const onOut = (e: MouseEvent) => {
      const el = wordOf(e);
      if (!el) return;
      const to = e.relatedTarget as Element | null;
      if (to && el.contains(to)) return;
      steer(el, -1);
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      state.forEach((s) => window.clearTimeout(s.timer));
    };
  }, []);

  return null;
}
