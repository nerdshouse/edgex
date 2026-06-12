"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-14 lg:gap-20 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="section-label mb-5">What&apos;s included</p>
            <h2 className="section-title text-[clamp(1.75rem,3vw,2.5rem)] mb-5">
              Everything in EdgeX <span className="serif-i">Foundations</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 max-w-xs">
              Hybrid format — instant recorded access plus live batches and weekly GD practice.
            </p>
            <Link
              href="/cohorts/edgex-foundations"
              className="btn-primary inline-block text-sm px-6 py-3 rounded-full"
            >
              View program →
            </Link>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {site.features.map((f, i) => (
              <StaggerItem key={f.title}>
                <div className="group h-full pt-5 border-t border-[var(--border)] transition-colors duration-300 hover:border-[var(--accent)]">
                  <span className="index-num block mb-4 transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-medium text-[var(--text-primary)] mb-2 tracking-[-0.02em]">
                    {f.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
