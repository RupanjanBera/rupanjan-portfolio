"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="section-padding bg-surface-muted/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Projects"
          title="Product experiments & builds"
          description="Each project represents a different angle — AI workspace, SaaS platform, brand, service, productivity tool, or hardware exploration."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {(["All", ...projectCategories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                filter === cat
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-glow-violet"
                  : "border border-slate-200 bg-surface text-muted hover:border-violet-200 hover:text-navy"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}