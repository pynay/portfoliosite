import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "projects",
  description:
    "Selected projects by Pranay Yalamanchali — AI agents, deep learning research, and full-stack applications.",
};

export default function ProjectsPage() {
  return (
    <>
      <h2>projects</h2>
      {projects.map((project) => (
        <div key={project.slug}>
          <h3>
            {project.links.demo || project.links.github ? (
              <a
                href={project.links.demo ?? project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <p>{project.description.toLowerCase()}</p>
          <p className="muted">
            {project.tech.join(" · ").toLowerCase()}
            {project.links.github && (
              <>
                {" — "}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  code
                </a>
              </>
            )}
            {project.links.demo && (
              <>
                {" · "}
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  demo
                </a>
              </>
            )}
          </p>
        </div>
      ))}
    </>
  );
}
