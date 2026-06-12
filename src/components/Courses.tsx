"use client";

import Link from "next/link";
import { cohorts } from "@/data/cohorts";
import { site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function Courses() {
  const program = cohorts[0];
  const featured = program.courses;

  return (
    <section id="courses" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-5">{site.programHighlight.label}</p>
            <h2 className="section-title text-[clamp(1.875rem,4vw,3.25rem)]">
              {site.programHighlight.title}
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm max-w-sm leading-relaxed sm:text-right sm:pb-1">
            {site.programHighlight.note}
          </p>
        </Reveal>

        <Stagger className="border-t border-[var(--border)]">
          {featured.map((course, i) => (
            <StaggerItem key={course.slug}>
              <Link
                href={`/courses/${course.slug}`}
                className="group grid grid-cols-[auto_1fr] sm:grid-cols-[3.5rem_1fr_auto] gap-x-5 sm:gap-x-8 gap-y-2 py-7 sm:py-8 items-baseline border-b border-[var(--border)] transition-colors duration-300 hover:bg-[var(--bg-secondary)] -mx-5 px-5 sm:-mx-8 sm:px-8"
              >
                <span className="index-num transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[var(--text-primary)] tracking-[-0.03em] mb-1.5 transition-transform duration-300 group-hover:translate-x-1">
                    {course.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xl line-clamp-2">
                    {course.desc}
                  </p>
                  <div className="flex items-center gap-2.5 mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    <span className="text-[var(--accent)]">{course.tag}</span>
                    <span aria-hidden>/</span>
                    <span>{course.level}</span>
                    <span aria-hidden>/</span>
                    <span className="tabular-nums">{course.lessons} modules · {course.hours}h</span>
                  </div>
                </div>
                <span
                  className="hidden sm:flex self-center w-10 h-10 rounded-full border border-[var(--border)] items-center justify-center text-[var(--text-muted)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white group-hover:-rotate-45"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10" delay={0.1}>
          <Link
            href={`/cohorts/${program.slug}`}
            className="u-link inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-primary)]"
          >
            View full program <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
