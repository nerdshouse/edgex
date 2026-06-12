"use client";

import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const footerLinks = {
  Program: [
    { label: "EdgeX Foundations", href: "/cohorts/edgex-foundations" },
    { label: "Demo Class", href: "/demo" },
    { label: "Live Batches", href: "/live-batches" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: site.loginUrl, external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]">
      {/* brand glow — deep red radial from bottom-left */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[560px] h-[360px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 0% 100%, rgba(212,0,26,0.5) 0%, rgba(212,0,26,0.15) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      {/* dark vignette from bottom-right */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[320px] h-[240px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 100% 100%, rgba(0,0,0,0.55) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-10">
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <StaggerItem>
            <Logo variant="footer" className="mb-4" />
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-[220px] mb-3">
              {site.footer.mission}
            </p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-[220px] font-medium">
              {site.footer.missionBold}
            </p>
          </StaggerItem>

          {Object.entries(footerLinks).map(([section, items]) => (
            <StaggerItem key={section}>
              <div className="text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--text-primary)] mb-4">
                {section}
              </div>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.label}>
                    {"external" in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm link-hover"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm link-hover"
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
            <div className="text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--text-primary)] mb-4">
              Contact
            </div>
            <ul className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
              <li>
                <a href={`mailto:${site.contact.email}`} className="link-hover hover:text-[var(--text-primary)]">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="link-hover hover:text-[var(--text-primary)]">
                  {site.contact.phone}
                </a>
              </li>
              <li>{site.contact.location}</li>
            </ul>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[var(--border)] gap-3">
            <p className="text-[var(--text-muted)] text-xs">© 2026 EdgeX Academy. All rights reserved.</p>
            <p className="text-[var(--text-muted)] text-xs">{site.domain}</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
