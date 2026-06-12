"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageEnter, Stagger, StaggerItem } from "@/components/Reveal";
import EnrollBar from "@/components/EnrollBar";
import { cohorts } from "@/data/cohorts";

export default function CohortsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-28">
        <section className="py-16 sm:py-24 border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <p className="section-label mb-4">Courses</p>
              <h1 className="section-title text-4xl sm:text-5xl mb-5">Placement Essentials for Engineers</h1>
              <p className="text-[var(--text-secondary)] text-[15px] max-w-xl leading-relaxed">
                Designed by experienced interviewers. Hybrid LIVE + recorded format with 3-year access.
              </p>
            </PageEnter>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Stagger className="grid grid-cols-1 gap-4">
              {cohorts.map((cohort) => (
                <StaggerItem key={cohort.slug}>
                  <Link href={`/cohorts/${cohort.slug}`} className="group card block rounded-xl p-6">
                    <div className="flex items-start justify-between mb-5">
                      <span className="text-[11px] font-medium text-[var(--accent)] bg-[var(--accent-muted)] px-2 py-0.5 rounded-md">
                        {cohort.tag}
                      </span>
                      <span className="text-[12px] text-[var(--text-muted)]">{cohort.courses.length} modules</span>
                    </div>

                    <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2 tracking-[-0.02em] group-hover:text-[var(--accent)] transition-colors duration-200">
                      {cohort.title}
                    </h2>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-2">{cohort.desc}</p>
                    <p className="text-[var(--text-muted)] text-sm mb-6">{cohort.tagline}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {cohort.courses.map((c) => (
                        <span
                          key={c.slug}
                          className="text-xs bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)] px-2.5 py-1 rounded-md"
                        >
                          {c.title}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-5 text-xs text-[var(--text-muted)] border-t border-[var(--border)] pt-5">
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">{cohort.duration}</span>
                      </div>
                      {cohort.price && (
                        <div>
                          <span className="font-semibold text-[var(--text-primary)]">₹{cohort.price.toLocaleString("en-IN")}</span>
                          {cohort.originalPrice && (
                            <span className="ml-2 line-through">₹{cohort.originalPrice.toLocaleString("en-IN")}</span>
                          )}
                        </div>
                      )}
                      <div>
                        Next batch: <span className="font-semibold text-[var(--text-primary)]">{cohort.nextBatch}</span>
                      </div>
                      <span className="ml-auto text-[var(--accent)] font-medium group-hover:translate-x-0.5 transition-transform duration-200 inline-block">→</span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
        <EnrollBar />
      </main>
      <Footer />
    </>
  );
}
