// Detailed case study content — edit here

export interface CaseStudy {
  slug: string;
  title: string;
  status: string;
  liveSite?: string;
  screenshot?: string;
  screenshotAlt?: string;
  overview: string;
  problem: string;
  whyBuilt: string;
  role: string;
  roleResponsibilities?: string[];
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
      "Hyperion AI is a working AI workspace prototype built around the idea that modern creators need more than a chatbot. The platform combines multiple productivity modules — chat, agents, knowledge, research, files, slide maker, and memory — into a single structured workspace. The goal is to reduce context switching and create a more complete environment for students, builders, and creators who use AI across different tasks. The project focuses on AI product design, modular workspace UX, multi-model thinking, and productivity workflows. It shows how an AI system can be designed as a full product experience rather than a simple prompt box.",
    problem:
      "People often use separate tools for AI chat, research, document understanding, writing, and presentation creation. This creates friction, context loss, repeated work, and scattered workflows.",
    whyBuilt:
      "Hyperion AI brings these workflows into one unified workspace where users can think, research, organize knowledge, work with files, create slides, and use AI assistance without leaving the product.",
    role: "Founder & AI Systems Designer",
    roleResponsibilities: [
      "AI workspace interface with sidebar-based navigation",
      "Chat, agents, knowledge, research, files, slide maker, and memory modules",
      "Multi-model AI workflow direction using different AI providers",
      "Product architecture for a modular AI productivity platform",
      "UX designed around serious work, not casual chatbot usage",
    ],
    currentState:
      "An evolving working prototype used as a learning and iteration vehicle. Core workspace UI and multi-model integration patterns are explored; some modules remain in planning.",
    builtExplored: [
      "AI workspace interface with sidebar-based navigation",
      "Chat, agents, knowledge, research, files, slide maker, and memory modules",
      "Multi-model AI workflow direction using different AI providers",
      "Product architecture for a modular AI productivity platform",
      "UX designed around serious work, not casual chatbot usage",
    ],
    coreFeatures: [
      "Sidebar-based workspace navigation",
      "Chat, agents, knowledge & research modules",
      "Files & slide maker integration",
      "Memory-aware AI workflows",
      "Multi-model provider direction",
      "Modular productivity platform architecture",
    ],
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Claude API", "DeepSeek API", "NVIDIA NIM", "Tailwind CSS"],
    productThinking: [
      "Hyperion AI proves structured AI product design with workspace UX, workflow logic, and product-level architecture — beyond simple integrations.",
      "Workspace-first UX instead of chat-only interface",
      "Modular productivity modules reduce context switching",
      "Multi-model thinking for different task types",
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
      "Kryvax is an AI platform designed around the infrastructure that real SaaS products need: users, plans, permissions, dashboards, admin controls, agent workflows, and scalable feature organization. Instead of treating AI as only a chat interface, Kryvax explores AI as a complete platform layer. The project includes planning and development around pricing tiers, user dashboards, admin management, AI agents, reasoning workflows, web retrieval, and platform routing. It reflects product thinking, business logic, and technical architecture together.",
    problem:
      "Many AI tools focus only on the chat experience and ignore the deeper product systems required for a real SaaS business — authentication, plans, limits, billing logic, admin controls, user workflows, and feature access.",
    whyBuilt:
      "Kryvax structures AI as a SaaS platform with clear user roles, pricing logic, AI workflows, admin features, and a scalable product foundation.",
    role: "Founder & Full-Stack Developer",
    roleResponsibilities: [
      "SaaS-style landing and pricing structure",
      "User plan and access-control logic",
      "Admin dashboard direction",
      "Multi-agent workflow planning",
      "AI routing and reasoning system concepts",
      "Platform architecture for a serious AI product",
    ],
    currentState:
      "Platform architecture and UI concepts are actively being developed. Auth, billing, and admin features are designed but not all finalized in code.",
    builtExplored: [
      "SaaS-style landing and pricing structure",
      "User plan and access-control logic",
      "Admin dashboard direction",
      "Multi-agent workflow planning",
      "AI routing and reasoning system concepts",
      "Platform architecture for a serious AI product",
    ],
    coreFeatures: [
      "SaaS landing & pricing structure",
      "User plan & access-control logic",
      "Admin dashboard direction",
      "Multi-agent workflow planning",
      "AI routing & reasoning concepts",
      "Scalable platform architecture",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "SQLite", "Authentication", "AI APIs"],
    productThinking: [
      "Kryvax proves understanding of SaaS product systems — product architecture, pricing logic, admin thinking, and AI platform planning, not just frontend design.",
      "Tiered access model for different user types",
      "Admin panel separate from user dashboard",
      "Agent-based task routing instead of one generic chat",
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
    liveSite: "https://gamingodyssey.in",
    screenshot: "/projects/gaming-odyssey.jpg",
    screenshotAlt: "Gaming Odyssey landing page with gaming gear, tournaments, and community branding",
    overview:
      "Gaming Odyssey started as a gaming-focused brand and evolved into a broader digital identity project combining gaming, community, design, content, and technology. The project explores how a gaming brand can become more than a landing page by connecting visual identity, community experience, website design, and future product direction. It reflects my interest in gaming, web design, community building, and product storytelling. The project also shows how I approach branding as part of product development.",
    problem:
      "Many gaming communities and small gaming brands lack strong identity, clean web presence, and technology-backed community experiences. They often feel scattered, generic, or disconnected from long-term product direction.",
    whyBuilt:
      "Gaming Odyssey creates a more cohesive gaming-tech identity with a modern web presence, brand direction, community experience ideas, and future expansion potential.",
    role: "Founder & Platform Developer",
    roleResponsibilities: [
      "Gaming brand identity and visual direction",
      "Website and landing page structure",
      "Community-focused user experience",
      "Gaming + technology positioning",
      "Content hub and future product ecosystem planning",
    ],
    currentState:
      "Brand direction and web concepts are established. Community platform and server features are in planning stages.",
    builtExplored: [
      "Gaming brand identity and visual direction",
      "Website and landing page structure",
      "Community-focused user experience",
      "Gaming + technology positioning",
      "Content hub and future product ecosystem planning",
    ],
    coreFeatures: [
      "Gaming brand identity & visual direction",
      "Website & landing page structure",
      "Community-focused user experience",
      "Gaming + technology positioning",
      "Content hub & ecosystem planning",
    ],
    techStack: ["Next.js", "Tailwind CSS", "AI Chatbot", "Branding Tools"],
    productThinking: [
      "Gaming Odyssey shows thinking about branding, audience, visual identity, community, and web experience together — not just coding pages in isolation.",
      "Community-first navigation and content structure",
      "Branding as part of product development",
      "Gaming culture shaped into a broader product ecosystem",
    ],
    designDecisions: [
      "Clean modern aesthetic aligned with gaming culture",
      "Community-first navigation and content structure",
      "Gaming + technology positioning",
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
      "How gaming and technology can complement each other",
      "Landing page design for niche audiences",
    ],
    currentLimitations: [
      "Community platform is not yet live",
      "Content hub remains in planning",
      "Future product ecosystem is directionally designed, not launched",
      "This is an evolving brand direction, not a launched product",
    ],
    futureImprovements: [
      "Live community platform",
      "Content publishing system",
      "Expanded digital product ecosystem",
      "Partnership and engagement exploration",
    ],
  },
  {
    slug: "memorialife",
    title: "MemoriaLife — Digital Legacy Platform",
    status: "Product Concept",
    liveSite: "https://memorialife.online",
    screenshot: "/projects/memorialife.jpg",
    screenshotAlt: "MemoriaLife landing page for high-fidelity AI personas and digital legacy preservation",
    overview:
      "MemoriaLife is an AI service/product concept that explores how AI can be used in a sensitive, trust-based customer experience. The project focuses not only on chatbot functionality, but also on the surrounding product structure: service packaging, pricing, onboarding, payment flow, confirmation emails, and customer communication. The idea shows how AI products need more than a model — they need trust, clarity, business process, and a smooth customer journey.",
    problem:
      "Many AI chatbot ideas fail because they only focus on the AI response and ignore the business side: onboarding, trust, pricing, payment, customer expectations, and communication.",
    whyBuilt:
      "MemoriaLife explores a structured AI service flow where the user experience includes landing pages, product tiers, payment direction, confirmation emails, and clear service onboarding.",
    role: "Founder & Product Designer",
    roleResponsibilities: [
      "AI service concept and positioning",
      "Landing page and customer journey direction",
      "Product tier and pricing structure",
      "Payment and checkout flow planning",
      "Buyer confirmation and email communication",
      "Trust-focused AI product design",
    ],
    currentState:
      "Product flows and service structure are designed. Payment and live chatbot deployment are planned, not finalized.",
    builtExplored: [
      "AI service concept and positioning",
      "Landing page and customer journey direction",
      "Product tier and pricing structure",
      "Payment and checkout flow planning",
      "Buyer confirmation and email communication",
      "Trust-focused AI product design",
    ],
    coreFeatures: [
      "AI service concept & positioning",
      "Landing page & customer journey",
      "Product tier & pricing structure",
      "Payment & checkout flow planning",
      "Buyer confirmation & email communication",
      "Trust-focused AI product design",
    ],
    techStack: ["AI APIs", "Payment Integration", "Email Automation", "Web Development"],
    productThinking: [
      "MemoriaLife proves thinking about the full product journey — trust, payment, onboarding, and customer experience, not just AI features.",
      "Service packaging requires trust and clear communication",
      "Payment flow is as important as AI capability",
      "Onboarding shapes first customer experience",
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
      "AI Presentation Studio explores how AI can help users create better presentations through structured workflows instead of generic slide generation. The product concept focuses on templates, layout intelligence, content organization, image generation, and guided deck creation. The goal is to produce more polished and useful presentations by combining AI generation with design systems and presentation structure.",
    problem:
      "Most AI slide tools create generic, poorly structured, or visually weak presentations. Users still need to spend time fixing layouts, rewriting content, and making slides look professional.",
    whyBuilt:
      "AI Presentation Studio uses a template-driven workflow where users can generate, structure, style, and refine presentations with AI assistance while maintaining better control over layout and design.",
    role: "Product designer and concept developer — template system, UX planning, and AI workflow design.",
    currentState:
      "Template system and workflow are conceptually designed. No live editor or export functionality yet.",
    builtExplored: [
      "Template gallery direction",
      "Slide generation workflow",
      "AI-assisted content planning",
      "Layout intelligence concepts",
      "Image generation integration ideas",
      "Productivity-focused UX planning",
    ],
    coreFeatures: [
      "Template gallery direction",
      "Slide generation workflow",
      "AI-assisted content planning",
      "Layout intelligence concepts",
      "Image generation integration ideas",
      "Productivity-focused UX planning",
    ],
    techStack: ["AI APIs", "Next.js", "Template Engine", "Image Generation APIs"],
    productThinking: [
      "AI Presentation Studio shows productivity tool design where AI, UX, templates, and structured output work together.",
      "Template-first approach ensures consistent quality",
      "Layout intelligence reduces user decision fatigue",
      "Structured workflows beat generic slide generation",
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
      "My Automation & Maker Projects include experiments with Raspberry Pi, ESP32, sensors, RC aircraft, FPV drone concepts, IoT devices, and physical automation systems. This side of my portfolio shows that I enjoy building and testing real-world systems, not only digital interfaces. These projects help me understand electronics, sensors, embedded systems, physical constraints, hardware debugging, and practical engineering thinking.",
    problem:
      "Software-only learning can miss the complexity of real-world systems, where hardware, power, sensors, wiring, signal behavior, and physical testing matter.",
    whyBuilt:
      "Through maker projects, I explore how software and hardware interact — from sensor stations and Raspberry Pi setups to RC aircraft and automation experiments.",
    role: "Maker and experimenter — hardware prototyping, sensor integration, and automation concept development.",
    currentState:
      "Various proof-of-concept experiments at different stages. Not all projects reach completion — focus is on learning and hands-on exploration.",
    builtExplored: [
      "ESP32 sensor station concepts",
      "Raspberry Pi server and automation ideas",
      "IoT-style monitoring systems",
      "RC aircraft assembly and testing",
      "FPV drone concepts",
      "Embedded systems experimentation",
    ],
    coreFeatures: [
      "ESP32 sensor station concepts",
      "Raspberry Pi server & automation ideas",
      "IoT-style monitoring systems",
      "RC aircraft assembly & testing",
      "FPV drone concepts",
      "Embedded systems experimentation",
    ],
    techStack: ["Raspberry Pi", "ESP32", "Sensors", "RC Electronics", "Python", "IoT Protocols"],
    productThinking: [
      "Maker projects show engineering curiosity, hands-on problem-solving, and the ability to work beyond purely software-based projects.",
      "Start with proof-of-concept prototypes",
      "Explore how software and hardware interact",
      "Physical constraints teach practical engineering thinking",
    ],
    designDecisions: [
      "Start with proof-of-concept prototypes",
      "Focus on practical automation use cases",
      "Combine software concepts with embedded hardware",
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