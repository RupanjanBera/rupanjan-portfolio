"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ImageIcon, FileText, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusStyles: Record<string, string> = {
  "Active Build": "bg-blue-50 text-blue-700",
  "Working Prototype": "bg-emerald-50 text-emerald-700",
  "In Progress": "bg-amber-50 text-amber-700",
  "Product Concept": "bg-violet-50 text-violet-700",
  Experimental: "bg-slate-100 text-slate-600",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isWide = project.layout === "wide";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group card-glass-brutal overflow-hidden",
        isWide && "md:col-span-2"
      )}
    >
      <div className={cn("grid", isWide ? "md:grid-cols-2" : "")}>
        {/* Visual */}
        <div
          className={cn(
            "relative overflow-hidden",
            project.image
              ? isWide
                ? "min-h-[280px]"
                : "aspect-[16/9] md:aspect-auto md:min-h-[220px]"
              : cn("bg-gradient-to-br p-8", project.accentColor, isWide ? "min-h-[280px]" : "aspect-[16/9] md:aspect-auto md:min-h-[220px]")
          )}
        >
          {project.image ? (
            <>
              <PortfolioImage
                src={project.image}
                alt={project.imageAlt || project.title}
                objectPosition={project.imagePosition || "center"}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-medium shadow-sm",
                      statusStyles[project.status] || "bg-white/90 text-navy"
                    )}
                  >
                    {project.statusLabel}
                  </span>
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-navy shadow-sm">
                    {project.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/90">{project.tagline}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-medium",
                      statusStyles[project.status] || "bg-white/80 text-navy"
                    )}
                  >
                    {project.statusLabel}
                  </span>
                  <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">{project.tagline}</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 md:p-8">
          <p className="mb-4 text-sm leading-relaxed text-muted">
            {project.shortDescription}
          </p>

          <div className="mb-4 rounded-xl bg-surface-muted p-4">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
              Problem
            </p>
            <p className="text-xs leading-relaxed text-navy/70">
              {project.problemSolved}
            </p>
          </div>

          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
                Built / Explored
              </p>
              <ul className="space-y-1">
                {project.builtExplored.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
                What it shows
              </p>
              <ul className="space-y-1">
                {project.whatItShows.slice(0, 3).map((item) => (
                  <li key={item} className="text-xs text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-100 bg-surface px-2 py-1 text-[11px] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-5">
            <a
              href={project.links.caseStudy}
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-navy-soft"
            >
              <FileText className="h-3.5 w-3.5" />
              Case Study
            </a>
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-navy transition-colors hover:bg-surface-muted"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Preview
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-muted hover:text-navy"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {project.links.screenshots && (
              <a
                href={project.links.screenshots}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-muted hover:text-navy"
              >
                <ImageIcon className="h-3.5 w-3.5" />
              </a>
            )}
            <a
              href={project.links.caseStudy}
              className="ml-auto inline-flex items-center gap-1 text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100"
            >
              Details <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}