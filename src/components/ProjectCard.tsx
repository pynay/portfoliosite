"use client";

import type { Project } from "@/lib/projects";
import { ImageCarousel } from "./ImageCarousel";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="project-card group font-mono border border-white/15 bg-white/[0.02] overflow-hidden hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.04] transition-all duration-300 ease-out h-full">
      <div className="placeholder-image relative aspect-video w-full bg-white/[0.03] overflow-hidden">
        <ImageCarousel
          images={project.images ?? []}
          projectName={project.name}
          priority={priority}
          blurDataURL={project.blurDataURL}
        />
      </div>

      <div className="p-5">
        <h3 className="text-white text-base lg:text-lg tracking-wider font-bold mb-2">
          {project.name}
        </h3>

        <p className="text-xs text-white/60 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] tracking-wider text-white/70 border border-white/20 px-2 py-0.5 transition-colors duration-300 hover:border-white hover:text-white"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-2 mb-4">
          {project.bullets.map((b, i) => (
            <li
              key={i}
              className="text-xs text-white/60 leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-px before:bg-white/40"
            >
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 text-xs">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-300 tracking-wider"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              SOURCE
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} live demo`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-300 tracking-wider"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              WEBSITE
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
