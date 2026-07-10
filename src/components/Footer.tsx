"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const footerLinks = {
  Courses: [
    { label: "MBA Students", href: "/mba-students" },
    { label: "Engineering students", href: "/engineering-students" },
    { label: "Working Professionals", href: "/working-professionals" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: site.loginUrl, external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="dark relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]">
      {/* red accent line + glow across the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(96,4,4,0.12) 0%, rgba(96,4,4,0.04) 45%, transparent 72%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-8">
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <StaggerItem>
            <p className="section-label mb-6">EdgeX Academy</p>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-[280px] text-justify mb-3">
              {site.footer.mission}
            </p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-[280px] text-justify font-medium">
              {site.footer.missionBold}
            </p>
          </StaggerItem>

          {Object.entries(footerLinks).map(([section, items]) => (
            <StaggerItem key={section}>
              <div className="index-num mb-6">{section}</div>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {"external" in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="u-link text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="u-link text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}

          <StaggerItem>
            <div className="index-num mb-6">Contact</div>
            <ul className="flex flex-col gap-3 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="u-link hover:text-[var(--text-primary)]"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="u-link hover:text-[var(--text-primary)]"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="text-[var(--text-muted)]">{site.contact.location}</li>
            </ul>
          </StaggerItem>
        </Stagger>

        {/* Giant wordmark */}
        <Reveal>
          <div
            aria-hidden
            className="select-none pointer-events-none text-center font-semibold leading-[0.78] tracking-[-0.05em] text-[clamp(5rem,19vw,17rem)] text-[var(--text-primary)] opacity-[0.05] -mb-[0.12em]"
          >
            EdgeX<span className="serif-i text-[var(--accent)]">.</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[var(--border)] gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              © 2026 EdgeX Academy - All rights reserved
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              {site.contact.location} / {site.domain}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
