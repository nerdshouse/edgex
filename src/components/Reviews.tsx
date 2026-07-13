"use client";

import { motion, useReducedMotion, ease } from "./Motion";

type Review = { quote: string; name: string; meta: string };

const reviews: Review[] = [
  {
    quote:
      "The case interview drills were brutal in the best way. By placement week, guesstimates felt automatic and I walked into my Bain interview genuinely calm.",
    name: "Aditya Rao",
    meta: "IIM Lucknow · 2025",
  },
  {
    quote:
      "Punita's feedback on my personal-interview stories completely changed how I framed my leadership examples. Converted my summers into a PPO.",
    name: "Sneha Kulkarni",
    meta: "ISB Hyderabad · 2024",
  },
  {
    quote:
      "GD Labs were the single most useful thing. Practising with real peers and getting scored made the actual GD feel like just another round.",
    name: "Rohit Menon",
    meta: "MDI Gurgaon · 2025",
  },
  {
    quote:
      "I came in weak at structuring. The frameworks module gave me a repeatable approach I used across every consulting interview.",
    name: "Ananya Gupta",
    meta: "IIM Kozhikode · 2024",
  },
  {
    quote:
      "Mock interviews with detailed feedback reports were gold. I could see exactly where I was losing the panel and fix it before the real thing.",
    name: "Karan Shah",
    meta: "XLRI Jamshedpur · 2025",
  },
  {
    quote:
      "Recorded classes let me prep around a hectic term. Watched the consulting modules at 2x, then joined live GDs on weekends.",
    name: "Meera Nair",
    meta: "IIM Indore · 2024",
  },
  {
    quote:
      "The CV review was ruthless and exactly what I needed. Every bullet finally spoke to impact, not just responsibilities.",
    name: "Vikram Iyer",
    meta: "SPJIMR Mumbai · 2025",
  },
  {
    quote:
      "Cracked my dream strategy role. That 'both ends of the table' perspective genuinely shows in how they coach you.",
    name: "Priya Deshpande",
    meta: "IIM Calcutta · 2024",
  },
  {
    quote:
      "From zero consulting exposure to a Day-1 offer. The structured curriculum did the heavy lifting week after week.",
    name: "Arjun Reddy",
    meta: "ISB Hyderabad · 2025",
  },
  {
    quote:
      "Behavioral prep helped me tell my story with clarity. HR rounds stopped feeling like a trap and started feeling like a conversation.",
    name: "Ishita Bose",
    meta: "IIM Ahmedabad · 2024",
  },
  {
    quote:
      "The guesstimate practice bank is huge. I ran out of nerves long before I ran out of problems to solve.",
    name: "Nikhil Verma",
    meta: "FMS Delhi · 2025",
  },
  {
    quote:
      "Weekly GD slots with honest feedback built my confidence week over week. By placement season, it all felt earned.",
    name: "Tanvi Joshi",
    meta: "IIM Bangalore · 2025",
  },
];

const COLUMN_COUNT = 3;
const DURATIONS = [46, 58, 52] as const;

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="card rounded-xl p-6">
      <span
        aria-hidden
        className="block font-serif text-4xl leading-[0.1] text-[var(--accent)]/30 select-none"
      >
        &ldquo;
      </span>
      <blockquote className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
        {r.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-[var(--border)] pt-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--accent-muted)] text-xs font-semibold text-[var(--accent)]">
          {initials(r.name)}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-[var(--text-primary)]">{r.name}</p>
          <p className="text-xs text-[var(--text-muted)]">{r.meta}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function ReviewColumn({
  items,
  reverse,
  duration,
  animate,
}: {
  items: Review[];
  reverse: boolean;
  duration: number;
  animate: boolean;
}) {
  if (!animate) {
    return (
      <div className="flex flex-col gap-4">
        {items.map((r, i) => (
          <ReviewCard key={i} r={r} />
        ))}
      </div>
    );
  }

  return (
    <div className="vmarquee h-full">
      <div
        className={`vmarquee-track${reverse ? " vmarquee-track--reverse" : ""} max-sm:![animation-duration:20s]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex flex-col gap-4 pb-4">
            {items.map((r, i) => (
              <ReviewCard key={`${copy}-${i}`} r={r} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  const reduce = useReducedMotion();

  const columns = Array.from({ length: COLUMN_COUNT }, (_, c) =>
    reviews.filter((_, i) => i % COLUMN_COUNT === c),
  );

  return (
    <section className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-secondary)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          className="mb-10 sm:mb-12 text-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-48px" }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="section-label justify-center mb-4">Reviews</p>
          <h2 className="section-title text-[clamp(1.75rem,4vw,2.75rem)] text-balance">
            What our students say
          </h2>
        </motion.div>

        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${!reduce ? "h-[600px]" : ""}`}
          aria-label="Student reviews"
        >
          {columns.map((items, c) => (
            <div
              key={c}
              className={`h-full ${c === 1 ? "hidden sm:block" : ""} ${
                c === 2 ? "hidden lg:block" : ""
              }`}
            >
              <ReviewColumn
                items={items}
                reverse={c % 2 === 1}
                duration={DURATIONS[c] ?? 50}
                animate={!reduce}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
