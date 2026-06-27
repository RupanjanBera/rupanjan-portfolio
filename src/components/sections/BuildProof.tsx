"use client";

import Link from "next/link";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { Layers, Code2, Palette, Cpu, Presentation, FileText, ArrowUpRight } from "lucide-react";
import { buildProofCards } from "@/data/buildProof";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { TiltCard } from "@/components/motion/TiltCard";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const typeIcons = {
  workspace: Layers,
  platform: Code2,
  brand: Palette,
  maker: Cpu,
  productivity: Presentation,
};

const statusStyles: Record<string, string> = {
  "Active Build": "bg-blue-50 text-blue-700 border-blue-100",
  "Working Prototype": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "In Progress": "bg-amber-50 text-amber-700 border-amber-100",
  "Product Concept": "bg-violet-50 text-violet-700 border-violet-100",
  Experimental: "bg-slate-100 text-slate-600 border-slate-200",
};

export function BuildProof() {
  return (
    <section id="proof" className="section-padding relative overflow-hidden bg-gradient-section">
      <ParallaxLayer
        speed={50}
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-300/10 blur-3xl"
      />
      <ParallaxLayer
        speed={35}
        direction="down"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-300/8 blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          label="Build Proof"
          title="Real work, real direction"
          description="Product experiments with real screenshots, working prototypes, and honest build status — designed to impress reviewers who need proof, not promises."
        />

        <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {buildProofCards.map((card) => {
            const Icon = typeIcons[card.type];
            return (
              <RevealItem key={card.id}>
              <TiltCard intensity={8}>
              <article className="card-glass-brutal group flex flex-col overflow-hidden">
                {card.image && (
                  <Link
                    href={card.caseStudyUrl}
                    className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-100"
                  >
                    <PortfolioImage
                      src={card.image}
                      alt={card.imageAlt || card.title}
                      objectPosition={card.imagePosition || "center"}
                      className="transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider",
                        statusStyles[card.status]
                      )}
                    >
                      {card.status}
                    </span>
                  </div>

                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">
                    {card.category}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-navy transition-colors group-hover:text-accent">
                    <Link href={card.caseStudyUrl}>{card.title}</Link>
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted">{card.description}</p>

                  <div className="mb-4 rounded-xl bg-surface-muted p-3">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                      What it shows
                    </p>
                    <p className="mb-2 text-xs leading-relaxed text-navy/70">{card.highlight}</p>
                    <ul className="space-y-1">
                      {card.whatItShows.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs text-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {card.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-surface-muted px-2 py-1 text-[11px] text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
                    <Link
                      href={card.caseStudyUrl}
                      className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-navy-soft"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      View Case Study
                    </Link>
                    <Link
                      href={card.caseStudyUrl}
                      className="ml-auto inline-flex items-center gap-1 text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      Full write-up <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
              </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}