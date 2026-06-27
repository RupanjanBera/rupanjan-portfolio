"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, FileText } from "lucide-react";
import { siteConfig, contact } from "@/data/site";

interface CTAProps {
  onOpenAI: () => void;
}

export function CTA({ onOpenAI }: CTAProps) {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-violet-200/30 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 p-10 text-center shadow-glow-violet-lg md:p-16"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
              Let&apos;s work together
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Interested in collaborating?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-violet-100/90">
              Open to internships, scholarships, university applications, and startup
              collaborations. {siteConfig.name.split(" ")[0]} ships prototypes, writes case studies,
              and thinks in product systems — not just code.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-violet-700 shadow-elevated transition-all hover:brightness-105"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <button
                onClick={onOpenAI}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Sparkles className="h-4 w-4" />
                Ask Portfolio AI
              </button>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>

            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-violet-200 transition-colors hover:text-white"
            >
              Or explore all projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}