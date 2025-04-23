"use client";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import React, { FC } from "react";
import { useTheme } from "./ThemeProvider";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer: FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  const { theme } = useTheme();
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
          <ul
            className={`menu bg-white/10 text-base-content min-h-full p-4${
              theme === "light"
                ? " text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                : " text-primary"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
