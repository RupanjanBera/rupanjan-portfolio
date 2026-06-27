const knowledge = require("../lib/knowledge.json");

const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";
const MODEL = "deepseek-chat";
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 15;
const requests = new Map();

function checkRateLimit(id) {
  const now = Date.now();
  const record = requests.get(id);
  if (!record || now > record.resetAt) {
    requests.set(id, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }
  if (record.count >= MAX_REQUESTS) return { allowed: false, remaining: 0 };
  record.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - record.count };
}

function cors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = async function handler(req, res) {
  cors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method === "GET") {
    return res.status(200).json({ status: "ok", service: "portfolio-ai-api" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.headers["x-real-ip"] ||
      "unknown";

    const { allowed, remaining } = checkRateLimit(ip);
    if (!allowed) {
      return res.status(429).json({
        error: "Too many requests. Please wait a minute and try again.",
      });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        error: "Portfolio AI backend is not configured. Set DEEPSEEK_API_KEY on Vercel.",
      });
    }

    const { messages } = req.body || {};
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const systemMessage = {
      role: "system",
      content: `${knowledge.systemPrompt}\n\n--- PORTFOLIO DATA ---\n${knowledge.portfolioContext}`,
    };

    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [systemMessage, ...messages],
        max_tokens: 1024,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("DeepSeek API error:", response.status, errorData);
      return res.status(502).json({
        error: "Failed to get AI response. Please try again later.",
      });
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      return res.status(502).json({ error: "No response received from AI" });
    }

    res.setHeader("X-RateLimit-Remaining", String(remaining));
    return res.status(200).json({ message: assistantMessage });
  } catch (error) {
    console.error("Portfolio AI error:", error);
    return res.status(500).json({
      error: "An unexpected error occurred. Please try again.",
    });
  }
};