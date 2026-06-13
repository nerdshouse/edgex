import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banners from "@/components/Banners";
import Courses from "@/components/Courses";
import DesignedFor from "@/components/DesignedFor";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <DesignedFor />
        <Banners />
        <HowItWorks />
        <Features />
        <FAQ />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
