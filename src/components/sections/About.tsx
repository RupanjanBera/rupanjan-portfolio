"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutContent, siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { TiltCard } from "@/components/motion/TiltCard";

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <ParallaxLayer
        speed={40}
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          label="About"
          title="Builder with business-aware thinking"
          description="A commerce student who applies product, systems, and technology thinking through hands-on creation."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center lg:col-span-2"
          >
            <TiltCard intensity={10}>
            <div className="relative w-full max-w-sm overflow-hidden rounded-[1.75rem] card-glass-brutal">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.profileImageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                />
              </div>
              <div className="border-t border-slate-100 bg-surface/90 px-5 py-4 text-center backdrop-blur-sm">
                <p className="text-sm font-medium text-navy">{siteConfig.name}</p>
                <p className="mt-1 text-xs text-muted">{siteConfig.role}</p>
              </div>
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-accent/5 blur-2xl" />
              <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-full bg-cyan-400/5 blur-2xl" />
            </div>
            </TiltCard>
          </motion.div>

          {/* Copy */}
          <div className="space-y-8 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="text-lg leading-relaxed text-navy/90">
                {aboutContent.intro}
              </p>
              <p className="leading-relaxed text-muted">
                {aboutContent.details}
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutContent.traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-premium p-5"
                >
                  <h3 className="mb-1.5 text-sm font-semibold text-navy">
                    {trait.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {trait.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-surface-muted p-6"
            >
              <p className="text-sm leading-relaxed text-navy/80">
                {aboutContent.goals}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}