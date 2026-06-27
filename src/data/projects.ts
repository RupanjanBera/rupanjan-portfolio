// Edit project content here

export type ProjectCategory = "AI" | "Web" | "Business" | "Maker";
export type ProjectStatus =
  | "Active Build"
  | "Working Prototype"
  | "In Progress"
  | "Product Concept"
  | "Experimental";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  shortDescription: string;
  problemSolved: string;
  keyFeatures: string[];
  techStack: string[];
  status: ProjectStatus;
  statusLabel: string;
  whatItShows: string[];
  builtExplored: string[];
  plannedNext: string[];
  links: {
    caseStudy: string;
    liveDemo?: string;
    github?: string;
    screenshots?: string;
  };
  accentColor: string;
  layout: "wide" | "standard";
  image?: string; // e.g. "/projects/hyperion-ai.jpg"
  imageAlt?: string;
  imagePosition?: "top" | "center" | "bottom";
}

export const projects: Project[] = [
  {
    id: "hyperion-ai",
    slug: "hyperion-ai",
    title: "Hyperion AI",
    tagline: "Unified AI Workspace",
    category: "AI",
    categories: ["AI", "Web"],
    shortDescription:
      "A full AI workspace with chat, agents, knowledge, research, files, slide maker, and memory — so builders don't need fragmented tools to think, research, write, and create.",
    problemSolved:
      "Jumping between separate AI tools creates friction, context loss, and inconsistent workflows for people who need to research, write, and build.",
    keyFeatures: [
      "Auto-routed chat workspace",
      "Agents & project organization",
      "Knowledge base & file understanding",
      "Web research with citations",
      "Slide Maker module",
      "Memory-aware interaction",
      "Multi-model support",
    ],
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Claude API", "DeepSeek API", "Tailwind CSS"],
    status: "Working Prototype",
    statusLabel: "Working Prototype",
    whatItShows: [
      "AI product thinking beyond chatbots",
      "Full workspace UX with modular tools",
      "Model orchestration & agent routing",
      "SaaS-style system structure",
    ],
    builtExplored: [
      "Hyperion AI workspace UI with sidebar navigation",
      "Chat, agents, knowledge, research, and files modules",
      "Slide Maker and memories integration direction",
      "Auto-routed workspace with voice and citations",
    ],
    plannedNext: [
      "Persistent memory across sessions",
      "Agent workflow chains",
      "Live slide export module",
    ],
    links: { caseStudy: "/case-studies/hyperion-ai", liveDemo: "#", github: "#", screenshots: "#gallery" },
    accentColor: "from-blue-500 to-cyan-500",
    layout: "wide",
    image: "/projects/hyperion-ai.jpg",
    imageAlt: "Hyperion AI workspace showing chat interface with agents, knowledge, research, slide maker, and files",
    imagePosition: "center",
  },
  {
    id: "kryvax",
    slug: "kryvax",
    title: "Kryvax",
    tagline: "Multi-Agent AI Platform",
    category: "AI",
    categories: ["AI", "Web", "Business"],
    shortDescription:
      "A structured SaaS platform where AI is layered with tiers, permissions, admin tools, and distinct user workflows — not just a chat box.",
    problemSolved:
      "Most AI tools skip the infrastructure: users, billing, access control, and scalable platform features that real products require.",
    keyFeatures: [
      "AI tools platform structure",
      "User authentication & accounts",
      "Pricing tiers & usage tracking",
      "Admin dashboard",
      "Model access control",
      "Multi-agent workflows",
      "Web search & file upload direction",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "SQLite", "Auth", "AI APIs"],
    status: "In Progress",
    statusLabel: "In Progress",
    whatItShows: [
      "SaaS architecture thinking",
      "Pricing & plan logic",
      "Platform-scale structure",
      "Admin & dashboard design",
    ],
    builtExplored: [
      "SaaS landing page with pricing sections",
      "User tier and access control planning",
      "Admin dashboard wireframes",
      "Agent routing for business, coding, research tasks",
    ],
    plannedNext: [
      "Live billing integration",
      "Team workspace features",
      "Custom agent builder",
    ],
    links: { caseStudy: "/case-studies/kryvax", liveDemo: "#", github: "#", screenshots: "#gallery" },
    accentColor: "from-indigo-500 to-blue-500",
    layout: "standard",
    image: "/projects/kryvax.jpg",
    imageAlt: "Kryvax AI intelligence ecosystem with session management and advanced reasoning features",
    imagePosition: "center",
  },
  {
    id: "gaming-odyssey",
    slug: "gaming-odyssey",
    title: "Gaming Odyssey",
    tagline: "Gaming Brand & Community",
    category: "Web",
    categories: ["Web", "Business"],
    shortDescription:
      "A gaming and technology brand built around community, identity, design, and digital experiences — expanding from gaming into broader web direction.",
    problemSolved:
      "Gaming communities often lack cohesive branding and technology integration that connects entertainment with useful digital tools.",
    keyFeatures: [
      "Brand direction & visual identity",
      "Gaming website concepts",
      "Community platform ideas",
      "Minecraft server direction",
      "AI helper chatbot concepts",
      "Engagement & content thinking",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Branding", "AI Chatbot"],
    status: "In Progress",
    statusLabel: "In Progress",
    whatItShows: [
      "Branding & storytelling",
      "Community product thinking",
      "Audience-oriented design",
      "Gaming + technology integration",
    ],
    builtExplored: [
      "Brand identity and visual direction",
      "Landing page and community UX concepts",
      "Content hub structure planning",
      "AI-assisted community helper ideas",
    ],
    plannedNext: [
      "Live community platform",
      "Minecraft server launch",
      "Content publishing system",
    ],
    links: {
      caseStudy: "/case-studies/gaming-odyssey",
      liveDemo: "https://gamingodyssey.in",
      github: "#",
      screenshots: "#gallery",
    },
    accentColor: "from-violet-500 to-purple-500",
    layout: "standard",
    image: "/projects/gaming-odyssey.jpg",
    imageAlt: "Gaming Odyssey landing page with gaming gear showcase and community branding",
    imagePosition: "center",
  },
  {
    id: "memorialife",
    slug: "memorialife",
    title: "MemoriaLife",
    tagline: "AI Chatbot Product",
    category: "Business",
    categories: ["AI", "Business"],
    shortDescription:
      "An AI service concept exploring trust, payment flow, customer communication, and onboarding — not just chatbot functionality.",
    problemSolved:
      "AI chatbots are often deployed without proper product structure: pricing, onboarding, or customer communication flows.",
    keyFeatures: [
      "AI chatbot service concept",
      "Payment gateway flow direction",
      "Buyer confirmation workflow",
      "Business email communication",
      "Onboarding & customer journey",
      "Structured product packaging",
    ],
    techStack: ["AI APIs", "Payment Integration", "Email Automation", "Web"],
    status: "Product Concept",
    statusLabel: "Product Concept",
    whatItShows: [
      "AI service design thinking",
      "Product flow design",
      "Business process awareness",
      "Customer experience planning",
    ],
    builtExplored: [
      "Service-based product model with tiers",
      "Payment and checkout flow wireframes",
      "Buyer confirmation email templates",
      "Onboarding journey mapping",
    ],
    plannedNext: [
      "Live payment integration",
      "User account system",
      "Conversation quality analytics",
    ],
    links: {
      caseStudy: "/case-studies/memorialife",
      liveDemo: "https://memorialife.online",
      github: "#",
      screenshots: "#gallery",
    },
    accentColor: "from-emerald-500 to-teal-500",
    layout: "standard",
    image: "/projects/memorialife.jpg",
    imageAlt: "MemoriaLife landing page for AI-powered digital legacy and persona preservation",
    imagePosition: "center",
  },
  {
    id: "ai-presentation-studio",
    slug: "ai-presentation-studio",
    title: "AI Presentation Studio",
    tagline: "Intelligent Slide Generation",
    category: "AI",
    categories: ["AI", "Web"],
    shortDescription:
      "Exploring intelligent slide generation through templates, AI-assisted content, image generation, and structured presentation output.",
    problemSolved:
      "Creating professional presentations is time-consuming, and many AI slide tools produce generic or poorly structured results.",
    keyFeatures: [
      "AI slide generation",
      "Template system & gallery",
      "Layout engine direction",
      "AI-generated content",
      "Image generation support",
      "Export-ready workflow",
    ],
    techStack: ["AI APIs", "Next.js", "Template Engine", "Image Generation"],
    status: "Product Concept",
    statusLabel: "Product Concept",
    whatItShows: [
      "Productivity tool design",
      "System & UX planning",
      "Template-driven product design",
      "Content generation flow",
    ],
    builtExplored: [
      "Template gallery and style control concepts",
      "Layout intelligence based on content type",
      "Step-by-step deck creation workflow",
      "Theme and brand consistency controls",
    ],
    plannedNext: [
      "Live slide editor",
      "PowerPoint/PDF export",
      "Collaborative editing",
    ],
    links: { caseStudy: "/case-studies/ai-presentation-studio", liveDemo: "#", github: "#", screenshots: "#gallery" },
    accentColor: "from-amber-500 to-orange-500",
    layout: "standard",
    image: "/projects/ai-presentation-studio.jpg",
    imageAlt: "AI Presentation Studio — intelligent slide generation dashboard with template gallery",
    imagePosition: "center",
  },
  {
    id: "maker-projects",
    slug: "maker-projects",
    title: "Automation & Maker",
    tagline: "Hardware & Embedded Projects",
    category: "Maker",
    categories: ["Maker"],
    shortDescription:
      "Hardware, embedded, and experimental work — Raspberry Pi, ESP32, RC aircraft, FPV drones, sensors, and IoT-style exploration.",
    problemSolved:
      "Software-only projects don't capture hands-on problem-solving — physical technology requires different engineering skills.",
    keyFeatures: [
      "Raspberry Pi server ideas",
      "ESP32 sensor devices",
      "RC airplane experiments",
      "FPV drone planning",
      "AI home assistant concepts",
      "IoT automation prototypes",
    ],
    techStack: ["Raspberry Pi", "ESP32", "Sensors", "RC Electronics", "Python", "IoT"],
    status: "Experimental",
    statusLabel: "Experimental",
    whatItShows: [
      "Hands-on experimentation",
      "Engineering curiosity",
      "Problem-solving beyond software",
      "Physical systems thinking",
    ],
    builtExplored: [
      "ESP32 sensor station proof-of-concepts",
      "Raspberry Pi server and AI assistant planning",
      "RC aircraft assembly and testing",
      "Automation workflow experiments",
    ],
    plannedNext: [
      "Complete FPV drone build",
      "Functional AI home assistant on Pi",
      "Sensor dashboard with live data",
    ],
    links: { caseStudy: "/case-studies/maker-projects", screenshots: "#gallery" },
    accentColor: "from-slate-600 to-slate-800",
    layout: "wide",
    image: "/projects/maker-projects.jpg",
    imageAlt: "Raspberry Pi and ESP32 IoT setup with temperature and humidity sensor display on LCD",
    imagePosition: "center",
  },
];

export const projectCategories: ProjectCategory[] = ["AI", "Web", "Business", "Maker"];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}