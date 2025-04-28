import { externalLinks } from "@/data/externalLinks";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {externalLinks.map((link, i) => (
            <a
              key={i}
              className="link link-hover"
              href={link.link}
              target="_blank"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved. Icons
            belong to{" "}
            <a
              href="https://daisyui.com/"
              target="_blank"
              className="link link-hover link-primary"
            >
              DaisyUI
            </a>
            ,{" "}
            <a
              href="https://icons8.com/"
              target="_blank"
              className="link link-hover link-primary"
            >
              Icons8
            </a>
            , and{" "}
            <a
              href="https://heroicons.com/"
              target="_blank"
              className="link link-hover link-primary"
            >
              HeroIcons
            </a>
            .
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
