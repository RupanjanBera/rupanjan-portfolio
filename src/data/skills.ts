// Edit skills here — displayed in Skills section and used by Portfolio AI

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & LLMs",
    skills: [
      "OpenAI API",
      "Claude API",
      "DeepSeek API",
      "NVIDIA NIM",
      "Prompt engineering",
      "AI agents",
      "RAG concepts",
      "Web search integration",
      "Model routing",
      "AI productivity tools",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive design",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "API routes",
      "Authentication concepts",
      "SQLite",
      "Supabase concepts",
      "Database design basics",
      "Server-side API handling",
    ],
  },
  {
    title: "Product & Business",
    skills: [
      "Product thinking",
      "SaaS planning",
      "Pricing strategy",
      "User flows",
      "Branding",
      "Startup thinking",
      "Landing pages",
      "Customer journey planning",
    ],
  },
  {
    title: "Tools",
    skills: [
      "GitHub",
      "VS Code",
      "Replit",
      "Claude Code",
      "Cursor",
      "Figma-style UI thinking",
      "API testing tools",
    ],
  },
  {
    title: "Hardware & Maker",
    skills: [
      "Raspberry Pi",
      "ESP32",
      "Sensors",
      "RC electronics",
      "FPV drone concepts",
      "Embedded systems basics",
      "Automation experiments",
    ],
  },
];