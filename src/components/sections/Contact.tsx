"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  CheckCircle,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { contact, siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { submitContactForm } from "@/lib/formSubmit";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot — bots fill this; humans leave it empty
    if (formData.get("_honey")) return;

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const result = await submitContactForm({ name, email, message });

      if (result.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(result.message);
      }
    } catch {
      setError(
        `Something went wrong. Please email ${contact.email} directly.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's connect"
          description="Open to collaborations, internships, scholarships, and interesting projects."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-100 bg-surface shadow-card">
              {submitted ? (
                <div className="flex flex-col items-center px-8 py-20 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Thanks for reaching out. Your message was delivered to{" "}
                    {contact.email} — I&apos;ll reply soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-violet-600 transition-colors hover:text-violet-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8"
                  noValidate
                >
                  {/* FormSubmit honeypot */}
                  <input
                    type="text"
                    name="_honey"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-medium text-navy"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        disabled={loading}
                        className="w-full rounded-xl border border-slate-200 bg-surface-muted px-4 py-3 text-navy outline-none transition-all focus:border-violet-300 focus:ring-2 focus:ring-violet-100 disabled:opacity-60"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-medium text-navy"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        disabled={loading}
                        className="w-full rounded-xl border border-slate-200 bg-surface-muted px-4 py-3 text-navy outline-none transition-all focus:border-violet-300 focus:ring-2 focus:ring-violet-100 disabled:opacity-60"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-medium text-navy"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      disabled={loading}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-surface-muted px-4 py-3 text-navy outline-none transition-all focus:border-violet-300 focus:ring-2 focus:ring-violet-100 disabled:opacity-60"
                      placeholder="Tell me about your project, opportunity, or question..."
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow-violet transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-center text-[11px] text-muted">
                    Delivered securely via{" "}
                    <a
                      href="https://formsubmit.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 hover:underline"
                    >
                      FormSubmit
                    </a>{" "}
                    to {contact.email}
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-surface p-5 shadow-soft transition-all hover:border-violet-200 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                <Mail className="h-5 w-5 text-violet-600" />
              </div>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="font-medium text-navy transition-colors group-hover:text-violet-600">
                  {contact.email}
                </p>
              </div>
            </a>

            <div className="rounded-2xl border border-slate-100 bg-surface p-5 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-muted">
                  <MapPin className="h-5 w-5 text-muted" />
                </div>
                <div>
                  <p className="text-xs text-muted">Based in</p>
                  <p className="font-medium text-navy">India · Open globally</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/60 to-indigo-50/40 p-5">
              <p className="text-sm font-semibold text-navy">{siteConfig.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {siteConfig.focus}
              </p>
            </div>

            <div className="flex gap-2">
              {[
                { icon: Github, label: "GitHub", href: contact.github },
                { icon: Linkedin, label: "LinkedIn", href: contact.linkedin },
                { icon: Twitter, label: "X", href: contact.twitter },
                { icon: Instagram, label: "Instagram", href: contact.instagram },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-100 bg-surface py-3 text-xs font-medium text-muted transition-all hover:border-violet-200 hover:text-violet-600"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}