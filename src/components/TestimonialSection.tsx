"use client";

import React, { useState, useEffect } from 'react';
import SectionContainer from './SectionContainer';
import { pt_sans } from '@/app/fonts';
import TestimonialForm from './TestimonialForm';
import axios from '@/utils/axios';

interface ApprovedTestimonial {
  id: number;
  name: string;
  role_company: string;
  profile_link: string;
  testimonial: string;
  created_at: string;
}

const TestimonialSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [approvedTestimonials, setApprovedTestimonials] = useState<ApprovedTestimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetch approved testimonials
  useEffect(() => {
    const fetchApprovedTestimonials = async () => {
      try {
        const response = await axios.get('/api/admin/testimonials/approved');
        setApprovedTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching approved testimonials:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApprovedTestimonials();
  }, []);

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

      {/* Approved Testimonials Display */}
      <div className="w-full max-w-6xl py-8">
        {isLoading ? (
          <div className="text-center">
            <span className="loading loading-spinner loading-md"></span>
            <p className="mt-2 text-base-content/70">Loading testimonials...</p>
          </div>
        ) : approvedTestimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-base-content/70 text-lg">
              No testimonials yet. Be the first to share your experience!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="card-body">
                  <blockquote className="text-base-content/90 italic mb-4">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="card-actions justify-end">
                    <div className="text-right">
                      {testimonial.profile_link ? (
                        <a
                          href={testimonial.profile_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-primary hover:text-primary-focus transition-colors duration-200 cursor-pointer"
                        >
                          {testimonial.name}
                        </a>
                      ) : (
                        <p className="font-semibold text-base-content">
                          {testimonial.name}
                        </p>
                      )}
                      {testimonial.role_company && (
                        <p className="text-sm text-base-content/70">
                          {testimonial.role_company}
                        </p>
                      )}
                      <p className="text-xs text-base-content/50 mt-1">
                        {new Date(testimonial.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
