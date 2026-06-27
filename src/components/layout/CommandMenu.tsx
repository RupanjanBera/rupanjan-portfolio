"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { navigation } from "@/data/site";
import { projects } from "@/data/projects";

interface CommandMenuProps {
  open: boolean;
  onClose: () => void;
  onOpenAI: () => void;
}

const extraCommands = [
  { label: "Ask Portfolio AI", href: "#ai", action: "ai" as const },
  { label: "Build Proof", href: "#proof" },
  { label: "Gallery", href: "#gallery" },
  { label: "Case Studies", href: "/case-studies" },
  ...projects.map((p) => ({ label: `${p.title} — ${p.tagline}`, href: p.links.caseStudy })),
];

export function CommandMenu({ open, onClose, onOpenAI }: CommandMenuProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const allItems = [...navigation, ...extraCommands];
  const filtered = allItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: (typeof allItems)[0]) => {
    if ("action" in item && item.action === "ai") {
      onClose();
      onOpenAI();
      return;
    }
    if (item.href.startsWith("#")) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = item.href;
    }
    onClose();
    setQuery("");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-navy/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-[18%] z-[101] w-full max-w-lg -translate-x-1/2 px-4"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-float backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-slate-100 px-4">
                <Search className="h-4 w-4 text-muted" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to section or project..."
                  className="flex-1 bg-transparent py-4 text-navy outline-none placeholder:text-slate-400"
                />
                <kbd className="hidden rounded border border-slate-200 px-2 py-0.5 text-xs text-muted sm:block">ESC</kbd>
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <p className="px-4 py-8 text-center text-sm text-muted">No results found</p>
                ) : (
                  filtered.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleSelect(item)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm text-navy/80 transition-colors hover:bg-surface-muted"
                    >
                      {item.label}
                      <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                    </button>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}