import { getLocalPortfolioAIResponse, type ChatMessage } from "@/lib/localPortfolioAI";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const REMOTE_API_URL = process.env.NEXT_PUBLIC_PORTFOLIO_AI_API_URL;

const DEFAULT_REMOTE_API =
  "https://portfolio-ai-api-omega.vercel.app/api/portfolio-ai";

function isLocalDev(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

function getApiUrl(): string {
  if (REMOTE_API_URL) return REMOTE_API_URL;
  if (isLocalDev()) return `${BASE_PATH}/api/portfolio-ai`;
  return DEFAULT_REMOTE_API;
}

export async function askPortfolioAI(messages: ChatMessage[]): Promise<{
  message: string;
  source: "api" | "local";
}> {
  try {
    const res = await fetch(getApiUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "API unavailable");

    return { message: data.message, source: "api" };
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 350 + Math.random() * 300));
    return {
      message: getLocalPortfolioAIResponse(messages),
      source: "local",
    };
  }
}