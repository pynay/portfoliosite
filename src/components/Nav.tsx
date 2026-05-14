"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Top header — matches the landing hero's header bar.
  Visible on every page. Sticky to the top.
*/

const focusRing =
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: "/projects", label: "PROJECTS" },
    { href: "/resume", label: "RESUME" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-black/40 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className={`flex items-center gap-2 lg:gap-4 ${focusRing}`}>
          <span className="font-mono text-white text-xl lg:text-2xl font-bold tracking-widest italic transform -skew-x-12">
            PRANAY
          </span>
          <span className="h-3 lg:h-4 w-px bg-white/40" />
          <span className="text-white/60 text-[8px] lg:text-[10px] font-mono">EST. 2025</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6 text-[10px] font-mono text-white/60">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`relative transition-colors hover:text-white py-1 ${focusRing} ${
                pathname === link.href ? "text-white" : ""
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="w-px h-3 bg-white/30" />
          <span>LAT: 32.8801°</span>
          <div className="w-1 h-1 bg-white/40 rounded-full" />
          <span>LONG: -117.2340°</span>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden flex flex-col gap-1.5 p-2 ${focusRing}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-md border-b border-white/20"
          >
            <div className="px-4 pb-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`block py-2.5 text-[11px] font-mono tracking-widest transition-colors ${focusRing} ${
                      pathname === link.href ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
