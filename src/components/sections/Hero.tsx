"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
  Users,
} from "lucide-react";
import { heroSlides } from "@/data/heroSlides";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Scene3D } from "@/components/motion/Scene3D";
import { TiltCard } from "@/components/motion/TiltCard";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";

interface HeroProps {
  onOpenAI: () => void;
}

const SLIDE_DURATION = 7000;

export function Hero({ onOpenAI }: HeroProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = heroSlides.length;
  const slide = heroSlides[active];
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next, paused]);

  const handleCta = (href: string) => {
    if (href === "#ai") {
      onOpenAI();
      return;
    }
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient + 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-40" />
      <Scene3D variant="hero" />
      <ParallaxLayer
        speed={30}
        className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]"
      />
      <ParallaxLayer
        speed={20}
        direction="down"
        className="pointer-events-none absolute -right-20 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]"
      />

      {/* Slide counter — brutal stamp */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute right-6 top-28 z-20 hidden md:block lg:right-10 lg:top-32"
      >
        <span className="brutal-stamp-dark inline-block px-4 py-2 font-mono text-sm tabular-nums text-white/90">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 glass-vivid-dark rounded-full p-3 text-white/70 transition-all hover:text-white md:flex lg:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 glass-vivid-dark rounded-full p-3 text-white/70 transition-all hover:text-white md:flex lg:right-8"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <motion.div
        style={{ y: heroY }}
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-28 pt-32 md:px-8 md:pb-24 md:pt-36"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          >
            {/* Left content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-300">
                  {slide.badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-display-md"
              >
                {slide.headline}{" "}
                <span className="text-gradient-violet">{slide.highlight}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
              >
                {slide.description}
              </motion.p>

              {/* Feature cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {slide.features.map((feat, fi) => (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 + fi * 0.05 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group glass-vivid-dark rounded-2xl p-3.5 transition-all hover:border-violet-400/30"
                  >
                    <feat.icon className="mb-2 h-4 w-4 text-violet-400 transition-colors group-hover:text-violet-300" />
                    <p className="text-xs font-semibold text-white/90">{feat.title}</p>
                    <p className="mt-0.5 text-[10px] leading-snug text-slate-500">{feat.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <button
                  onClick={() => handleCta(slide.primaryCta.href)}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow-violet transition-all hover:shadow-glow-violet-lg hover:brightness-110"
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                {slide.secondaryCta && (
                  <button
                    onClick={() => handleCta(slide.secondaryCta!.href)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
                  >
                    {slide.secondaryCta.href === "#ai" ? (
                      <Sparkles className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                    {slide.secondaryCta.label}
                  </button>
                )}
              </motion.div>

              {/* Name strip on first slide */}
              {active === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="mt-8 text-sm text-slate-500"
                >
                  <span className="font-semibold text-slate-300">{siteConfig.name}</span>
                  {" · "}
                  {siteConfig.role}
                </motion.p>
              )}
            </div>

            {/* Right visual — 3D tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative perspective-3d"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600/20 via-transparent to-blue-600/10 blur-2xl" />

              <TiltCard intensity={14}>
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-hero-image">
                  <div className="relative aspect-[16/10] w-full md:aspect-[4/3]">
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={active === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0a12]/30" />
                  </div>

                  {slide.stat && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="absolute bottom-5 right-5 flex items-center gap-3 glass-vivid-dark rounded-2xl px-4 py-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/30">
                        <Users className="h-4 w-4 text-violet-200" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{slide.stat.value}</p>
                        <p className="text-[10px] text-slate-400">{slide.stat.label}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </TiltCard>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -right-8 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full border border-dashed border-violet-500/20 lg:block"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                i === active
                  ? "w-8 bg-gradient-to-r from-violet-500 to-indigo-500"
                  : "w-2 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
          {!paused && (
            <motion.div
              key={active}
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}