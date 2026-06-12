"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import EnrollBar from "@/components/EnrollBar";
import { site } from "@/data/site";

export default function DemoPage() {
  const { demoClass } = site;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-28">
        <section className="py-16 sm:py-24 border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <p className="section-label mb-4">{demoClass.title}</p>
              <h1 className="section-title text-4xl sm:text-5xl mb-5">{demoClass.heading}</h1>
              <p className="text-[var(--text-secondary)] text-[15px] max-w-xl leading-relaxed mb-8">
                Preview clips from actual EdgeX Foundations classes before you enroll.
              </p>
              <Link href="/cohorts/edgex-foundations" className="btn-primary text-sm px-5 py-2.5 rounded-lg">
                Enroll in EdgeX Foundations
              </Link>
            </PageEnter>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {demoClass.clips.map((clip) => (
                <StaggerItem key={clip.title}>
                  <div className="card rounded-xl p-6 h-full">
                    <p className="text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--accent)] mb-3">
                      {clip.subtitle}
                    </p>
                    <h2 className="text-lg font-medium text-[var(--text-primary)] tracking-[-0.02em] mb-3">
                      {clip.title}
                    </h2>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      Full lecture recordings are available instantly upon enrollment in your EdgeX portal.
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-10" delay={0.1}>
              <p className="text-sm text-[var(--text-secondary)]">
                Ready to start?{" "}
                <a
                  href={site.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] font-medium link-hover"
                >
                  Log in to the EdgeX portal →
                </a>
              </p>
            </Reveal>
          </div>
        </section>
        <EnrollBar />
      </main>
      <Footer />
    </>
  );
}
