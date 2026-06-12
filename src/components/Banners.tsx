"use client";

import Image from "next/image";
import { Stagger, StaggerItem } from "./Reveal";
import { site } from "@/data/site";

export default function Banners() {
  return (
    <section className="py-24 sm:py-32 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Stagger className="flex flex-col gap-16 sm:gap-20">
          {site.banners.map((banner, i) => (
            <StaggerItem key={banner.src}>
              <figure>
                <div className="flex items-center justify-between mb-4">
                  <span className="index-num">
                    Fig. {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="index-num hidden sm:block">EdgeX Foundations</span>
                </div>
                <div className="tick-frame">
                  <span className="tick-b" aria-hidden />
                  <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)]">
                    <Image
                      src={banner.src}
                      alt={banner.alt}
                      width={1400}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
