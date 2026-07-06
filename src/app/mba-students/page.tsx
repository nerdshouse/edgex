"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanySlider from "@/components/CompanySlider";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { site } from "@/data/site";
import { externalAdvisorsSection } from "@/data/team";

const teacher = site.instructorProfile;

// Overlaps with the homepage FAQs, but tuned for MBA placement season.
const mbaFaqs = [
  {
    q: "Is EdgeX right for MBA summer and final placements?",
    a: "Yes. The curriculum is built around B-school placement cycles - cases, guesstimates, group discussions, and behavioral rounds - so you can prep for both summer internships and final placements from the interviewer's perspective.",
  },
  {
    q: "Which roles and firms does the prep target?",
    a: "Consulting, strategy, business analytics, product, and general management roles. The frameworks and mock rounds are modeled on how top consulting and strategy firms actually evaluate candidates.",
  },
  {
    q: "Do you cover case interviews and guesstimates?",
    a: "In depth. There's a dedicated module for structured problem-solving, a large guesstimate practice bank, and mock case rounds with detailed feedback so structuring becomes second nature before placement week.",
  },
  {
    q: "Is this a live or recorded course?",
    a: "It is a hybrid format. As soon as you enroll you get instant access to 40+ recorded lectures, assignments, cheat sheets, and question banks to go through at your own pace. You can also join a live batch anytime within your access window, and book weekly GD slots whenever you feel ready.",
  },
  {
    q: "Are mock interviews and GDs included?",
    a: 'Weekly mock GD slots with peer cohorts and feedback are included. 1:1 mock interviews with detailed feedback reports are available as an add-on, and every student gets lifetime access to "The EdgeX Corporate Club" for networking.',
  },
  {
    q: "Will my participation be anonymous?",
    a: "Yes. Your enrollment is completely private and is not revealed to other students. GD participation is roll-number based, so your name and credentials are not shared with peers.",
  },
  {
    q: "How long is my access valid?",
    a: "You receive 3-year extended access to all course materials, recordings, live batches, and GD slots - enough to cover your entire MBA and placement journey.",
  },
];

const teamBehind = [
  {
    name: "Anshul Kothari",
    credential: "Co-Founder · ISB Co'18",
    image: "/media/team/anshul.png",
    initials: "AK",
  },
  ...externalAdvisorsSection.advisors,
  {
    name: "Sathvik Aradhya",
    credential: "Program Manager",
    image: "/media/team/core/sathvik-aradhya.png",
    initials: "SA",
  },
  {
    name: "Esha Kumari",
    credential: "Program Manager",
    image: "/media/team/core/esha-kumari.png",
    initials: "EK",
  },
];

const mbaCourses = [
  {
    tag: "Package",
    title: "B-School Placement Essentials",
    desc: "The core placement toolkit - cases, guesstimates, HR rounds, and CV prep mapped to B-school hiring cycles.",
    meta: "Placement track",
    href: "/mba-students/courses/placement-foundations-2026",
  },
  {
    tag: "Advanced",
    title: "Consulting Advanced for B-Schools",
    desc: "Deep consulting frameworks, industry deep-dives, and structured problem-solving for strategy and consulting roles.",
    meta: "Consulting track",
    href: "/mba-students/courses/consulting-advanced-2026",
  },
  {
    tag: "Combo",
    title: "B-School Placement Essentials + Consulting Advanced",
    desc: "Placement Essentials and Consulting Advanced together - the complete prep stack at a bundled price.",
    meta: "Best value",
    href: "/mba-students/courses/placement-combo-2026",
  },
  {
    tag: "GD Labs",
    title: "EdgeX GD Labs",
    desc: "Live group-discussion labs with peer cohorts and interviewer-grade feedback on every round.",
    meta: "Live practice",
    href: "/mba-students/courses/gd-labs",
  },
];

const sessions = [
  {
    title: "1:1 Mock Interviews with Feedback",
    desc: "Full-length mock interviews with EdgeX mentors, followed by a structured, actionable feedback report.",
    href: "/contact",
    cta: "Book a session",
  },
  {
    title: "1:1 CV Reviews",
    desc: "Line-by-line CV review to make your profile consulting- and placement-ready before applications open.",
    href: "/contact",
    cta: "Book a review",
  },
  {
    title: "1:1 Career Consultation",
    desc: "One-on-one guidance on role targeting, firm selection, and building your placement-season strategy.",
    href: "/contact",
    cta: "Book a call",
  },
];

export default function MBAStudentsPage() {
  return (
    <>
      <Navbar />
      <main className="dot-page min-h-screen">
        <section className="relative overflow-hidden border-b border-[var(--border)] pt-44 pb-16 sm:pt-52 sm:pb-24">
          {/* editorial backdrop — glow only; dots come from the page background */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="hero-glow absolute inset-x-0 top-0 h-[62%]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <PageEnter>
              <p className="section-label mb-6">MBA Students</p>
              <h1 className="section-title text-[clamp(2.25rem,5.5vw,4rem)] mb-6 text-balance">
                Ace your summer internship &amp;{" "}
                <span className="text-[var(--accent)]">final placements.</span>
              </h1>
              <p className="mb-9">
                <span className="inline-block rounded-lg bg-[rgb(96,4,4)] px-3 py-1.5 text-white text-base sm:text-lg font-medium leading-relaxed text-balance">
                  Focused interview preparation and consulting readiness, taught by ISB &amp; IIM alumni.
                </span>
              </p>

              <div className="flex flex-wrap justify-center gap-2.5 mb-10">
                {["Structured curriculum", "Pre-recorded classes", "Mock GD prep"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-1.5 text-sm font-medium text-[var(--text-primary)] shadow-[var(--shadow-card)]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
                    {chip}
                  </span>
                ))}
              </div>

              <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] mb-16">
                {mbaCourses.map((course) => (
                  <StaggerItem key={course.title} className="h-full">
                    <Link
                      href={course.href}
                      className="group relative flex h-full flex-col bg-[var(--bg-card)] p-7 text-left sm:p-9 transition-colors duration-300 hover:bg-[var(--accent-muted)]"
                    >
                      <span className="mb-6 inline-flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
                        {course.tag}
                      </span>

                      <h3 className="mb-2 max-w-[20ch] text-lg font-semibold leading-snug tracking-[-0.02em] text-[var(--text-primary)]">
                        {course.title}
                      </h3>
                      <p className="mb-9 max-w-[44ch] text-sm leading-relaxed text-[var(--text-secondary)]">
                        {course.desc}
                      </p>

                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                        <span className="relative">
                          View course
                          <span
                            className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100"
                            aria-hidden
                          />
                        </span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </PageEnter>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-8">
              <p className="section-label mb-3">Personalized mentoring</p>
              <h2 className="section-title text-2xl sm:text-3xl">Book a 1:1 Session</h2>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {sessions.map((item, i) => (
                <StaggerItem key={item.title}>
                  <Link
                    href={item.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_18px_44px_-18px_rgba(96,4,4,0.45)]"
                  >
                    {/* accent bar that grows on hover */}
                    <span
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      style={{ background: "linear-gradient(90deg, #600404, #7d0606)" }}
                      aria-hidden
                    />
                    <div className="mb-5 flex items-center justify-between">
                      <span
                        className="grid h-10 w-10 place-items-center rounded-xl text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(96,4,4,0.7)] transition-transform duration-300 group-hover:scale-110"
                        style={{ background: "linear-gradient(155deg, #2a0808 0%, #600404 100%)" }}
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="index-num shrink-0">1:1</span>
                    </div>
                    <h3 className="mb-2 text-base font-semibold tracking-[-0.02em] text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                      {item.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.desc}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
                      <span className="text-sm font-semibold text-[var(--accent)]">{item.cta}</span>
                      <span className="text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>→</span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <CompanySlider />

        <section className="py-16 sm:py-24 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-10 sm:mb-12">
              <p className="section-label mb-4">Your teacher</p>
              <h2 className="section-title text-2xl sm:text-3xl">
                The people who&apos;ll prepare you
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 items-start">
              {/* LEFT — Your Teacher (highlight) */}
              <Reveal className="tick-frame h-full">
                <span className="tick-b" aria-hidden />
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] shadow-[var(--shadow-card)] sm:flex-row">
                  <div className="relative h-64 shrink-0 bg-[var(--bg-secondary)] sm:h-auto sm:w-52">
                    <Image
                      src="/media/team/punita.png"
                      alt="Punita Shrivastava"
                      fill
                      sizes="(min-width: 640px) 208px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="section-label mb-4">{teacher.label}</p>
                    <h3 className="section-title text-2xl mb-1.5">{teacher.name}</h3>
                    <p className="text-sm text-[var(--text-muted)] mb-6">
                      {teacher.education.join(" · ")}
                    </p>

                    <blockquote className="mb-7 text-lg font-medium leading-snug tracking-[-0.02em] text-[var(--text-primary)]">
                      {teacher.quote}{" "}
                      <span className="serif-i text-[var(--accent)]">{teacher.quoteAccent}</span>
                    </blockquote>

                    <div className="mt-auto">
                      <p className="mb-3 inline-block rounded-md bg-[var(--accent-muted)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--accent)]">
                        {teacher.interviewed.label}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {teacher.interviewed.roles.map((r) => (
                          <span
                            key={r.company}
                            className="rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]"
                          >
                            {r.company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>

              {/* RIGHT — Meet the team behind (smaller) */}
              <div>
                <div className="mb-7 flex items-baseline gap-3">
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                    Meet the team behind
                  </h3>
                  <span className="h-px flex-1 bg-[var(--border)]" aria-hidden />
                  <span className="index-num shrink-0">The team</span>
                </div>

                <Stagger className="grid grid-cols-3 gap-x-4 gap-y-7">
                  {teamBehind.map((member) => (
                    <StaggerItem key={member.name}>
                      <div className="group flex flex-col items-center text-center">
                        <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full border-2 border-[var(--accent)]/60 bg-[var(--bg-secondary)] transition-colors duration-200 group-hover:border-[var(--accent)]">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="68px"
                            className="object-cover object-top"
                          />
                        </div>
                        <p className="mt-2.5 text-[13px] font-semibold leading-tight text-[var(--text-primary)]">
                          {member.name}
                        </p>
                        <p className="mt-0.5 text-[11px] leading-tight text-[var(--text-muted)]">
                          {member.credential}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </section>

        <Reviews />

        <FAQ faqs={mbaFaqs} />
      </main>
      <Footer />
    </>
  );
}
