import { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Alfian's portfolio - a passionate full-stack developer showcasing innovative web applications, software projects, and professional experience in modern technologies.",
  openGraph: {
    title: "Alfian - Full Stack Developer Portfolio",
    description: "Explore my latest projects, testimonials, and professional journey in software development.",
    url: "https://your-vercel-domain.vercel.app", // Update this with your actual Vercel domain
    images: [
      {
        url: "/portfolio-page-hero-transparent.webp",
        width: 1200,
        height: 630,
        alt: "Alfian Portfolio Homepage",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Navbar />
      <ProjectSection />
      <TestimonialSection />
      <AboutSection />
    </main>
  );
}
