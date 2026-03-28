"use client";

import Image from "next/image";
import type { Project } from "@/lib/projects";
import { FadeIn } from "./FadeIn";

/*
  ProjectCard — the primary content block on /projects.

  Upgraded from the basic version with:
  - Hover lift effect (-translate-y-1) on the whole card
  - Arrow icons on links that animate in on hover
  - Subtle background tint on hover for the image area
  - Shimmer animation on image placeholder / loading skeleton
  - Bottom-line hover effect: sage line grows from center on hover
  - Enhanced tech pill hover with scale + bg transition
  - Accessible aria-labels on all external links

  Uses .project-card for print break-inside-avoid.
*/

/*
  Shimmer keyframes — a translucent highlight sweeps left-to-right
  across the placeholder area. Defined inline so no globals.css
  modification is needed. The gradient is a narrow white band that
  travels via translateX.
*/
const shimmerStyle: React.CSSProperties = {
  background:
    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 2s ease-in-out infinite",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn>
      {/* Inject shimmer keyframes once per card (duplicate @keyframes are harmless) */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <article className="project-card group py-14 first:pt-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {/* Left: image area — takes 3 of 5 columns */}
          <div className="lg:col-span-3 placeholder-image aspect-video bg-custard-dark flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:bg-sage/5 relative">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                {...(project.blurDataURL
                  ? { placeholder: "blur" as const, blurDataURL: project.blurDataURL }
                  : {})}
              />
            ) : (
              /* Shimmer skeleton when no image is available */
              <div className="absolute inset-0" style={shimmerStyle}>
                <span className="sr-only">Loading</span>
              </div>
            )}
            {/* Fallback label shown on top of shimmer */}
            {!project.image && (
              <span className="text-xs text-neutral-400 tracking-wide relative z-10">
                screenshot
              </span>
            )}
          </div>

          {/* Right: content — takes 2 of 5 columns */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-sage mb-2">
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live demo`}
                  className="hover:text-sage-dark transition-colors duration-300"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h2>

            <p className="text-neutral-500 mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Tech pills — scale + bg transition on hover */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs tracking-wide text-sage bg-sage-light/70 px-3 py-1 transition-all duration-300 hover:scale-105 hover:bg-sage-light"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-6">
              {project.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-sm text-neutral-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-px before:bg-sage/40"
                >
                  {b}
                </li>
              ))}
            </ul>

            {/* Links with arrow icons and aria-labels */}
            <div className="flex gap-5 text-sm">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="group/link flex items-center gap-1.5 text-sage hover:text-sage-dark transition-colors duration-300"
                >
                  github
                  <svg
                    className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live demo`}
                  className="group/link flex items-center gap-1.5 text-sage hover:text-sage-dark transition-colors duration-300"
                >
                  live demo
                  <svg
                    className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom-line hover effect: sage line grows from center */}
        <div
          className="absolute bottom-0 left-0 w-full h-px bg-sage/40 transition-transform duration-500 ease-out origin-center scale-x-0 group-hover:scale-x-100"
          aria-hidden="true"
        />
      </article>
    </FadeIn>
  );
}
