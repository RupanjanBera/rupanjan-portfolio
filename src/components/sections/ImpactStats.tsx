"use client";

import { motion } from "framer-motion";
import { impactStats } from "@/data/site";

export function ImpactStats() {
  return (
    <section className="relative z-10 -mt-16 pb-4 md:-mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="card-glass-brutal grid gap-px overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-100/80 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group bg-white px-6 py-7 text-center transition-colors hover:bg-accent-soft/30 md:px-8 md:py-8"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-navy/90">{stat.label}</p>
              <p className="mt-1 text-xs text-muted">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}