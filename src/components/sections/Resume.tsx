"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, FileText, Briefcase, Wrench } from "lucide-react";
import { resumeContent, contact, siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Resume"
          title="Professional summary"
          description="A quick snapshot of focus areas, projects, and skills — download coming soon."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[1.75rem] border border-slate-100 bg-surface shadow-float"
        >
          <div className="relative border-b border-slate-100 bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/40 px-8 py-8">
            <div className="flex items-start gap-5">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 shadow-soft">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.profileImageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-navy">
                  {resumeContent.name}
                </h3>
                <p className="mt-1 font-medium text-violet-600">{resumeContent.role}</p>
                <p className="mt-2 text-sm text-muted">{resumeContent.focus}</p>
              </div>
              <FileText className="hidden h-8 w-8 text-violet-200 sm:block" />
            </div>
          </div>

          <div className="space-y-8 p-8">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-violet-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Projects
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeContent.projects.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-slate-100 bg-surface-muted px-3.5 py-1.5 text-sm text-navy/80"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Wrench className="h-4 w-4 text-violet-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Skills
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeContent.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-violet-100 bg-violet-50 px-3.5 py-1.5 text-sm font-medium text-violet-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-6">
              <a
                href={contact.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-glow-violet transition-all hover:brightness-110"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-navy transition-all hover:border-violet-200 hover:bg-violet-50"
              >
                Request via Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}