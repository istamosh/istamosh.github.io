import Image from "next/image";
import Link from "next/link";
import ProductCard from "./users/components/ProductCard";

export default function Home() {
  return (
    <main>
      {/* <h1>Hello World!</h1> */}

      {/* accessing anchor tag link will re-request layout.css, webpack.js, main-app.js */}
      {/* this will impact performance */}
      {/* instead, use a Link tag */}
      <Link href="/users">User&apos;s Page</Link>
      <ProductCard />
      <ProductCard />

      <div id="navigation">
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      <div id="intro">
        <h1>Salutations! I'm Alfian Ferdinan</h1>
        <p>I design a website!</p>
      </div>
    </main>
  );
}
