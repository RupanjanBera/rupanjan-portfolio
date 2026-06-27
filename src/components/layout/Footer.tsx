"use client";

import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig, contact, navigation } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-100 bg-surface">
      <div className="section-divider absolute left-1/2 top-0 w-full max-w-3xl -translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-200 shadow-soft">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.profileImageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="font-display font-bold text-navy">{siteConfig.name}</p>
                <p className="text-xs text-muted">{siteConfig.role}</p>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-violet-600">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-navy"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-violet-600">
              Connect
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mb-4 block text-sm font-medium text-navy transition-colors hover:text-violet-600"
            >
              {contact.email}
            </a>
            <div className="flex items-center gap-2">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-xl border border-slate-100 p-2.5 text-muted transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${contact.phone}`}
                className="rounded-xl border border-slate-100 p-2.5 text-muted transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
              >
                <WhatsAppIcon />
              </a>
            </div>
            <p className="mt-3 text-xs text-muted">{contact.phone}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-center text-xs text-muted md:flex-row md:text-left">
          <p>© {year} {siteConfig.name}. Built with Next.js, TypeScript & Tailwind.</p>
          <p>Student builder portfolio · AI products · SaaS · Maker</p>
        </div>
      </div>
    </footer>
  );
}