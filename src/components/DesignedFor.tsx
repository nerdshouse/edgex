"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const SUBHEADING =
  "EdgeX specializes in interview preparation for corporate business roles across consulting, strategy, general management, analytics, operations, product, marketing, finance, and other business functions. Whether you're an MBA student, an engineer transitioning into business, or a working professional preparing for your next opportunity, our programs are designed around the skills that leading recruiters consistently evaluate across business interviews.";

/* ── Word — opacity driven by scroll progress ── */
function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <span className="relative mr-[0.32em]">
      <span className="absolute inset-0 select-none opacity-15 text-[var(--text-primary)]">{word}</span>
      <motion.span style={{ opacity }} className="text-[var(--text-primary)]">
        {word}
      </motion.span>
    </span>
  );
}

/* ── Scroll-driven paragraph ── */
function ScrollParagraph({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });
  const words = text.split(" ");
  return (
    <p ref={ref} className="flex flex-wrap mt-6 max-w-3xl text-[clamp(1.2rem,4vw,1.7rem)] leading-relaxed">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
}

export default function DesignedFor() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between mb-4">
          <span className="index-num">Who it&apos;s for</span>
          <span className="index-num hidden sm:block">EdgeX Foundations</span>
        </div>

        <Reveal className="tick-frame">
          <span className="tick-b" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--bg-card)] shadow-sm">
              <div className="relative px-6 sm:px-12 lg:px-16 py-14 sm:py-18">
                {/* Heading */}
                <motion.h2
                  className="section-title text-[clamp(1.6rem,3.2vw,2.5rem)] max-w-3xl text-[var(--accent)]!"
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-48px" }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Built for Corporate<br />
                  Business Careers.
                </motion.h2>

                {/* Subheading — scroll-driven word reveal */}
                {reduce ? (
                  <p className="mt-6 max-w-2xl text-[1.125rem] leading-relaxed text-[var(--text-secondary)]">
                    {SUBHEADING}
                  </p>
                ) : (
                  <ScrollParagraph text={SUBHEADING} />
                )}
              </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
