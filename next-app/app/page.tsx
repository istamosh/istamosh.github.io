import Image from "next/image";
import Link from "next/link";
import ProductCard from "./users/components/ProductCard";
import NavigationBar from "./users/components/NavigationBar";

export default function Home() {
  return (
    <main className="max-h-screen snap-y overflow-y-scroll">
      <div id="header-wrapper" className="snap-start">
        <NavigationBar />
        <div
          id="intro-section"
          className="w-full h-[calc(100vh-68px)] bg-slate-800 flex items-center justify-between"
        >
          <div className="w-2/5">
            <h1 className="px-4 py-2">Salutations! I'm Alfian Ferdinan</h1>
            <p className="px-4">I design a website!</p>
          </div>
          <div className="w-3/5 text-center">Placeholder Photo</div>
        </div>
      </div>

      <div
        id="showcase-section"
        className="snap-start w-full h-screen flex items-center justify-center"
      >
        <h1 className="font-sans text-9xl text-center">Projects Section</h1>
      </div>

      <div
        id="certificate-section"
        className="snap-start w-full h-screen bg-slate-800 flex items-center justify-center"
      >
        <h1 className="font-sans text-9xl text-center">Certificate Section</h1>
      </div>

      <div
        id="contact-section"
        className="snap-start w-full h-screen flex items-center justify-center"
      >
        <h1 className="font-sans text-9xl text-center">Let's Get In Touch!</h1>
      </div>
    </main>
  );
}
