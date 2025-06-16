"use client";

import React, { useState, useEffect } from 'react';
import SectionContainer from './SectionContainer';
import { pt_sans } from '@/app/fonts';
import TestimonialForm from './TestimonialForm';

const TestimonialSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <SectionContainer
      id="testimonials"
      className="flex flex-col items-center gap-y-4 border-b-4 border-base-300 pb-10"
      fullHeight={false}
    >
      <h1
        className={`text-center sm:font-bold text-5xl lg:text-6xl 2xl:text-9xl ${pt_sans.className}`}
      >
        Testimonials
      </h1>

      <button
        onClick={openModal}
        className="btn btn-primary"
      >
        Add Your Testimonial
      </button>

      {/* TODO: Add testimonials display section here */}
      <div className="w-full max-w-4xl py-8">
        <p className="text-center text-base-content/70">
          No testimonials yet. Be the first to share your experience!
        </p>
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${pt_sans.className}`}>
                Share Your Experience
              </h2>
              <button
                onClick={closeModal}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            
            <TestimonialForm onSuccess={closeModal} />
          </div>
          
          {/* Modal backdrop - clicking it closes the modal */}
          <div className="modal-backdrop" onClick={closeModal}>
            <button>close</button>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default TestimonialSection;
