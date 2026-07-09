"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { categoryData } from "@/data/categories";

export default function SessionPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = use(params);

  const catData = categoryData[category];
  if (!catData) {
    notFound();
  }

  const sessionData = catData.sessions.find((s) => s.slug === slug);
  if (!sessionData) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="dot-page min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-8 sm:py-10 border-b border-[var(--border)]">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="hero-glow absolute inset-x-0 top-0 h-[62%]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
            <PageEnter>
              <Link
                href={`/${category}`}
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
                {category.replace(/-/g, ' ').toUpperCase()}
              </Link>
              
              <div className="mb-10 sm:mb-12">
                <h1 className="inline-block rounded-lg bg-[var(--accent)] px-3 py-1 text-white text-[clamp(2rem,4.5vw,3.5rem)] font-medium tracking-[-0.02em] leading-snug">
                  {sessionData.title}
                </h1>
                <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-[70ch] mt-5">
                  {sessionData.longDesc || sessionData.desc}
                </p>
              </div>
            </PageEnter>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-10">
              <h2 className="section-title text-2xl sm:text-3xl mb-3">Choose your mentor</h2>
              <p className="text-[var(--text-secondary)] text-lg">
                Select a mentor below and find a time that works for you.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
              {sessionData.mentors?.map((mentor) => (
                <StaggerItem key={mentor.name}>
                  <div className="card group h-full flex flex-col rounded-2xl overflow-hidden p-6 sm:p-8 hover:border-[var(--accent)] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-8 text-center sm:text-left">
                      <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] shadow-sm">
                        <Image
                          src={mentor.image}
                          alt={mentor.name}
                          fill
                          sizes="96px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="pt-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent)] transition-colors duration-200">
                          {mentor.name}
                        </h3>
                        <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium mt-1">
                          {mentor.credential}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-[var(--border)]">
                      <a
                        href={mentor.calendlyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary block w-full rounded-xl py-3.5 text-center text-[15px] font-medium tracking-tight shadow-sm"
                      >
                        Book with {mentor.name.split(" ")[0]}
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
