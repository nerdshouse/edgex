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
    { label: "Login", href: site.loginUrl },
  ],
  Legal: [
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
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
        <Stagger className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12 mb-16 md:mb-24">
          {/* About Section */}
          <StaggerItem className="col-span-2 md:col-span-4 lg:col-span-2 pr-0 lg:pr-8">
            <p className="section-label mb-6">EdgeX Academy</p>
            <div className="max-w-2xl lg:max-w-none">
              <p className="text-[var(--text-muted)] text-sm leading-relaxed text-justify mb-3">
                {site.footer.mission}
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed text-justify font-medium">
                {site.footer.missionBold}
              </p>
            </div>
          </StaggerItem>

          {/* Map through Links */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <StaggerItem key={section} className="col-span-1">
              <div className="index-num mb-4">{section}</div>
              <ul className="flex flex-col gap-2">
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

          {/* Contact Section */}
          <StaggerItem className="col-span-1">
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
          <div className="relative flex flex-col items-center pt-6 border-t border-[var(--border)] gap-4">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <p className="font-mono text-[12px] uppercase text-[var(--text-muted)]/60 text-center mt-2 sm:-mt-4">
                Experience, Engineered by <br className="sm:hidden" />
                <a href="https://nerdshouse.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] transition-colors hover:underline underline-offset-4">Nerdshouse Technologies LLP</a>
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-primary)]">
                © {new Date().getFullYear()} EdgeX Academy - All rights reserved
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {site.contact.location} / {site.domain}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
