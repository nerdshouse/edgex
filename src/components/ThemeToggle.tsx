"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "./Motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [tip, setTip] = useState<{ x: number; y: number } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  const isDark = theme === "dark";
  const label = isDark ? "Light mode" : "Dark mode";

  // The nav pill uses overflow-hidden, so an absolutely-positioned tooltip
  // would be clipped. Anchor a fixed-position tooltip to the button instead.
  const showTip = () => {
    const r = btnRef.current?.getBoundingClientRect();
    if (r) setTip({ x: r.left + r.width / 2, y: r.bottom + 8 });
  };
  const hideTip = () => setTip(null);

  return (
    <motion.button
      ref={btnRef}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      onHoverStart={showTip}
      onHoverEnd={hideTip}
      onFocus={showTip}
      onBlur={hideTip}
      whileHover={reduce ? undefined : { scale: 1.05 }}
      whileTap={reduce ? undefined : { scale: 0.95 }}
      className="relative w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200"
      aria-label={`Switch to ${label.toLowerCase()}`}
    >
      {tip &&
        createPortal(
          <span
            role="tooltip"
            style={{ left: tip.x, top: tip.y }}
            className="pointer-events-none fixed -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--bg-card)] px-2 py-1 text-xs text-[var(--text-primary)] shadow-[var(--shadow-card)] z-[60]"
          >
            {label}
          </span>,
          document.body
        )}
      <motion.span
        key={theme}
        initial={reduce ? false : { opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </motion.span>
    </motion.button>
  );
}
