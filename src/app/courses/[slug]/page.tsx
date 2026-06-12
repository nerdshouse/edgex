"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence, ease } from "@/components/Motion";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import EnrollBar from "@/components/EnrollBar";
import { getCourseBySlug } from "@/data/cohorts";

const levelColor: Record<string, string> = {
  Beginner: "text-emerald-500",
  Intermediate: "text-yellow-500",
  Advanced: "text-[var(--accent)]",
};

function CurriculumItem({ week, topics }: { week: string; topics: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[var(--border)] rounded-lg overflow-hidden transition-colors duration-200 hover:border-[var(--border-hover)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] transition-colors duration-200"
      >
        <span className="font-medium text-[var(--text-primary)] text-sm">{week}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease }}
          className="text-[var(--text-muted)]"
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
            <ul className="px-5 py-4 flex flex-col gap-2 border-t border-[var(--border)]">
              {topics.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.2 }}
                  className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                >
                  <span className="text-[var(--accent)] mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[var(--accent)]" />
                  {t}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const result = getCourseBySlug(slug);
  if (!result) notFound();
  const { course, cohort } = result;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-28">
        <section className="py-16 sm:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <Link
                href={`/cohorts/${cohort.slug}`}
                className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-6 link-hover group"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
                {cohort.title}
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-5 font-mono text-[10px] uppercase tracking-[0.14em]">
                    <span className="text-[var(--accent)] bg-[var(--accent-muted)] px-2.5 py-1 rounded-full">
                      {course.tag}
                    </span>
                    <span className={`font-medium ${levelColor[course.level]}`}>{course.level}</span>
                  </div>
                  <h1 className="section-title text-[clamp(2.25rem,5vw,4rem)] mb-5">{course.title}</h1>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-7">{course.desc}</p>

                  <div className="flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)] mb-9">
                    <span className="tabular-nums">{course.lessons} lessons</span>
                    <span aria-hidden>/</span>
                    <span className="tabular-nums">{course.hours}h of content</span>
                    <span aria-hidden>/</span>
                    <span>{course.duration}</span>
                  </div>

                  <Link href="/contact" className="btn-primary inline-block text-sm px-6 py-3 rounded-full">
                    Enroll in this course →
                  </Link>
                </div>

                <div className="card rounded-xl p-6">
                  <div className="text-[13px] font-medium text-[var(--text-muted)] mb-4">Your instructor</div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)] font-medium text-sm shrink-0">
                      {course.instructor.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">{course.instructor}</div>
                      <div className="text-xs text-[var(--text-muted)]">{course.instructorRole}</div>
                    </div>
                  </div>

                  <div className="border-t border-[var(--border)] pt-4 mt-2">
                    <div className="text-[13px] font-medium text-[var(--text-muted)] mb-3">Part of</div>
                    <Link href={`/cohorts/${cohort.slug}`} className="flex items-center justify-between group">
                      <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
                        {cohort.title}
                      </span>
                      <span className="text-[var(--accent)] group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </PageEnter>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Reveal className="lg:col-span-2">
              <h2 className="text-lg font-medium text-[var(--text-primary)] mb-6">Curriculum</h2>
              <Stagger className="flex flex-col gap-3">
                {course.curriculum.map((item) => (
                  <StaggerItem key={item.week}>
                    <CurriculumItem week={item.week} topics={item.topics} />
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-lg font-medium text-[var(--text-primary)] mb-6">What you&apos;ll learn</h2>
              <div className="card rounded-xl p-5 mb-6">
                <ul className="flex flex-col gap-4">
                  {course.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2" />
                      <span className="text-sm text-[var(--text-secondary)]">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--accent-muted)] border border-[var(--border)] rounded-xl p-5">
                <div className="text-[14px] font-medium text-[var(--text-primary)] mb-2">Ready to enroll?</div>
                <p className="text-[13px] text-[var(--text-secondary)] mb-4">
                  Join the {cohort.nextBatch} batch. Only {cohort.seats} seats available.
                </p>
                <Link href="/contact" className="block text-center btn-primary text-sm px-4 py-2.5 rounded-lg">
                  Apply now
                </Link>
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
