"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command, Sparkles } from "lucide-react";
import { siteConfig, navigation, contact } from "@/data/site";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenAI: () => void;
}

export function Navbar({ onOpenCommand, onOpenAI }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setPastHero(y > window.innerHeight * 0.75);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = !pastHero;

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl transition-all duration-500 md:left-8 md:right-8",
          isDark
            ? scrolled
              ? "glass-dark rounded-2xl shadow-hero-image"
              : "bg-transparent"
            : scrolled
              ? "glass-light rounded-2xl shadow-elevated"
              : "bg-transparent"
        )}
      >
        <nav className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <a href="#" className="group flex items-center gap-3">
            <div
              className={cn(
                "relative h-9 w-9 overflow-hidden rounded-xl transition-transform group-hover:scale-105",
                isDark ? "border border-white/15 shadow-glow-violet" : "border border-slate-200 shadow-soft"
              )}
            >
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.profileImageAlt}
                fill
                className="object-cover object-top"
                sizes="36px"
              />
            </div>
            <span
              className={cn(
                "hidden font-semibold sm:block",
                isDark ? "text-white" : "text-navy"
              )}
            >
              {siteConfig.name.split(" ")[0]}
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm transition-colors group",
                  isDark
                    ? "text-white/60 hover:text-white"
                    : "text-muted hover:text-navy"
                )}
              >
                {item.label}
                <span className="absolute bottom-1 left-3 right-3 h-px scale-x-0 bg-violet-400 transition-transform group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommand}
              className={cn(
                "hidden items-center gap-1.5 rounded-full border px-3 py-2 text-xs transition-colors md:flex",
                isDark
                  ? "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
                  : "border-slate-200 bg-surface text-muted hover:border-slate-300 hover:text-navy"
              )}
            >
              <Command className="h-3.5 w-3.5" />
              <span className="opacity-60">⌘K</span>
            </button>
            <button
              onClick={onOpenAI}
              className={cn(
                "hidden items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-colors sm:flex",
                isDark
                  ? "bg-violet-500/20 text-violet-200 hover:bg-violet-500/30"
                  : "bg-accent-soft text-accent hover:bg-accent/10"
              )}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Ask AI
            </button>
            <MagneticButton
              href={contact.resumeUrl}
              variant="outline"
              size="sm"
              className={cn(
                "hidden sm:!inline-flex",
                isDark && "!border-white/15 !bg-white/5 !text-white/90 hover:!bg-white/10"
              )}
            >
              Resume
            </MagneticButton>
            <MagneticButton
              href="#contact"
              variant="primary"
              size="sm"
              className={cn(
                "hidden md:!inline-flex",
                isDark && "!bg-gradient-to-r !from-violet-600 !to-indigo-600 !shadow-glow-violet"
              )}
            >
              Contact
            </MagneticButton>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "rounded-full border p-2 lg:hidden",
                isDark
                  ? "border-white/15 text-white/70"
                  : "border-slate-200 text-muted"
              )}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "fixed inset-x-4 top-20 z-50 mx-auto max-w-6xl rounded-2xl border p-4 shadow-float backdrop-blur-xl lg:hidden",
              isDark
                ? "border-white/10 bg-[#0a0a12]/95"
                : "border-slate-200 bg-white/95"
            )}
          >
            <div className="flex flex-col gap-1">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm",
                    isDark
                      ? "text-white/80 hover:bg-white/5"
                      : "text-navy hover:bg-surface-muted"
                  )}
                >
                  {item.label}
                </motion.a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenAI();
                }}
                className="mt-2 flex items-center gap-2 rounded-xl bg-violet-500/20 px-4 py-3 text-sm font-medium text-violet-200"
              >
                <Sparkles className="h-4 w-4" />
                Ask Portfolio AI
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}