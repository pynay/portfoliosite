import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { Tabs } from "@/components/Tabs";
import { education, experience, skills } from "@/lib/resume";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Pranay Yalamanchali — education, experience, and technical skills.",
};

function EducationContent() {
  return (
    <div className="font-mono">
      <h3 className="text-white text-base lg:text-lg tracking-wider">{education.school}</h3>
      <p className="text-white/70 text-sm mt-1">
        {education.degree} · {education.expected}
      </p>
      <p className="text-xs text-white/60 mt-4">
        <span className="text-white/40">COURSEWORK:</span>{" "}
        {education.coursework.join(", ")}
      </p>
      <p className="text-xs text-white/60 mt-2">
        <span className="text-white/40">ACTIVITIES:</span>{" "}
        {education.activities.join(", ")}
      </p>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="font-mono">
      {experience.map((exp) => (
        <div key={exp.company} className="mb-8 last:mb-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="text-white text-base lg:text-lg tracking-wider">
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors underline-offset-4 hover:underline"
              >
                {exp.company}
              </a>
              <span className="text-white/40 font-normal text-sm">
                {" "}
                · {exp.location}
              </span>
            </h3>
            <span className="text-xs text-white/40">{exp.dates}</span>
          </div>
          <p className="text-white/70 text-sm mb-3">{exp.role}</p>
          <ul className="space-y-2">
            {exp.bullets.map((b, i) => (
              <li
                key={i}
                className="text-xs lg:text-sm text-white/70 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-px before:bg-white/40"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="space-y-3 text-xs lg:text-sm font-mono">
      <div>
        <span className="text-white/40">LANGUAGES:</span>{" "}
        <span className="text-white/70">{skills.languages.join(", ")}</span>
      </div>
      <div>
        <span className="text-white/40">FRAMEWORKS:</span>{" "}
        <span className="text-white/70">{skills.frameworks.join(", ")}</span>
      </div>
      <div>
        <span className="text-white/40">TOOLS:</span>{" "}
        <span className="text-white/70">{skills.tools.join(", ")}</span>
      </div>
    </div>
  );
}

export default function ResumePage() {
  const tabs = [
    { id: "education", label: "EDUCATION", content: <EducationContent /> },
    { id: "experience", label: "EXPERIENCE", content: <ExperienceContent /> },
    { id: "skills", label: "SKILLS", content: <SkillsContent /> },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 lg:pt-28 pb-20">
      <div className="fixed top-16 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/20 z-10 pointer-events-none" />
      <div className="fixed top-16 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/20 z-10 pointer-events-none" />

      <Section className="pt-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-6 opacity-60">
            <div className="w-8 h-px bg-white" />
            <span className="text-white text-[10px] font-mono tracking-wider">∞</span>
            <span className="text-white text-[10px] font-mono tracking-wider">RESUME.LOG</span>
            <div className="flex-1 h-px bg-white" />
          </div>

          <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2 font-mono tracking-wider" style={{ letterSpacing: "0.1em" }}>
                RESUME
              </h1>
              <p className="text-white/60 text-xs lg:text-sm font-mono">
                Pranay Yalamanchali
              </p>
            </div>
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 bg-transparent text-white font-mono text-[10px] lg:text-xs border border-white hover:bg-white hover:text-black transition-all duration-200 tracking-wider"
            >
              DOWNLOAD.PDF
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <Tabs tabs={tabs} />
        </FadeIn>

        <FadeIn>
          <section className="mt-16">
            <div className="flex items-center gap-2 mb-6 opacity-60">
              <span className="text-white text-[10px] font-mono tracking-wider">PROJECTS</span>
              <div className="flex-1 h-px bg-white/40" />
            </div>
            <div className="space-y-5 font-mono">
              {projects.map((p) => (
                <div key={p.slug}>
                  <h3 className="text-white text-sm lg:text-base tracking-wider">{p.name}</h3>
                  <p className="text-xs text-white/60 mt-1">{p.description}</p>
                </div>
              ))}
            </div>
            <Link
              href="/projects"
              className="inline-block mt-6 text-[10px] lg:text-xs font-mono text-white/70 hover:text-white transition-colors tracking-wider"
            >
              {`> view all projects`}
            </Link>
          </section>
        </FadeIn>

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
