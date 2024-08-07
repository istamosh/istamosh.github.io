"use client";
import React from "react";

const NavigationBar = () => {
  const handleScroll = (e: any, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Istamosh</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button onClick={(e) => handleScroll(e, "showcase-section")}>
              Project
            </button>
          </li>
          <li>
            <details>
              <summary>Works</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
