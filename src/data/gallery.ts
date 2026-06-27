// Gallery section — add real screenshots to /public/projects/ and update here

export interface GalleryItem {
  id: string;
  title: string;
  project: string;
  slug: string;
  type: "workspace" | "dashboard" | "landing" | "flow" | "slides" | "hardware" | "diagram";
  status: string;
  description: string;
  highlight: string;
  whatItShows: string[];
  caseStudyUrl: string;
  image?: string;
  imageAlt?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "mythos-workspace",
    title: "Mythos Workspace",
    project: "Mythos",
    slug: "mythos",
    type: "workspace",
    status: "Working Prototype",
    description: "AI chat workspace with memory, files, research, and citations",
    highlight:
      "Multi-model workspace so research, writing, and creation stay in one flow — not scattered across separate tools.",
    whatItShows: ["Workflow & interface design", "Model orchestration ideas"],
    caseStudyUrl: "/case-studies/mythos",
    image: "/projects/mythos.jpg",
    imageAlt: "Mythos AI workspace chat interface with sidebar and prompt suggestions",
  },
  {
    id: "kryvax-platform",
    title: "Kryvax AI Platform",
    project: "Kryvax",
    slug: "kryvax",
    type: "dashboard",
    status: "In Progress",
    description: "Intelligence ecosystem with sessions, reasoning matrix, and web retrieval",
    highlight:
      "Structured SaaS platform with tiers, admin tools, and agent workflows — AI as infrastructure, not just a chat box.",
    whatItShows: ["SaaS architecture thinking", "Platform-scale structure"],
    caseStudyUrl: "/case-studies/kryvax",
    image: "/projects/kryvax.jpg",
    imageAlt: "Kryvax AI welcome screen with Apex connected and advanced reasoning features",
  },
  {
    id: "gaming-homepage",
    title: "Gaming Odyssey Homepage",
    project: "Gaming Odyssey",
    slug: "gaming-odyssey",
    type: "landing",
    status: "In Progress",
    description: "Gaming brand landing with gear showcase and community direction",
    highlight:
      "Gaming brand built around community identity, visual storytelling, and technology integration beyond entertainment.",
    whatItShows: ["Branding & storytelling", "Audience-oriented design"],
    caseStudyUrl: "/case-studies/gaming-odyssey",
    image: "/projects/gaming-odyssey.jpg",
    imageAlt: "Gaming Odyssey hero page with custom PC builds and gaming community branding",
  },
  {
    id: "presentation-slides",
    title: "AI Slide Generation",
    project: "AI Presentation Studio",
    slug: "ai-presentation-studio",
    type: "slides",
    status: "Product Concept",
    description: "Template gallery and slide generation workflow",
    highlight:
      "Template-driven slide generation with layout intelligence — structured output instead of generic AI decks.",
    whatItShows: ["Template-driven product design", "Content generation flow"],
    caseStudyUrl: "/case-studies/ai-presentation-studio",
    image: "/projects/ai-presentation-studio.svg",
    imageAlt: "AI Presentation Studio concept preview with template slides",
  },
  {
    id: "memorialife-flow",
    title: "MemoriaLife Landing Page",
    project: "MemoriaLife",
    slug: "memorialife",
    type: "landing",
    status: "Product Concept",
    description: "AI persona preservation service with consultation and live demo flows",
    highlight:
      "AI service concept with trust, payment flow, and onboarding — product structure beyond chatbot functionality.",
    whatItShows: ["Product flow design", "Customer experience planning"],
    caseStudyUrl: "/case-studies/memorialife",
    image: "/projects/memorialife.jpg",
    imageAlt: "MemoriaLife homepage preserving digital legacy with AI personas and live demo",
  },
  {
    id: "maker-hardware",
    title: "Maker & Automation Setup",
    project: "Maker Projects",
    slug: "maker-projects",
    type: "hardware",
    status: "Experimental",
    description: "Raspberry Pi, ESP32, sensors, and live temperature/humidity monitoring",
    highlight:
      "Hands-on hardware work — sensor stations, IoT prototypes, and physical systems beyond software-only builds.",
    whatItShows: ["Hands-on experimentation", "Physical systems thinking"],
    caseStudyUrl: "/case-studies/maker-projects",
    image: "/projects/maker-projects.jpg",
    imageAlt: "Hands-on IoT project with Raspberry Pi, ESP32, breadboard, and LCD sensor readout",
  },
];