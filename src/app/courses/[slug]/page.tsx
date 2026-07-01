"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { motion, AnimatePresence, ease } from "@/components/Motion";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import EnrollBar from "@/components/EnrollBar";
import { getCourseBySlug } from "@/data/cohorts";

function inr(amount: number) {
  return new Intl.NumberFormat("en-IN").format(amount);
}

/** One numbered, expandable module row — the "orange module" from the design. */
function ModuleItem({ index, week, topics }: { index: number; week: string; topics: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-stretch gap-3">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white tabular-nums">
        {index}
      </span>
      <div className="flex-1 overflow-hidden rounded-lg border border-[var(--border)] transition-colors duration-200 hover:border-[var(--border-hover)]">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-4 bg-[var(--bg-card)] px-5 py-4 text-left transition-colors duration-200 hover:bg-[var(--bg-secondary)]"
        >
          <span className="text-sm font-medium text-[var(--text-primary)]">{week}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2, ease }}
            className="shrink-0 text-[var(--text-muted)]"
          >
            ▾
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col gap-2 border-t border-[var(--border)] px-5 py-4">
                {topics.map((t, i) => (
                  <motion.li
                    key={t}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.2 }}
                    className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    {t}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/** A green info card from the right-hand panel. */
function InfoCard({ label, value }: { label?: string; value: string }) {
  return (
    <div className="card rounded-xl px-6 py-5 text-center">
      {label && (
        <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
          {label}
        </div>
      )}
      <div className="text-[15px] font-semibold leading-snug tracking-[-0.01em] text-[var(--text-primary)]">
        {value}
      </div>
    </div>
  );
}

export default function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const result = getCourseBySlug(slug);
  if (!result) notFound();
  const { course, cohort } = result;

  const price = course.price ?? cohort.price;
  const access = course.access ?? `${cohort.duration}`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-28">
        {/* Section 1 — Modules included + info panel */}
        <section className="py-14 sm:py-20 border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <Link
                href={`/cohorts/${cohort.slug}`}
                className="link-hover group mb-8 inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
                {cohort.title}
              </Link>

              {/* Title bar */}
              <div className="mb-10 sm:mb-12">
                <div className="mb-4 flex flex-wrap items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.14em]">
                  <span className="rounded-full bg-[var(--accent-muted)] px-2.5 py-1 text-[var(--accent)]">
                    {course.tag}
                  </span>
                  <span className="text-[var(--text-muted)]">{course.level}</span>
                </div>
                <h1 className="section-title text-[clamp(2rem,4.5vw,3.5rem)]">{course.title}</h1>
              </div>

              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14 items-start">
                {/* LEFT — Modules Included */}
                <div>
                  <div className="mb-6 flex items-baseline gap-3">
                    <h2 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                      Modules Included
                    </h2>
                    <span className="h-px flex-1 bg-[var(--border)]" aria-hidden />
                    <span className="index-num shrink-0 tabular-nums">
                      {course.curriculum.length} modules
                    </span>
                  </div>

                  <Stagger className="flex flex-col gap-3">
                    {course.curriculum.map((item, i) => (
                      <StaggerItem key={item.week}>
                        <ModuleItem index={i + 1} week={item.week} topics={item.topics} />
                      </StaggerItem>
                    ))}
                  </Stagger>

                  {course.notCovered && (
                    <p className="mt-6 rounded-lg border border-dashed border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-[13px] text-[var(--text-muted)]">
                      <span className="font-medium text-[var(--text-secondary)]">Not covered: </span>
                      {course.notCovered}
                    </p>
                  )}
                </div>

                {/* RIGHT — Info panel */}
                <div className="flex flex-col gap-4">
                  <div className="card rounded-xl px-6 py-6 text-center">
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      Price
                    </div>
                    <div className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                      {price ? `₹${inr(price)}` : "On request"}
                    </div>
                  </div>

                  <InfoCard label="Taught by" value={course.instructor} />
                  <InfoCard label="Access" value={access} />
                  <InfoCard value="Lifetime Access to the EdgeX Corporate Club" />

                  <Link
                    href="/contact"
                    className="btn-primary mt-1 block rounded-full px-6 py-3 text-center text-sm"
                  >
                    Enroll in this course →
                  </Link>
                </div>
              </div>
            </PageEnter>
          </div>
        </section>

        {/* Section 2 — Course trailer & demo class videos */}
        <section className="py-14 sm:py-20 border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <Reveal>
                <h2 className="mb-5 text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                  Course Trailer
                </h2>
                <VideoPlayer
                  youtubeId={course.trailerId ?? "dQw4w9WgXcQ"}
                  caption={`${course.title} — trailer`}
                  runtime="Trailer"
                />
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="mb-5 text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                  Demo Class
                </h2>
                <VideoPlayer
                  youtubeId={course.demoId ?? "dQw4w9WgXcQ"}
                  caption={`${course.title} — demo class`}
                  runtime="Demo"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* What you'll learn */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="max-w-3xl">
              <h2 className="mb-6 text-lg font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                What you&apos;ll learn
              </h2>
              <div className="card rounded-xl p-6">
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {course.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span className="text-sm text-[var(--text-secondary)]">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <EnrollBar deadline={cohort.nextBatch} />
      </main>
      <Footer />
    </>
  );
}
