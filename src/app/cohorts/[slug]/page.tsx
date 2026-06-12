"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import EnrollBar from "@/components/EnrollBar";
import { getCohortBySlug } from "@/data/cohorts";

const levelColor: Record<string, string> = {
  Beginner: "text-emerald-500",
  Intermediate: "text-yellow-500",
  Advanced: "text-[var(--accent)]",
};

export default function CohortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const cohort = getCohortBySlug(slug);
  if (!cohort) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-28">
        <section className="py-20 sm:py-24 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <Link
                href="/cohorts"
                className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] mb-6 link-hover group"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
                All Cohorts
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-[11px] font-medium text-[var(--accent)] bg-[var(--accent-muted)] px-2 py-0.5 rounded-md">
                  {cohort.tag}
                </span>
                <span className="text-xs text-[var(--text-muted)]">{cohort.duration}</span>
                <span className="text-xs text-[var(--text-muted)]">·</span>
                <span className="text-xs text-[var(--text-muted)]">{cohort.seats} seats</span>
              </div>

              <h1 className="section-title text-4xl sm:text-5xl mb-4">{cohort.title}</h1>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl mb-8">{cohort.desc}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-block text-sm px-5 py-2.5 rounded-lg">
                  Apply for {cohort.nextBatch}
                </Link>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Next batch: <span className="text-[var(--text-primary)] font-medium">{cohort.nextBatch}</span>
                </div>
              </div>
            </PageEnter>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-10">
              <h2 className="section-title text-2xl sm:text-3xl">
                {cohort.courses.length} courses in this cohort
              </h2>
            </Reveal>

            <Stagger className="flex flex-col gap-3">
              {cohort.courses.map((course) => (
                <StaggerItem key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="group card flex flex-col sm:flex-row sm:items-center justify-between rounded-xl p-5 sm:p-6 gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs font-medium ${levelColor[course.level]}`}>{course.level}</span>
                        <span className="text-[var(--text-muted)] text-xs">·</span>
                        <span className="text-xs text-[var(--text-muted)]">{course.duration}</span>
                        <span className="text-[var(--text-muted)] text-xs">·</span>
                        <span className="text-xs text-[var(--text-muted)]">{course.lessons} lessons</span>
                      </div>
                      <h3 className="text-[15px] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 mb-1">
                        {course.title}
                      </h3>
                      <p className="text-[var(--text-muted)] text-sm line-clamp-1">{course.desc}</p>
                    </div>

                    <div className="flex items-center gap-4 sm:shrink-0">
                      <div className="text-right hidden sm:block">
                        <div className="text-xs text-[var(--text-muted)]">Instructor</div>
                        <div className="text-sm font-medium text-[var(--text-primary)]">{course.instructor}</div>
                      </div>
                      <span className="text-[var(--accent)] group-hover:translate-x-0.5 transition-transform duration-200 inline-block">→</span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
        <EnrollBar deadline={cohort.nextBatch} />
      </main>
      <Footer />
    </>
  );
}
