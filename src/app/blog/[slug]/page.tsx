import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/blog";
import { NoteContent } from "@/components/blog/NoteContent";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Note Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const next = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-16">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
          {post.category}
        </span>
        <span className="text-sm text-muted">{post.date}</span>
        <span className="flex items-center gap-1 text-sm text-muted">
          <Clock className="h-3.5 w-3.5" />
          {post.readTime}
        </span>
      </div>

      <h1 className="font-display text-3xl font-bold tracking-tight text-navy md:text-5xl md:leading-[1.1]">
        {post.title}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-muted">{post.excerpt}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full border border-slate-100 bg-surface-muted px-3 py-1 text-xs text-navy/70"
          >
            <Tag className="h-3 w-3 text-violet-400" />
            {tag}
          </span>
        ))}
      </div>

      <div className="section-divider my-10 max-w-full" />

      <NoteContent blocks={post.content} />

      <div className="mt-14 grid gap-4 border-t border-slate-100 pt-10 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="group rounded-2xl border border-slate-100 bg-surface p-5 transition-all hover:border-violet-200 hover:shadow-card"
          >
            <p className="mb-1 flex items-center gap-1 text-xs text-muted">
              <ArrowLeft className="h-3 w-3" /> Previous
            </p>
            <p className="text-sm font-semibold text-navy group-hover:text-violet-600">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="group rounded-2xl border border-slate-100 bg-surface p-5 text-right transition-all hover:border-violet-200 hover:shadow-card sm:col-start-2"
          >
            <p className="mb-1 flex items-center justify-end gap-1 text-xs text-muted">
              Next <ArrowRight className="h-3 w-3" />
            </p>
            <p className="text-sm font-semibold text-navy group-hover:text-violet-600">
              {next.title}
            </p>
          </Link>
        )}
      </div>
    </article>
  );
}