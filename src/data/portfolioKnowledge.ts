// Portfolio knowledge base for AI assistant

import { projects } from "./projects";
import { skillCategories } from "./skills";
import { aboutContent, education, siteConfig, contact, resumeContent } from "./site";
import { buildProofCards } from "./buildProof";

export function buildPortfolioContext(): string {
  const projectSummaries = projects
    .map(
      (p) =>
        `**${p.title} — ${p.tagline}** (${p.statusLabel})
Category: ${p.category}
Description: ${p.shortDescription}
Problem: ${p.problemSolved}
Built/Explored: ${p.builtExplored.join("; ")}
Planned Next: ${p.plannedNext.join("; ")}
Key Features: ${p.keyFeatures.join(", ")}
Tech Stack: ${p.techStack.join(", ")}
What it shows: ${p.whatItShows.join(", ")}`
    )
    .join("\n\n");

  const skillSummaries = skillCategories
    .map((cat) => `${cat.title}: ${cat.skills.join(", ")}`)
    .join("\n");

  const proofSummaries = buildProofCards
    .map((c) => `- ${c.title} (${c.status}): ${c.description}`)
    .join("\n");

  return `
# About Rupanjan Bera

Name: ${siteConfig.name}
Role: ${siteConfig.role}
Title: ${siteConfig.title}
Description: ${siteConfig.description}

## About
${aboutContent.intro}
${aboutContent.details}
Career Goals: ${aboutContent.goals}

## Education
Level: ${education.level}
Subjects: ${education.subjects.join(", ")}
Message: ${education.message}

## Skills
${skillSummaries}

## Projects
${projectSummaries}

## Build Proof
${proofSummaries}

## Resume Summary
Role: ${resumeContent.role}
Focus: ${resumeContent.focus}
Projects: ${resumeContent.projects.join(", ")}
Skills: ${resumeContent.skills.join(", ")}

## Contact
Email: ${contact.email}

## What Makes This Portfolio Unique
- Student builder who creates real product concepts and working prototypes
- Combines commerce education with AI, software, and entrepreneurship
- Builds AI platforms, SaaS concepts, web apps, and maker/hardware experiments
- Thinks about pricing, user flows, admin tools, and platform architecture
- Honest about project status — active builds vs concepts vs experiments
- Learns fast by building prototypes and evolving systems

## Career Goals
Grow into product management, AI product building, startups, and global technology opportunities.
`.trim();
}

export const AI_SYSTEM_PROMPT = `You are Rupanjan Bera's portfolio AI assistant. Answer questions using only the provided portfolio information. Be professional, concise, and helpful. Do not exaggerate. Do not invent achievements. Present Rupanjan as a serious student builder interested in AI, software, business, startups, and product creation.

Rules:
- Only use information from the portfolio context provided
- If information is not available, say so clearly
- Do not claim achievements not listed
- Keep responses short and focused (2-4 paragraphs max unless asked for detail)
- Refer to projects honestly: active builds, working prototypes, concepts, or experiments
- Distinguish between what is built/explored vs what is planned
- Be useful for scholarship committees, recruiters, and collaborators`;

export const AI_SUGGESTED_QUESTIONS = [
  "What makes Rupanjan's portfolio unique?",
  "Summarize his strongest projects",
  "Why should a university consider him?",
  "How does he combine business and technology?",
  "What is Mythos?",
  "What is currently active vs conceptual?",
];

export const AI_QUESTION_GROUPS = [
  {
    label: "Projects",
    icon: "layers" as const,
    questions: ["What is Mythos?", "What is currently active vs conceptual?", "Summarize his strongest projects"],
  },
  {
    label: "Profile",
    icon: "user" as const,
    questions: ["What makes Rupanjan's portfolio unique?", "Why should a university consider him?"],
  },
  {
    label: "Direction",
    icon: "compass" as const,
    questions: ["How does he combine business and technology?", "What are his career goals?"],
  },
];

export const AI_PREVIEW_EXCHANGE = {
  question: "What is Mythos and what stage is it at?",
  answer:
    "Mythos is Rupanjan's personal AI workspace — a working prototype for research, writing, and multi-model workflows in one place. It's beyond a chatbot: file understanding, research flows, and presentation direction are all part of the vision.",
};