"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Reusable tabbed component — zen/minimal style.
  Active tab gets an animated underline (layoutId pattern matching Nav.tsx).
  Content cross-fades on tab change via AnimatePresence.

  Print fallback: ALL tab contents are always in the DOM.
  Non-active tabs are hidden on screen but revealed via print:block,
  so Ctrl+P captures the full resume.
*/

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-6 border-b border-sage/15 mb-8 print:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-2.5 text-sm tracking-widest lowercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-custard ${
              activeTab === tab.id
                ? "text-sage"
                : "text-neutral-400 hover:text-sage"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.span
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-px bg-sage/50"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content — all panels in DOM for print, only active visible on screen */}
      <div className="relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "block" : "hidden print:block"}
          >
            {/* Print heading — shown only in print for non-active tabs */}
            {activeTab !== tab.id && (
              <h2 className="hidden print:block font-serif text-2xl text-sage mb-4 mt-10">
                {tab.label}
              </h2>
            )}

            {/* Animate only the active panel on screen */}
            {activeTab === tab.id ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {tab.content}
                </motion.div>
              </AnimatePresence>
            ) : (
              /* Non-active: rendered statically for print */
              tab.content
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
