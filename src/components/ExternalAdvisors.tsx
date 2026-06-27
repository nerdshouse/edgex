"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { externalAdvisorsSection, type ExternalAdvisor } from "@/data/team";

export function AdvisorCard({ advisor }: { advisor: ExternalAdvisor }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="group flex flex-col transition-transform duration-200 hover:-translate-y-1">
      <div className="flex justify-center pt-2 pb-4">
        <div className="relative">
          <span
            aria-hidden
            className="absolute -inset-1.5 rounded-2xl border-2 border-[var(--accent)] transition-all duration-300 ease-out group-hover:-inset-2.5 group-hover:border-[var(--accent-hover)]"
          />
          {!imgFailed && advisor.image ? (
            <Image
              src={advisor.image}
              alt={`Portrait of ${advisor.name}`}
              width={176}
              height={208}
              sizes="176px"
              className="relative block h-52 w-44 rounded-2xl object-cover object-top bg-[var(--bg-secondary)]"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="relative flex h-52 w-44 items-center justify-center rounded-2xl bg-[var(--accent-muted)] text-3xl font-semibold text-[var(--accent)]">
              {advisor.initials}
            </div>
          )}
        </div>
      </div>

      <div className="px-4 pb-2 text-center">
        <p className="text-base font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
          {advisor.name}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <span className="h-px w-4 shrink-0 bg-[var(--accent)]" aria-hidden />
          <p className="text-sm text-[var(--text-muted)]">{advisor.credential}</p>
        </div>
        {advisor.linkedin ? (
          <a
            href={advisor.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
          >
            {externalAdvisorsSection.linkedinLabel}
            <span aria-hidden>→</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function ExternalAdvisors() {
  return (
    <section className="py-24 sm:py-32 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 sm:mb-14">
          <p className="section-label mb-4">Mentor network</p>
          <h2 className="section-title text-[clamp(1.75rem,4vw,2.75rem)] text-balance">
            {externalAdvisorsSection.title}
          </h2>
        </Reveal>

        <Stagger className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {externalAdvisorsSection.advisors.map((advisor) => (
            <StaggerItem key={advisor.name}>
              <AdvisorCard advisor={advisor} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
