/*
  Typed resume data — structured for rendering on the /resume page.
  Edit content here; the page component handles layout.
*/

export interface Education {
  school: string;
  degree: string;
  expected: string;
  coursework: string[];
  activities: string[];
}

export interface Experience {
  company: string;
  url: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

export const education: Education = {
  school: "University of California, San Diego",
  degree: "B.S. Mathematics-Computer Science",
  expected: "Expected June 2027",
  coursework: [
    "Advanced Data Structures",
    "Algorithms",
    "Systems Programming",
    "Probability",
    "Graph Theory",
  ],
  activities: [
    "Data Science Student Society",
    "ACM",
    "Triton Robotics",
  ],
};

export const experience: Experience[] = [
  {
    company: "Pedestal AI",
    url: "https://pedestal.ai",
    location: "Boston",
    role: "Software Engineering Intern",
    dates: "July — September 2025",
    bullets: [
      "Full-stack development on an 8-person team, delivering 12+ production features in TypeScript, React, and Node.js",
      "Migrated backend from JSONB to normalized PostgreSQL with Prisma ORM, improving query performance by 40%",
      "Built real-time supply chain analytics dashboard with Next.js, Node.js, and WebSocket, processing 10K+ daily transactions",
    ],
  },
];

export const skills: Skills = {
  languages: [
    "TypeScript/JavaScript",
    "C++/C",
    "Java",
    "SQL",
    "ARM Assembly",
  ],
  frameworks: [
    "Node.js",
    "FastAPI",
    "React",
    "Next.js",
    "LangGraph",
  ],
  tools: [
    "PostgreSQL",
    "Linux/Unix",
    "Git",
    "Docker",
    "Bash",
    "Sentry",
    "GDB",
    "Valgrind",
    "Vim",
  ],
};
