"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { site } from "@/data/site";

export default function Banners() {
  return (
    <section className="py-16 sm:py-20 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Stagger className="flex flex-col gap-10">
          {site.banners.map((banner) => (
            <StaggerItem key={banner.src}>
              <Reveal y={20}>
                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)]">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    width={1400}
                    height={700}
                    className="w-full h-auto"
                  />
                </div>
              </Reveal>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
