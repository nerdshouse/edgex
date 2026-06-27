"use client";

import { motion, useReducedMotion, ease, fadeUp } from "./Motion";
import { site } from "@/data/site";

const LANE_DURATIONS = [38, 44] as const;

function LogoLane({
  items,
  reverse = false,
  duration,
}: {
  items: readonly string[];
  reverse?: boolean;
  duration: number;
}) {
  return (
    <div className="logo-lane group">
      <div
        className={`logo-lane-track${reverse ? " logo-lane-track--reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-3 pr-3"
          >
            {items.map((name) => (
              <span key={`${copy}-${name}`} className="logo-lane-box logo-lane-box--light">
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompanySlider() {
  const reduce = useReducedMotion();
  const { companySlider } = site;

  return (
    <section
      className="relative bg-[var(--bg-secondary)] border-y border-[var(--border)] py-14 sm:py-16 overflow-hidden"
      aria-label="Companies our students target"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          className="mb-9 sm:mb-10 text-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-48px" }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="section-label justify-center mb-4">{companySlider.label}</p>
          <h2 className="section-title text-xl sm:text-2xl text-balance">
            {companySlider.title.split("interviews at")[0]}
            <span className="text-[var(--accent)]">interviews at</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 sm:gap-5"
          variants={
            reduce
              ? undefined
              : { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
          }
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-48px" }}
        >
          {companySlider.lanes.map((lane, i) => (
            <motion.div key={i} variants={fadeUp}>
              <LogoLane
                items={lane}
                reverse={i === 1}
                duration={LANE_DURATIONS[i] ?? 40}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
