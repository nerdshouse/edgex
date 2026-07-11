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
      <span className="absolute inset-0 select-none opacity-20 text-white">{word}</span>
      <motion.span style={{ opacity }} className="text-white">
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
    offset: ["start 0.75", "start 0.2"],
  });
  const words = text.split(" ");
  return (
    <p ref={ref} className="flex flex-wrap mt-6 max-w-3xl text-[1.7rem] leading-relaxed">
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
          {/* hairline gradient edge → premium top-lit border */}
          <div className="rounded-[1.75rem] bg-gradient-to-b from-white/[0.14] to-white/[0.03] p-px">
            {/* Inverted editorial feature block - stays dark in both themes */}
            <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)] bg-[linear-gradient(165deg,#7a0505_0%,#600404_50%,#4a0303_100%)] text-white">
              {/* red glow wash, top-left */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-[15%] -top-[30%] h-[40rem] w-[40rem] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 45%, transparent 70%)",
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
                {/* Heading */}
                <motion.h2
                  className="section-title text-[clamp(1.6rem,3.2vw,2.5rem)] max-w-3xl"
                  style={{ color: "#fafaf8" }}
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
                  <p className="mt-6 max-w-2xl text-[1.125rem] leading-relaxed text-white/55">
                    {SUBHEADING}
                  </p>
                ) : (
                  <ScrollParagraph text={SUBHEADING} />
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
