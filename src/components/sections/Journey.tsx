"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Journey"
          title="Building momentum"
          description="From curiosity to product thinking — a progression of learning through creation."
          align="center"
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-violet-400/60 via-slate-200 to-transparent md:left-1/2" />

          {timeline.map((entry, i) => (
            <motion.div
              key={`${entry.year}-${entry.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative mb-10 flex gap-6 md:mb-12"
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-violet-100 bg-white shadow-soft md:absolute md:left-1/2 md:-translate-x-1/2">
                <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500" />
              </div>

              <div className="flex-1 rounded-2xl border border-slate-100 bg-surface p-5 shadow-soft transition-all hover:border-violet-100 hover:shadow-card md:ml-0 md:w-[calc(50%-2rem)]">
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                  {entry.year}
                </span>
                <h3 className="mt-1 font-display font-bold text-navy">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}