"use client";

import { useState } from "react";

type VideoPlayerProps = {
  youtubeId: string;
  caption: string;
  runtime: string;
  className?: string;
};

export default function VideoPlayer({ youtubeId, caption, runtime, className }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`tick-frame ${className ?? ""}`}>
      <span className="tick-b" aria-hidden />
      {/* hairline gradient edge */}
      <div className="rounded-[1.75rem] bg-gradient-to-b from-white/[0.14] to-white/[0.03] p-px shadow-[var(--shadow-card)]">
        <div className="relative aspect-video overflow-hidden rounded-[calc(1.75rem-1px)] bg-[#0a0a09]">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={caption}
              allow="accelerated-output; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full cursor-pointer"
              aria-label={`Play video: ${caption}`}
            >
              {/* thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={``}
                alt={caption}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                onError={(e) => {
                  e.currentTarget.src = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
                }}
              />
              {/* cinematic darken + red wash */}
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,10,9,0.15) 0%, rgba(10,10,9,0.35) 55%, rgba(10,10,9,0.78) 100%)",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -left-[12%] -top-[28%] h-[34rem] w-[34rem] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(96,4,4,0.32) 0%, rgba(96,4,4,0.08) 45%, transparent 70%)",
                }}
              />

              {/* play button */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)] shadow-[0_18px_50px_-12px_rgba(96,4,4,0.85)] transition-transform duration-300 ease-out group-hover:scale-110">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-50 transition-transform duration-500 ease-out group-hover:scale-125 group-hover:opacity-0"
                  />
                  <svg viewBox="0 0 24 24" className="relative ml-1 h-7 w-7 fill-white" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>

              {/* caption strip, bottom-left */}
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5 sm:p-7">
                <span className="flex items-center gap-3 text-left">
                  <span className="h-px w-7 bg-[var(--accent)]" aria-hidden />
                  <span className="text-[0.95rem] font-medium tracking-[-0.01em] text-white sm:text-[1.05rem]">
                    {caption}
                  </span>
                </span>
                <span className="hidden shrink-0 items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3.5 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm sm:inline-flex">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  </span>
                  {runtime}
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
