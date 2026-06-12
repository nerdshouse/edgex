"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "@/components/Motion";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { site } from "@/data/site";

const topics = [
  "Enroll in EdgeX Foundations",
  "Live batch & GD slots",
  "Demo class access",
  "Mock interview add-on",
  "Corporate training",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-28">
        <section className="py-16 sm:py-24 border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <p className="section-label mb-4">Contact</p>
              <h1 className="section-title text-4xl sm:text-5xl mb-4">Have questions?</h1>
              <p className="text-[var(--text-secondary)] text-[15px] max-w-lg leading-relaxed">
                Leave your contact details and our team will get in touch within 24 hours.
              </p>
            </PageEnter>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <Reveal className="lg:col-span-2" delay={0.05}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="card rounded-xl p-12 text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xl mx-auto mb-5">✓</div>
                      <h2 className="text-xl font-medium text-[var(--text-primary)] mb-3">Message sent!</h2>
                      <p className="text-[var(--text-secondary)] text-sm mb-6">
                        Thanks, {form.name}. We&apos;ll be in touch at {form.email} within 24 hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", topic: "", message: "" }); }}
                        className="text-sm text-[var(--accent)] font-medium link-hover"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="card rounded-xl p-7 sm:p-9 flex flex-col gap-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[13px] font-medium text-[var(--text-muted)] mb-2">Name</label>
                          <input
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-[13px] font-medium text-[var(--text-muted)] mb-2">Email</label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="you@example.com"
                            className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13px] font-medium text-[var(--text-muted)] mb-2">I&apos;m asking about</label>
                        <div className="flex flex-wrap gap-2">
                          {topics.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setForm({ ...form, topic: t })}
                              className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                                form.topic === t
                                  ? "bg-[var(--accent)] border-[var(--accent)] text-white scale-[1.02]"
                                  : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13px] font-medium text-[var(--text-muted)] mb-2">Message</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us what's on your mind…"
                          className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary disabled:opacity-60 text-sm px-6 py-2.5 rounded-lg flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending…
                          </>
                        ) : (
                          "Send message →"
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </Reveal>

              <Stagger className="flex flex-col gap-4">
                <StaggerItem>
                  <div className="card rounded-xl p-6">
                    <h3 className="font-medium text-[var(--text-primary)] mb-5">Contact info</h3>
                    <div className="flex flex-col gap-4 text-sm">
                      <div>
                        <div className="text-[12px] font-medium text-[var(--text-muted)] mb-1">Email</div>
                        <a href={`mailto:${site.contact.email}`} className="font-medium text-[var(--text-primary)] link-hover">
                          {site.contact.email}
                        </a>
                      </div>
                      <div>
                        <div className="text-[12px] font-medium text-[var(--text-muted)] mb-1">Phone</div>
                        <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="font-medium text-[var(--text-primary)] link-hover">
                          {site.contact.phone}
                        </a>
                      </div>
                      <div>
                        <div className="text-[12px] font-medium text-[var(--text-muted)] mb-1">Location</div>
                        <div className="font-medium text-[var(--text-primary)]">{site.contact.location}</div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="card rounded-xl p-6">
                    <h3 className="font-medium text-[var(--text-primary)] mb-2">Office hours</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{site.contact.officeHours}</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-[var(--accent-muted)] border border-[var(--border)] rounded-xl p-6">
                    <div className="text-sm font-medium text-[var(--text-primary)] mb-2">Already enrolled?</div>
                    <p className="text-xs text-[var(--text-secondary)] mb-4">
                      Access your course portal, live batch schedule, and GD slots.
                    </p>
                    <a
                      href={site.loginUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] text-xs font-medium link-hover group"
                    >
                      Log in to portal
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 ml-0.5">→</span>
                    </a>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
