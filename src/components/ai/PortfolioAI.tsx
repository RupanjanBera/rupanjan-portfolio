"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  AlertCircle,
  Loader2,
  Layers,
  Compass,
  RotateCcw,
} from "lucide-react";
import { AI_QUESTION_GROUPS } from "@/data/portfolioKnowledge";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface PortfolioAIProps {
  open: boolean;
  onClose: () => void;
  initialQuestion?: string;
}

const groupIcons = {
  layers: Layers,
  user: User,
  compass: Compass,
};

function formatMessage(content: string) {
  return content.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      {i < content.split("\n").length - 1 && <br />}
    </span>
  ));
}

export function PortfolioAI({ open, onClose, initialQuestion }: PortfolioAIProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pendingQuestionRef = useRef<string | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 300);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open && initialQuestion) {
      pendingQuestionRef.current = initialQuestion;
    } else if (!open) {
      pendingQuestionRef.current = null;
    }
  }, [open, initialQuestion]);

  useEffect(() => {
    if (open && pendingQuestionRef.current && !loading) {
      const question = pendingQuestionRef.current;
      pendingQuestionRef.current = null;
      sendMessage(question);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, initialQuestion]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/portfolio-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to get response");

      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Portfolio AI is temporarily unavailable."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setInput("");
    setError(null);
    inputRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-navy/25 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-x-4 bottom-4 top-auto z-[91] mx-auto flex max-h-[min(720px,calc(100vh-2rem))] w-full max-w-lg flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-float md:inset-x-auto md:bottom-6 md:right-6 md:top-6 md:max-h-none"
          >
            {/* Header */}
            <div className="relative overflow-hidden border-b border-slate-100 px-5 py-4">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-soft/80 via-white to-white" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-slate-200 shadow-soft">
                    <Image
                      src={siteConfig.profileImage}
                      alt={siteConfig.profileImageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="44px"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-accent">
                      <Sparkles className="h-2 w-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Portfolio AI</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                      <p className="text-xs text-muted">Portfolio data only · DeepSeek</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {messages.length > 0 && (
                    <button
                      onClick={resetChat}
                      className="rounded-full p-2 text-muted transition-colors hover:bg-surface-muted hover:text-navy"
                      title="New conversation"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 text-muted transition-colors hover:bg-surface-muted hover:text-navy"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-5">
              {messages.length === 0 ? (
                <div className="space-y-6">
                  <div className="rounded-2xl border border-slate-100 bg-surface-muted/60 p-5 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-navy">
                      Ask me anything about Rupanjan&apos;s work
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      Projects, skills, education, build status, and career direction —
                      answered from portfolio data only.
                    </p>
                  </div>

                  {AI_QUESTION_GROUPS.map((group) => {
                    const Icon = groupIcons[group.icon];
                    return (
                      <div key={group.label}>
                        <div className="mb-2 flex items-center gap-2">
                          <Icon className="h-3.5 w-3.5 text-accent" />
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                            {group.label}
                          </p>
                        </div>
                        <div className="space-y-2">
                          {group.questions.map((q) => (
                            <button
                              key={q}
                              onClick={() => sendMessage(q)}
                              disabled={loading}
                              className="w-full rounded-xl border border-slate-100 bg-white px-4 py-3 text-left text-sm text-navy/80 shadow-soft transition-all hover:border-accent/25 hover:bg-accent-soft/40 hover:text-accent disabled:opacity-50"
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-5">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn("flex gap-3", msg.role === "user" && "flex-row-reverse")}
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
                          msg.role === "user"
                            ? "bg-navy text-white"
                            : "border border-slate-100 bg-accent-soft text-accent"
                        )}
                      >
                        {msg.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                          msg.role === "user"
                            ? "rounded-br-md bg-navy text-white shadow-soft"
                            : "rounded-bl-md border border-slate-100 bg-white text-navy/85 shadow-soft"
                        )}
                      >
                        {formatMessage(msg.content)}
                      </div>
                    </motion.div>
                  ))}

                  {loading && (
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-accent-soft text-accent">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 shadow-soft">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 animate-bounce rounded-full bg-accent/60 [animation-delay:-0.2s]" />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-accent/60 [animation-delay:-0.1s]" />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-accent/60" />
                        </div>
                        <span className="text-xs text-muted">Thinking...</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}

              {error && (
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  {error}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-slate-100 bg-surface-muted/30 p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-soft focus-within:border-accent/40 focus-within:shadow-glow"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Mythos, skills, goals..."
                  disabled={loading}
                  className="flex-1 bg-transparent px-3 py-2.5 text-sm text-navy outline-none placeholder:text-muted disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white transition-colors hover:bg-navy-soft disabled:opacity-40"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </form>
              <p className="mt-2 text-center text-[10px] text-muted">
                Answers are grounded in portfolio data — no invented achievements
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}