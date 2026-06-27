// Hero presentation slider — edit slides here

import {
  Brain,
  BarChart3,
  Bot,
  Shield,
  Layers,
  Code2,
  Gamepad2,
  Sparkles,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface HeroFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface HeroSlide {
  id: string;
  badge: string;
  headline: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  features: HeroFeature[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stat?: { value: string; label: string };
}

export const heroSlides: HeroSlide[] = [
  {
    id: "intro",
    badge: "AI Product Builder",
    headline: "Building the future with",
    highlight: "intelligent products",
    description:
      "Student developer crafting AI workspaces, SaaS platforms, and product experiments that combine business thinking with modern software.",
    image: "/hero/presentation-slider.jpg",
    imageAlt: "Cinematic AI presentation hero with intelligent systems and product direction",
    features: [
      { icon: Brain, title: "AI Workspaces", desc: "Multi-model tools for research & creation." },
      { icon: BarChart3, title: "SaaS Platforms", desc: "Structured products with real architecture." },
      { icon: Bot, title: "Automation", desc: "Workflows that save time and scale." },
      { icon: Shield, title: "Product Thinking", desc: "Honest builds with clear direction." },
    ],
    primaryCta: { label: "Explore Projects", href: "#projects" },
    secondaryCta: { label: "Ask Portfolio AI", href: "#ai" },
    stat: { value: "6+", label: "Active product experiments" },
  },
  {
    id: "hyperion-ai",
    badge: "Working Prototype",
    headline: "Hyperion AI — unified",
    highlight: "AI workspace",
    description:
      "Auto-routed chat with agents, knowledge, research, files, slide maker, and memory — one workspace for students and builders.",
    image: "/projects/hyperion-ai.jpg",
    imageAlt: "Hyperion AI workspace interface",
    features: [
      { icon: Brain, title: "Multi-Model", desc: "OpenAI, Claude, DeepSeek orchestration." },
      { icon: Layers, title: "Knowledge & Files", desc: "Documents, research, and memory." },
      { icon: Bot, title: "Agents", desc: "Auto-routed workspace tasks." },
      { icon: Sparkles, title: "Slide Maker", desc: "Built-in presentation module." },
    ],
    primaryCta: { label: "View Case Study", href: "/case-studies/hyperion-ai" },
    secondaryCta: { label: "All Projects", href: "#projects" },
    stat: { value: "Prototype", label: "Working build status" },
  },
  {
    id: "kryvax",
    badge: "In Progress",
    headline: "Kryvax — multi-agent",
    highlight: "AI platform",
    description:
      "A structured SaaS platform where AI is layered with tiers, permissions, admin tools, and distinct user workflows.",
    image: "/projects/kryvax.jpg",
    imageAlt: "Kryvax AI intelligence platform",
    features: [
      { icon: Code2, title: "SaaS Structure", desc: "Auth, tiers, and admin dashboard." },
      { icon: Bot, title: "Agent Workflows", desc: "Business, coding, research routing." },
      { icon: BarChart3, title: "Usage Tracking", desc: "Pricing and plan logic." },
      { icon: Shield, title: "Access Control", desc: "Model permissions per tier." },
    ],
    primaryCta: { label: "View Case Study", href: "/case-studies/kryvax" },
    secondaryCta: { label: "Build Proof", href: "#proof" },
    stat: { value: "Platform", label: "SaaS architecture focus" },
  },
  {
    id: "gaming",
    badge: "Brand & Web",
    headline: "Gaming Odyssey —",
    highlight: "community brand",
    description:
      "A gaming and technology brand built around community identity, visual storytelling, and digital experiences.",
    image: "/projects/gaming-odyssey.jpg",
    imageAlt: "Gaming Odyssey landing page",
    features: [
      { icon: Gamepad2, title: "Brand Identity", desc: "Visual storytelling and design." },
      { icon: Layers, title: "Community UX", desc: "Engagement-first web direction." },
      { icon: Bot, title: "AI Helper", desc: "Community chatbot concepts." },
      { icon: Sparkles, title: "Content Hub", desc: "Publishing and showcase structure." },
    ],
    primaryCta: { label: "View Case Study", href: "/case-studies/gaming-odyssey" },
    secondaryCta: { label: "Gallery", href: "#gallery" },
    stat: { value: "In Progress", label: "Brand + web build" },
  },
  {
    id: "presentation-studio",
    badge: "Product Concept",
    headline: "AI Presentation",
    highlight: "Builder",
    description:
      "Template-driven slide generation with layout intelligence, AI content workflows, and export-ready presentation structure.",
    image: "/projects/ai-presentation-studio.jpg",
    imageAlt: "AI Presentation Studio — intelligent slide generation dashboard",
    features: [
      { icon: Sparkles, title: "Smart Layouts", desc: "Content-aware slide templates." },
      { icon: Layers, title: "Template Gallery", desc: "Professional theme system." },
      { icon: Brain, title: "AI Content", desc: "Assisted copy and structure." },
      { icon: BarChart3, title: "Export Ready", desc: "Deck output workflow." },
    ],
    primaryCta: { label: "View Case Study", href: "/case-studies/ai-presentation-studio" },
    secondaryCta: { label: "All Projects", href: "#projects" },
    stat: { value: "Concept", label: "Productivity tool design" },
  },
  {
    id: "portfolio-ai",
    badge: "Interactive",
    headline: "Ask my portfolio",
    highlight: "AI assistant",
    description:
      "A grounded assistant trained on this portfolio — projects, skills, education, and build status. Works instantly, no fluff.",
    image: "/hero/presentation-slider.jpg",
    imageAlt: "AI-powered portfolio assistant presentation",
    features: [
      { icon: Sparkles, title: "Instant Context", desc: "Quick answers for reviewers." },
      { icon: Shield, title: "Data-Grounded", desc: "Portfolio knowledge only." },
      { icon: Brain, title: "Always On", desc: "Works on the live site." },
      { icon: Bot, title: "Case Studies", desc: "Links to full project write-ups." },
    ],
    primaryCta: { label: "Open Portfolio AI", href: "#ai" },
    secondaryCta: { label: "About Me", href: "#about" },
    stat: { value: "Live", label: "Portfolio AI ready" },
  },
  {
    id: "maker",
    badge: "Experimental",
    headline: "Beyond software —",
    highlight: "maker systems",
    description:
      "Hardware and embedded work with Raspberry Pi, ESP32, sensors, and IoT prototypes — engineering curiosity beyond the screen.",
    image: "/projects/maker-projects.jpg",
    imageAlt: "Raspberry Pi and ESP32 maker automation setup",
    features: [
      { icon: Cpu, title: "ESP32 Sensors", desc: "Temperature and humidity stations." },
      { icon: Layers, title: "Raspberry Pi", desc: "Server and assistant planning." },
      { icon: Bot, title: "IoT Prototypes", desc: "Live monitoring workflows." },
      { icon: Shield, title: "Hands-On", desc: "Physical systems thinking." },
    ],
    primaryCta: { label: "View Case Study", href: "/case-studies/maker-projects" },
    secondaryCta: { label: "Contact", href: "#contact" },
    stat: { value: "Maker", label: "Hardware + software" },
  },
];