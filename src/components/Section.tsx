import type { ReactNode } from "react";

/*
  Consistent section wrapper with max-width and generous padding.
  Centers content and ensures consistent horizontal margins across all pages.
*/
export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-5xl mx-auto px-6 ${className}`}>
      {children}
    </section>
  );
}
