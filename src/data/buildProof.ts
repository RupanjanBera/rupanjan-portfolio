// Build Proof section — edit cards and proof points here

export interface BuildProofCard {
  id: string;
  title: string;
  category: string;
  slug: string;
  status: "Active Build" | "Working Prototype" | "In Progress" | "Product Concept" | "Experimental";
  description: string;
  highlight: string;
  whatItShows: string[];
  tools: string[];
  type: "workspace" | "platform" | "brand" | "maker" | "productivity";
  caseStudyUrl: string;
  image?: string;
  imageAlt?: string;
}

export const buildProofCards: BuildProofCard[] = [
  {
    id: "mythos-proof",
    title: "AI Workspace Prototype",
    category: "Mythos",
    slug: "mythos",
    status: "Working Prototype",
    description:
      "Multi-model AI workspace with chat, file understanding, research workflows, and presentation direction.",
    highlight:
      "Replaces fragmented AI tools with one workspace for thinking, researching, writing, and creating.",
    whatItShows: ["AI product thinking beyond chatbots", "SaaS-style system structure"],
    tools: ["Next.js", "OpenAI API", "Claude API", "DeepSeek"],
    type: "workspace",
    caseStudyUrl: "/case-studies/mythos",
    image: "/projects/mythos.jpg",
    imageAlt: "Mythos AI workspace interface",
  },
  {
    id: "kryvax-proof",
    title: "Multi-Agent Platform",
    category: "Kryvax",
    slug: "kryvax",
    status: "In Progress",
    description:
      "Intelligence ecosystem with sessions, Apex web retrieval, reasoning matrix, and agent workflows.",
    highlight:
      "Real SaaS infrastructure — auth, tiers, admin dashboard, and multi-agent routing for business tasks.",
    whatItShows: ["Pricing & plan logic", "Admin & dashboard design"],
    tools: ["Next.js", "Auth", "SQLite", "AI APIs"],
    type: "platform",
    caseStudyUrl: "/case-studies/kryvax",
    image: "/projects/kryvax.jpg",
    imageAlt: "Kryvax AI platform interface",
  },
  {
    id: "gaming-proof",
    title: "Gaming Brand & Web",
    category: "Gaming Odyssey",
    slug: "gaming-odyssey",
    status: "In Progress",
    description:
      "Gaming brand landing with gear showcase, community direction, and modern visual identity.",
    highlight:
      "Cohesive gaming brand connecting community, content, and technology — not just a static landing page.",
    whatItShows: ["Community product thinking", "Gaming + technology integration"],
    tools: ["Branding", "Next.js", "Community UX"],
    type: "brand",
    caseStudyUrl: "/case-studies/gaming-odyssey",
    image: "/projects/gaming-odyssey.jpg",
    imageAlt: "Gaming Odyssey landing page",
  },
  {
    id: "presentation-proof",
    title: "AI Presentation Builder",
    category: "AI Presentation Studio",
    slug: "ai-presentation-studio",
    status: "Product Concept",
    description:
      "Template-driven slide generation system with layout engine and AI content workflow planning.",
    highlight:
      "Structured presentation output through templates and layout intelligence — productivity tool design.",
    whatItShows: ["Productivity tool design", "System & UX planning"],
    tools: ["AI APIs", "Template System", "UX Design"],
    type: "productivity",
    caseStudyUrl: "/case-studies/ai-presentation-studio",
    image: "/projects/ai-presentation-studio.svg",
    imageAlt: "AI Presentation Studio concept",
  },
  {
    id: "maker-proof",
    title: "Automation / Maker Systems",
    category: "Maker Projects",
    slug: "maker-projects",
    status: "Experimental",
    description:
      "Raspberry Pi, ESP32, sensor stations, RC aircraft, and IoT-style prototypes.",
    highlight:
      "Physical engineering alongside software — sensors, embedded devices, and hands-on problem-solving.",
    whatItShows: ["Engineering curiosity", "Problem-solving beyond software"],
    tools: ["Raspberry Pi", "ESP32", "Sensors", "IoT"],
    type: "maker",
    caseStudyUrl: "/case-studies/maker-projects",
    image: "/projects/maker-projects.jpg",
    imageAlt: "Raspberry Pi and ESP32 IoT automation hardware setup",
  },
];

export const heroStats = [
  { value: "6+", label: "Product experiments" },
  { value: "AI + Web", label: "Core focus areas" },
  { value: "Commerce", label: "Business foundation" },
  { value: "Maker", label: "Hardware + software" },
];