"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, ease, stagger, fadeUp } from "./Motion";
import { site } from "@/data/site";

type FaqItem = { q: string; a: string };

export default function FAQ({ faqs = site.faqs }: { faqs?: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          className="mb-10 sm:mb-12 text-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-48px" }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="section-label justify-center mb-4">FAQ</p>
          <h2 className="section-title text-[clamp(1.75rem,4vw,2.5rem)] text-balance">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--bg-card)] shadow-[var(--shadow-card)]"
          variants={reduce ? undefined : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-48px" }}
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                className={i > 0 ? "border-t border-[var(--border)]" : undefined}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-4 px-5 sm:px-6 py-5 sm:py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`index-num shrink-0 pt-0.5 transition-colors duration-200 ${isOpen ? "text-[var(--accent)]" : ""
                      }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base sm:text-[17px] font-medium text-[var(--text-primary)] tracking-[-0.02em] leading-snug group-hover:text-[var(--accent)] transition-colors duration-200">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease }}
                    className="shrink-0 self-center text-[var(--text-muted)] text-xl leading-none"
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
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[3.25rem] sm:pl-[3.75rem] text-[var(--text-secondary)] text-sm sm:text-[15px] leading-[1.7]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
