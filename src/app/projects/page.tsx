import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Pranay Yalamanchali — AI agents, deep learning research, and full-stack applications.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 lg:pt-28 pb-20">
      <div className="fixed top-16 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/20 z-10 pointer-events-none" />
      <div className="fixed top-16 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/20 z-10 pointer-events-none" />

      <Section className="pt-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-6 opacity-60">
            <div className="w-8 h-px bg-white" />
            <span className="text-white text-[10px] font-mono tracking-wider">∞</span>
            <span className="text-white text-[10px] font-mono tracking-wider">PROJECTS.LOG</span>
            <div className="flex-1 h-px bg-white" />
          </div>

          <h1
            className="text-3xl lg:text-5xl font-bold text-white mb-3 font-mono tracking-wider"
            style={{ letterSpacing: "0.1em" }}
          >
            PROJECTS
          </h1>
          <p className="text-white/60 text-xs lg:text-sm font-mono mb-1">
            selected work
          </p>
          <p className="text-white/40 text-[10px] lg:text-xs font-mono mb-10">
            {`> ${projects.length.toString().padStart(2, "0")} entries`}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} priority={i === 0} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex items-center gap-2 mt-16 opacity-40">
            <span className="text-white text-[9px] font-mono">∞</span>
            <div className="flex-1 h-px bg-white" />
            <span className="text-white text-[9px] font-mono">END.OF.LOG</span>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
