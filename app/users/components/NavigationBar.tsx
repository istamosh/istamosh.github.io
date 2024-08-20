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
        <h1 className="text-md sm:text-xl sm:ml-5 text-center">
          Istamosh Portfolio
        </h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button onClick={(e) => handleScroll(e, "showcase-section")}>
              Projects
            </button>
          </li>
          <li>
            <details>
              <summary>Nav.</summary>
              <ul className="bg-base-100 rounded-t-none p-2 right-0">
                <li>
                  <button
                    onClick={(e) => handleScroll(e, "certificate-section")}
                  >
                    Certificates
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleScroll(e, "contact-section")}>
                    Socials
                  </button>
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
