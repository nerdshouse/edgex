"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import EnrollBar from "@/components/EnrollBar";
import { site } from "@/data/site";

const offerings = [
  {
    icon: "💼",
    title: "Lateral Interview Prep",
    desc: "Structured preparation for lateral hiring at consulting, strategy, product, and analytics firms. Case frameworks, guesstimates, and fit rounds.",
    href: "/contact",
    cta: "Get started →",
  },
  {
    icon: "📄",
    title: "1:1 CV Prep Support",
    desc: "Personalized CV reviews and positioning for lateral moves. Tailored for experienced professionals switching roles or industries.",
    href: "/contact",
    cta: "Book a review →",
  },
  {
    icon: "✍️",
    title: "B-School Essay Reviews",
    desc: "Essay feedback for ISB, IIM, and other top B-school applications. Story structuring, clarity, and differentiation from ISB & IIM alumni mentors.",
    href: "/contact",
    cta: "Submit essays →",
  },
  {
    icon: "🎯",
    title: "B-School Interview Prep",
    desc: "Mock interviews and preparation for B-school admission panels. Behavioral, case-lite, and goal-alignment rounds covered.",
    href: "/contact",
    cta: "Book mock →",
  },
];

const courses = [
  {
    slug: "case-interviews",
    tag: "Interview",
    title: "Case Interviews for Laterals",
    desc: "Consulting-style case prep adapted for experienced professionals - faster frameworks, sharper structuring.",
    meta: "12 lessons · 8h · Advanced",
  },
  {
    slug: "behavioral-hr",
    tag: "Interview",
    title: "Behavioral & Fit Rounds",
    desc: "Leadership narratives, career transitions, and the communication patterns lateral panels expect.",
    meta: "10 lessons · 6h · Intermediate",
  },
  {
    slug: "cv-company-research",
    tag: "Career",
    title: "CV Writing & Company Research",
    desc: "Position your experience for lateral shortlists and research target firms systematically.",
    meta: "6 lessons · 4h · Intermediate",
  },
];

export default function WorkingProfessionalsPage() {
  return (
    <>
      <Navbar />
      <main className="dot-page min-h-screen">
        {/* Hero - informational only, no CTAs */}
        <section className="relative overflow-hidden border-b border-[var(--border)] pt-44 pb-16 sm:pt-52 sm:pb-24">
          {/* editorial backdrop — glow only; dots come from the page background */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="hero-glow absolute inset-x-0 top-0 h-[62%]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <PageEnter>
              <p className="section-label mb-6">Working Professionals</p>
              <h1 className="section-title text-[clamp(2.25rem,5.5vw,4rem)] mb-6 text-balance">
                Crack Your Next Lateral Interview. Accelerate Your Career.
              </h1>
              <p className="mb-9">
                <span className="inline-block rounded-lg bg-[var(--accent)] px-3 py-1.5 text-white text-base sm:text-lg font-medium leading-relaxed text-balance">
                  Practical interview training designed by experienced interviewers from ISB &amp; IIMs
                </span>
              </p>

              <div className="flex flex-wrap justify-center gap-2.5">
                {["Structured Curriculum", "Pre-Recorded Classes", "Mock GD Prep"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-1.5 text-sm font-medium text-[var(--text-primary)] shadow-[var(--shadow-card)]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
                    {chip}
                  </span>
                ))}
              </div>
            </PageEnter>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-10">
              <p className="section-label mb-3">Core services</p>
              <h2 className="section-title text-2xl sm:text-3xl">Built for your transition</h2>
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

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-10">
              <p className="section-label mb-3">Self-paced courses</p>
              <h2 className="section-title text-2xl sm:text-3xl">Explore Online Courses</h2>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

        <EnrollBar deadline={site.liveBatches.startDate} />
      </main>
      <Footer />
    </>
  );
}
