/**
 * Generates portfolio-ai-api/lib/knowledge.json from src/data/*.ts
 * Run: node scripts/generate-api-knowledge.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function extractBetween(content, start, end) {
  const i = content.indexOf(start);
  if (i === -1) return "";
  const j = content.indexOf(end, i + start.length);
  return content.slice(i + start.length, j).trim();
}

function readDataFile(name) {
  return readFileSync(join(root, "src", "data", name), "utf8");
}

function parseProjects(ts) {
  const blocks = [...ts.matchAll(/slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?tagline:\s*"([^"]+)"[\s\S]*?shortDescription:\s*\n\s*"([^"]+)"[\s\S]*?problemSolved:\s*\n\s*"([^"]+)"[\s\S]*?statusLabel:\s*"([^"]+)"/g)];
  return blocks.map((m) => ({
    slug: m[1],
    title: m[2],
    tagline: m[3],
    shortDescription: m[4],
    problemSolved: m[5],
    statusLabel: m[6],
  }));
}

const siteTs = readDataFile("site.ts");
const projectsTs = readDataFile("projects.ts");
const knowledgeTs = readDataFile("portfolioKnowledge.ts");

const name = extractBetween(siteTs, 'name: "', '",');
const role = extractBetween(siteTs, 'role: "', '",');
const description = extractBetween(siteTs, "description:\n    \"", "\",");
const aboutIntro = extractBetween(siteTs, 'intro:\n    "', '",');
const aboutGoals = extractBetween(siteTs, 'goals:\n    "', '",');
const educationLevel = extractBetween(siteTs, 'level: "', '",');

const systemPrompt = extractBetween(knowledgeTs, "export const AI_SYSTEM_PROMPT = `", "`;");

const projects = parseProjects(projectsTs);
const projectSummaries = projects
  .map(
    (p) =>
      `**${p.title} — ${p.tagline}** (${p.statusLabel})\nDescription: ${p.shortDescription}\nProblem: ${p.problemSolved}`
  )
  .join("\n\n");

const portfolioContext = `
# About ${name}

Name: ${name}
Role: ${role}
Description: ${description}

## About
${aboutIntro}
Career Goals: ${aboutGoals}

## Education
Level: ${educationLevel}

## Projects
${projectSummaries}

## What Makes This Portfolio Unique
- Student builder who creates real product concepts and working prototypes
- Combines commerce education with AI, software, and entrepreneurship
- Honest about project status — active builds vs concepts vs experiments
`.trim();

const outDir = join(root, "portfolio-ai-api", "lib");
mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "knowledge.json"),
  JSON.stringify({ systemPrompt, portfolioContext }, null, 2),
  "utf8"
);

console.log("Generated portfolio-ai-api/lib/knowledge.json");