"use client";

import Link from "next/link";
import { cohorts } from "@/data/cohorts";
import { site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function Courses() {
  const program = cohorts[0];
  const featured = program.courses;

  return (
    <section id="courses" className="py-20 sm:py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 pb-10 border-b border-[var(--border)]">
          <div>
            <p className="section-label mb-3">{site.programHighlight.label}</p>
            <h2 className="section-title text-2xl sm:text-3xl">{site.programHighlight.title}</h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm max-w-sm leading-relaxed">
            {site.programHighlight.note}
          </p>
        </Reveal>

        <Stagger className="divide-y divide-[var(--border)]">
          {featured.map((course) => (
            <StaggerItem key={course.slug}>
              <Link
                href={`/courses/${course.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 sm:gap-8 py-5 items-start sm:items-center row-hover -mx-5 px-5 sm:-mx-8 sm:px-8 rounded-lg"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--accent)]">
                      {course.tag}
                    </span>
                    <span className="text-[var(--border-hover)]">·</span>
                    <span className="text-[11px] font-medium text-[var(--text-muted)]">{course.level}</span>
                  </div>
                  <h3 className="text-[15px] font-medium text-[var(--text-primary)] tracking-[-0.02em] group-hover:text-[var(--accent)] transition-colors duration-200">
                    {course.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mt-1 line-clamp-2">
                    {course.desc}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[12px] text-[var(--text-muted)] tabular-nums sm:text-right">
                  <span>{course.lessons} modules</span>
                  <span className="text-[var(--border-hover)]">·</span>
                  <span>{course.hours}h</span>
                  <span className="text-[var(--text-primary)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ml-1">
                    →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8" delay={0.1}>
          <Link
            href={`/cohorts/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] link-hover group"
          >
            View full program
            <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
