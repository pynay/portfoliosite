"use client";

import type { Project } from "@/lib/projects";
import { ImageCarousel } from "./ImageCarousel";

/*
  ProjectCard — card for the 2-column project grid.

  Image on top, title, description, tech tags, bullets, and links.
  Hover lifts the card. Clickable — parent handles expand.
  Uses .project-card for print break-inside-avoid.
*/

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="project-card group border border-sage/15 overflow-hidden hover:-translate-y-2 hover:bg-sage-light/30 transition-all duration-200 ease-out h-full">
      {/* Image */}
      <div className="placeholder-image relative aspect-video w-full bg-custard-dark overflow-hidden">
        <ImageCarousel
          images={project.images ?? []}
          projectName={project.name}
          priority={priority}
          blurDataURL={project.blurDataURL}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl text-sage leading-tight mb-1">
          {project.name}
        </h3>

        <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] tracking-wide text-sage bg-sage-light/70 px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
          {project.bullets.map((b, i) => (
            <li
              key={i}
              className="text-xs text-neutral-600 leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-px before:bg-sage/40"
            >
              {b}
            </li>
          ))}
        </ul>

        {/* Action links */}
        <div className="flex flex-wrap gap-3 text-xs">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-sage hover:text-sage-dark transition-colors duration-300"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              source
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} live demo`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-sage hover:text-sage-dark transition-colors duration-300"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              website
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
