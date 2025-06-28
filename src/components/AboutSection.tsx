import React, { FC } from "react";
import SectionContainer from "./SectionContainer";
import { pt_sans } from "@/app/fonts";
import { getProficientTechnologies, getLearningTechnologies } from "@/data/technologies";
import { getCurrentActivities } from "@/data/currentActivities";
import { ActivityDescription } from "./ActivityDescription";
import Footer from "./Footer";

const AboutSection: FC = () => {
  const proficientTechnologies = getProficientTechnologies();
  const learningTechnologies = getLearningTechnologies();
  const currentActivities = getCurrentActivities();

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
          {currentActivities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <li key={activity.id} className="flex flex-col items-center">
                <IconComponent className="fill-primary" />
                <ActivityDescription activity={activity} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="text-center">
        <span className="font-bold text-xl">
          Technologies I am proficient in:
        </span>
        <div className={`fill-primary flex justify-center gap-x-2 flex-wrap mb-6`}>
          {proficientTechnologies.map((tech) => {
            const IconComponent = tech.icon;
            return <IconComponent key={tech.name} />;
          })}
        </div>
        
        <span className="font-bold text-xl">
          Currently learning:
        </span>
        <div className={`fill-primary flex justify-center gap-x-2 flex-wrap`}>
          {learningTechnologies.map((tech) => {
            const IconComponent = tech.icon;
            return <IconComponent key={tech.name} />;
          })}
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
