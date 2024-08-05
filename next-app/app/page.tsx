import Image from "next/image";
import Link from "next/link";
import ProductCard from "./users/components/ProductCard";
import NavigationBar from "./users/components/NavigationBar";

export default function Home() {
  return (
    <main>
      <NavigationBar />

      <div
        id="intro"
        className="w-full h-[calc(100vh-68px)] bg-slate-800 flex items-center justify-between"
      >
        <div className="p-1">
          <h1 className="px-4 py-2">Salutations! I'm Alfian Ferdinan</h1>
          <p className="px-4">I design a website!</p>
        </div>
        <div className="grow text-center">Placeholder Photo</div>
      </div>

      <div id="showcase">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        molestias! Quisquam minima similique impedit alias consectetur voluptas
        fugit pariatur eum cum maiores quo velit tenetur itaque, aperiam atque
        iste ipsum.
      </div>
    </main>
  );
}
