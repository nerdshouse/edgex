"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export default function CTA() {
  return (
    <section className="relative py-28 sm:py-40 bg-[var(--bg)] overflow-hidden">
      <div
        aria-hidden
        className="hero-glow absolute inset-x-0 bottom-0 h-[80%] rotate-180 pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <p className="section-label justify-center mb-8">Get started</p>
          <h2 className="section-title text-[clamp(2.25rem,6vw,5rem)] max-w-[18ch] mx-auto mb-6">
            Stop <span className="serif-i text-[var(--accent)]">winging</span> your placement
            interviews.
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Start preparing systematically with India&apos;s most serious placement prep program.
            Live batches start {site.liveBatches.startDate}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/cohorts/edgex-foundations"
              className="btn-primary text-sm px-8 py-3.5 rounded-full text-center"
            >
              Enroll in EdgeX Foundations →
            </Link>
            <Link
              href="/contact"
              className="u-link text-sm font-medium text-[var(--text-primary)] px-2 py-3"
            >
              Talk to an advisor
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
