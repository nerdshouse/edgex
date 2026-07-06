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

const workingProfessionalsFaqs = [
  {
    q: "What is the difference between Lateral Interview Essentials and ConsultPro?",
    a: "Lateral Interview Essentials is designed as the core interview preparation program for professionals preparing for lateral opportunities across product management, strategy, operations, finance, marketing, analytics, consulting, and other business and leadership roles. It develops structured problem-solving, behavioural and leadership interviews, business thinking, executive communication, stakeholder management, and interview strategy. It also includes complimentary mock interview sessions for practical application.\n\nConsultPro is a specialized program for professionals targeting consulting and strategy roles. It focuses on advanced case interviews, guesstimates, consulting frameworks, structured thinking, and consulting-specific interview preparation.\n\nProfessionals targeting consulting or strategy roles are encouraged to consider the Interview Essentials + ConsultPro Combo, which combines both programs into one comprehensive preparation pathway.",
  },
  {
    q: "I am targeting consulting. Should I only purchase ConsultPro?",
    a: "ConsultPro focuses specifically on consulting interviews. However, consulting firms also evaluate leadership, behavioural interviews, stakeholder management, communication, and business judgement areas developed extensively through Lateral Interview Essentials. For professionals seriously pursuing consulting and strategy roles, we recommend the Combo for the most comprehensive preparation.",
  },
  {
    q: "I am not targeting consulting. Is Lateral Interview Essentials sufficient?",
    a: "Yes. Lateral Interview Essentials has been designed as a role-agnostic interview preparation program for professionals pursuing business and leadership roles. The concepts taught are applicable across product management, operations, finance, marketing, analytics, general management, consulting, and a wide range of business functions.",
  },
  {
    q: "Why are these courses designed around interview skills rather than specific companies?",
    a: "While every organization has its own interview process, the underlying competencies they assess remain remarkably consistent. Hiring managers evaluate structured thinking, business judgement, communication, leadership potential, stakeholder management, and problem-solving regardless of the company. EdgeX focuses on developing these transferable skills, enabling professionals to perform confidently across a wide range of business interviews.",
  },
  {
    q: "Why should I choose EdgeX instead of preparing through YouTube, AI tools or online resources?",
    a: "YouTube, AI tools, and online resources are valuable for learning concepts and practicing interview questions. However, successful lateral interview preparation requires much more than isolated resources. EdgeX combines a structured curriculum with interviewer perspectives, guided case demonstrations, curated learning resources, behavioural and leadership interview preparation, executive communication, interview strategy, and practical business examples, bringing together everything required to prepare confidently for business and leadership interviews.",
  },
  {
    q: "How have the courses been designed?",
    a: "EdgeX courses have been developed by combining practical industry experience, interviewer insights, structured interview methodologies, and extensive interview preparation experience. Rather than compiling isolated interview tips, the curriculum has been designed as a progressive learning journey that builds concepts systematically. Throughout the development process, experienced recruiters, industry professionals, and external advisors were consulted to validate the breadth, relevance, and completeness of the curriculum.",
  },
  {
    q: "Are these courses only useful for consulting interviews?",
    a: "No. While ConsultPro has been designed primarily for management and strategy consulting interviews, the interview skills developed through both programs, including structured thinking, executive communication, business judgement, behavioural interviewing, and problem-solving are transferable across product management, strategy, operations, finance, analytics, and many other business and leadership roles.",
  },
  {
    q: "Will the course content continue to be updated?",
    a: "Yes. At EdgeX, curriculum development is an ongoing process rather than a one-time effort. We continuously review our courses to ensure the content remains current, relevant, and aligned with evolving hiring practices and industry expectations. Based on recruiter insights, student feedback, and emerging interview trends, we regularly enhance existing modules, introduce new lectures, expand learning resources, and refine the overall learning experience to deliver the highest quality preparation possible.",
  },
];

const offerings = [
  {
    code: "W4",
    title: "1:1 CV Prep Support & Reviews",
    desc: "Craft a compelling, interview-ready CV with personalized guidance on positioning your experiences for your target roles",
    href: "/contact",
  },
  {
    code: "W5",
    title: "1:1 Mock Interview with Feedback",
    desc: "Simulate real interviews and receive actionable feedback to strengthen your communication, confidence, and interview performance.",
    href: "/contact",
  },
  {
    code: "W6",
    title: "Essay Writing Support for B-Schools",
    desc: "Develop authentic and impactful application essays with personalized guidance through every stage of the writing process.",
    href: "/contact",
  },
  {
    code: "W7",
    title: "1:1 Career Guidance Consultation",
    desc: "Get personalized guidance on career decisions, job transitions, MBA planning, and interview preparation from experienced industry professionals.",
    href: "/contact",
  },
];

const courses = [
  {
    tag: "Foundations",
    status: "Pre-launch Enrolments",
    code: "L1",
    title: "Lateral Interview Essentials (Business & Leadership Roles)",
    desc: "Core skills required for lateral interviews, focusing on role-agnostic structured problem-solving, behavioural and leadership interviews, business thinking, structured communication, executive presence, stakeholder management, and interview strategy. Includes complimentary mock interview sessions.",
    href: "/courses/case-interviews",
  },
  {
    tag: "Consulting/Strategy/Business Analytics",
    status: "Pre-launch Enrolments",
    code: "L2",
    title: "ConsultPro for Working Professionals",
    desc: "Everything required to excel in Consulting and Strategy interviews, including advanced Case Prep, Guesstimates, Core Consulting Frameworks and their applications, Structured Thinking & Communication. Also includes multiple case interview demonstrations with T1 B-School Alums.",
    href: "/courses/behavioral-hr",
  },
  {
    tag: "Combo",
    status: "Pre-launch Enrolments",
    code: "L3",
    title: "Interview Essentials + ConsultPro Combo",
    desc: "Complete preparation for lateral interviews, combining role-agnostic interview foundations with advanced consulting and strategy interview preparation in one comprehensive program.",
    href: "/courses/cv-company-research",
  },
];

export default function WorkingProfessionalsPage() {
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
              <p className="section-label mb-5">Lateral Job Interviews</p>
              <h1 className="section-title text-[clamp(2.5rem,6vw,4.75rem)] mb-8 max-w-[22ch]">
                Ace your next lateral switch with structured interview preparation.
                <span className="block text-[0.42em] font-normal tracking-[-0.01em] text-[var(--accent)] mt-3">
                  Prepare with experts. Perform with confidence. Ace your Interviews.
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
                <span>Mock Interview Practice</span>
              </div>
            </PageEnter>
          </div>
        </section>

        {/* Section 2 - Working Professionals Track */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-12">
              <h2 className="section-title text-3xl sm:text-4xl">Business Roles Interview Prep for working professionals</h2>
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
                    {/* oversized ghost index */}
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

            {/* Core Services / Mentoring */}
            <Reveal className="mb-6">
              <h3 className="font-mono text-sm sm:text-base font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Core services &amp; Mentoring
              </h3>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {offerings.map((item) => (
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
        <FAQ faqs={workingProfessionalsFaqs} />

      </main>
      <Footer />
    </>
  );
}
