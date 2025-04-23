import HeroSection from "../components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Navbar />
      <ProjectSection />
      <AboutSection />
    </>
  );
}
