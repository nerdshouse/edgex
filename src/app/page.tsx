import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanySlider from "@/components/CompanySlider";
import InstructorProfile from "@/components/InstructorProfile";
import MeetFounder from "@/components/MeetFounder";
import ExternalAdvisors from "@/components/ExternalAdvisors";
import CoreTeam from "@/components/CoreTeam";
import DesignedFor from "@/components/DesignedFor";
import FeaturedCourses from "@/components/FeaturedCourses";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanySlider />
        <InstructorProfile />
        <MeetFounder />
        <ExternalAdvisors />
        <CoreTeam />
        <DesignedFor />
        <FeaturedCourses />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
