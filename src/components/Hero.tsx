"use client";

import Link from "next/link";
import { motion, useReducedMotion, ease, stagger, fadeUp } from "./Motion";
import Marquee from "./Marquee";
import VideoPlayer from "./VideoPlayer";
import { site } from "@/data/site";

/* Split the headline so the last word gets the serif italic treatment. */
function splitTitle(title: string) {
  const clean = title.replace(/\.$/, "");
  const words = clean.split(" ");
  const last = words.pop() ?? "";
  return { lead: words.join(" "), last };
}

export default function Hero() {
  const reduce = useReducedMotion();
  const { hero, stats } = site;
  const { lead, last } = splitTitle(hero.title);

  return (
    <section className="relative bg-[var(--bg)] pt-32 sm:pt-40 overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
        aria-hidden
      >
        <div className="hero-glow absolute inset-x-0 top-0 h-[70%]" />
        <div className="hero-grid absolute inset-0" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <motion.div variants={reduce ? undefined : stagger} initial="hidden" animate="show">
          {/* Meta row */}
          <motion.div
            className="flex flex-wrap items-center justify-between gap-3 mb-10 sm:mb-14"
            variants={fadeUp}
          >
            <p className="section-label">{hero.label}</p>
            <p className="hidden sm:flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
              Next live batch - {site.liveBatches.startDate}
            </p>
          </motion.div>

          {/* Display headline */}
          <motion.h1
            className="section-title text-[clamp(2.5rem,6.2vw,5rem)] max-w-[14ch] mb-10 sm:mb-14"
            variants={fadeUp}
          >
            {lead}{" "}
            <span className="serif-i text-[var(--accent)]">{last}.</span>
          </motion.h1>

          {/* Description + CTAs, split editorial row */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 sm:pb-16"
            variants={fadeUp}
          >
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-[1.65] max-w-xl">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              <Link
                href={hero.ctaPrimary.href}
                className="btn-primary text-sm px-6 py-3 rounded-full text-center"
              >
                {hero.ctaPrimary.label} →
              </Link>
              <Link
                href={hero.ctaSecondary.href}
                className="btn-secondary text-sm px-6 py-3 rounded-full text-center"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero video - click-to-play, in place of static image */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mb-16 sm:mb-20"
        >
          <VideoPlayer
            youtubeId={site.videoFeature.youtubeId}
            caption={site.videoFeature.caption}
            runtime={site.videoFeature.runtime}
          />
        </motion.div>

        {/* Stats - hairline editorial strip */}
        <motion.dl
          className="grid grid-cols-2 lg:grid-cols-4 border-t border-[var(--border)]"
          variants={reduce ? undefined : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-48px" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className={`py-8 sm:py-10 pr-6 ${i > 0 ? "lg:border-l lg:border-[var(--border)] lg:pl-8" : ""} ${
                i % 2 === 1 ? "border-l border-[var(--border)] pl-6 lg:pl-8" : ""
              }`}
            >
              <dd className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] tabular-nums mb-1.5">
                {s.value}
              </dd>
              <dt className="index-num">{s.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* Target companies marquee */}
      <div className="relative border-y border-[var(--border)] py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center gap-6">
          <span className="index-num shrink-0 hidden sm:block">Alumni target firms</span>
          <Marquee items={site.companies} className="flex-1" />
        </div>
      </div>
    </section>
  );
}
