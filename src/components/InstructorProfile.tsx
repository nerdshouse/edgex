"use client";

import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const { instructorProfile } = site;

function ContentFrame({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <figure>
      <div className="flex items-center justify-between mb-4">
        <span className="index-num">Fig. {index}</span>
        <span className="index-num hidden sm:block">{label}</span>
      </div>
      <Reveal className="tick-frame">
        <span className="tick-b" aria-hidden />
        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)]">
          {children}
        </div>
      </Reveal>
    </figure>
  );
}

export default function InstructorProfile({ embedded = false }: { embedded?: boolean }) {
  const p = instructorProfile;

  const content = (
    <ContentFrame index="01" label="EdgeX Foundations">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <div className="relative flex flex-col justify-center gap-6 bg-[var(--bg-secondary)] p-8 sm:p-10 min-h-[280px] lg:min-h-0 lg:border-r border-[var(--border)]">
              <span
                aria-hidden
                className="font-serif text-[5rem] leading-[0.4] text-[var(--accent)]/25 select-none"
              >
                &ldquo;
              </span>
              <blockquote>
                <p className="text-lg sm:text-xl font-medium tracking-[-0.02em] text-[var(--text-primary)] leading-snug">
                  {p.quote}{" "}
                  <span className="serif-i text-[var(--accent)]">{p.quoteAccent}</span>
                </p>
              </blockquote>
              <div className="flex items-center gap-3.5 pt-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-muted)] text-[var(--accent)] font-semibold">
                  PS
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{p.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{p.education[0]}</p>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="section-label mb-4">{p.label}</p>
              <h2 className="section-title text-2xl sm:text-3xl mb-2">{p.name}</h2>
              <p className="text-sm text-[var(--text-muted)] mb-4">
                {p.education.join(" · ")}
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">{p.summary}</p>

              <div className="mb-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--accent)] bg-[var(--accent-muted)] inline-block px-2.5 py-1 rounded-md mb-4">
                  {p.interviewed.label}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {p.interviewed.roles.map((r) => (
                    <li key={r.company} className="text-sm">
                      <span className="font-medium text-[var(--text-primary)]">{r.company}</span>
                      <span className="text-[var(--text-muted)]"> — {r.role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 pb-8 border-b border-[var(--border)]">
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)] mb-3">
                  {p.otherOffers.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.otherOffers.companies.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-medium px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-lg sm:text-xl font-medium tracking-[-0.03em] text-[var(--text-primary)] leading-snug">
                Learn from someone who has been on{" "}
                <span className="text-[var(--accent)] underline decoration-2 underline-offset-4">
                  {p.headlineAccent}
                </span>{" "}
                for top global firms.
              </p>
            </div>
          </div>
        </ContentFrame>
  );

  if (embedded) return content;

  return (
    <section className="py-24 sm:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">{content}</div>
    </section>
  );
}
