"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import CompanySlider from "@/components/CompanySlider";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import { site } from "@/data/site";
import { externalAdvisorsSection } from "@/data/team";

const teacher = site.instructorProfile;

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

// Tuned for engineering-student placement prep.
const engineeringFaqs = [
  {
    q: "Is EdgeX right for B.Tech / B.E. placements?",
    a: "Yes. The curriculum is built for engineering students targeting non-core, non-tech roles - consulting, analytics, product, FMCG, and finance - and is taught from the interviewer's perspective so you prep the way recruiters actually evaluate you.",
  },
  {
    q: "Which roles and firms does the prep target?",
    a: "Consulting, business analytics, product, and general management roles at firms like Accenture, PwC, Deloitte, ZS Associates, Mu Sigma, BCG, Bain, and McKinsey. The frameworks and mock rounds mirror how these companies screen campus candidates.",
  },
  {
    q: "Do you cover case interviews and guesstimates?",
    a: "In depth. There's a dedicated module for structured problem-solving, a large guesstimate practice bank, and mock case rounds with detailed feedback so structuring becomes second nature before placement week.",
  },
  {
    q: "Is this a live or recorded course?",
    a: "It is a hybrid format. As soon as you enroll you get instant access to recorded lectures, assignments, cheat sheets, and question banks to go through at your own pace. You can also join a live batch anytime within your access window, and book weekly GD slots whenever you feel ready.",
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
    a: "You receive 3-year extended access to all course materials, recordings, live batches, and GD slots - enough to cover your remaining college years and placement journey.",
  },
];

const courses = [
  {
    code: "A1",
    tag: "Placement",
    title: "Complete Placement Prep for Engineers",
    desc: "End-to-end preparation for non-core placements - aptitude, case interviews, GD, HR rounds, and CV. Everything an engineer needs, in one track.",
    href: "/contact",
  },
  {
    code: "A2",
    tag: "Consulting",
    title: "Consulting Fundamentals for Engineers",
    desc: "Structured problem-solving, guesstimates, and case frameworks for consulting-style interviews - taught from the interviewer's perspective.",
    href: "/contact",
  },
  {
    code: "A3",
    tag: "Combo",
    title: "Placement Essentials + Consulting Foundations Combo",
    desc: "The best of both tracks bundled together for engineers targeting consulting, analytics, and product roles at a combined price.",
    href: "/contact",
  },
  {
    code: "A4",
    tag: "Practice",
    title: "Virtual GD Labs for Engineers",
    desc: "Live, moderated group discussion practice with peers from Tier 1 & 2 colleges and structured feedback on every round.",
    href: "/contact",
  },
];

const mentoring = [
  {
    code: "A5",
    title: "1:1 Mock Interviews with Feedback",
    desc: "One-on-one mock interviews with an experienced interviewer, followed by detailed, actionable feedback.",
    href: "/contact",
  },
  {
    code: "A6",
    title: "1:1 CV Reviews",
    desc: "A personal review of your CV with line-by-line suggestions to make it shortlist-worthy for your target roles.",
    href: "/contact",
  },
  {
    code: "A7",
    title: "1:1 Career Consultation",
    desc: "A dedicated session to map your profile to the right roles, companies, and preparation plan.",
    href: "/contact",
  },
];

export default function EngineeringStudentsPage() {
  return (
    <>
      <Navbar />
      <main className="dot-page min-h-screen">

        {/* Hero - informational only, no CTAs */}
        <section className="relative overflow-hidden pt-44 pb-16 sm:pt-52 sm:pb-24 border-b border-[var(--border)]">
          {/* editorial backdrop — glow only; dots come from the page background */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="hero-glow absolute inset-x-0 top-0 h-[62%]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <p className="section-label mb-5">Engineering Students</p>
              <h1 className="section-title text-[clamp(2.5rem,6vw,4.75rem)] mb-8 max-w-[18ch]">
                Crack placement interviews with{" "}
                <span className="serif-i text-[var(--accent)]">confidence.</span>{" "}
                Land the job you deserve.
              </h1>
              <p className="text-[var(--text-primary)] text-xl sm:text-2xl font-medium tracking-[-0.02em] max-w-2xl leading-snug mb-6">
                Courses designed by experienced interviewers.
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[var(--text-secondary)] text-base sm:text-lg">
                <span>Structured Curriculum</span>
                <span className="text-[var(--border-hover)]" aria-hidden>|</span>
                <span>Pre-Recorded Classes</span>
                <span className="text-[var(--border-hover)]" aria-hidden>|</span>
                <span>Mock GD Prep</span>
              </div>
            </PageEnter>
          </div>
        </section>

        {/* Section 2 - Engineering Track */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-12">
              <p className="section-label mb-3">Track A</p>
              <h2 className="section-title text-3xl sm:text-4xl">Engineering Track</h2>
            </Reveal>

            {/* Explore EdgeX Courses */}
            <Reveal className="mb-6">
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Explore EdgeX Courses
              </h3>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] mb-16">
              {courses.map((course) => (
                <StaggerItem key={course.code} className="h-full">
                  <Link
                    href={course.href}
                    className="group relative flex h-full flex-col bg-[var(--bg-card)] p-7 sm:p-9 transition-colors duration-300 hover:bg-[var(--accent-muted)]"
                  >
                    {/* oversized ghost index — sharpens to accent on hover */}
                    <span
                      className="pointer-events-none absolute right-6 top-4 font-mono text-6xl font-bold leading-none tracking-tight text-[var(--text-primary)]/[0.05] transition-all duration-300 group-hover:text-[var(--accent)]/25"
                      aria-hidden
                    >
                      {course.code}
                    </span>

                    <span className="mb-6 inline-flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
                      {course.tag}
                    </span>

                    <h4 className="mb-2 max-w-[20ch] text-lg font-semibold leading-snug tracking-[-0.02em] text-[var(--text-primary)]">
                      {course.title}
                    </h4>
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

            {/* Book a 1:1 Session */}
            <Reveal className="mb-6">
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Book a 1:1 Session for personalized mentoring
              </h3>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {mentoring.map((item) => (
                <StaggerItem key={item.code}>
                  <Link
                    href={item.href}
                    className="group card flex flex-col rounded-xl p-6 h-full hover:border-[var(--border-hover)] transition-colors"
                  >
                    <h4 className="text-base font-semibold text-[var(--text-primary)] tracking-[-0.02em] mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                      {item.desc}
                    </p>
                    <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                      <span className="text-sm font-medium text-[var(--accent)]">Book now</span>
                      <span className="text-[var(--accent)] text-sm group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Section 3 - Company logo slider */}
        <CompanySlider />

        {/* Section 4 - Your teacher & the team behind */}
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

        {/* Section 5 - Reviews */}
        <Reviews />

        {/* Section 6 - FAQs */}
        <FAQ faqs={engineeringFaqs} />
      </main>
      <Footer />
    </>
  );
}
