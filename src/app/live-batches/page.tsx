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
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <p className="section-label mb-4">{liveBatches.title}</p>
              <h1 className="section-title text-4xl sm:text-5xl mb-5">{liveBatches.heading}</h1>
              <p className="text-[var(--text-secondary)] text-[15px] max-w-xl leading-relaxed mb-4">
                Next live batch starts <strong className="text-[var(--text-primary)] font-medium">{liveBatches.startDate}</strong>.
              </p>
              <p className="text-[var(--text-muted)] text-sm max-w-xl leading-relaxed mb-8">
                {liveBatches.note}
              </p>
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5 rounded-lg">
                Reserve your seat
              </Link>
            </PageEnter>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                <Image
                  src={liveBatches.scheduleImage}
                  alt="EdgeX live batch schedule"
                  width={1400}
                  height={800}
                  className="w-full h-auto"
                />
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
