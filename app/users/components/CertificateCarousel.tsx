"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const CertificateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [certificatePaths, setCertificatePaths] = useState<string[]>([]);

  const fetchCertificates = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/certificate");
      if (!response.ok) {
        throw new Error(
          "Failed to fetch certificate paths: " + response.status
        );
      }
      const data = await response.json();

      setCertificatePaths(data);
    } catch (error) {
      console.error("Error fetching certificate paths:", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCertificates();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificatePaths.length - 1 : prev - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === certificatePaths.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <h1 className="font-sans text-2xl sm:text-5xl text-center mb-3">
        Certificates
      </h1>
      <div className="carousel w-[80vw] h-[85vh] rounded-3xl relative mb-5">
        {certificatePaths.map((src, index) => (
          <div key={index} className="carousel-item size-full">
            <Image
              key={index}
              src={src}
              width={400}
              height={400}
              quality={50}
              className="w-full h-auto object-contain transition-transform duration-500 ease-in-out"
              alt={`image-${index + 1}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              loading="lazy"
            />
          </div>
        ))}

        <div className="absolute inset-y-0 flex items-center justify-between w-full px-4">
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

export default CertificateCarousel;
