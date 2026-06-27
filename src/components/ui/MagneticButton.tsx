"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-glow-violet hover:brightness-110",
    secondary:
      "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-glow-violet hover:brightness-110",
    ghost:
      "text-muted hover:text-navy hover:bg-surface-muted",
    outline:
      "border border-slate-200 bg-surface text-navy hover:border-slate-300 hover:shadow-soft",
  };

  const inner = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300",
        sizes[size],
        variants[variant],
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block">
      {inner}
    </button>
  );
}