import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import {
  aboutContent,
  contact,
  education,
  resumeContent,
  siteConfig,
} from "@/data/site";
import { buildProofCards } from "@/data/buildProof";
import { AI_PREVIEW_EXCHANGE } from "@/data/portfolioKnowledge";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function scoreQuery(query: string, keywords: string[], weight = 1): number {
  const normalized = normalize(query);
  return keywords.reduce((score, keyword) => {
    if (normalized.includes(keyword)) return score + weight;
    return score;
  }, 0);
}

function formatProjectList(items: typeof projects): string {
  return items
    .map(
      (p) =>
        `• **${p.title}** (${p.statusLabel}) — ${p.tagline}. ${p.shortDescription}`
    )
    .join("\n");
}

function getActiveVsConceptual(): string {
  const active = projects.filter(
    (p) =>
      p.status === "Active Build" ||
      p.status === "Working Prototype" ||
      p.status === "In Progress"
  );
  const conceptual = projects.filter(
    (p) =>
      p.status === "Product Concept" ||
      p.status === "Experimental"
  );

  return `Here's an honest breakdown of what's active vs still conceptual:

**Active / In Progress (${active.length})**
${formatProjectList(active)}

**Conceptual / Experimental (${conceptual.length})**
${formatProjectList(conceptual)}

Rupanjan is transparent about build status — working prototypes like Hyperion AI are further along than early concepts like AI Presentation Studio.`;
}

function getStrongestProjects(): string {
  const highlights = ["hyperion-ai", "kryvax", "memorialife", "gaming-odyssey"];
  const top = projects.filter((p) => highlights.includes(p.slug));

  return `Rupanjan's strongest projects right now:

${top
  .map(
    (p) =>
      `**${p.title}** (${p.statusLabel})
${p.shortDescription}
Built/Explored: ${p.builtExplored.slice(0, 3).join("; ")}
What it shows: ${p.whatItShows.join(", ")}`
  )
  .join("\n\n")}

**Hyperion AI** and **Kryvax** are the deepest builds — real prototypes with SaaS-style architecture, not just landing pages.`;
}

function getHyperionAnswer(): string {
  const hyperion = projects.find((p) => p.slug === "hyperion-ai");
  if (!hyperion) return AI_PREVIEW_EXCHANGE.answer;

  return `${AI_PREVIEW_EXCHANGE.answer}

**Status:** ${hyperion.statusLabel}
**Problem it tackles:** ${hyperion.problemSolved}
**What's built:** ${hyperion.builtExplored.join("; ")}
**Tech:** ${hyperion.techStack.join(", ")}

Hyperion AI is one of Rupanjan's most developed projects — a working prototype with agents, knowledge, research, slide maker, and memory modules.`;
}

function getUniquePortfolio(): string {
  return `What makes Rupanjan's portfolio stand out:

1. **Real product thinking** — He designs auth, tiers, admin dashboards, and pricing logic (see Kryvax), not just UI mockups.
2. **Honest build status** — Every project is labeled as working prototype, in progress, concept, or experiment.
3. **Commerce + technology** — As a Class 12 Commerce student, he brings business-aware thinking to AI and SaaS builds.
4. **Breadth with depth** — AI workspaces (Hyperion AI), multi-agent platforms (Kryvax), brand/web (Gaming Odyssey), maker hardware (ESP32, Raspberry Pi), and productivity tools.
5. **This Portfolio AI** — Reviewers can ask questions instantly instead of hunting through every section.

He's a student builder who ships direction, not just ideas.`;
}

function getUniversityCase(): string {
  return `Why a university should take Rupanjan seriously:

**Academic foundation:** ${education.level} with ${education.subjects.slice(0, 4).join(", ")} — strong business and analytical grounding.

**Applied technology:** ${projects.length}+ documented product experiments spanning AI, SaaS, web development, and hardware — all with case studies.

**Self-directed learning:** He learns by building full product systems (Hyperion AI workspace, Kryvax platform) rather than tutorial clones.

**Global ambition:** ${aboutContent.goals}

**Integrity:** This portfolio explicitly separates what's built from what's planned — no inflated claims.

He's the kind of student who will contribute to hackathons, startup clubs, and interdisciplinary projects from day one.`;
}

function getBusinessTech(): string {
  return `Rupanjan combines business and technology in a practical way:

**From commerce education:** Accountancy, Business Studies, Economics, and Entrepreneurship give him a lens for pricing, market positioning, and operational thinking.

**In his builds:** Kryvax includes tier logic and usage tracking. MemoriaLife explores a real market problem. Gaming Odyssey is brand + community product design.

**Product mindset:** He thinks about user flows, admin tools, monetization paths, and honest MVP scoping — not just features.

**Result:** A student who can speak to both technical collaborators and business stakeholders — rare at this stage.`;
}

function getCareerGoals(): string {
  return `**Career direction:** ${aboutContent.goals}

**Current focus:** ${siteConfig.focus}

**Resume summary:** ${resumeContent.role} — ${resumeContent.focus}

**Projects driving this path:** ${resumeContent.projects.join(", ")}

He's building toward product management, AI product roles, and startup opportunities — using each project as a learning vehicle for real product work.`;
}

function getSkillsAnswer(): string {
  const skills = skillCategories
    .map((cat) => `**${cat.title}:** ${cat.skills.join(", ")}`)
    .join("\n");

  return `Rupanjan's core skills:\n\n${skills}\n\nHe applies these across ${projects.length} product experiments — from Next.js and TypeScript to AI APIs and embedded systems.`;
}

function getContactAnswer(): string {
  return `You can reach Rupanjan at **${contact.email}** or **${contact.phone}** (WhatsApp).

He's open to internships, scholarships, university applications, collaborations, and project opportunities.

Instagram: ${contact.instagram}`;
}

function getProjectAnswer(slug: string): string | null {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;

  return `**${project.title}** — ${project.tagline}
**Status:** ${project.statusLabel}
**Category:** ${project.category}

${project.shortDescription}

**Problem:** ${project.problemSolved}
**Built/Explored:** ${project.builtExplored.join("; ")}
**Planned Next:** ${project.plannedNext.join("; ")}
**Tech Stack:** ${project.techStack.join(", ")}
**What it shows:** ${project.whatItShows.join(", ")}`;
}

function getOverview(): string {
  return `**${siteConfig.name}** — ${siteConfig.role}

${siteConfig.description}

**Currently:** ${siteConfig.statusBadge}

**Education:** ${education.level}
**Focus areas:** ${siteConfig.focus}

**Top projects:** ${projects.slice(0, 4).map((p) => p.title).join(", ")}

Ask me about any specific project, skills, education, or career direction!`;
}

const INTENT_HANDLERS: Array<{
  keywords: string[];
  exact?: string[];
  respond: (query: string) => string;
}> = [
  {
    keywords: ["hyperion", "mythos"],
    respond: () => getHyperionAnswer(),
  },
  {
    keywords: ["kryvax"],
    respond: () => getProjectAnswer("kryvax") || "",
  },
  {
    keywords: ["gaming", "odyssey"],
    respond: () => getProjectAnswer("gaming-odyssey") || "",
  },
  {
    keywords: ["memoria", "memorialife"],
    respond: () => getProjectAnswer("memorialife") || "",
  },
  {
    keywords: ["presentation", "slide", "deck"],
    respond: () => getProjectAnswer("ai-presentation-studio") || "",
  },
  {
    keywords: ["maker", "hardware", "esp32", "raspberry"],
    respond: () => getProjectAnswer("maker-projects") || "",
  },
  {
    keywords: ["active", "conceptual", "concept", "status", "stage"],
    respond: () => getActiveVsConceptual(),
  },
  {
    keywords: ["strongest", "best", "top", "highlight"],
    respond: () => getStrongestProjects(),
  },
  {
    keywords: ["unique", "stand out", "different", "special"],
    respond: () => getUniquePortfolio(),
  },
  {
    keywords: ["university", "scholarship", "admission", "college", "consider"],
    respond: () => getUniversityCase(),
  },
  {
    keywords: ["business", "commerce", "combine", "technology"],
    respond: () => getBusinessTech(),
  },
  {
    keywords: ["career", "goal", "future", "direction", "aspiration"],
    respond: () => getCareerGoals(),
  },
  {
    keywords: ["skill", "tech stack", "technology", "stack"],
    respond: () => getSkillsAnswer(),
  },
  {
    keywords: ["contact", "email", "reach", "hire", "collaborate"],
    respond: () => getContactAnswer(),
  },
  {
    keywords: ["education", "study", "subject", "class", "school"],
    respond: () =>
      `**Education:** ${education.level}\n**Subjects:** ${education.subjects.join(", ")}\n\n${education.message}`,
  },
  {
    keywords: ["about", "who", "introduce", "background"],
    respond: () =>
      `${aboutContent.intro}\n\n${aboutContent.details}\n\n${aboutContent.goals}`,
  },
  {
    keywords: ["proof", "build proof", "evidence"],
    respond: () =>
      `Build Proof highlights:\n\n${buildProofCards
        .map((c) => `• **${c.title}** (${c.status}): ${c.highlight}`)
        .join("\n")}`,
  },
];

export function getLocalPortfolioAIResponse(messages: ChatMessage[]): string {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser) {
    return getOverview();
  }

  const query = lastUser.content;

  let bestScore = 0;
  let bestResponse = "";

  for (const handler of INTENT_HANDLERS) {
    const score = scoreQuery(query, handler.keywords, 2);
    if (score > bestScore) {
      bestScore = score;
      bestResponse = handler.respond(query);
    }
  }

  if (bestScore >= 2) {
    return bestResponse;
  }

  // Fuzzy project name match
  for (const project of projects) {
    const nameScore = scoreQuery(query, [
      normalize(project.title),
      project.slug.replace(/-/g, " "),
      ...project.title.toLowerCase().split(" "),
    ]);
    if (nameScore >= 2) {
      return getProjectAnswer(project.slug) || getOverview();
    }
  }

  // Greeting / thanks
  if (scoreQuery(query, ["hello", "hi", "hey", "thanks", "thank you"]) >= 1) {
    return `Hi! I'm Rupanjan's portfolio assistant. I can tell you about his projects (Hyperion AI, Kryvax, Gaming Odyssey, and more), skills, education, career goals, and what's actively built vs still conceptual. What would you like to know?`;
  }

  // Summary fallback
  if (
    scoreQuery(query, ["summary", "summarize", "overview", "tell me", "everything"]) >= 1
  ) {
    return `${getOverview()}\n\n${getStrongestProjects()}`;
  }

  return `${getOverview()}

I didn't find an exact match for that question, but the topics above should help. Try asking about Hyperion AI, strongest projects, career goals, or what's active vs conceptual.`;
}