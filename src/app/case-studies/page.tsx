import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Detailed case studies of student-built projects and product experiments.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-20">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
          ← Back to Portfolio
        </Link>
        <h1 className="mb-4 text-4xl font-semibold text-navy md:text-5xl">Case Studies</h1>
        <p className="mb-12 max-w-2xl text-lg text-muted">
          In-depth looks at student-built projects — with honest current state and limitations.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group rounded-2xl border border-slate-100 bg-surface p-6 shadow-soft transition-all hover:shadow-card"
            >
              <span className="mb-3 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                {study.status}
              </span>
              <h2 className="mb-2 text-xl font-semibold text-navy group-hover:text-accent transition-colors">
                {study.title}
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-muted line-clamp-3">{study.overview}</p>
              <span className="inline-flex items-center gap-1 text-sm text-accent">
                Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}