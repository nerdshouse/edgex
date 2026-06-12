"use client";

import { site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[var(--bg-secondary)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12">
          <p className="section-label mb-3">How it works</p>
          <h2 className="section-title text-2xl sm:text-3xl">From enroll to interview-ready</h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-lg overflow-hidden">
          {site.howItWorks.map((step) => (
            <StaggerItem key={step.number}>
              <div className="bg-[var(--bg)] p-6 sm:p-7 h-full transition-colors duration-200 hover:bg-[var(--bg-secondary)]">
                <div className="text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--accent)] mb-4 tabular-nums">
                  Step {step.number}
                </div>
                <h3 className="text-[15px] font-medium text-[var(--text-primary)] mb-2 tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
