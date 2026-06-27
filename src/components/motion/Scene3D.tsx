"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Scene3DProps {
  variant?: "hero" | "section";
  className?: string;
}

export function Scene3D({ variant = "hero", className }: Scene3DProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden
    >
      <div className="scene-3d absolute inset-0 flex items-center justify-center">
        {/* Floating ring */}
        <motion.div
          animate={{ rotateY: 360, rotateX: 15 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className={cn(
            "absolute rounded-full border-2 border-dashed border-violet-500/20",
            isHero ? "h-[420px] w-[420px] md:h-[560px] md:w-[560px]" : "h-64 w-64"
          )}
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Glass cube wireframe */}
        <motion.div
          animate={{ rotateX: [20, 35, 20], rotateY: [0, 180, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "absolute glass-cube border border-violet-400/25 bg-violet-500/5 backdrop-blur-sm",
            isHero ? "h-32 w-32 md:h-40 md:w-40" : "h-20 w-20"
          )}
          style={{ transformStyle: "preserve-3d", transform: "rotateX(25deg) rotateY(45deg)" }}
        />

        {/* Brutal accent block */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [-6, 6, -6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "absolute brutal-accent font-mono font-bold uppercase tracking-widest text-violet-400/40",
            isHero ? "right-[8%] top-[18%] text-[10px] md:text-xs" : "right-4 top-8 text-[9px]"
          )}
        >
          BUILD
        </motion.div>

        <motion.div
          animate={{ y: [0, 14, 0], x: [0, 8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={cn(
            "absolute rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/10 blur-xl",
            isHero ? "left-[10%] bottom-[25%] h-40 w-40" : "left-4 bottom-12 h-24 w-24"
          )}
        />

        {/* Orbiting dots */}
        {[0, 120, 240].map((deg, i) => (
          <motion.div
            key={deg}
            animate={{ rotate: 360 }}
            transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "linear" }}
            className={cn(
              "absolute",
              isHero ? "h-[300px] w-[300px] md:h-[400px] md:w-[400px]" : "h-48 w-48"
            )}
            style={{ transform: `rotate(${deg}deg)` }}
          >
            <div
              className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400/50 shadow-glow-violet"
              style={{ transform: "translateZ(40px)" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}