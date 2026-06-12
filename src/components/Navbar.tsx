"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";
import { AnimatePresence, motion, useReducedMotion, ease } from "./Motion";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = `nav-pill hidden lg:flex mx-auto w-fit items-center gap-1 rounded-2xl py-2 pl-3 pr-2 overflow-hidden${scrolled ? " nav-pill--scrolled" : ""}`;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 pt-5 px-4 pointer-events-none"
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease, delay: 0.05 }}
    >
      <nav className={`pointer-events-auto ${navClass}`} aria-label="Main navigation">
        <Logo />

        <div className="relative flex items-center mx-1">
          {site.nav.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3 py-1.5 text-[13px] font-medium rounded-full z-[1] transition-colors duration-200 ${
                  active
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {active && !reduce && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)]"
                    transition={{ type: "spring", bounce: 0.12, duration: 0.45 }}
                  />
                )}
                {active && reduce && (
                  <span className="absolute inset-0 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)]" />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1 pl-1 border-l border-[var(--border)] ml-1">
          <ThemeToggle />
          <a
            href={site.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline text-[13px] font-medium px-3 py-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            Login
          </a>
          <Link href="/contact" className="btn-primary text-[13px] px-4 py-1.5 rounded-full">
            Enroll
          </Link>
        </div>
      </nav>

      <div className="pointer-events-auto lg:hidden mx-auto w-fit">
        <div className={`nav-pill flex items-center gap-2 rounded-full py-2 pl-3 pr-2${scrolled ? " nav-pill--scrolled" : ""}`}>
          <Logo />
          <div className="flex items-center gap-1 pl-2 border-l border-[var(--border)]">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="w-8 h-8 rounded-full flex flex-col items-center justify-center gap-[4px]"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className={`block w-3.5 h-px bg-[var(--text-primary)] transition-transform duration-200 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block w-3.5 h-px bg-[var(--text-primary)] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-3.5 h-px bg-[var(--text-primary)] transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            className="pointer-events-auto lg:hidden mx-auto mt-2 w-[min(calc(100vw-2rem),22rem)] nav-pill rounded-2xl p-2"
          >
            <div className="flex flex-col">
              {site.nav.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link
                    href={l.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      isActive(l.href)
                        ? "text-[var(--text-primary)] bg-[var(--bg-secondary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={site.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Login
              </a>
              <Link href="/contact" className="btn-primary mt-1 text-sm px-4 py-3 rounded-xl text-center">
                Enroll
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
