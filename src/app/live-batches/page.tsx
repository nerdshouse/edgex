"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageEnter, Reveal } from "@/components/Reveal";
import EnrollBar from "@/components/EnrollBar";
import { site } from "@/data/site";

export default function LiveBatchesPage() {
  const { liveBatches } = site;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-28">
        <section className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <p className="section-label mb-5">{liveBatches.title}</p>
              <h1 className="section-title text-[clamp(2.5rem,6vw,4.75rem)] mb-6 max-w-[16ch]">
                Enroll now to book your <span className="serif-i text-[var(--accent)]">slots</span>
              </h1>
              <p className="text-[var(--text-secondary)] text-base max-w-xl leading-relaxed mb-4">
                Next live batch starts <strong className="text-[var(--text-primary)] font-medium">{liveBatches.startDate}</strong>.
              </p>
              <p className="text-[var(--text-muted)] text-sm max-w-xl leading-relaxed mb-9">
                {liveBatches.note}
              </p>
              <Link href="/contact" className="btn-primary text-sm px-6 py-3 rounded-full">
                Reserve your seat →
              </Link>
            </PageEnter>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal>
              <div className="flex items-center justify-between mb-4">
                <span className="index-num">Fig. 01 - Batch schedule</span>
                <span className="index-num hidden sm:block">Starts {liveBatches.startDate}</span>
              </div>
              <div className="tick-frame">
                <span className="tick-b" aria-hidden />
                <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                  <Image
                    src={liveBatches.scheduleImage}
                    alt="EdgeX live batch schedule"
                    width={1400}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <EnrollBar deadline={site.liveBatches.startDate} />
      </main>
      <Footer />
    </>
  );
}
