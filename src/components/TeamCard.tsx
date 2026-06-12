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
    <div className="card rounded-xl p-8 h-full flex flex-col sm:flex-row gap-8 items-start">
      <Avatar member={member} size="lg" />
      <div>
        <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-1">{member.name}</h3>
        <p className="text-sm text-[var(--accent)] font-medium mb-4">{member.role}</p>
        {member.bio && (
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{member.bio}</p>
        )}
        {member.tags && (
          <div className="flex flex-wrap gap-2">
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
