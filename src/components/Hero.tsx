"use client";

import Link from "next/link";
import { motion, useReducedMotion, ease, stagger, fadeUp } from "./Motion";
import { site } from "@/data/site";

const cardHover = {
  y: -4,
  transition: { duration: 0.25, ease },
};

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

          <motion.div variants={fadeUp} className="flex justify-center mb-12 sm:mb-14">
            <span className="inline-flex items-center rounded-full border-2 border-[var(--accent)] bg-[var(--accent-muted)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] tracking-[-0.01em]">
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
            <motion.div
              key={audience.href}
              variants={fadeUp}
              whileHover={reduce ? undefined : cardHover}
            >
              <Link
                href={audience.href}
                className="group flex flex-col h-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-left shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[var(--accent)]/40 hover:shadow-[0_8px_32px_var(--accent-muted)]"
              >
                <div className="bg-[var(--accent)] px-5 py-4 sm:px-6 sm:py-5 transition-colors duration-200 group-hover:bg-[var(--accent-hover)]">
                  <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-white/60 mb-2 block">
                    0{i + 1}
                  </span>
                  <h2 className="text-[15px] sm:text-base font-semibold text-white leading-snug tracking-[-0.02em]">
                    {audience.title}
                  </h2>
                </div>

                <ul className="flex flex-col gap-2.5 px-5 py-5 sm:px-6 sm:py-6 flex-1">
                  {audience.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-[var(--text-primary)]"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                        aria-hidden
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto px-5 py-4 sm:px-6 border-t border-[var(--border)]">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                    Explore pathway
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
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
