"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [image, setImage] = useState([
  //   "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  // ]);

  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  ];
  const handlePrev = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
    // setImage((prev) => [...prev, images[index]]);
    // setTimeout(() => {
    //   setImage(image.slice(1));
    // }, 1000);
  };
  const handleNext = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
    // setImage((prev) => [images[index], ...prev]);
    // setTimeout(() => {
    //   setImage(image.slice(0, -1));
    // }, 1000);
  };

  return (
    <div className="carousel w-[80vw] h-[50vh] rounded-2xl relative">
      <div id="images" className="relative w-full h-full flex">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          />
        ))}

        <div
          id="navigation-arrow"
          className="absolute inset-y-0 flex items-center justify-between w-full px-4"
        >
          <button
            onClick={handlePrev}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-neutral btn-circle text-white"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-neutral btn-circle text-white"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
