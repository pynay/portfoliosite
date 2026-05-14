"use client";

/*
  Bottom status bar — matches the landing hero's footer.
  Fixed to the viewport bottom on every page.
*/
export function Footer() {
  return (
    <footer
      className="fixed left-0 right-0 z-30 border-t border-white/20 bg-black/40 backdrop-blur-sm"
      style={{ bottom: 0 }}
    >
      <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] font-mono text-white/50">
          <span className="hidden lg:inline">SYSTEM.ACTIVE</span>
          <span className="lg:hidden">SYS.ACT</span>
          <div className="hidden lg:flex gap-1">
            {[10, 6, 12, 8, 14, 5, 11, 7].map((h, i) => (
              <div key={i} className="w-1 bg-white/30" style={{ height: `${h}px` }} />
            ))}
          </div>
          <span>V1.0.0</span>
        </div>

        <div className="flex items-center gap-3 lg:gap-4 text-[8px] lg:text-[9px] font-mono text-white/50">
          <a
            href="https://github.com/pynay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/pranay-yalamanchali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:pranay.yalaman@gmail.com"
            className="hover:text-white transition-colors"
          >
            EMAIL
          </a>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" />
            <div
              className="w-1 h-1 bg-white/40 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
