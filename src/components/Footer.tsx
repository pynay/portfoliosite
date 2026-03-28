/*
  Minimal footer — thin rule and a quiet copyright line.
  No clutter, just a gentle closing.
*/
export function Footer() {
  return (
    <footer className="max-w-5xl mx-auto w-full px-6 pb-8 pt-16">
      <hr className="border-sage/15 mb-6" />
      <p className="text-xs text-neutral-400 tracking-wide">
        Pranay Yalamanchali, {new Date().getFullYear()}
      </p>
    </footer>
  );
}
