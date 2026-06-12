"use client";

import { useState } from "react";
import { motion, AnimatePresence, ease } from "./Motion";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { site } from "@/data/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-14 lg:gap-20 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="section-label mb-5">FAQ</p>
            <h2 className="section-title text-[clamp(1.75rem,3vw,2.5rem)]">
              Common <span className="serif-i">questions</span>
            </h2>
          </Reveal>

          <Stagger className="border-t border-[var(--border)]">
            {site.faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <StaggerItem key={faq.q}>
                  <div className="border-b border-[var(--border)]">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full grid grid-cols-[2.5rem_1fr_auto] gap-4 py-6 text-left group items-baseline"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`index-num transition-colors duration-200 ${
                          isOpen ? "text-[var(--accent)]" : ""
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base sm:text-lg font-medium text-[var(--text-primary)] tracking-[-0.02em] group-hover:text-[var(--accent)] transition-colors duration-200">
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease }}
                        className="self-center text-[var(--text-muted)] text-xl leading-none shrink-0"
                        aria-hidden
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
                          <p className="pb-6 pl-[3.5rem] text-[var(--text-secondary)] text-sm leading-[1.7] max-w-2xl">
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
      </div>
    </section>
  );
}
