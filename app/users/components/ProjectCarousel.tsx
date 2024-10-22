"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ProjectData {
  url: string;
  description: string | null;
}

interface UrlData {
  url: string;
  description: string;
}

export const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
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

        const jsonResponse = await fetch("/urlData.json");
        if (!jsonResponse.ok) {
          throw new Error(
            "Failed to fetch project paths:" + jsonResponse.status
          );
        }

        const jsonData: UrlData[] = await jsonResponse.json();

        const combinedUrls = [
          ...(jsonData.map((el) => el.url) || []),
          ...projectData,
        ];

        const fetchMetaDescription = async (url: string) => {
          if (!url.startsWith("/projects/")) {
            return null;
          }

          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(
                `Failed to fetch project ${url}: + ${response.status}`
              );
            }
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, "text/html");
            const metaDesc = doc.querySelector("meta[name='description']");
            return metaDesc
              ? metaDesc.getAttribute("content")
              : "No description available.";
          } catch (error) {
            // console.error(`Error fetching meta description for ${url}:`, error);
            return null;
          }
        };

        const metaDescriptions = await Promise.all(
          combinedUrls.map(fetchMetaDescription)
        );

        const combinedData = combinedUrls.map((url: string, index) => ({
          url,
          description: jsonData[index]?.description || metaDescriptions[index],
        }));

        setProjectData(combinedData);
      } catch (error) {
        console.error("Error fetching project paths:", error);
      }
      setLoading(false);
    };

    fetchAllUrls();
  }, []);

  useEffect(() => {
    const takeScreenshotAPI = async () => {
      setLoading(true);

      const promises = projectData.map(async (el) => {
        try {
          const filename =
            el.url.replace(/[^a-zA-Z0-9]/gi, "_").toLowerCase() + ".png";
          const imageUrl = `/screenshots/${filename}`;

          const response = await fetch(imageUrl, { method: "HEAD" });
          if (response.ok) {
            return imageUrl;
          } else {
            // call the route.tsx to take a screenshot
            const screenshotResponse = await fetch(
              `/api/screenshot?url=${encodeURIComponent(el.url)}`
            );

            const data = await screenshotResponse.json();

            if (data.image) {
              return data.image;
            } else {
              console.log(
                `Error fetching screenshot for ${el.url}:`,
                data.error || data
              );
              return "";
            }
          }
        } catch (error) {
          console.log(`Error processing ${el.url}:`, error);
          return "";
        }
      });
      const results = await Promise.all(promises);
      setImageUrls(results.filter((url) => url !== ""));
      setLoading(false);
    };

    takeScreenshotAPI();
  }, [projectData]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <h1 className="font-sans text-2xl sm:text-5xl text-center mb-5">
        Projects
      </h1>
      <div className="carousel w-[80vw] h-[50vh] rounded-2xl relative outline outline-1 outline-sky-400">
        {imageUrls.map((src, index) => (
          <a
            key={index}
            href={projectData[index].url}
            target="_blank"
            className="carousel-item size-full w-full h-auto object-contain flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex w-full flex-col justify-between">
              <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
                <Image
                  src={src}
                  className="w-full h-auto object-contain"
                  width={400}
                  height={100}
                  quality={70}
                  alt={`Project ${index + 1}`}
                  loading="lazy"
                />
              </div>
              <div className="divider"></div>
              <div className="card bg-slate-900 rounded-md grid h-15 place-items-center text-center text-cyan-100">
                {projectData[index].description}
              </div>
            </div>
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
