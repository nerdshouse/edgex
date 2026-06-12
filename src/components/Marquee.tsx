"use client";

export default function Marquee({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-10 pr-10 text-sm font-medium tracking-[-0.01em] text-[var(--text-muted)] whitespace-nowrap"
              >
                {item}
                <span className="text-[var(--accent)] text-[9px]" aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
