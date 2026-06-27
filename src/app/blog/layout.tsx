import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 md:px-8">
          <Link
            href="/#notes"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-violet-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Notes
          </Link>
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-slate-200">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.profileImageAlt}
                fill
                className="object-cover object-top"
                sizes="32px"
              />
            </div>
            <span className="hidden text-sm font-semibold text-navy sm:block">
              {siteConfig.name}
            </span>
          </Link>
          <Link
            href="/#ai"
            className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-600 transition-colors hover:bg-violet-100"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Ask AI
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}