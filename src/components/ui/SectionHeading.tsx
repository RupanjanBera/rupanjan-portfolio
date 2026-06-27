"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut }}
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, x: -16, rotate: -3 }}
        whileInView={{ opacity: 1, x: 0, rotate: -1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5, ease: easeOut }}
        className={cn(
          "mb-5 inline-block px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-violet-700 brutal-stamp",
          align === "center" && "mx-auto"
        )}
      >
        {label}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6, ease: easeOut }}
        className="font-display text-display-md font-bold tracking-tight text-navy md:text-display-lg"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.55, ease: easeOut }}
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.8, ease: easeOut }}
        className={cn(
          "section-divider mt-8 max-w-xs origin-left",
          align === "center" && "mx-auto origin-center"
        )}
      />
    </motion.div>
  );
}