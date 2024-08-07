import React from "react";
import Link from "next/link";

const ProjectCarousel = () => {
  return (
    <div className="carousel w-full">
      <div id="images" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="w-full"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          className="w-full"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full"
        />

        <div
          id="navigation-arrow"
          className="absolute inset-y-0 flex items-center justify-between w-full px-4"
        >
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
