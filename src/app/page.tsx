import HeroSection from "../components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Navbar />
      <ProjectSection />
      <TestimonialSection />
      <AboutSection />
    </>
  );
}
