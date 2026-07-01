"use client";

import Link from "next/link";
import { motion, useReducedMotion, ease, stagger, fadeUp } from "./Motion";
import VideoPlayer from "./VideoPlayer";
import { site } from "@/data/site";

export default function HomeIntro() {
  const reduce = useReducedMotion();
  const { videoFeature, stats } = site;

  return (
    <section className="relative bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <motion.div
          className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-end border-b border-[var(--border)]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-48px" }}
          transition={{ duration: 0.55, ease }}
        >
          <div>
            <p className="section-label mb-4">{videoFeature.label}</p>
            <h2 className="section-title text-2xl sm:text-3xl mb-4 max-w-md">
              {videoFeature.heading}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              {videoFeature.description}
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {videoFeature.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <Link href="/demo" className="btn-secondary text-sm px-5 py-2.5 rounded-full inline-block">
              Watch demo class
            </Link>
          </div>

          <VideoPlayer
            youtubeId={videoFeature.youtubeId}
            caption={videoFeature.caption}
            runtime={videoFeature.runtime}
          />
        </motion.div>

        <motion.dl
          className="grid grid-cols-2 lg:grid-cols-4"
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
    </section>
  );
}
