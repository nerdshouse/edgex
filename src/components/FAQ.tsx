"use client";

import { useState } from "react";
import { motion, AnimatePresence, ease } from "./Motion";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { site } from "@/data/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-10">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-title text-2xl sm:text-3xl">Common questions</h2>
        </Reveal>

        <Stagger className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {site.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={faq.q}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-medium text-[var(--text-primary)] tracking-[-0.02em] group-hover:text-[var(--accent)] transition-colors duration-200">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease }}
                      className="text-[var(--text-muted)] text-lg leading-none shrink-0 mt-0.5"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-[var(--text-secondary)] text-sm leading-relaxed max-w-3xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
