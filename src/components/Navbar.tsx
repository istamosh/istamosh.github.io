"use client";
import Link from "next/link";
import React, { useState } from "react";
import Drawer from "./Drawer";
import { navLinks } from "@/data/navLinks";
import { ArrowRight } from "./icons/Arrows";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`sticky top-0 -mt-12 z-10 w-full bg-gradient-to-r from-transparent from-5% backdrop-blur-sm ${
          theme === "light" ? "via-blue-500/40" : "via-primary/15"
        } via-50% to-transparent to-95%`}
      >
        <div className="flex flex-row justify-center items-center py-2">
          <button
            type="button"
            className={`sm:hidden flex items-center gap-x-2${
              theme === "light"
                ? " text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                : " text-primary"
            }`}
            onClick={() => setIsDrawerOpen(true)}
          >
            <ArrowRight /> Navigation
          </button>

          <nav className="hidden sm:flex sm:gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={
                  theme === "light"
                    ? "text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                    : "text-primary"
                }
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="absolute top-0 right-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Navbar;
