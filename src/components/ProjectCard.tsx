"use client";

import Image from "next/image";
import type { Project } from "@/lib/projects";
import { FadeIn } from "./FadeIn";

/*
  ProjectCard — the primary content block on /projects.

  Upgraded from the basic version with:
  - Hover lift effect (-translate-y-2) on the whole card
  - Arrow icons on links that animate in on hover
  - Subtle background tint on hover for the image area
  - Better visual hierarchy with larger image area

  Uses .project-card for print break-inside-avoid.
*/
export function ProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn>
      <article className="project-card group py-14 first:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {/* Left: image placeholder — takes 3 of 5 columns */}
          <div className="lg:col-span-3 placeholder-image aspect-video bg-custard-dark flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:bg-sage/5 relative">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            ) : (
              <span className="text-xs text-neutral-400 tracking-wide">
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

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs tracking-wide text-sage bg-sage-light/70 px-3 py-1 transition-colors duration-300 hover:bg-sage-light"
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

            {/* Links with arrow icons */}
            <div className="flex gap-5 text-sm">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
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
      </article>
    </FadeIn>
  );
}
