import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Lightbulb, Wrench, Target, AlertTriangle, ExternalLink } from "lucide-react";
import { getCaseStudyBySlug, caseStudies } from "@/data/caseStudies";
import { getProjectBySlug } from "@/data/projects";
import { isSvgSrc, isLiveLink } from "@/lib/utils";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };
  return { title: study.title, description: study.overview };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const project = getProjectBySlug(slug);
  if (!study) notFound();

  const sections = [
    { icon: Target, title: "Problem", content: study.problem },
    { icon: Lightbulb, title: "Why I Built It", content: study.whyBuilt },
    { icon: Wrench, title: "My Role", content: study.role },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-20">
        <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <span className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          {study.status}
        </span>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
          {study.title}
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-muted">{study.overview}</p>

        {isLiveLink(study.liveSite) && (
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href={study.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-soft"
            >
              <ExternalLink className="h-4 w-4" />
              Visit Live Site
            </a>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-surface px-4 py-2.5 text-xs text-muted">
              {study.liveSite.replace(/^https?:\/\//, "")}
            </span>
          </div>
        )}

        <div className="mb-10 rounded-2xl border border-slate-100 bg-surface-muted p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Current State</p>
          <p className="mt-2 text-sm leading-relaxed text-navy/80">{study.currentState}</p>
        </div>

        <div className="relative mb-12 overflow-hidden rounded-2xl border border-slate-100 bg-surface shadow-card">
          {study.screenshot ? (
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={study.screenshot}
                alt={study.screenshotAlt || study.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
                unoptimized={isSvgSrc(study.screenshot)}
              />
            </div>
          ) : (
            <div className="flex h-56 items-center justify-center bg-gradient-subtle">
              <span className="text-sm text-muted">Screenshot / mockup placeholder</span>
            </div>
          )}
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {sections.map(({ icon: Icon, title, content }) => (
            <div key={title} className="rounded-2xl border border-slate-100 bg-surface p-6 shadow-soft">
              <Icon className="mb-3 h-5 w-5 text-accent" />
              <h3 className="mb-2 font-semibold text-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{content}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-navy">Built / Explored</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {study.builtExplored.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-surface p-4 text-sm text-muted">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-navy">Core Features</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {study.coreFeatures.map((f) => (
              <li key={f} className="rounded-xl border border-slate-100 bg-surface-muted p-4 text-sm text-muted">{f}</li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-navy">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((t) => (
              <span key={t} className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1.5 text-sm text-accent">{t}</span>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-navy">Product Thinking</h2>
          <ul className="space-y-2">
            {study.productThinking.map((p) => (
              <li key={p} className="border-l-2 border-accent/30 pl-4 text-sm text-muted">{p}</li>
            ))}
          </ul>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-navy">Challenges</h2>
            <ul className="space-y-2">{study.challenges.map((c) => <li key={c} className="text-sm text-muted">• {c}</li>)}</ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-navy">What I Learned</h2>
            <ul className="space-y-2">{study.learned.map((l) => <li key={l} className="text-sm text-muted">• {l}</li>)}</ul>
          </div>
        </div>

        <div className="mb-12 rounded-2xl border border-amber-100 bg-amber-50/50 p-8">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <h2 className="text-lg font-semibold text-navy">Current Limitations</h2>
          </div>
          <ul className="space-y-2">
            {study.currentLimitations.map((l) => (
              <li key={l} className="flex items-start gap-2 text-sm text-navy/70">
                <span className="text-amber-500">—</span>{l}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-surface p-8 shadow-soft">
          <h2 className="mb-4 text-lg font-semibold text-navy">Future Improvements</h2>
          <ul className="space-y-2">
            {study.futureImprovements.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-accent">→</span>{f}
              </li>
            ))}
          </ul>
        </div>

        {project && (
          <p className="mt-8 text-center text-sm text-muted">
            Student-built {project.statusLabel.toLowerCase()} — honest work in progress.
          </p>
        )}
      </div>
    </div>
  );
}