import NavigationBar from "./users/components/NavigationBar";
import ProjectCarousel from "./users/components/ProjectCarousel";
import CertificateCarousel from "./users/components/CertificateCarousel";
import SocialMedias from "./users/components/SocialMedias";
import Dashboard from "./users/components/Dashboard";

export default function Home() {
  return (
    <main className="max-h-screen snap-y overflow-y-scroll smooth-scroll">
      <div id="header-wrapper" className="snap-start">
        <NavigationBar />
        <div
          id="intro-section"
          className="w-full h-[calc(100vh-68px)] bg-slate-800 flex items-center justify-end"
        >
          <Dashboard />
        </div>
      </div>

      <div
        id="showcase-section"
        className="snap-start w-full h-screen flex flex-col items-center justify-center"
      >
        <ProjectCarousel />
      </div>

      <div
        id="certificate-section"
        className="snap-start w-full h-screen bg-slate-800 flex flex-col items-center justify-center"
      >
        <CertificateCarousel />
      </div>

      <div
        id="contact-section"
        className="snap-start w-full h-screen flex flex-col items-center justify-center"
      >
        <SocialMedias />
      </div>
    </main>
  );
}
