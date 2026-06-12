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
    <section id="pricing" className="py-20 sm:py-24 bg-[var(--bg-secondary)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-10 max-w-md">
          <p className="section-label mb-3">Enroll</p>
          <h2 className="section-title text-2xl sm:text-3xl mb-2">{program.title}</h2>
          <p className="text-[var(--text-secondary)] text-sm">{program.tagline}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="max-w-lg rounded-xl border-2 border-[var(--accent)] bg-[var(--bg)] p-8 shadow-[0_4px_24px_var(--accent-muted)]">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                ₹{program.price?.toLocaleString("en-IN")}
              </span>
              {program.originalPrice && (
                <>
                  <span className="text-sm text-[var(--text-muted)] line-through">
                    ₹{program.originalPrice.toLocaleString("en-IN")}
                  </span>
                  {discount && (
                    <span className="text-[11px] font-medium text-[var(--accent)] bg-[var(--accent-muted)] px-2 py-0.5 rounded-md">
                      {discount}% off
                    </span>
                  )}
                </>
              )}
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-6">{program.duration}</p>

            <ul className="flex flex-col gap-2.5 mb-8">
              {site.features.slice(0, 5).map((f) => (
                <li key={f.title} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                  <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-[var(--accent)]" />
                  {f.title}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={site.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2.5 rounded-lg text-center"
              >
                Buy now
              </a>
              <Link href="/contact" className="btn-secondary text-sm px-5 py-2.5 rounded-lg text-center">
                Talk to us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
