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
  images?: string[]; // paths to screenshots in /public/images/
  blurDataURL?: string;
}

export const projects: Project[] = [
  {
    slug: "eventpulse",
    name: "EventPulse",
    images: ["/images/eventpulse-form.png", "/images/eventpulse-fetchai.jpg"],
    description:
      "AI-powered group event planner that orchestrates autonomous agents to discover events, vote on options, and handle payments",
    tech: ["Python", "Fetch.ai uAgents", "Claude API", "Next.js", "Stripe", "FastAPI"],
    bullets: [
      "Submitted to DiamondHacks 3.0 (April 2026) and received a Fetch.ai Special Mention for best use of their agent framework",
      "Orchestrated autonomous agents via Fetch.ai uAgents and Agentverse — each participant gets a profile agent that scores events based on private preferences, budget, and availability",
      "Built event discovery pipeline using Browser Use Cloud to search real websites, with ranked-choice voting via a consensus agent to select optimal group outings",
      "Integrated Stripe Payment Links and webhooks for automated fund collection, with a reservation agent to handle end-to-end booking",
    ],
    links: {
      github: "https://github.com/Bongs237/diamondhacks",
    },
  },
  {
    slug: "letterchain",
    name: "LetterChain",
    images: ["/images/letterchain.png"],
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
    images: ["/images/attention-convnet.png"],
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
