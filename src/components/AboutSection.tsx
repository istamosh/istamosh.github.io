import React, { FC } from "react";
import SectionContainer from "./SectionContainer";
import { pt_sans } from "@/app/fonts";
import {
  Docker,
  Flask,
  Next,
  Photoshop,
  Python,
  Typescript,
} from "./icons/SoftwareDevelopmentIcons";
import Footer from "./Footer";
import { Book, Briefcase, VideoCam } from "./icons/AboutMeIcons";

const AboutSection: FC = () => {
  return (
    <SectionContainer id="about" className="flex flex-col gap-y-4">
      <h1
        className={`text-center sm:font-bold text-5xl lg:text-6xl 2xl:text-9xl ${pt_sans.className}`}
      >
        About me
      </h1>

      <div className="text-center">
        <span className="font-bold text-xl">
          I am open for opportunity while:
        </span>
        <ul className="sm:grid sm:grid-cols-3 sm:gap-x-8">
          <li className="flex flex-col items-center">
            <Briefcase className="fill-primary" />
            <span>
              Currently working as a freelance graphic designer that dabbles in
              Photoshop.
            </span>
          </li>
          <li className="flex flex-col items-center">
            <Book className="fill-primary" />
            <span>
              Enrolling as{" "}
              <a
                className="link link-hover link-primary"
                href="https://journal.revou.co/kenalan-fsse/"
                target="_blank"
              >
                RevoU FSSE
              </a>{" "}
              student.
            </span>
          </li>
          <li className="flex flex-col items-center">
            <VideoCam className="fill-primary" />
            <span>
              Having a{" "}
              <a
                className="link link-hover link-primary"
                href="https://www.youtube.com/@istamosh"
                target="_blank"
              >
                Youtube channel
              </a>{" "}
              mostly about coding tutorial.
            </span>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <span className="font-bold text-xl">
          Currently learning these technologies
        </span>
        <div className={`fill-primary flex justify-center gap-x-2 flex-wrap`}>
          <Flask />
          <Docker />
          <Next />
          <Python />
          <Typescript />
          <Photoshop />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
