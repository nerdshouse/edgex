"use client";

import Link from "next/link";
import { motion, useReducedMotion, ease, stagger, fadeUp } from "./Motion";
import { site } from "@/data/site";

export default function FeaturedCourses() {
  const reduce = useReducedMotion();
  const { featuredCourses } = site;

  return (
    <section id="featured-courses" className="py-24 sm:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          className="mb-12 sm:mb-14"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-48px" }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="section-label mb-4">Programs</p>
          <h2 className="section-title text-[clamp(1.75rem,4vw,2.75rem)] text-balance">
            {featuredCourses.title}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
          variants={reduce ? undefined : stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-48px" }}
        >
          {featuredCourses.courses.map((course, i) => (
            <motion.div key={course.title} variants={fadeUp}>
              <Link
                href={course.href}
                className="group relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-7 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_12px_40px_var(--accent-muted)]"
              >
                {/* accent index marker */}
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Course 0{i + 1}
                </span>

                <h3 className="mt-6 text-lg sm:text-xl font-semibold text-[var(--text-primary)] leading-snug tracking-[-0.02em] max-w-[18ch]">
                  {course.title}
                </h3>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                  View course
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
