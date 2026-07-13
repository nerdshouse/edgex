"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { team } from "@/data/team";

function FounderCard({ founder }: { founder: (typeof team.founders)[number] }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-[var(--shadow-card)] p-7 transition-all duration-200 hover:border-[var(--border-hover)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
      {/* oversized ghost initials watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-6 right-1 select-none font-bold leading-none tracking-tight text-[7.5rem] sm:text-[10rem] text-[var(--text-primary)]/[0.035]"
      >
        {founder.initials}
      </span>

      <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-7 sm:text-left">
        {/* portrait with offset red frame */}
        <div className="relative shrink-0 self-start mx-auto sm:mx-0">
          <span
            aria-hidden
            className="absolute -inset-1.5 rounded-2xl border-2 border-[var(--accent)]"
          />
          {!imgFailed ? (
            <Image
              src={founder.image!}
              alt={`Portrait of ${founder.name}`}
              width={176}
              height={208}
              className="relative block h-48 w-40 sm:h-52 sm:w-44 rounded-2xl object-cover object-top bg-[var(--bg-secondary)]"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="relative flex h-48 w-40 sm:h-52 sm:w-44 items-center justify-center rounded-2xl bg-[var(--accent-muted)] text-3xl font-semibold text-[var(--accent)]">
              {founder.initials}
            </div>
          )}
        </div>

        {/* content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
            {founder.name}
          </h3>
          <div className="mt-2 flex items-center justify-center gap-2.5 sm:justify-start">
            <span className="h-px w-6 bg-[var(--accent)]" aria-hidden />
            <span className="text-sm font-semibold text-[var(--accent)]">{founder.role}</span>
          </div>

          {founder.bio ? (
            <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)] text-justify">{founder.bio}</p>
          ) : null}

          {founder.tags ? (
            <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:justify-start">
              {founder.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--accent-muted)] px-3.5 py-1.5 text-xs font-medium text-[var(--accent)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function MeetFounder() {
  return (
    <section className="py-24 sm:py-32 border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 sm:mb-14">
          <p className="section-label mb-4">Founders</p>
          <h2 className="section-title text-[clamp(1.875rem,4vw,2.75rem)]">
            Meet our Founders
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {team.founders.map((founder) => (
            <StaggerItem key={founder.name} className="h-full">
              <FounderCard founder={founder} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
