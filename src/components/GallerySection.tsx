import React, { FC } from "react";
import SectionContainer from "./SectionContainer";
import { pt_sans } from "@/app/fonts";
import Image from "next/image";

const GallerySection: FC = () => {
  return (
    <SectionContainer id="gallery" className="flex flex-col gap-y-6">
      <h1
        className={`text-center sm:font-bold text-5xl lg:text-6xl 2xl:text-9xl ${pt_sans.className}`}
      >
        Gallery
      </h1>

      <div className="text-center max-w-4xl mx-auto">
        <p className="text-lg mb-8 leading-relaxed">
          A showcase of my creative projects and development work that demonstrates my passion for technology.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {/* Video Editing Card */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <figure className="relative aspect-video">
                <Image
                  src="/screenshot1.webp"
                  alt="Video editing workspace in Kdenlive"
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Video Editing</h2>
                <p className="text-sm text-base-content/80">
                  Creating educational content for my YouTube channel using Kdenlive. 
                  I focus on coding tutorials and problem-solving walkthroughs to help fellow developers learn and improve their skills.
                </p>
                <div className="card-actions justify-end mt-4">
                  <div className="badge badge-outline">Kdenlive</div>
                  <div className="badge badge-outline">Content Creation</div>
                </div>
              </div>
            </div>

            {/* Python Automation Card */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <figure className="relative aspect-video">
                <Image
                  src="/screenshot2.jpeg"
                  alt="Python automation app for Photoshop workflow"
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Python Automation</h2>
                <p className="text-sm text-base-content/80">
                  Developing a Python application using photoshop-python-api 
                  to automate repetitive tasks in my freelance graphic design workflow. 
                  Built with AI pair programming to accelerate development while ensuring 
                  robust code quality and learning new automation techniques.
                </p>
                <div className="card-actions justify-end mt-4">
                  <div className="badge badge-outline">Python</div>
                  <div className="badge badge-outline">Photoshop API</div>
                  <div className="badge badge-outline">Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default GallerySection;
