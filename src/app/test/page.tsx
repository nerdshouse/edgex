import Navbar from "@/components/Navbar";
import HomeIntro from "@/components/HomeIntro";
import Courses from "@/components/Courses";
import Banners from "@/components/Banners";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function TestPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)] py-6">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="section-label mb-2">Archive</p>
            <h1 className="section-title text-2xl sm:text-3xl">Test — previous homepage sections</h1>
          </div>
        </div>
        <HomeIntro />
        <Courses />
        <Banners />
        <HowItWorks />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
