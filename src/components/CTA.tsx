"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export default function CTA() {
  return (
    <section className="py-20 sm:py-24 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="border border-[var(--border)] rounded-lg p-8 sm:p-12 md:p-14 transition-colors duration-200 hover:border-[var(--border-hover)]">
            <div className="max-w-lg">
              <p className="section-label mb-4">Get started</p>
              <h2 className="section-title text-2xl sm:text-[2rem] mb-3">
                Stop winging your placement interviews.
              </h2>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-7">
                Start preparing systematically with India&apos;s most serious placement prep program.
                Live batches start {site.liveBatches.startDate}.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <Link href="/cohorts/edgex-foundations" className="btn-primary text-sm px-5 py-2.5 rounded-lg text-center">
                  Enroll in EdgeX Foundations
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] link-hover text-center sm:text-left px-2 py-2.5 group"
                >
                  Talk to an advisor
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 ml-0.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
