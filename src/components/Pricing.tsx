"use client";

import Link from "next/link";
import { cohorts } from "@/data/cohorts";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export default function Pricing() {
  const program = cohorts[0];
  const discount =
    program.originalPrice && program.price
      ? Math.round(((program.originalPrice - program.price) / program.originalPrice) * 100)
      : null;

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <Reveal>
            <p className="section-label mb-5">Enroll</p>
            <h2 className="section-title text-[clamp(1.875rem,4vw,3.25rem)] mb-4">
              {program.title}
            </h2>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-md mb-10">
              {program.tagline}
            </p>

            <ul className="flex flex-col">
              {site.features.slice(0, 5).map((f, i) => (
                <li
                  key={f.title}
                  className="flex items-baseline gap-5 py-3.5 text-sm text-[var(--text-secondary)] border-t border-[var(--border)] last:border-b"
                >
                  <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                  {f.title}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--accent)] bg-[var(--bg)] p-8 sm:p-10">
              <div
                aria-hidden
                className="absolute -top-28 -right-28 w-72 h-72 rounded-full bg-[var(--accent-muted)] blur-2xl pointer-events-none"
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="index-num">EdgeX Foundations / {program.duration}</span>
                  {discount && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--accent)] bg-[var(--accent-muted)] px-2.5 py-1 rounded-full">
                      {discount}% off
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[clamp(3rem,5vw,4.25rem)] leading-none font-semibold tracking-[-0.04em] text-[var(--text-primary)] tabular-nums">
                    ₹{program.price?.toLocaleString("en-IN")}
                  </span>
                  {program.originalPrice && (
                    <span className="text-lg text-[var(--text-muted)] line-through tabular-nums">
                      ₹{program.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-10">
                  One-time fee · 3-year access · live batches included
                </p>

                <div className="flex flex-col gap-2.5">
                  <a
                    href={site.loginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm px-6 py-3.5 rounded-full text-center"
                  >
                    Buy now →
                  </a>
                  <Link href="/contact" className="btn-secondary text-sm px-6 py-3.5 rounded-full text-center">
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
