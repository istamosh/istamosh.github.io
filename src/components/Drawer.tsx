"use client";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import React, { FC } from "react";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer: FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  const { theme } = useTheme();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="drawer z-20">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
        />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* Thumb-zone optimized drawer content */}
          <div
            className={`min-h-full w-80 bg-base-100/95 backdrop-blur-md flex flex-col ${
              theme === "light" ? "bg-white/95" : "bg-base-100/95"
            }`}
          >
            {/* Header with close button in easy reach */}
            <div className="flex justify-between items-center p-4 border-b border-base-300">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="Close navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Spacer to push content toward thumb zone */}
            <div className="flex-1"></div>

            {/* Navigation links in thumb-friendly bottom area */}
            <nav className="p-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block w-full p-4 text-lg font-medium rounded-lg transition-colors duration-200 hover:bg-base-200 active:bg-base-300 text-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Theme toggle and footer in easy thumb reach */}
            <div className="p-4 border-t border-base-300">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm opacity-70">Theme</span>
                  <ThemeToggle />
                </div>
                <p className="text-xs text-center opacity-50">
                  Tap anywhere outside to close
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
