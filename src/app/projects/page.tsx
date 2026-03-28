import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

/*
  Projects page — the most important page.
  Information-rich cards with tech stacks, bullets, and links.
  Print-optimized: Ctrl+P produces a clean, shareable document
  (nav/footer hidden, no animations, break-inside-avoid on cards).
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
        <p className="text-neutral-500 mb-1">
          selected work
        </p>
        <p className="text-xs text-neutral-400 mb-12">
          {projects.length} projects
        </p>
      </FadeIn>

      <div className="divide-y divide-sage/10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
