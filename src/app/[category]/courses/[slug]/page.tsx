"use client";

import { notFound, usePathname } from "next/navigation";
import Link from "next/link";
import { use, useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { motion, AnimatePresence, ease } from "@/components/Motion";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import InstructorProfile from "@/components/InstructorProfile";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import EnrollBar from "@/components/EnrollBar";
import { getCourseBySlug } from "@/data/cohorts";

function inr(amount: number) {
  return new Intl.NumberFormat("en-IN").format(amount);
}

function ModuleItem({ index, week, topics, details, lectures, assignments, moduleHours, isOpen, onToggle, onVisible }: any) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onVisible) {
          onVisible(index);
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px"
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index, onVisible]);

  return (
    <div ref={ref} className="group flex items-stretch gap-3 min-h-[40px]">
      <span className="mt-0.5 relative overflow-hidden grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white tabular-nums transition-colors duration-300">
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">{index}</span>
        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">{index}</span>
      </span>
      <div className="flex-1 overflow-hidden rounded-lg border border-[var(--border)] transition-colors duration-300 group-hover:border-[var(--border-hover)]">
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 bg-[var(--bg-card)] px-5 py-4 text-left transition-colors duration-300 group-hover:bg-[var(--bg-secondary)]"
        >
          <div className="relative overflow-hidden w-full">
            <span className="block text-sm font-medium text-[var(--text-primary)] transition-transform duration-500 ease-out group-hover:-translate-y-[110%]">{week}</span>
            <span className="absolute inset-0 text-sm font-medium text-[var(--text-primary)] translate-y-[110%] transition-transform duration-500 ease-out group-hover:translate-y-0" aria-hidden>{week}</span>
          </div>
          <div className="relative h-4 w-4 shrink-0 text-[var(--text-muted)]">
            <span className="absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 bg-current" />
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-0 left-1/2 h-full w-[1.5px] -translate-x-1/2 bg-current"
            />
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="px-6 py-6 text-sm text-[var(--text-secondary)] border-t border-[var(--border)] bg-[var(--bg-card)] min-h-[35vh]"
              >
                {details && <p className="mb-6 leading-relaxed text-[var(--text-primary)]">{details}</p>}
                {topics && topics.length > 0 && (
                  <ul className="flex flex-col gap-2 mb-6">
                    {topics.map((t: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
                {(lectures || assignments || moduleHours) && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--border)] text-xs font-medium text-[var(--text-muted)] uppercase tracking-[0.05em]">
                    {lectures && <span>{lectures} Lectures</span>}
                    {assignments && <span>{assignments} Assignments</span>}
                    {moduleHours && <span>{moduleHours} Hours</span>}
                  </div>
                )}
              </motion.div>
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

export default function CoursePage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const { category, slug } = use(params);
  const pathname = usePathname();
  const result = getCourseBySlug(slug);
  const [openModuleIndex, setOpenModuleIndex] = useState(1);

  // Force scroll to top on mount, bypassing Next.js scroll restoration and CSS smooth scrolling
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!result) notFound();
  const { course, cohort } = result;

  const price = course.price ?? cohort.price;
  const access = course.access ?? `${cohort.duration}`;

  let backHref = `/${category}`;
  let backText = category.replace(/-/g, ' ').toUpperCase();

  if (category === "cohorts") {
    backHref = `/cohorts/${cohort.slug}`;
    backText = cohort.title;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-20">

        {/* Section 1 — Modules included + info panel */}
        <section className="py-8 border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <Link
                href={backHref}
                className="link-hover group mb-8 inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
                {backText}
              </Link>

              {/* Title bar */}
              <div className="mb-10 sm:mb-12">
                <h1 className="inline-block rounded-lg bg-[var(--accent)] px-3 py-1 text-white text-[clamp(2rem,4.5vw,3.5rem)] font-medium tracking-[-0.02em] leading-snug">{course.title}</h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-6xl mt-2">{course.desc}</p>
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

                  <Stagger className="flex flex-col gap-6 relative">
                    {course.curriculum.map((item, i) => (
                      <StaggerItem key={item.week} className="z-10">
                        <ModuleItem
                          index={i + 1}
                          week={item.week}
                          topics={item.topics}
                          details={item.details}
                          lectures={item.lectures}
                          assignments={item.assignments}
                          moduleHours={item.moduleHours}
                          isOpen={openModuleIndex === i + 1}
                          onToggle={() => setOpenModuleIndex(openModuleIndex === i + 1 ? -1 : i + 1)}
                          onVisible={setOpenModuleIndex}
                        />
                      </StaggerItem>
                    ))}
                  </Stagger>

                  {(course.callout || course.notCovered) && (
                    <div className="mt-6 rounded-lg border border-dashed border-[var(--border)] bg-[var(--bg-secondary)] px-5 py-4 text-[13px] text-[var(--text-secondary)] shadow-sm relative z-20">
                      <span className="font-semibold text-[var(--text-primary)]">Note: </span>
                      {course.callout || course.notCovered}
                    </div>
                  )}
                </div>

                {/* RIGHT — Info panel */}
                <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto no-scrollbar pb-4">
                  <InfoCard label="Taught by" value={course.instructor} />

                  {course.inclusions && course.inclusions.length > 0 && (
                    <div className="card rounded-xl px-6 py-5 text-center flex flex-col gap-4">
                      {course.inclusions.map((inc: any, i: number) => (
                        <div key={i}>
                          <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                            {inc.category}
                          </div>
                          <div className="text-[13px] font-medium leading-snug text-[var(--text-primary)]">
                            {inc.access}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {course.addons && course.addons.length > 0 && (
                    course.addons.map((addon: string, i: number) => (
                      <InfoCard key={i} label="Add Ons" value={addon} />
                    ))
                  )}

                  <div className="card rounded-xl px-6 py-6 text-center">
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      Price
                    </div>
                    <div className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                      {price ? `₹${inr(price)}` : "On request"}
                    </div>
                  </div>

                  <Link
                    href={course.enrollHref || "/contact"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-1 block rounded-full px-6 py-3 text-center text-sm"
                  >
                    Enroll in this course →
                  </Link>
                </div>
              </div>
            </PageEnter>
          </div>
        </section>

        {/* Section 2 — Instructor profile */}
        <InstructorProfile />

        {/* Section 3 — Course trailer & demo class videos */}
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

        {/* Section 4 — What to expect (Journey/Timeline) */}
        {course.journey && course.journey.length > 0 && (
          <section className="py-14 sm:py-20 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <Reveal className="max-w-3xl">
                <p className="section-label mb-3">Timeline</p>
                <h2 className="mb-10 text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                  What to expect when you join
                </h2>

                <div className="relative pl-6 sm:pl-8">
                  {/* Vertical line */}
                  <div className="absolute left-[9px] sm:left-[7px] top-2 bottom-2 w-px bg-[var(--border)]" aria-hidden />

                  <ul className="flex flex-col gap-10">
                    {course.journey.map((step, i) => (
                      <li key={i} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-[20px] sm:-left-[30px] top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg-secondary)]" aria-hidden />

                        <div className="flex flex-col gap-1.5">
                          <h3 className="text-[15px] sm:text-base font-medium text-[var(--text-primary)] leading-snug">
                            {step.title}
                          </h3>
                          {step.timeframe && (
                            <span className="inline-flex w-fit items-center rounded-md border border-[var(--border)] bg-[var(--bg-card)] px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.06em] text-[var(--text-secondary)] shadow-sm">
                              {step.timeframe}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        <Reviews />
        {course.faqs && course.faqs.length > 0 && (
          <FAQ faqs={course.faqs} />
        )}
        <EnrollBar href={course.enrollHref} />
      </main>
      <Footer />
    </>
  );
}
