"use client";

import { site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const { accessBreakdown, enrollTimeline } = site;

const timelineColors: Record<string, string> = {
  emerald: "bg-emerald-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-400",
  blue: "bg-blue-500/15 border-blue-500/30 text-blue-700 dark:text-blue-400",
  neutral: "bg-[var(--bg-secondary)] border-[var(--border)] text-[var(--text-secondary)]",
  accent: "bg-[var(--accent-muted)] border-[var(--accent)]/30 text-[var(--accent)]",
};

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

function AccessSection() {
  return (
    <ContentFrame index="01" label="EdgeX Foundations">
      <div className="p-8 sm:p-10">
        <p className="section-label mb-3">{accessBreakdown.label}</p>
        <h2 className="section-title text-2xl sm:text-3xl mb-10">{accessBreakdown.title}</h2>

        <div className="hidden sm:grid grid-cols-[140px_repeat(5,1fr)] gap-2 mb-3 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
          <span />
          <span>Enroll</span>
          <span>Year 0</span>
          <span>Year 1</span>
          <span>Year 2</span>
          <span>Year 3</span>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          {accessBreakdown.timeline.map((row) => (
            <div key={row.category} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3 items-center">
              <span className="text-xs font-medium text-[var(--text-primary)]">{row.category}</span>
              <div className="flex items-center gap-2 min-h-[2.5rem]">
                <div
                  className={`flex-1 rounded-lg border px-3 py-2 text-xs leading-snug ${timelineColors[row.color]}`}
                >
                  {row.detail}
                </div>
                <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)]">
                  {row.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {accessBreakdown.cards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="h-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-5">
                <div className="text-2xl font-semibold text-[var(--accent)] mb-1 tabular-nums">
                  {card.stat}
                  {"statSuffix" in card && card.statSuffix && (
                    <span className="text-sm font-normal text-[var(--text-muted)] ml-1">{card.statSuffix}</span>
                  )}
                </div>
                <h3 className="text-xs font-medium uppercase tracking-[0.06em] text-[var(--text-primary)] mb-2">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{card.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </ContentFrame>
  );
}

function EnrollSection() {
  return (
    <ContentFrame index="02" label="EdgeX Foundations">
      <div className="p-8 sm:p-10">
        <p className="section-label mb-3">{enrollTimeline.label}</p>
        <h2 className="section-title text-2xl sm:text-3xl mb-10">{enrollTimeline.title}</h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border)] -translate-x-1/2 hidden sm:block" />

          <Stagger className="flex flex-col gap-6">
            {enrollTimeline.steps.map((step, i) => (
              <StaggerItem key={`${step.side}-${i}`}>
                <div
                  className={`relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 ${
                    step.side === "right" ? "sm:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className={step.side === "left" ? "sm:text-right" : "sm:col-start-2"}>
                    <div
                      className={`inline-block rounded-xl border px-4 py-3 text-sm leading-relaxed max-w-sm ${
                        step.side === "left"
                          ? "border-[var(--accent)]/25 bg-[var(--accent-muted)] text-[var(--text-primary)] sm:ml-auto"
                          : "border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                      }`}
                    >
                      {step.text}
                    </div>
                  </div>
                  <div className="hidden sm:block" />
                  {step.delay && (
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 sm:static sm:col-span-2 sm:flex sm:justify-center sm:py-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] bg-[var(--bg)] px-2">
                        {step.delay}
                      </span>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </ContentFrame>
  );
}

export default function Banners() {
  return (
    <section className="py-24 sm:py-32 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Stagger className="flex flex-col gap-16 sm:gap-20">
          <StaggerItem>
            <AccessSection />
          </StaggerItem>
          <StaggerItem>
            <EnrollSection />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
