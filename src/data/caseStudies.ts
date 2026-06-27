// Detailed case study content — edit here

export interface CaseStudy {
  slug: string;
  title: string;
  status: string;
  screenshot?: string;
  screenshotAlt?: string;
  overview: string;
  problem: string;
  whyBuilt: string;
  role: string;
  currentState: string;
  builtExplored: string[];
  coreFeatures: string[];
  techStack: string[];
  productThinking: string[];
  designDecisions: string[];
  challenges: string[];
  learned: string[];
  currentLimitations: string[];
  futureImprovements: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "hyperion-ai",
    title: "Hyperion AI — Unified AI Workspace",
    status: "Working Prototype",
    screenshot: "/projects/hyperion-ai.jpg",
    screenshotAlt: "Hyperion AI workspace showing chat interface with agents, knowledge, research, slide maker, and files navigation",
    overview:
      "Hyperion AI is a unified AI workspace for students, creators, and builders — combining auto-routed chat, agents, knowledge, web research, files, slide maker, and memory without jumping between fragmented tools.",
    problem:
      "Most people use many different AI tools for different tasks. This creates friction, context loss, and inconsistent workflows for people who need to research, write, and create.",
    whyBuilt:
      "I wanted to understand how modern AI assistant platforms are structured — beyond a simple chatbot — and experiment with unified workspace design.",
    role: "Solo student builder — product design, frontend architecture, API integration planning, and UI/UX.",
    currentState:
      "An evolving working prototype used as a learning and iteration vehicle. Core workspace UI and multi-model integration patterns are explored; some modules remain in planning.",
    builtExplored: [
      "Workspace UI architecture and dashboard layout",
      "Multi-model API integration (OpenAI, Claude, DeepSeek)",
      "Chat, file, and research workflow planning",
      "Model selector and reasoning control concepts",
    ],
    coreFeatures: [
      "Multi-model AI chat workspace",
      "File upload and document understanding direction",
      "Web research integration",
      "Memory and context-aware responses",
      "Slide maker / presentation generation direction",
      "Model selector with reasoning controls",
    ],
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Claude API", "DeepSeek API", "NVIDIA NIM", "Tailwind CSS"],
    productThinking: [
      "Workspace-first UX instead of chat-only interface",
      "Model routing based on task type",
      "Modular tool panels for future agent workflows",
      "Product scope management for ambitious student builds",
    ],
    designDecisions: [
      "Dashboard-first layout instead of simple chat-only UI",
      "Model routing so users pick the right AI for each task",
      "Modular tool panels for future agent workflows",
      "Clean, focused interface for productivity",
    ],
    challenges: [
      "Orchestrating multiple AI providers with different APIs",
      "Designing a UI that scales beyond a single chat window",
      "Balancing feature scope as a student project",
    ],
    learned: [
      "How AI products think about model selection and routing",
      "SaaS-style interface patterns for productivity tools",
      "The importance of context and memory in AI workflows",
      "Product scope management for ambitious builds",
    ],
    currentLimitations: [
      "Some integrations are planned rather than finalized",
      "Memory persistence across sessions is not yet complete",
      "Slide generation module is in early concept stage",
      "This is an evolving product used primarily for learning and iteration",
    ],
    futureImprovements: [
      "Agent workflows and automation chains",
      "Persistent memory across sessions",
      "Live slide generation module",
      "Mobile-responsive tool panels",
    ],
  },
  {
    slug: "kryvax",
    title: "Kryvax — Multi-Agent AI Platform",
    status: "In Progress",
    screenshot: "/projects/kryvax.jpg",
    screenshotAlt: "Kryvax AI intelligence ecosystem with session management, Apex web retrieval, and reasoning matrix",
    overview:
      "Kryvax is a SaaS-style AI platform concept with multi-agent workflows, user accounts, pricing tiers, admin controls, and usage tracking — exploring how AI products work as real platforms.",
    problem:
      "Many AI tools are built as simple chat interfaces without thinking about users, billing, access control, or platform scalability.",
    whyBuilt:
      "I wanted to learn how AI SaaS products handle authentication, pricing tiers, usage limits, admin dashboards, and model routing.",
    role: "Solo student builder — product architecture, SaaS planning, dashboard design, and technical prototyping.",
    currentState:
      "Platform architecture and UI concepts are actively being developed. Auth, billing, and admin features are designed but not all finalized in code.",
    builtExplored: [
      "SaaS landing page with pricing sections",
      "User tier and access control planning",
      "Admin dashboard wireframes and concepts",
      "Agent routing for business, coding, research tasks",
    ],
    coreFeatures: [
      "Multi-agent AI workflows",
      "User authentication and accounts",
      "Pricing tiers with usage tracking",
      "Admin dashboard",
      "File uploads and web search direction",
      "AI agents for business, coding, studying, research",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "SQLite", "Authentication", "AI APIs"],
    productThinking: [
      "Tiered access model for different user types",
      "Admin panel separate from user dashboard",
      "Agent-based task routing instead of one generic chat",
      "Monetization logic without overcomplicating the MVP",
    ],
    designDecisions: [
      "SaaS landing page with clear pricing sections",
      "Tiered access model for different user types",
      "Admin panel separate from user dashboard",
      "Agent-based task routing instead of one generic chat",
    ],
    challenges: [
      "Designing monetization logic without overcomplicating the MVP",
      "Planning scalable architecture as a learning project",
      "Balancing platform features with development time",
    ],
    learned: [
      "How SaaS products structure pricing and usage limits",
      "Admin tooling and user management patterns",
      "Multi-agent AI workflow design",
      "Platform thinking vs. single-feature apps",
    ],
    currentLimitations: [
      "Billing integration is planned, not live",
      "Some admin features exist as wireframes only",
      "Agent workflows are conceptually designed but not fully implemented",
      "Focus is on architecture learning, not production deployment yet",
    ],
    futureImprovements: [
      "Live billing integration",
      "Team workspaces",
      "Custom agent builder",
      "Analytics dashboard for usage patterns",
    ],
  },
  {
    slug: "gaming-odyssey",
    title: "Gaming Odyssey — Gaming Brand & Community",
    status: "In Progress",
    screenshot: "/projects/gaming-odyssey.jpg",
    screenshotAlt: "Gaming Odyssey landing page with gaming gear, tournaments, and community branding",
    overview:
      "Gaming Odyssey is a gaming and technology brand concept built around community, identity, design, and digital experiences.",
    problem:
      "Gaming communities often lack cohesive branding and technology integration.",
    whyBuilt:
      "I wanted to explore branding, community building, and how gaming projects can integrate AI assistance and modern web design.",
    role: "Brand creator, web designer, and community product planner.",
    currentState:
      "Brand direction and web concepts are established. Community platform and server features are in planning stages.",
    builtExplored: [
      "Brand identity and visual direction",
      "Landing page and community UX concepts",
      "Content hub structure planning",
      "AI-assisted community helper ideas",
    ],
    coreFeatures: [
      "Gaming website and landing page concepts",
      "Community-focused design",
      "Minecraft server direction",
      "AI-powered helper chatbot ideas",
      "Content hub and project showcase",
    ],
    techStack: ["Next.js", "Tailwind CSS", "AI Chatbot", "Branding Tools"],
    productThinking: [
      "Community-first navigation and content structure",
      "AI helper as a brand differentiator",
      "Modular content sections for future expansion",
      "Entertainment focus balanced with product utility",
    ],
    designDecisions: [
      "Clean modern aesthetic aligned with gaming culture",
      "Community-first navigation and content structure",
      "AI helper as a differentiator for the brand",
      "Modular content sections for future expansion",
    ],
    challenges: [
      "Defining brand identity across gaming and technology",
      "Planning community features with limited initial resources",
      "Balancing entertainment focus with product utility",
    ],
    learned: [
      "Brand identity development for digital products",
      "Community engagement and content strategy basics",
      "How gaming and AI can complement each other",
      "Landing page design for niche audiences",
    ],
    currentLimitations: [
      "Community platform is not yet live",
      "Minecraft server remains a concept",
      "AI helper chatbot is designed but not deployed",
      "This is an evolving brand direction, not a launched product",
    ],
    futureImprovements: [
      "Live community platform",
      "Minecraft server launch",
      "Content publishing system",
      "Partnership and engagement exploration",
    ],
  },
  {
    slug: "memorialife",
    title: "MemoriaLife — AI Chatbot Product",
    status: "Product Concept",
    screenshot: "/projects/memorialife.jpg",
    screenshotAlt: "MemoriaLife landing page for high-fidelity AI personas and digital legacy preservation",
    overview:
      "MemoriaLife explores how AI services need trust, payment flow, customer communication, and onboarding — not just functionality.",
    problem:
      "AI chatbots are often deployed without proper product structure.",
    whyBuilt:
      "I wanted to understand how AI services are sold, including payment integration, buyer flows, and business automation.",
    role: "Product concept designer — user flows, pricing structure, and service architecture.",
    currentState:
      "Product flows and service structure are designed. Payment and live chatbot deployment are planned, not finalized.",
    builtExplored: [
      "Service-based product model with tiers",
      "Payment and checkout flow wireframes",
      "Buyer confirmation email templates",
      "Onboarding journey mapping",
    ],
    coreFeatures: [
      "AI chatbot with structured conversations",
      "Product pricing and checkout flow",
      "Payment gateway integration concept",
      "Email confirmation and business notifications",
      "Landing page and service structure",
    ],
    techStack: ["AI APIs", "Payment Integration", "Email Automation", "Web Development"],
    productThinking: [
      "Service packaging requires trust and clear communication",
      "Payment flow is as important as AI capability",
      "Onboarding shapes first customer experience",
      "Business automation reduces manual overhead",
    ],
    designDecisions: [
      "Service-based product model with clear tiers",
      "Automated buyer confirmation emails",
      "Business inbox for order notifications",
      "Simple onboarding focused on value delivery",
    ],
    challenges: [
      "Designing payment flows without a live backend initially",
      "Balancing AI capability with clear product positioning",
      "Planning customer communication automation",
    ],
    learned: [
      "How AI products are packaged and sold",
      "Payment and checkout flow design",
      "Customer journey mapping for AI services",
      "Business automation basics",
    ],
    currentLimitations: [
      "Payment integration is conceptual, not live",
      "Chatbot is designed but not deployed as a service",
      "No live user accounts or analytics yet",
      "This is a product exploration, not a launched business",
    ],
    futureImprovements: [
      "Live payment integration",
      "User account system",
      "Memory persistence features",
      "Analytics for conversation quality",
    ],
  },
  {
    slug: "ai-presentation-studio",
    title: "AI Presentation Studio",
    status: "Product Concept",
    screenshot: "/projects/ai-presentation-studio.jpg",
    screenshotAlt: "AI Presentation Studio — intelligent slide generation dashboard",
    overview:
      "Exploring intelligent slide generation through templates, AI-assisted content, image generation, and structured presentation output.",
    problem:
      "Creating professional presentations is time-consuming, and many AI slide tools produce generic results.",
    whyBuilt:
      "Inspired by modern AI presentation tools, I wanted to design a better system with template galleries, smart layouts, and professional output.",
    role: "Product designer and concept developer — template system, UX planning, and AI workflow design.",
    currentState:
      "Template system and workflow are conceptually designed. No live editor or export functionality yet.",
    builtExplored: [
      "Template gallery and style control concepts",
      "Layout intelligence based on content type",
      "Step-by-step deck creation workflow",
      "Theme and brand consistency controls",
    ],
    coreFeatures: [
      "AI slide generation from prompts",
      "Template gallery with style controls",
      "Smart layout selection system",
      "AI-generated text and image integration",
      "Export-ready presentation structure",
    ],
    techStack: ["AI APIs", "Next.js", "Template Engine", "Image Generation APIs"],
    productThinking: [
      "Template-first approach ensures consistent quality",
      "Layout intelligence reduces user decision fatigue",
      "Step-by-step workflow guides non-designers",
      "Export compatibility matters for adoption",
    ],
    designDecisions: [
      "Template-first approach for consistent quality",
      "Layout intelligence based on content type",
      "Theme controls for brand consistency",
      "Step-by-step deck creation workflow",
    ],
    challenges: [
      "Generating visually coherent multi-slide decks",
      "Template variety without overwhelming users",
      "Balancing automation with user control",
    ],
    learned: [
      "Presentation design system thinking",
      "AI content generation for structured formats",
      "Template-based software architecture",
      "Productivity tool UX patterns",
    ],
    currentLimitations: [
      "No live slide editor exists yet",
      "Export to PowerPoint/PDF is planned only",
      "Image generation integration is conceptual",
      "This is a design exploration, not a working product",
    ],
    futureImprovements: [
      "Live slide editor",
      "PowerPoint/PDF export",
      "Collaborative editing",
      "Brand kit integration",
    ],
  },
  {
    slug: "maker-projects",
    title: "Automation & Maker Projects",
    status: "Experimental",
    screenshot: "/projects/maker-projects.jpg",
    screenshotAlt: "Raspberry Pi and ESP32 maker project with sensors showing temperature and humidity on LCD",
    overview:
      "Hardware, electronics, and maker experiments including Raspberry Pi servers, ESP32 devices, RC aircraft, FPV drones, and IoT automation.",
    problem:
      "Software-only projects don't capture the full picture of building.",
    whyBuilt:
      "I wanted to explore embedded systems, sensors, automation, and creative engineering beyond web applications.",
    role: "Maker and experimenter — hardware prototyping, sensor integration, and automation concept development.",
    currentState:
      "Various proof-of-concept experiments at different stages. Not all projects reach completion — focus is on learning and hands-on exploration.",
    builtExplored: [
      "ESP32 sensor station proof-of-concepts",
      "Raspberry Pi server and AI assistant planning",
      "RC aircraft assembly and testing",
      "Automation workflow experiments",
    ],
    coreFeatures: [
      "Raspberry Pi server and AI assistant concepts",
      "ESP32-based sensor devices",
      "RC airplane and FPV drone experiments",
      "AI home assistant ideas",
      "IoT automation prototypes",
    ],
    techStack: ["Raspberry Pi", "ESP32", "Sensors", "RC Electronics", "Python", "IoT Protocols"],
    productThinking: [
      "Start with proof-of-concept prototypes",
      "Focus on practical automation use cases",
      "Combine software AI concepts with hardware",
      "Document experiments for learning",
    ],
    designDecisions: [
      "Start with proof-of-concept prototypes",
      "Focus on practical automation use cases",
      "Combine software AI concepts with hardware",
      "Document experiments for learning",
    ],
    challenges: [
      "Hardware debugging and component compatibility",
      "Limited access to specialized equipment",
      "Integrating software AI with embedded systems",
    ],
    learned: [
      "Embedded systems basics and sensor integration",
      "Hands-on electronics prototyping",
      "The gap between software concepts and physical builds",
      "Creative engineering problem-solving",
    ],
    currentLimitations: [
      "FPV drone build is not yet complete",
      "AI home assistant on Pi is in planning stage",
      "Some experiments lack full documentation",
      "These are learning experiments, not production systems",
    ],
    futureImprovements: [
      "Complete FPV drone build",
      "Functional AI home assistant on Raspberry Pi",
      "Sensor station with data dashboard",
      "Documented open-source maker guides",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}