"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";

export function AnimatedBackground() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500, 1000], [0, 0.5, 1]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 45]);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <ParallaxLayer
        speed={80}
        className="absolute -right-16 top-32 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-violet-400/10 to-blue-400/5 blur-3xl"
      />

      <ParallaxLayer
        speed={50}
        direction="down"
        className="absolute -left-40 top-1/4 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-indigo-400/8 to-transparent blur-3xl"
      />

      {/* Floating glass orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[15%] top-[40%] h-24 w-24 rounded-full glass-vivid opacity-60 animate-drift"
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-[20%] top-[60%] h-16 w-16 rounded-2xl glass-vivid opacity-40"
        style={{ rotate }}
      />

      {/* Brutal accent shapes */}
      <motion.div
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[25%] hidden h-14 w-14 border-[3px] border-navy/10 bg-violet-100/30 md:block"
        style={{ boxShadow: "4px 4px 0 rgba(15,23,42,0.06)" }}
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[25%] bottom-[20%] hidden h-3 w-24 bg-violet-400/20 md:block"
      />

      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/3 h-[280px] w-[280px] rounded-full bg-gradient-to-t from-violet-200/25 to-transparent blur-2xl"
      />
    </motion.div>
  );
}