"use client";

import { useState, useEffect } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandMenu } from "@/components/layout/CommandMenu";
import { PortfolioAI } from "@/components/ai/PortfolioAI";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { BuildProof } from "@/components/sections/BuildProof";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Gallery } from "@/components/sections/Gallery";
import { Skills } from "@/components/sections/Skills";
import { Journey } from "@/components/sections/Journey";
import { Education } from "@/components/sections/Education";
import { AISection } from "@/components/sections/AISection";
import { Blog } from "@/components/sections/Blog";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiInitialQuestion, setAiInitialQuestion] = useState<string | undefined>();

  const openAI = (question?: string) => {
    setAiInitialQuestion(question);
    setAiOpen(true);
  };

  const closeAI = () => {
    setAiOpen(false);
    setAiInitialQuestion(undefined);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar
        onOpenCommand={() => setCommandOpen(true)}
        onOpenAI={() => openAI()}
      />
      <main>
        <Hero onOpenAI={() => openAI()} />
        <ImpactStats />
        <BuildProof />
        <About />
        <Projects />
        <Gallery />
        <Skills />
        <Journey />
        <Education />
        <AISection onOpenAI={openAI} />
        <Blog />
        <Resume />
        <Contact />
        <CTA onOpenAI={openAI} />
      </main>
      <Footer />
      <CommandMenu
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
        onOpenAI={() => openAI()}
      />
      <PortfolioAI
        open={aiOpen}
        onClose={closeAI}
        initialQuestion={aiInitialQuestion}
      />
    </>
  );
}