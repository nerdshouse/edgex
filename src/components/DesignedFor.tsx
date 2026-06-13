"use client";

import { site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const { designedFor } = site;

export default function DesignedFor() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between mb-4">
          <span className="index-num">Who it&apos;s for</span>
          <span className="index-num hidden sm:block">EdgeX Foundations</span>
        </div>

        <Reveal className="tick-frame">
          <span className="tick-b" aria-hidden />
          {/* hairline gradient edge → premium top-lit border */}
          <div className="rounded-[1.75rem] bg-gradient-to-b from-white/[0.14] to-white/[0.03] p-px">
            {/* Inverted editorial feature block - stays dark in both themes */}
            <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)] bg-[linear-gradient(165deg,#141312_0%,#0b0b0a_55%,#0a0a09_100%)] text-white">
              {/* red glow wash, top-left */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-[15%] -top-[30%] h-[40rem] w-[40rem] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,0,26,0.22) 0%, rgba(212,0,26,0.05) 45%, transparent 70%)",
                }}
              />
              {/* cool counter-glow, bottom-right, for depth */}
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-[35%] -right-[10%] h-[34rem] w-[34rem] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 65%)",
                }}
              />
              {/* faint dot grid */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  maskImage:
                    "radial-gradient(ellipse 70% 60% at 82% 8%, #000 15%, transparent 72%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 60% at 82% 8%, #000 15%, transparent 72%)",
                }}
              />

              <div className="relative px-6 sm:px-12 lg:px-16 py-14 sm:py-18">
                {/* eyebrow chip */}
                <span className="inline-flex items-center rounded-full bg-[var(--accent)] px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_8px_24px_-8px_rgba(212,0,26,0.7)]">
                  {designedFor.label}
                </span>

                <h2
                  className="section-title mt-7 max-w-3xl text-[clamp(1.6rem,3.2vw,2.5rem)]"
                  style={{ color: "#fafaf8" }}
                >
                  Designed for Business, Consulting, and{" "}
                  <span className="serif-i text-[var(--accent)]">Analytics</span> Roles
                </h2>

                <p className="mt-6 max-w-2xl text-[0.975rem] leading-relaxed text-white/55">
                  {designedFor.description}
                </p>

                {/* who this is for */}
                <div className="mt-14 flex items-center gap-3.5">
                  <span className="h-px w-8 bg-[var(--accent)]" aria-hidden />
                  <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white/45">
                    Who this course is for
                  </span>
                </div>

                <Stagger className="mt-9 flex flex-col">
                  {designedFor.groups.map((group, i) => (
                    <StaggerItem key={group.tag}>
                      <div className="grid grid-cols-1 gap-y-5 border-t border-white/[0.09] py-8 md:grid-cols-[240px_1fr] md:gap-x-12">
                        {/* label column */}
                        <div className="flex items-start gap-4">
                          <span className="mt-1 font-mono text-[0.75rem] font-medium text-[var(--accent)]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-[1.35rem] font-medium tracking-[-0.02em] text-white">
                            {group.tag}
                          </h3>
                        </div>
                        {/* bullets */}
                        <ul className="flex flex-col gap-4">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="relative pl-6 text-[0.95rem] leading-relaxed text-white/65"
                            >
                              <span
                                aria-hidden
                                className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-[var(--accent)]/80"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                {/* target roles */}
                <div className="mt-12 flex items-center gap-3.5">
                  <span className="h-px w-8 bg-[var(--accent)]" aria-hidden />
                  <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white/45">
                    Target roles
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {designedFor.targetRoles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-[0.8125rem] font-medium text-white/80 transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-white"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
