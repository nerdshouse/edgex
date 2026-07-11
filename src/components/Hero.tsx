"use client";

import Link from "next/link";
import { motion, useReducedMotion, ease, stagger, fadeUp } from "./Motion";
import { site } from "@/data/site";

export default function Hero() {
  const reduce = useReducedMotion();
  const { hero } = site;

  return (
    <section className="relative bg-[var(--bg)] pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
        aria-hidden
      >
        <div className="hero-glow absolute inset-x-0 top-0 h-[55%]" />
        <div className="hero-grid absolute inset-0" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full text-center">
        <motion.div
          variants={reduce ? undefined : stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="section-title text-[clamp(2rem,5vw,3.5rem)] mb-5 sm:mb-6 text-balance"
            variants={fadeUp}
          >
            {hero.title.split("EdgeX")[0]}
            <span className="text-[var(--accent)]">EdgeX</span>
          </motion.h1>

          <motion.p
            className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 text-balance max-w-2xl mx-auto"
            variants={fadeUp}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center mb-12">
            <span className="badge-shimmer inline-flex items-center rounded-md border-2 border-[var(--accent)]/30 bg-[var(--bg-secondary)] px-5 py-2.5 text-lg font-medium text-[var(--text-primary)] shadow-[0_2px_12px_rgba(96,4,4,0.08)]">
              {hero.badge}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto"
          variants={reduce ? undefined : stagger}
          initial="hidden"
          animate="show"
          transition={{ delayChildren: 0.15 }}
        >
          {hero.audiences.map((audience, i) => (
            <motion.div key={audience.href} variants={fadeUp}>
              <Link
                href={audience.href}
                aria-label={`${audience.title} — explore course`}
                className="group flex flex-col justify-around rounded-xl bg-[var(--bg-card)] border border-[var(--border)] p-6 sm:p-8 h-[220px] sm:h-[240px] shadow-sm transition-colors duration-300 hover:bg-[var(--accent-muted)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold leading-snug text-[var(--text-primary)] mb-4">
                    {audience.title}
                  </h2>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                    Explore course
                    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
