"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categoryColors = [
  "from-violet-500 to-indigo-500",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Skills"
          title="Capabilities & tools"
          description="Technologies and domains I work with — organized for clarity, not clutter."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-glass-brutal p-6 md:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`h-1 w-8 rounded-full bg-gradient-to-r ${categoryColors[i % categoryColors.length]}`}
                />
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 + j * 0.02 }}
                    whileHover={{ y: -2 }}
                    className="rounded-full border border-slate-100 bg-surface-muted px-3.5 py-2 text-sm text-navy/80 transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}