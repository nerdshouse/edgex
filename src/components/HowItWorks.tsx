"use client";

import { site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-16">
          <p className="section-label mb-5">How it works</p>
          <h2 className="section-title text-[clamp(1.875rem,4vw,3.25rem)] max-w-2xl">
            From enroll to <span className="serif-i text-[var(--accent)]">interview-ready</span>
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
          {site.howItWorks.map((step) => (
            <StaggerItem key={step.number}>
              <div className="group relative h-full pt-6 border-t border-[var(--border)] transition-colors duration-300 hover:border-[var(--accent)]">
                <div className="text-[clamp(3rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.05em] text-transparent mb-6 tabular-nums select-none [-webkit-text-stroke:1px_var(--border-hover)] transition-all duration-300 group-hover:[-webkit-text-stroke:1px_var(--accent)]">
                  {step.number}
                </div>
                <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2.5 tracking-[-0.02em]">
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
