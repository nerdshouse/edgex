"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { coreTeamSection, type CoreTeamMember } from "@/data/team";

export function CoreTeamCard({ member }: { member: CoreTeamMember }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="group flex flex-col transition-transform duration-200 hover:-translate-y-1">
      <div className="flex justify-center pt-2 pb-4">
        <div className="relative">
          <span
            aria-hidden
            className="absolute -inset-1.5 rounded-2xl border-2 border-[var(--accent)] transition-all duration-300 ease-out group-hover:-inset-2.5 group-hover:border-[var(--accent-hover)]"
          />
          {!imgFailed && member.image ? (
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}`}
              width={176}
              height={208}
              sizes="176px"
              className="relative block h-52 w-44 rounded-2xl object-cover object-top bg-[var(--bg-secondary)]"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="relative flex h-52 w-44 items-center justify-center rounded-2xl bg-[var(--accent-muted)] text-3xl font-semibold text-[var(--accent)]">
              {member.initials}
            </div>
          )}
        </div>
      </div>

      <div className="px-4 pb-2 text-center">
        <p className="text-base font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
          {member.name}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <span className="h-px w-4 shrink-0 bg-[var(--accent)]" aria-hidden />
          <p className="text-sm text-[var(--text-muted)]">{member.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function CoreTeam() {
  return (
    <section className="py-24 sm:py-32 border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 sm:mb-14 text-center">
          <p className="section-label justify-center mb-4">The team</p>
          <h2 className="section-title text-[clamp(1.75rem,4vw,2.75rem)] text-balance">
            {coreTeamSection.title}
          </h2>
        </Reveal>

        <Stagger className="mx-auto grid max-w-md grid-cols-1 gap-8 sm:grid-cols-2">
          {coreTeamSection.members.map((member) => (
            <StaggerItem key={member.name}>
              <CoreTeamCard member={member} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
