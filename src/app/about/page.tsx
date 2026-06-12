"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageEnter, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { FounderCard, TeamCard } from "@/components/TeamCard";
import { site } from "@/data/site";
import { team } from "@/data/team";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-28">
        <section className="py-20 sm:py-28 border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <PageEnter className="max-w-3xl">
              <p className="section-label mb-4">About EdgeX Academy</p>
              <h1 className="section-title text-4xl sm:text-5xl mb-6">
                Built by ISB & IIM alums for placement success
              </h1>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-4">
                {site.footer.mission}
              </p>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-medium">
                {site.footer.missionBold}
              </p>
            </PageEnter>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-b border-[var(--border)] bg-[var(--bg-secondary)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Reveal className="max-w-2xl mb-12">
              <p className="section-label mb-3">Founders</p>
              <h2 className="section-title text-3xl sm:text-4xl">
                The people behind EdgeX
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {team.founders.map((member, i) => (
                <Reveal key={member.name + member.role} delay={i * 0.1}>
                  <FounderCard member={member} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Reveal className="max-w-2xl mb-12">
              <p className="section-label mb-3">Advisors & SMEs</p>
              <h2 className="section-title text-3xl sm:text-4xl mb-5">
                Subject matter experts behind the curriculum
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Every module is reviewed by practitioners from our network of IIM, IIT, and NIT
                alumni — people who have sat on both sides of the interview table at top
                consulting, finance, and product companies.
              </p>
            </Reveal>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.advisors.map((member) => (
                <StaggerItem key={member.name + member.role}>
                  <TeamCard member={member} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-b border-[var(--border)] bg-[var(--bg-secondary)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Reveal className="max-w-2xl mb-12">
              <p className="section-label mb-3">Core team</p>
              <h2 className="section-title text-3xl sm:text-4xl mb-5">
                The team that runs your batches every week
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                From live batch schedules to GD moderation and written feedback, the core team
                keeps every cohort on track.
              </p>
            </Reveal>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {team.coreTeam.map((member) => (
                <StaggerItem key={member.name + member.role}>
                  <TeamCard member={member} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <Reveal>
                <p className="section-label mb-3">EdgeX Foundations</p>
                <h2 className="section-title text-3xl sm:text-4xl mb-5">
                  India&apos;s most comprehensive placement prep program
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {site.seo.description}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="section-label mb-4">Who it&apos;s for</p>
                <ul className="flex flex-col gap-2">
                  {site.audiences.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-14 bg-[var(--bg)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
            <Reveal>
              <h2 className="section-title text-2xl sm:text-3xl mb-4">Ready to prepare seriously?</h2>
              <p className="text-[var(--text-secondary)] mb-7 max-w-md mx-auto text-sm">
                Live batches start {site.liveBatches.startDate}. Third-year students are encouraged to enroll early.
              </p>
              <Link href="/cohorts/edgex-foundations" className="btn-primary inline-block text-sm px-5 py-2.5 rounded-lg">
                View EdgeX Foundations
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
