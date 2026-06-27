"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowUpRight, ExternalLink } from "lucide-react";
import { isLiveLink } from "@/lib/utils";
import { galleryItems } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MockupFrame } from "@/components/ui/MockupFrame";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { TiltCard } from "@/components/motion/TiltCard";

export function Gallery() {
  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <ParallaxLayer
        speed={45}
        className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-indigo-200/15 blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          label="Inside the Builds"
          title="Screenshots & build gallery"
          description="Screenshots and previews from active builds — click any preview to read the full case study."
        />

        <div className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="h-full p-1"
            >
              <TiltCard intensity={5} fullHeight>
                <article className="card-glass-brutal group flex h-full flex-col overflow-hidden">
                  <Link
                    href={item.caseStudyUrl}
                    className="block shrink-0 border-b border-slate-100/80 transition-opacity hover:opacity-95"
                  >
                    <MockupFrame
                      title={item.title}
                      subtitle={item.description}
                      type={item.type}
                      imageSrc={item.image}
                      imageAlt={item.imageAlt}
                      embedded
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-navy">{item.project}</p>
                        <p className="text-xs text-muted">{item.description}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-surface-muted px-2.5 py-1 text-[10px] font-medium text-muted">
                        {item.status}
                      </span>
                    </div>

                    <p className="mb-3 text-xs leading-relaxed text-navy/70">{item.highlight}</p>

                    <ul className="mb-4 space-y-1.5">
                      {item.whatItShows.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs text-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
                      <Link
                        href={item.caseStudyUrl}
                        className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-navy-soft"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        View Case Study
                      </Link>
                      {isLiveLink(item.liveSite) && (
                        <a
                          href={item.liveSite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-medium text-navy transition-colors hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Visit Site
                        </a>
                      )}
                      <Link
                        href="#projects"
                        className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-accent"
                      >
                        All projects
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}