"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MockupFrameProps {
  title: string;
  subtitle?: string;
  type?: "workspace" | "dashboard" | "landing" | "flow" | "slides" | "hardware" | "diagram";
  className?: string;
  delay?: number;
  imageSrc?: string;
  imageAlt?: string;
  /** Strip outer card chrome when nested inside a parent card */
  embedded?: boolean;
}

const typeStyles: Record<string, string> = {
  workspace: "from-blue-50 to-slate-50",
  dashboard: "from-indigo-50 to-blue-50",
  landing: "from-violet-50 to-purple-50",
  flow: "from-emerald-50 to-teal-50",
  slides: "from-amber-50 to-orange-50",
  hardware: "from-slate-100 to-slate-50",
  diagram: "from-sky-50 to-cyan-50",
};

function MockupFrameContent({
  title,
  subtitle,
  type = "workspace",
  imageSrc,
  imageAlt,
  embedded = false,
}: MockupFrameProps) {
  return (
    <>
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        </div>
        <div className="mx-auto flex-1 max-w-[200px] rounded-md bg-white px-3 py-1 text-center text-[10px] text-slate-400">
          {title}
        </div>
      </div>

      {imageSrc ? (
        <div
          className={cn(
            "relative w-full overflow-hidden",
            embedded ? "bg-surface-muted" : cn("bg-gradient-to-br", typeStyles[type])
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="block h-auto w-full"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden bg-gradient-to-br",
            typeStyles[type]
          )}
        >
          <div className="flex h-full items-center justify-center p-6">
            <div className="absolute inset-4 rounded-xl border border-slate-200/50 bg-white/60 backdrop-blur-sm" />
            <div className="relative z-10 text-center">
              <p className="text-sm font-medium text-navy/70">{title}</p>
              {subtitle && <p className="mt-1 text-xs text-muted">{subtitle}</p>}
              <p className="mt-3 text-[10px] uppercase tracking-widest text-slate-400">
                Preview placeholder
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function MockupFrame({
  title,
  subtitle,
  type = "workspace",
  className,
  delay = 0,
  imageSrc,
  imageAlt,
  embedded = false,
}: MockupFrameProps) {
  if (embedded) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <MockupFrameContent
          title={title}
          subtitle={subtitle}
          type={type}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          embedded={embedded}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200/80 bg-surface shadow-card",
        className
      )}
    >
      <MockupFrameContent
        title={title}
        subtitle={subtitle}
        type={type}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        embedded={embedded}
      />
    </motion.div>
  );
}