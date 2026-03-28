"use client";

/*
  Minimal footer — thin rule, copyright, social links, and back-to-top.
  No clutter, just a gentle closing.
*/
export function Footer() {
  return (
    <footer className="max-w-5xl mx-auto w-full px-6 pb-8 pt-16">
      <hr className="border-sage/15 mb-6" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="text-xs text-neutral-400 tracking-wide">
            Pranay Yalamanchali, {new Date().getFullYear()}
          </p>
          <span className="text-neutral-300 text-xs" aria-hidden="true">
            ·
          </span>
          <a
            href="https://github.com/pynay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 hover:text-sage transition-colors"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/pranay-yalamanchali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 hover:text-sage transition-colors"
          >
            linkedin
          </a>
        </div>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xs text-neutral-400 hover:text-sage transition-colors"
        >
          back to top
        </a>
      </div>
    </footer>
  );
}
