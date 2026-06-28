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
      "Hyperion AI is a unified AI workspace designed to bring chat, research, files, agents, knowledge, slide creation, and memory into one focused environment. Instead of forcing users to jump between multiple AI tools, Hyperion explores how a single workspace can support thinking, researching, writing, and building from one interface.",
    problemSolved:
      "People often use separate tools for AI chat, research, document understanding, writing, and presentation creation. This creates friction, context loss, repeated work, and scattered workflows.",
    keyFeatures: [
      "Sidebar-based workspace navigation",
      "Chat, agents, knowledge & research modules",
      "Files & slide maker integration",
      "Memory-aware AI workflows",
      "Multi-model provider direction",
      "Modular productivity platform architecture",
    ],
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Claude API", "DeepSeek API", "Tailwind CSS"],
    status: "Working Prototype",
    statusLabel: "Working Prototype",
    whatItShows: [
      "Structured AI product beyond simple integrations",
      "Workspace UX and workflow logic",
      "Product-level architecture thinking",
    ],
    builtExplored: [
      "AI workspace interface with sidebar-based navigation",
      "Chat, agents, knowledge, research, files, slide maker, and memory modules",
      "Multi-model AI workflow direction using different AI providers",
      "Product architecture for a modular AI productivity platform",
      "UX designed around serious work, not casual chatbot usage",
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
      "Kryvax is a multi-agent AI SaaS platform concept and in-progress build focused on turning AI into a structured product ecosystem with user accounts, pricing tiers, admin tools, access control, reasoning workflows, and agent-based task handling.",
    problemSolved:
      "Many AI tools focus only on the chat experience and ignore the deeper product systems required for a real SaaS business — authentication, plans, limits, billing logic, admin controls, user workflows, and feature access.",
    keyFeatures: [
      "SaaS landing & pricing structure",
      "User plan & access-control logic",
      "Admin dashboard direction",
      "Multi-agent workflow planning",
      "AI routing & reasoning concepts",
      "Scalable platform architecture",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "SQLite", "Auth", "AI APIs"],
    status: "In Progress",
    statusLabel: "In Progress",
    whatItShows: [
      "SaaS product systems, not just frontend design",
      "Pricing logic and admin thinking",
      "AI platform architecture planning",
    ],
    builtExplored: [
      "SaaS-style landing and pricing structure",
      "User plan and access-control logic",
      "Admin dashboard direction",
      "Multi-agent workflow planning",
      "AI routing and reasoning system concepts",
      "Platform architecture for a serious AI product",
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
      "Gaming Odyssey is a gaming and technology brand built around community, digital identity, content, and web experiences. It explores how gaming culture can be shaped into a broader product ecosystem with branding, community direction, and technology integration.",
    problemSolved:
      "Many gaming communities and small gaming brands lack strong identity, clean web presence, and technology-backed community experiences. They often feel scattered, generic, or disconnected from long-term product direction.",
    keyFeatures: [
      "Gaming brand identity & visual direction",
      "Website & landing page structure",
      "Community-focused user experience",
      "Gaming + technology positioning",
      "Content hub & ecosystem planning",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Branding", "AI Chatbot"],
    status: "In Progress",
    statusLabel: "In Progress",
    whatItShows: [
      "Branding, audience, and visual identity",
      "Community and web experience together",
      "Product storytelling beyond isolated pages",
    ],
    builtExplored: [
      "Gaming brand identity and visual direction",
      "Website and landing page structure",
      "Community-focused user experience",
      "Gaming + technology positioning",
      "Content hub and future product ecosystem planning",
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
    tagline: "Digital Legacy Platform",
    category: "Business",
    categories: ["AI", "Business"],
    shortDescription:
      "MemoriaLife is an AI service concept focused on trust, onboarding, payment flow, customer communication, and AI-powered digital memory or persona-based experiences. It explores how an AI idea can be shaped into a real service with business flow and customer experience.",
    problemSolved:
      "Many AI chatbot ideas fail because they only focus on the AI response and ignore the business side: onboarding, trust, pricing, payment, customer expectations, and communication.",
    keyFeatures: [
      "AI service concept & positioning",
      "Landing page & customer journey",
      "Product tier & pricing structure",
      "Payment & checkout flow planning",
      "Buyer confirmation & email communication",
      "Trust-focused AI product design",
    ],
    techStack: ["AI APIs", "Payment Integration", "Email Automation", "Web"],
    status: "Product Concept",
    statusLabel: "Product Concept",
    whatItShows: [
      "Full product journey beyond AI features",
      "Trust, payment, and onboarding thinking",
      "Customer experience and business flow",
    ],
    builtExplored: [
      "AI service concept and positioning",
      "Landing page and customer journey direction",
      "Product tier and pricing structure",
      "Payment and checkout flow planning",
      "Buyer confirmation and email communication",
      "Trust-focused AI product design",
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
      "AI Presentation Studio is a productivity tool concept for generating professional presentations using AI-assisted content, templates, layout intelligence, image generation, and structured deck workflows.",
    problemSolved:
      "Most AI slide tools create generic, poorly structured, or visually weak presentations. Users still need to spend time fixing layouts, rewriting content, and making slides look professional.",
    keyFeatures: [
      "Template gallery direction",
      "Slide generation workflow",
      "AI-assisted content planning",
      "Layout intelligence concepts",
      "Image generation integration ideas",
      "Productivity-focused UX planning",
    ],
    techStack: ["AI APIs", "Next.js", "Template Engine", "Image Generation"],
    status: "Product Concept",
    statusLabel: "Product Concept",
    whatItShows: [
      "Productivity tools where AI and UX align",
      "Template-driven structured output",
      "Design systems with AI generation",
    ],
    builtExplored: [
      "Template gallery direction",
      "Slide generation workflow",
      "AI-assisted content planning",
      "Layout intelligence concepts",
      "Image generation integration ideas",
      "Productivity-focused UX planning",
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
    title: "Automation & Maker Projects",
    tagline: "Hardware & Embedded Projects",
    category: "Maker",
    categories: ["Maker"],
    shortDescription:
      "Automation & Maker Projects are my hands-on experiments with Raspberry Pi, ESP32, sensors, RC aircraft, FPV drone concepts, IoT systems, and embedded hardware. These projects show that I explore technology beyond software screens.",
    problemSolved:
      "Software-only learning can miss the complexity of real-world systems, where hardware, power, sensors, wiring, signal behavior, and physical testing matter.",
    keyFeatures: [
      "ESP32 sensor station concepts",
      "Raspberry Pi server & automation ideas",
      "IoT-style monitoring systems",
      "RC aircraft assembly & testing",
      "FPV drone concepts",
      "Embedded systems experimentation",
    ],
    techStack: ["Raspberry Pi", "ESP32", "Sensors", "RC Electronics", "Python", "IoT"],
    status: "Experimental",
    statusLabel: "Experimental",
    whatItShows: [
      "Engineering curiosity beyond software",
      "Hands-on problem-solving",
      "Hardware and software interaction",
    ],
    builtExplored: [
      "ESP32 sensor station concepts",
      "Raspberry Pi server and automation ideas",
      "IoT-style monitoring systems",
      "RC aircraft assembly and testing",
      "FPV drone concepts",
      "Embedded systems experimentation",
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