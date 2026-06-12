"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export default function Features() {
  return (
    <section className="py-20 sm:py-24 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="section-label mb-3">What&apos;s included</p>
            <h2 className="section-title text-2xl sm:text-3xl mb-4">Everything in EdgeX Foundations</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 max-w-xs">
              Hybrid format — instant recorded access plus live batches and weekly GD practice.
            </p>
            <Link href="/cohorts/edgex-foundations" className="btn-primary inline-block text-sm px-4 py-2 rounded-lg">
              View program
            </Link>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {site.features.map((f) => (
              <StaggerItem key={f.title}>
                <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1.5 tracking-[-0.01em]">
                  {f.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{f.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
