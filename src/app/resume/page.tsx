import type { Metadata } from "next";
import { education, experience, skills } from "@/lib/resume";

export const metadata: Metadata = {
  title: "resume",
  description:
    "Resume of Pranay Yalamanchali — education, experience, and technical skills.",
};

export default function ResumePage() {
  return (
    <>
      <h2>resume</h2>
      <p>
        <a href="/api/resume" target="_blank" rel="noopener noreferrer">
          download pdf
        </a>
      </p>

      <h3>education</h3>
      <p>
        {education.school} — {education.degree}
        <br />
        <span className="muted">{education.expected.toLowerCase()}</span>
      </p>
      <p className="muted">
        coursework: {education.coursework.join(", ").toLowerCase()}
      </p>

      <h3>experience</h3>
      {experience.map((exp) => (
        <div key={exp.company}>
          <p>
            <a href={exp.url} target="_blank" rel="noopener noreferrer">
              {exp.company}
            </a>{" "}
            — {exp.role.toLowerCase()}{" "}
            <span className="muted">({exp.dates.toLowerCase()})</span>
          </p>
          <ul>
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>skills</h3>
      <ul>
        <li>languages: {skills.languages.join(", ")}</li>
        <li>frameworks: {skills.frameworks.join(", ")}</li>
        <li>tools: {skills.tools.join(", ")}</li>
      </ul>
    </>
  );
}
