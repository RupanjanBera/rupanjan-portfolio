"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  Shield,
  Zap,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import {
  AI_SUGGESTED_QUESTIONS,
  AI_PREVIEW_EXCHANGE,
} from "@/data/portfolioKnowledge";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Scene3D } from "@/components/motion/Scene3D";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";


interface AISectionProps {
  onOpenAI: (question?: string) => void;
}

const highlights = [
  {
    icon: Bot,
    title: "Portfolio-trained",
    desc: "Answers only from structured project, skill, and education data.",
  },
  {
    icon: Shield,
    title: "Honest by design",
    desc: "Clearly separates working prototypes from concepts and experiments.",
  },
  {
    icon: Zap,
    title: "Instant context",
    desc: "Built for recruiters, universities, and collaborators reviewing your work.",
  },
];

const trustPoints = [
  "6+ documented projects",
  "No invented achievements",
  "Case study deep-dives",
];

export function AISection({ onOpenAI }: AISectionProps) {
  return (
    <section id="ai" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl" />
      <Scene3D variant="section" />
      <ParallaxLayer
        speed={55}
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-300/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          label="Portfolio AI"
          title="Ask anything about my work"
          description="A grounded assistant trained on this portfolio — projects, skills, education, and build status. No fluff, no made-up achievements."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="card-glass-brutal overflow-hidden rounded-[2rem]"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left — value prop */}
            <div className="border-b border-slate-100 bg-gradient-subtle p-8 md:p-10 lg:border-b-0 lg:border-r">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Ready to answer
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
                Your shortcut to understanding{" "}
                <span className="text-gradient">what I build</span>
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
                Skip scrolling through every section. Ask about Mythos, Kryvax, skills,
                education, or what&apos;s active vs still conceptual.
              </p>

              <div className="mt-8 space-y-5">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-soft">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {trustPoints.map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-white px-3 py-1.5 text-xs text-navy/70"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    {point}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenAI()}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white shadow-elevated transition-all hover:bg-navy-soft hover:shadow-float"
              >
                <Sparkles className="h-4 w-4" />
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Right — chat preview */}
            <div className="flex flex-col bg-white p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between">
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
                    <p className="text-sm font-semibold text-navy">Portfolio AI</p>
                    <p className="text-xs text-muted">Grounded on Rupanjan&apos;s work</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-700">
                  Online
                </span>
              </div>

              {/* Mock chat window */}
              <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-surface-muted/50">
                <div className="flex items-center gap-2 border-b border-slate-100 bg-white px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                  </div>
                  <p className="mx-auto text-[10px] font-medium text-muted">portfolio-ai.chat</p>
                </div>

                <div className="space-y-4 p-4 md:p-5">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[88%] rounded-2xl rounded-br-md bg-navy px-4 py-3 text-sm leading-relaxed text-white shadow-soft">
                      {AI_PREVIEW_EXCHANGE.question}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-slate-100 bg-white px-4 py-3 text-sm leading-relaxed text-navy/80 shadow-soft">
                      {AI_PREVIEW_EXCHANGE.answer}
                    </div>
                  </motion.div>
                </div>

                <div className="border-t border-slate-100 bg-white p-4">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Try asking
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {AI_SUGGESTED_QUESTIONS.slice(0, 4).map((q) => (
                      <button
                        key={q}
                        onClick={() => onOpenAI(q)}
                        className="rounded-full border border-slate-200 bg-surface px-3 py-1.5 text-left text-xs text-navy/80 transition-all hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clickable input */}
              <button
                onClick={() => onOpenAI()}
                className="group mt-4 flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-left shadow-soft transition-all hover:border-accent/30 hover:shadow-elevated"
              >
                <span className="flex-1 text-sm text-muted">
                  Ask about projects, skills, goals...
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-navy-soft">
                  <Send className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}