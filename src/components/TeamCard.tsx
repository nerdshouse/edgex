"use client";

import { useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/data/team";

function Avatar({ member, size }: { member: TeamMember; size: "lg" | "md" }) {
  const [failed, setFailed] = useState(false);
  const dims = size === "lg" ? "w-40 sm:w-48 aspect-[4/5] text-4xl" : "w-16 h-16 text-lg";

  if (member.image && !failed) {
    return (
      <div className={`relative ${dims} rounded-2xl overflow-hidden shrink-0`}>
        <Image
          src={member.image}
          alt={`Photo of ${member.name}`}
          fill
          sizes={size === "lg" ? "192px" : "64px"}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${dims} rounded-2xl bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)] font-semibold shrink-0`}
      aria-hidden="true"
    >
      {member.initials}
    </div>
  );
}

export function FounderCard({ member }: { member: TeamMember }) {
  return (
    <div className="card group relative overflow-hidden rounded-xl p-8 h-full flex flex-col sm:flex-row gap-8 items-start transition-colors duration-300 hover:border-[var(--border-hover)]">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--accent-muted)] blur-2xl pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-8 right-1 text-[8rem] leading-none font-semibold tracking-tighter text-[var(--text-primary)] opacity-[0.04] select-none pointer-events-none"
      >
        {member.initials}
      </span>
      <div className="relative shrink-0">
        <div
          aria-hidden="true"
          className="absolute -top-2.5 -left-2.5 w-full h-full rounded-2xl border border-[var(--accent)] opacity-25 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
        />
        <Avatar member={member} size="lg" />
      </div>
      <div className="relative">
        <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-1">{member.name}</h3>
        <p className="flex items-center gap-2 text-sm text-[var(--accent)] font-medium mb-4">
          <span aria-hidden="true" className="w-5 h-px bg-[var(--accent)]" />
          {member.role}
        </p>
        {member.bio && (
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{member.bio}</p>
        )}
        {member.tags && (
          <div className="flex flex-wrap gap-2">
            {member.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--accent-muted)] text-[var(--accent)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="card rounded-xl p-6 h-full">
      <Avatar member={member} size="md" />
      <h3 className="text-base font-medium text-[var(--text-primary)] mt-4 mb-0.5">{member.name}</h3>
      <p className="text-sm text-[var(--accent)] font-medium mb-3">{member.role}</p>
      {member.bio && (
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{member.bio}</p>
      )}
      {member.tags && (
        <div className="flex flex-wrap gap-2 mt-3">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
