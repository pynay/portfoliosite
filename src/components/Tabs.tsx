"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Reusable tabbed component — dark mono style.
  Active tab gets an animated underline (layoutId pattern matching Nav.tsx).
  Content cross-fades on tab change via AnimatePresence.

  Print fallback: ALL tab contents are always in the DOM.
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
      <div className="flex gap-6 lg:gap-8 border-b border-white/15 mb-8 print:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-3 text-[10px] lg:text-xs font-mono tracking-widest transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
              activeTab === tab.id ? "text-white" : "text-white/40 hover:text-white/80"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.span
                layoutId="tab-underline"
                className="absolute -bottom-px left-0 right-0 h-px bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "block" : "hidden print:block"}
          >
            {activeTab !== tab.id && (
              <h2 className="hidden print:block text-2xl text-white mb-4 mt-10 font-mono tracking-wider">
                {tab.label}
              </h2>
            )}

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
              tab.content
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
