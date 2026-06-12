"use client";

import Link from "next/link";

interface EnrollBarProps {
  deadline?: string;
  href?: string;
}

export default function EnrollBar({
  deadline = "June 13, 2026",
  href = "/contact",
}: EnrollBarProps) {
  return (
    <div className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none">
      <div
        className="pointer-events-auto flex items-stretch rounded-full overflow-hidden shadow-lg"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
      >
        {/* deadline side */}
        <div className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border)] border-r-0 rounded-l-full px-4 py-2.5 whitespace-nowrap">
          <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--text-muted)]">Deadline</span>
          <span className="text-sm font-semibold text-[var(--text-primary)]">{deadline}</span>
        </div>
        {/* CTA side */}
        <Link
          href={href}
          className="btn-primary flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-r-full whitespace-nowrap"
          style={{ borderRadius: "0 9999px 9999px 0" }}
        >
          Enroll Now →
        </Link>
      </div>
    </div>
  );
}
