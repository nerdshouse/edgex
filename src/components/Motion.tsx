"use client";

export { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export const ease = [0.25, 0.46, 0.45, 0.94] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export const viewport = { once: true, margin: "-48px" as const };
