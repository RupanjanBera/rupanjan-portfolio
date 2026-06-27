"use client";

import { ReactNode } from "react";
import { ParallaxLayer } from "./ParallaxLayer";
import { Scene3D } from "./Scene3D";
import { cn } from "@/lib/utils";

interface SectionSceneProps {
  children: ReactNode;
  id?: string;
  className?: string;
  with3D?: boolean;
  withParallaxOrbs?: boolean;
}

export function SectionScene({
  children,
  id,
  className,
  with3D = false,
  withParallaxOrbs = true,
}: SectionSceneProps) {
  return (
    <section id={id} className={cn("section-padding relative overflow-hidden", className)}>
      {withParallaxOrbs && (
        <>
          <ParallaxLayer
            speed={60}
            className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-400/8 blur-3xl"
          />
          <ParallaxLayer
            speed={40}
            direction="down"
            className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-400/6 blur-3xl"
          />
        </>
      )}
      {with3D && <Scene3D variant="section" />}
      <div className="relative z-10">{children}</div>
    </section>
  );
}