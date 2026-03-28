import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { Tabs } from "@/components/Tabs";
import { education, experience, skills } from "@/lib/resume";
import { projects } from "@/lib/projects";

/*
  Resume page — restructured with tabbed sections for education,
  experience, and skills. Projects remain below the tabs as a
  brief standalone section. Print-optimized: all tab contents
  render in the DOM so Ctrl+P captures everything.
*/
export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Pranay Yalamanchali — education, experience, and technical skills.",
};

/* ── Tab content extracted as components for clarity ── */

function EducationContent() {
  return (
    <div>
      <h3 className="font-medium text-neutral-800">{education.school}</h3>
      <p className="text-neutral-600">
        {education.degree} · {education.expected}
      </p>
      <p className="text-sm text-neutral-500 mt-2">
        <span className="text-neutral-400">Coursework:</span>{" "}
        {education.coursework.join(", ")}
      </p>
      <p className="text-sm text-neutral-500 mt-1">
        <span className="text-neutral-400">Activities:</span>{" "}
        {education.activities.join(", ")}
      </p>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div>
      {experience.map((exp) => (
        <div key={exp.company} className="mb-8 last:mb-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-medium text-neutral-800">
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:text-sage-dark transition-colors"
              >
                {exp.company}
              </a>
              <span className="text-neutral-400 font-normal">
                {" "}
                · {exp.location}
              </span>
            </h3>
            <span className="text-sm text-neutral-400">{exp.dates}</span>
          </div>
          <p className="text-neutral-600 text-sm mb-3">{exp.role}</p>
          <ul className="space-y-2">
            {exp.bullets.map((b, i) => (
              <li
                key={i}
                className="text-sm text-neutral-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-px before:bg-sage/40"
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
    <div className="space-y-3 text-sm">
      <div>
        <span className="text-neutral-400">Languages:</span>{" "}
        <span className="text-neutral-600">
          {skills.languages.join(", ")}
        </span>
      </div>
      <div>
        <span className="text-neutral-400">Frameworks:</span>{" "}
        <span className="text-neutral-600">
          {skills.frameworks.join(", ")}
        </span>
      </div>
      <div>
        <span className="text-neutral-400">Tools:</span>{" "}
        <span className="text-neutral-600">{skills.tools.join(", ")}</span>
      </div>
    </div>
  );
}

/* ── Page ── */

export default function ResumePage() {
  const tabs = [
    {
      id: "education",
      label: "education",
      content: <EducationContent />,
    },
    {
      id: "experience",
      label: "experience",
      content: <ExperienceContent />,
    },
    {
      id: "skills",
      label: "skills",
      content: <SkillsContent />,
    },
  ];

  return (
    <Section className="pt-32 pb-24">
      {/* Header — above tabs */}
      <FadeIn>
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl text-sage mb-2">
              resume
            </h1>
            <p className="text-neutral-500">Pranay Yalamanchali</p>
          </div>
          <a
            href="/api/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-sage hover:text-sage-dark transition-colors"
          >
            download pdf
          </a>
        </div>
      </FadeIn>

      {/* Tabbed sections */}
      <FadeIn>
        <Tabs tabs={tabs} />
      </FadeIn>

      {/* Projects (brief) — below tabs, always visible */}
      <FadeIn>
        <section className="mt-14">
          <h2 className="font-serif text-2xl text-sage mb-4">projects</h2>
          <hr className="border-sage/15 mb-6" />
          <div className="space-y-4">
            {projects.map((p) => (
              <div key={p.slug}>
                <h3 className="font-medium text-neutral-800">{p.name}</h3>
                <p className="text-sm text-neutral-500">{p.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/projects"
            className="inline-block mt-6 text-sm text-sage hover:text-sage-dark transition-colors"
          >
            view all projects
          </Link>
        </section>
      </FadeIn>
    </Section>
  );
}
