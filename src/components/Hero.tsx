"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, ease, stagger, fadeUp } from "./Motion";
import { site } from "@/data/site";

export default function Hero() {
  const reduce = useReducedMotion();
  const { hero, stats } = site;

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[var(--bg)] pt-24 pb-20 sm:pt-28 sm:pb-28 overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
        aria-hidden
      >
        {/* Radial spotlight glow from top-center */}
        <div className="hero-glow absolute inset-x-0 top-0 h-[75%]" />
        {/* Dot grid overlay */}
        <div className="hero-grid absolute inset-0" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={reduce ? undefined : stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p className="section-label mb-5" variants={fadeUp}>
              {hero.label}
            </motion.p>

            <motion.h1 className="section-title text-[clamp(1.875rem,4.5vw,3rem)] mb-6" variants={fadeUp}>
              {hero.title}
            </motion.h1>

            <motion.p
              className="text-[var(--text-secondary)] text-base sm:text-[17px] leading-[1.65] max-w-lg mb-9"
              variants={fadeUp}
            >
              {hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
              variants={fadeUp}
            >
              <Link href={hero.ctaPrimary.href} className="btn-primary text-sm px-5 py-2.5 rounded-lg text-center">
                {hero.ctaPrimary.label}
              </Link>
              <Link href={hero.ctaSecondary.href} className="btn-secondary text-sm px-5 py-2.5 rounded-lg text-center">
                {hero.ctaSecondary.label}
              </Link>
            </motion.div>

            <motion.dl
              className="grid grid-cols-2 gap-x-8 gap-y-5 mt-12 pt-10 border-t border-[var(--border)]"
              variants={reduce ? undefined : stagger}
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 0.25 }}
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--text-muted)] mb-1">
                    {s.label}
                  </dt>
                  <dd className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-[var(--text-primary)] tabular-nums">
                    {s.value}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="relative"
          >
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl border border-[var(--border)] shadow-[var(--shadow-card)]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
