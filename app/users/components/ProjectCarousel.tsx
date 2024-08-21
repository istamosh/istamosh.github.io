"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectUrls, setProjectUrls] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAllUrls = async () => {
    setLoading(true);
    try {
      const projectResponse = await fetch("/api/projects");
      if (!projectResponse.ok) {
        throw new Error(
          "Failed to fetch project paths:" + projectResponse.status
        );
      }
      const projectData = await projectResponse.json();

      const jsonResponse = await fetch("/urls.json");
      if (!jsonResponse.ok) {
        throw new Error("Failed to fetch project paths:" + jsonResponse.status);
      }
      const jsonData = await jsonResponse.json();

      const combinedUrls = [...(jsonData.urls || []), ...projectData];
      setProjectUrls(combinedUrls);
    } catch (error) {
      console.error("Error fetching project paths:", error);
    }
    setLoading(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    fetchAllUrls();
  }, []);
  useEffect(() => {
    // only use this API for development
    const takeScreenshotAPI = async () => {
      setLoading(true);
      setImageUrls([]);
      const promises = projectUrls.map(async (url) => {
        try {
          const response = await fetch(
            `/api/screenshot?url=${encodeURIComponent(url)}`
          );
          const data = await response.json();

          if (data.image) {
            return data.image;
          } else {
            console.log(`Error fetching screenshot for ${url}:`, data.error);
            return "";
          }
        } catch (error) {
          console.log(`Error processing ${url}:`, error);
          return "";
        }
      });
      const results = await Promise.all(promises);
      setImageUrls(results.filter((url) => url !== ""));
      setLoading(false);
    };
    const fetchScreenshots = async () => {
      setLoading(true);
      setImageUrls([]);

      // const baseUrl =
      //   process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      const promises = projectUrls.map(async (url) => {
        try {
          const filename =
            url.replace(/[^a-zA-Z0-9]/gi, "_").toLowerCase() + ".png";
          // const imageUrl = `${baseUrl}/screenshots/${filename}`;
          const imageUrl = `/screenshots/${filename}`;

          const response = await fetch(imageUrl, { method: "HEAD" });
          if (response.ok) {
            return imageUrl;
          } else {
            console.log(
              `Error fetching screenshot for ${url}:`,
              response.statusText
            );
            return "";
          }
        } catch (error) {
          console.log(`Error processing ${url}:`, error);
          return "";
        }
      });

      const results = await Promise.all(promises);
      setImageUrls(results.filter((url) => url !== ""));
      setLoading(false);
    };

    // takeScreenshotAPI();
    fetchScreenshots();
  }, [projectUrls]);

  return (
    <>
      <h1 className="font-sans text-2xl sm:text-5xl text-center mb-5">
        Projects
      </h1>
      <div className="carousel w-[80vw] h-[50vh] rounded-2xl relative">
        {imageUrls.map((src, index) => (
          <a
            key={index}
            href={projectUrls[index]}
            target="_blank"
            className="carousel-item size-full w-full h-auto object-contain flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <Image
              src={src}
              className="w-full h-auto object-contain"
              width={400}
              height={100}
              quality={70}
              alt={`Project ${index + 1}`}
              loading="lazy"
            />
          </a>
        ))}

        <div className="absolute inset-y-2/3 flex items-center justify-between w-full h-1/6 px-4">
          <button
            onClick={handlePrev}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-neutral btn-circle text-white"
            disabled={loading}
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-neutral btn-circle text-white"
            disabled={loading}
          >
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCarousel;
