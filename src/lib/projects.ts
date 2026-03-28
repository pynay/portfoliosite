/*
  Typed project data — all content lives here for easy editing.
  To add a project: append to the array below.
  Order matters: projects render in array order.
*/

export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  bullets: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image?: string; // path to screenshot in /public/images/
}

export const projects: Project[] = [
  {
    slug: "letterchain",
    name: "LetterChain",
    image: "/images/letterchain.png",
    description:
      "AI-powered cover letter generator using LangGraph agent workflows",
    tech: ["Python", "TypeScript", "React", "Next.js", "LangGraph", "Claude API"],
    bullets: [
      "Built LangGraph-based agent pipeline with skill inference, tone validation, and feedback-based refinement",
      "Integrated Claude API to extract relevant resume experiences and dynamically match them to job postings",
      "Built responsive React frontend with real-time streaming interface for live generation and refinement",
    ],
    links: {
      demo: "https://letterchain.fyi",
      github: "https://github.com/pynay/LetterChain",
    },
  },
  {
    slug: "attention-convnet",
    name: "Attention-Augmented CNN",
    image: "/images/attention-convnet.png",
    description:
      "Investigating whether lightweight self-attention modules improve CNN-based image classification",
    tech: ["Python", "PyTorch"],
    bullets: [
      "Implemented spatial self-attention and squeeze-and-excitation modules on a VGG-style CNN with configurable placement via CLI",
      "Conducted ablation studies across attention type, layer position, and dataset (CIFAR-10/100), achieving 92.70% accuracy vs 92.29% baseline",
    ],
    links: {
      github: "https://github.com/pynay/attention-convnet",
    },
  },
];
