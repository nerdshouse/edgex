"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import EnrollBar from "@/components/EnrollBar";
import { site } from "@/data/site";

const courses = [
  {
    slug: "case-interviews",
    tag: "Interview",
    title: "Case Interviews & Guesstimates",
    desc: "Structured frameworks for consulting-style case questions and guesstimate problems — taught from the interviewer's perspective.",
    meta: "12 lessons · 8h · Intermediate",
  },
  {
    slug: "behavioral-hr",
    tag: "Interview",
    title: "Behavioral & HR Interview Prep",
    desc: "Master behavioral questions, HR rounds, and the communication patterns that get candidates hired.",
    meta: "10 lessons · 6h · Beginner",
  },
  {
    slug: "business-fundamentals",
    tag: "Core",
    title: "Business Fundamentals",
    desc: "Core business concepts, industry knowledge, and mental models needed for consulting, analytics, and management roles.",
    meta: "14 lessons · 10h · Beginner",
  },
  {
    slug: "cv-company-research",
    tag: "Career",
    title: "CV Writing & Company Research",
    desc: "Build a shortlist-worthy CV and research companies systematically for consulting, analytics, product, and finance roles.",
    meta: "6 lessons · 4h · Beginner",
  },
];

const offerings = [
  {
    icon: "🎓",
    title: "Live 3-Month Batches",
    desc: "Enroll into a structured instructor-led cohort anytime within your 3-year access window. Next batch starts 13 June 2026.",
    href: "/live-batches",
    cta: "View schedule →",
  },
  {
    icon: "🗣️",
    title: "Weekly GD Practice Slots",
    desc: "Book group discussion slots every week. Anonymous, roll-number based participation with video-on with peers from Tier 1 & 2 colleges.",
    href: "/contact",
    cta: "Reserve a slot →",
  },
  {
    icon: "📄",
    title: "Demo Class Preview",
    desc: "Watch clips from actual EdgeX Foundations classes before you commit. Get a feel for the teaching style and curriculum depth.",
    href: "/demo",
    cta: "Watch now →",
  },
  {
    icon: "🤝",
    title: "EdgeX Corporate Club",
    desc: "Exclusive lifetime access to networking events with alumni from IIM, IIT, and NIT. Optional 1:1 mock interview add-ons available.",
    href: "/contact",
    cta: "Learn more →",
  },
];

export default function EngineeringStudentsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-28">

        {/* Hero */}
        <section className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <p className="section-label mb-5">Engineering Students</p>
              <h1 className="section-title text-[clamp(2.5rem,6vw,4.75rem)] mb-6 max-w-[16ch]">
                Crack your placement interviews with{" "}
                <span className="serif-i text-[var(--accent)]">confidence.</span>
              </h1>
              <p className="text-[var(--text-secondary)] text-base max-w-xl leading-relaxed mb-9">
                EdgeX Foundations is built for B.Tech and B.E. students targeting non-core, non-tech roles — consulting, analytics, product, FMCG, and finance. Taught from the interviewer&apos;s perspective.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn-primary text-sm px-6 py-3 rounded-full">
                  Enroll Now →
                </Link>
                <Link href="/demo" className="u-link text-sm font-medium text-[var(--text-primary)] px-2 py-2.5">
                  Watch demo class
                </Link>
              </div>
            </PageEnter>
          </div>
        </section>

        {/* Section 1 — Explore Online Courses */}
        <section className="py-16 sm:py-20 border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-10">
              <p className="section-label mb-3">What you&apos;ll learn</p>
              <h2 className="section-title text-2xl sm:text-3xl">Explore Online Courses</h2>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.map((course) => (
                <StaggerItem key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="group card flex flex-col rounded-xl p-6 h-full hover:border-[var(--border-hover)] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-medium text-[var(--accent)] bg-[var(--accent-muted)] px-2 py-0.5 rounded-md">
                        {course.tag}
                      </span>
                      <span className="text-[11px] text-[var(--text-muted)]">{course.meta}</span>
                    </div>
                    <h3 className="text-[15px] font-semibold text-[var(--text-primary)] tracking-[-0.02em] mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                      {course.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                      {course.desc}
                    </p>
                    <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                      <span className="text-xs text-[var(--text-muted)]">Punita Shrivastava</span>
                      <span className="text-[var(--accent)] text-sm group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Section 2 — Other Important Offerings */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-10">
              <p className="section-label mb-3">Beyond the curriculum</p>
              <h2 className="section-title text-2xl sm:text-3xl">Other Important Offerings</h2>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offerings.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="card rounded-xl p-6 h-full flex flex-col">
                    <div className="text-2xl mb-4">{item.icon}</div>
                    <h3 className="text-[15px] font-semibold text-[var(--text-primary)] tracking-[-0.02em] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                      {item.desc}
                    </p>
                    <div className="mt-5 pt-4 border-t border-[var(--border)]">
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-[var(--accent)] hover:underline underline-offset-2 transition-colors"
                      >
                        {item.cta}
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <EnrollBar deadline={site.liveBatches.startDate} />
      </main>
      <Footer />
    </>
  );
}
