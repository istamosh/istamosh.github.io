"use client";

import React, { useCallback, useState } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { CarouselSlide } from "@/types/carousel";
import { pt_sans } from "@/app/fonts";

type PropType = {
  slides: CarouselSlide[];
  options?: EmblaOptionsType;
};

const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit).trim() + "...";
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  const handleImageInteraction = (slideId: number) => {
    if (activeOverlay === slideId) {
      setActiveOverlay(null);
    } else {
      setActiveOverlay(slideId);
      // Auto-hide overlay after 5 seconds on mobile
      setTimeout(() => {
        setActiveOverlay(null);
      }, 5000);
    }
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="embla__slide__number">
                {/* Desktop Layout - unchanged */}
                <div className="hidden sm:flex sm:flex-row sm:items-center gap-4 p-4 max-w-5xl mx-auto">
                  <div className="w-full sm:w-1/2 flex-shrink-0 h-auto flex items-center justify-center">
                    <div className="w-full max-w-md flex items-center justify-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        width={400}
                        height={300}
                        className="embla__slide__img max-h-[300px] w-auto max-w-full h-auto object-contain rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                  <div className="embla__slide__text w-full sm:w-1/2 flex flex-col py-4">
                    <div className="space-y-2">
                      <h3 className={`text-2xl font-bold ${pt_sans.className}`}>
                        {slide.title}
                      </h3>
                      <p className={`text-base font-normal ${pt_sans.className} leading-snug opacity-90`}>
                        {truncateText(slide.description, 150)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-6">
                      {slide.projectLink && (
                        <a
                          href={slide.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2 inline-flex items-center px-3 py-1.5 text-base bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          aria-label={`View live demo of ${slide.title}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                          Demo
                        </a>
                      )}
                      <a
                        href={slide.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2 inline-flex items-center px-3 py-1.5 text-base bg-gray-800 hover:bg-gray-900 active:bg-gray-950 text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                        aria-label={`View GitHub repository for ${slide.title}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout - with overlay interaction */}
                <div className="sm:hidden relative p-4">
                  <div 
                    className="relative cursor-pointer"
                    onClick={() => handleImageInteraction(slide.id)}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      width={400}
                      height={300}
                      className="w-full h-auto max-h-[40vh] object-contain rounded-lg shadow-md"
                    />
                    
                    {/* Tap indicator hint */}
                    {activeOverlay !== slide.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-lg">
                        <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                          Tap for details
                        </div>
                      </div>
                    )}

                    {/* Overlay with content */}
                    {activeOverlay === slide.id && (
                      <div 
                        className="absolute inset-0 bg-black/80 rounded-lg flex flex-col justify-end p-4 text-white animate-in fade-in duration-300"
                        onClick={handleCloseOverlay}
                      >
                        <div className="space-y-3">
                          <h3 className={`text-lg font-bold ${pt_sans.className}`}>
                            {slide.title}
                          </h3>
                          <p className={`text-sm ${pt_sans.className} leading-snug opacity-90`}>
                            {truncateText(slide.description, 120)}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {slide.projectLink && (
                              <a
                                href={slide.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1.5 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200"
                                aria-label={`View live demo of ${slide.title}`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  />
                                </svg>
                                Demo
                              </a>
                            )}
                            <a
                              href={slide.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-800 text-white rounded-md transition-colors duration-200"
                              aria-label={`View GitHub repository for ${slide.title}`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 mr-1"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                              </svg>
                              Code
                            </a>
                          </div>
                        </div>
                        
                        {/* Close hint */}
                        <div className="absolute top-4 right-4 text-white/70 text-xs">
                          Tap anywhere to close
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
