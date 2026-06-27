"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen, Sparkles } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Blog() {
  const [filter, setFilter] = useState<string>("All");
  const featured = blogPosts.find((p) => p.featured);
  const filtered =
    filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);
  const gridPosts = filtered.filter((p) => !p.featured || filter !== "All");

  return (
    <section id="notes" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Builder Notes"
          title="Reflections & thinking"
          description="Founder-style notes on AI products, SaaS platforms, commerce, and building as a student — full articles, not placeholders."
        />

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          {["All", ...blogCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                filter === cat
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-glow-violet"
                  : "border border-slate-200 bg-surface text-muted hover:border-violet-200 hover:text-navy"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured note */}
        {featured && filter === "All" && (
          <motion.a
            href={`/blog/${featured.slug}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group mb-8 block overflow-hidden rounded-[1.75rem] border border-slate-100 bg-surface shadow-card transition-all hover:border-violet-200 hover:shadow-float"
          >
            <div className="grid md:grid-cols-5">
              <div className="border-b border-slate-100 bg-gradient-to-br from-violet-50/80 to-indigo-50/40 p-8 md:col-span-2 md:border-b-0 md:border-r">
                <div className="flex h-full flex-col justify-center">
                  <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                    <Sparkles className="h-3.5 w-3.5" />
                    Featured Note
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-soft">
                    <BookOpen className="h-7 w-7 text-violet-500" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:col-span-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-violet-600">{featured.category}</span>
                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-500" />
                </div>
                <h3 className="text-xl font-bold text-navy transition-colors group-hover:text-violet-600 md:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-slate-400">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featured.readTime}
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        )}

        {/* Notes grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {(filter === "All" ? gridPosts.filter((p) => !p.featured) : filtered).map(
            (post, i) => (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group card-glass-brutal flex flex-col p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-600">
                    {post.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-500" />
                </div>
                <h3 className="mb-2 font-display text-base font-bold text-navy transition-colors group-hover:text-violet-600">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-slate-50 pt-4 text-xs text-slate-400">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </motion.a>
            )
          )}
        </div>
      </div>
    </section>
  );
}