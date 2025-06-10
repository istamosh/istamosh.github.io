"use client";

import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import { pt_sans } from '@/app/fonts';
import TestimonialForm from './TestimonialForm';

const TestimonialSection: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <SectionContainer
      id="testimonials"
      className="flex flex-col items-center gap-y-4 border-b-4 border-base-300"
    >
      <h1
        className={`text-center sm:font-bold text-5xl lg:text-6xl 2xl:text-9xl ${pt_sans.className}`}
      >
        Testimonials
      </h1>

      {!isFormOpen ? (
        <button
          onClick={() => setIsFormOpen(true)}
          className="btn btn-primary btn-lg"
        >
          Add Your Testimonial
        </button>
      ) : (
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold ${pt_sans.className}`}>
              Share Your Experience
            </h2>
            <button
              onClick={() => setIsFormOpen(false)}
              className="btn btn-ghost btn-sm"
            >
              Close
            </button>
          </div>
          <TestimonialForm />
        </div>
      )}

      {/* TODO: Add testimonials display section here */}
      <div className="w-full max-w-4xl py-8">
        <p className="text-center text-base-content/70">
          No testimonials yet. Be the first to share your experience!
        </p>
      </div>
    </SectionContainer>
  );
};

export default TestimonialSection;
