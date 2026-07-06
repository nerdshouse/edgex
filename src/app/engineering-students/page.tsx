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
    q: "How are the Engineering courses different from the MBA courses?",
    a: "The Engineering courses have been specifically designed for students transitioning into business careers from an engineering background. Unlike MBA students, engineers may have limited prior exposure to business concepts, management terminology, or structured business problem-solving. The curriculum therefore introduces these concepts progressively, using engineering-relevant examples and additional context wherever required. While the learning journey is adapted for engineers, the courses are designed to build the level of business thinking, structured problem-solving, and interview readiness expected for business placements.",
  },
  {
    q: "What is the difference between Placement Foundations and ConsultPro?",
    a: "Placement Foundations is designed as the core interview preparation program for engineers aspiring to consulting, product management, analytics, strategy, operations, and other business roles. It covers structured problem-solving, behavioural interviews, HR interviews, business thinking, interview preparation strategy, and also includes two complimentary EdgeX GD Labs sessions for practical group discussion experience.\n\nConsultPro is a specialized program for students targeting consulting and strategy roles. It focuses on case interviews, guesstimates, consulting frameworks, structured thinking, communication, and rigorous case preparation.\n\nStudents targeting consulting firms are encouraged to consider the Placement Foundations + ConsultPro Combo, which combines both programs into one comprehensive preparation pathway.",
  },
  {
    q: "I am targeting consulting. Should I only purchase ConsultPro?",
    a: "ConsultPro is designed specifically for consulting interview preparation. However, consulting recruiters also evaluate behavioural interviews, communication, business judgement, leadership potential, and overall interview performance—areas that are covered extensively in Placement Foundations. Students seriously targeting consulting and strategy roles are therefore encouraged to consider the Placement Foundations + ConsultPro Combo for the most comprehensive preparation.",
  },
  {
    q: "I am not targeting consulting. Is Placement Foundations sufficient?",
    a: "Yes. Placement Foundations has been designed as a role-agnostic interview preparation program for engineers aspiring to business careers. It is relevant for students targeting product management, analytics, finance, marketing, operations, general management, consulting, and other non-technical business roles. The concepts taught are transferable across a wide range of placement interviews.",
  },
  {
    q: "Why are these courses designed around interview skills rather than specific companies?",
    a: "While every recruiter has its own interview process, the underlying skills they assess are remarkably consistent—structured thinking, business judgement, communication, problem-solving, and professionalism. EdgeX focuses on developing these transferable skills, enabling students to perform confidently across interviews for consulting, product, analytics, operations, strategy, and other business roles.",
  },
  {
    q: "Why should I choose EdgeX instead of preparing through YouTube, AI tools or Casebooks?",
    a: "YouTube videos, AI tools and Casebooks are excellent resources for learning individual concepts and practicing cases. However, successful interview preparation requires much more than isolated resources. EdgeX combines a structured curriculum with interviewer perspectives, guided case demonstrations, curated casebooks and learning resources, behavioural interview preparation, interview strategy, practical business examples, and live practice opportunities—bringing together everything required for business-focused placement preparation in one place.",
  },
  {
    q: "How is the curriculum designed?",
    a: "EdgeX courses have been developed by combining practical industry experience, interviewer insights, structured interview preparation methodologies, and real placement preparation experience. Rather than compiling isolated interview tips, the curriculum has been designed as a progressive learning journey that builds concepts systematically. Throughout the development process, experienced recruiters, industry professionals, and external advisors were consulted to help validate the breadth and completeness of the curriculum.",
  },
  {
    q: "Will the curriculum continue to be updated?",
    a: "Yes. At EdgeX, curriculum development is an ongoing process rather than a one-time effort. We continuously review our courses to ensure the content remains current, relevant, and aligned with evolving recruitment practices and industry expectations. Based on student feedback, recruiter insights, and emerging interview trends, we regularly enhance existing modules, introduce new lectures, expand practice material, and refine the overall learning experience to deliver the highest quality preparation possible.",
  },
];

const courses = [
  {
    tag: "Foundations (Role Agnostic)",
    status: "Pre-launch Enrolments",
    code: "E1",
    title: "Placement Foundations for Engineers",
    desc: "Core skills required for business-focused campus placements, from role-agnostic structured problem-solving and behavioural interviews to HR rounds, business fundamentals, and professional communication",
    href: "/contact",
  },
  {
    tag: "Consulting/Strategy/Business Analytics",
    status: "Pre-launch Enrolments",
    code: "E2",
    title: "ConsultPro for Engineers",
    desc: "Everything required to excel in consulting interviews, including advanced case preparation, guesstimates, consulting frameworks, structured thinking & communication, and case interview demonstrations.",
    href: "/contact",
  },
  {
    tag: "Combo",
    status: "Pre-launch Enrolments",
    code: "E3",
    title: "Placement Foundations + Consulting Pro Combo for Engineers",
    desc: "Complete prep for engineers seeking business roles, combining role-agnostic interview foundations with advanced consulting and strategy interview preparation in one comprehensive program.",
    href: "/contact",
  },
  {
    tag: "Practice",
    status: "Ongoing",
    code: "E4",
    title: "EdgeX GD Labs",
    desc: "Practice group discussions through live virtual sessions with targeted feedback, peer learning and realistic placement-style GD simulations.",
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
              <p className="section-label mb-5">Top B.Tech/B.E. Placements (Tier 1 & Tier 2)</p>
              <h1 className="section-title text-[clamp(2.5rem,6vw,4.75rem)] mb-8 max-w-[18ch]">
                Crack placement interviews with confidence.
                <span className="block text-[0.42em] font-normal tracking-[-0.01em] text-[var(--accent)] mt-3">
                  Curated courses for Engineers aspiring to consulting, analytics, strategy, operations, and other business careers.
                </span>
              </h1>
              <p className="mb-6">
                <span className="inline-block rounded-lg bg-[var(--accent)] px-3 py-1.5 text-white text-xl sm:text-2xl font-medium tracking-[-0.02em] leading-snug">
                  Courses designed by experienced recruiters and senior corporate professionals.
                </span>
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[var(--text-secondary)] text-base sm:text-lg">
                <span>Structured Curriculum</span>
                <span className="text-[var(--border-hover)]" aria-hidden>|</span>
                <span>Self-Paced Learning</span>
                <span className="text-[var(--border-hover)]" aria-hidden>|</span>
                <span>Live GD & Interview Practice</span>
              </div>
            </PageEnter>
          </div>
        </section>

        {/* Section 2 - Engineering Track */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-12">
              <h2 className="section-title text-3xl sm:text-4xl">Business Roles Interview & GD prep for Engineers</h2>
            </Reveal>

            {/* Explore EdgeX Courses */}
            <Reveal className="mb-6">
              <h3 className="font-mono text-sm sm:text-base font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Explore Courses
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

                    <div className="mb-6 flex flex-wrap items-center gap-2">
                      <span className="inline-flex w-fit items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
                        {course.tag}
                      </span>
                      {course.status && (
                        <span className="inline-flex items-center rounded-full border border-[var(--accent)]/25 bg-[var(--accent-muted)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--accent)]">
                          {course.status}
                        </span>
                      )}
                    </div>

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
              <h3 className="font-mono text-sm sm:text-base font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
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
