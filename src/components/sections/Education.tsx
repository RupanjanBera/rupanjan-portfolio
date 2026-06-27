"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-padding bg-surface-muted/40">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Education"
          title="Academic foundation"
          description="Commerce education with a technology-building mindset — business-aware product thinking."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[1.75rem] border border-slate-100 bg-surface shadow-card"
        >
          <div className="flex items-center justify-center gap-3 border-b border-slate-100 bg-gradient-to-br from-violet-50/60 to-indigo-50/30 px-8 py-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft">
              <GraduationCap className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
              {education.level}
            </h3>
          </div>

          <div className="p-8 md:p-10">
            <div className="mb-6 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-violet-500" />
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Subjects
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {education.subjects.map((subject) => (
                <span
                  key={subject}
                  className="rounded-full border border-slate-100 bg-surface-muted px-4 py-2 text-sm text-navy/80 transition-colors hover:border-violet-200 hover:bg-violet-50"
                >
                  {subject}
                </span>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-muted md:text-base">
              {education.message}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}