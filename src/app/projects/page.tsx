import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

/*
  Projects page — 2-column card grid.
  Each project is a self-contained card with image, description,
  tech tags, bullets, and links.
  Print-optimized: break-inside-avoid on each card.
*/
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Pranay Yalamanchali — AI agents, deep learning research, and full-stack applications.",
};

export default function ProjectsPage() {
  return (
    <Section className="pt-32 pb-24">
      <FadeIn>
        <h1 className="font-serif text-4xl sm:text-5xl text-sage mb-2">
          projects
        </h1>
        <p className="text-neutral-500 mb-1">selected work</p>
        <p className="text-xs text-neutral-400 mb-12">
          {projects.length} projects
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} priority={i === 0} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
