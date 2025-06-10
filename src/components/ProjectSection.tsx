"use client";
import React, { FC } from "react";
import SectionContainer from "./SectionContainer";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./emblaComponents/EmblaCarousel";
import { SLIDES } from "@/data/carouselData";
import { pt_sans } from "@/app/fonts";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
  dragFree: false,
  containScroll: "keepSnaps",
  loop: true,
};

const ProjectSection: FC = () => {
  return (
    <>
      <SectionContainer
        className="relative flex flex-col gap-y-2 pt-12 border-b-4 border-base-300 box-border"
        id="projects"
      >
        <h1
          className={`text-center sm:font-bold text-5xl lg:text-6xl 2xl:text-9xl ${pt_sans.className}`}
        >
          Projects
        </h1>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        <p className="text-sm text-right">
          Want to have this cool carousel?{" "}
          <a
            href="https://www.embla-carousel.com/examples/generator/"
            target="_blank"
            className="link-hover link-primary"
          >
            check out this page.
          </a>
        </p>
      </SectionContainer>
    </>
  );
};

export default ProjectSection;
