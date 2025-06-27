"use client";
import Link from "next/link";
import React, { useState } from "react";
import Drawer from "./Drawer";
import { navLinks } from "@/data/navLinks";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      {/* Desktop-only top bar - completely hidden on mobile */}
      <div
        className={`hidden sm:block sticky top-0 -mt-12 z-10 w-full bg-gradient-to-r from-transparent from-5% backdrop-blur-sm ${
          theme === "nord" ? "via-blue-500/40" : "via-primary/15"
        } via-50% to-transparent to-95%`}
      >
        <div className="flex flex-row justify-center items-center py-2">
          {/* Desktop navigation */}
          <nav className="flex gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={
                  theme === "nord"
                    ? "text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                    : "text-primary"
                }
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Theme toggle for desktop */}
          <div className="absolute top-0 right-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile floating navigation button - thumb zone friendly */}
      <button
        type="button"
        className={`sm:hidden fixed bottom-6 right-6 z-30 p-4 rounded-full shadow-lg backdrop-blur-sm border-2 transition-all duration-300 ${
          theme === "nord"
            ? "bg-blue-500/90 border-blue-400 text-white shadow-blue-500/25"
            : "bg-primary/90 border-primary text-white shadow-primary/25"
        } ${isDrawerOpen ? "scale-110" : "scale-100 hover:scale-105"}`}
        onClick={() => setIsDrawerOpen(true)}
        aria-label="Open navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Navbar;
