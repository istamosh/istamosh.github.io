"use client";

import React, { useState, useEffect, useRef } from 'react';
import SectionContainer from './SectionContainer';
import { pt_sans } from '@/app/fonts';
import TestimonialForm from './TestimonialForm';
import axios from '@/utils/axios';
import { Language, getTranslation } from '@/utils/i18n';
import { ApprovedTestimonial } from '@/types/testimonial';
import { motion } from 'framer-motion';

const TestimonialSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [approvedTestimonials, setApprovedTestimonials] = useState<ApprovedTestimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<Language>('en');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = getTranslation(language);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetch approved testimonials
  useEffect(() => {
    const fetchApprovedTestimonials = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get('/api/admin/testimonials/approved');
        setApprovedTestimonials(response.data);
      } catch {
        setError('Failed to load testimonials.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchApprovedTestimonials();
  }, []);

  const handleRetry = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/admin/testimonials/approved');
      setApprovedTestimonials(response.data);
    } catch {
      setError('Failed to load testimonials.');
    } finally {
      setIsLoading(false);
    }
  };

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

  // Intersection Observer logic
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionContainer
      id="testimonials"
      className="flex flex-col items-center gap-y-4 border-b-4 border-base-300 pb-10"
      fullHeight={false}
    >
      <h1
        className={`text-center sm:font-bold text-5xl lg:text-6xl 2xl:text-9xl ${pt_sans.className}`}
      >
        {t.testimonialsTitle}
      </h1>
      
      <button
        onClick={openModal}
        className="btn btn-primary"
      >
        {t.addYourTestimonial}
      </button>

      {/* Approved Testimonials Display */}
      <div ref={sectionRef} className="w-full max-w-6xl py-8 overflow-x-hidden">
        {isLoading ? (
          <div className="flex gap-6 items-stretch w-max animate-pulse">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="card bg-base-200 shadow-lg min-w-[300px] max-w-xs w-[90vw] sm:w-80 flex-shrink-0"
              >
                <div className="card-body">
                  <div className="h-6 bg-base-300 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-base-300 rounded w-1/2 mb-2" />
                  <div className="h-4 bg-base-300 rounded w-1/3 mb-2" />
                  <div className="h-3 bg-base-300 rounded w-1/4" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <p className="text-error text-lg">{error}</p>
            <button
              className="btn btn-error btn-outline"
              onClick={handleRetry}
            >
              {t.retry}
            </button>
          </div>
        ) : approvedTestimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-base-content/70 text-lg">
              {t.noTestimonials}
            </p>
          </div>
        ) : (
          <div className={approvedTestimonials.length === 1 ? "flex justify-center" : ""}>
            <motion.div
              className="flex gap-6 items-stretch w-max"
              style={{ cursor: approvedTestimonials.length > 1 ? 'grab' : 'default' }}
              animate={isInView && approvedTestimonials.length > 1 ? { x: [0, -(approvedTestimonials.length * 350)] } : { x: 0 }}
              transition={isInView && approvedTestimonials.length > 1 ? {
                repeat: Infinity,
                repeatType: 'loop',
                duration: approvedTestimonials.length * 6,
                ease: 'linear',
              } : {}}
              drag={approvedTestimonials.length > 1 ? "x" : false}
              dragConstraints={approvedTestimonials.length > 1 ? { left: -(approvedTestimonials.length * 350), right: 0 } : {}}
            >
              {(approvedTestimonials.length > 1 ? approvedTestimonials.concat(approvedTestimonials) : approvedTestimonials).map((testimonial, idx) => (
                <div
                  key={testimonial.id + '-' + idx}
                  className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[300px] max-w-xs w-[90vw] sm:w-80 flex-shrink-0"
                >
                  <div className="card-body">
                    <blockquote className="text-base-content/90 italic mb-4">
                      &ldquo;{testimonial.testimonial}&rdquo;
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
            </motion.div>
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className={`text-xl sm:text-2xl font-bold ${pt_sans.className}`}>
                {t.modalTitle}
              </h2>
              
              {/* Mobile-first Language Switcher */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                  <span className="text-sm font-medium text-base-content/70 whitespace-nowrap">
                    {t.language}:
                  </span>
                  <div className="join join-horizontal bg-base-200 rounded-lg p-1">
                    <label className="join-item">
                      <input
                        type="radio"
                        name="language"
                        value="en"
                        checked={language === 'en'}
                        onChange={(e) => setLanguage(e.target.value as Language)}
                        className="sr-only"
                      />
                      <span className={`px-3 py-1 text-xs sm:text-sm rounded cursor-pointer transition-all duration-200 ${
                        language === 'en' 
                          ? 'bg-primary text-primary-content shadow-sm' 
                          : 'text-base-content/70 hover:text-base-content'
                      }`}>
                        {t.english}
                      </span>
                    </label>
                    <label className="join-item">
                      <input
                        type="radio"
                        name="language"
                        value="id"
                        checked={language === 'id'}
                        onChange={(e) => setLanguage(e.target.value as Language)}
                        className="sr-only"
                      />
                      <span className={`px-3 py-1 text-xs sm:text-sm rounded cursor-pointer transition-all duration-200 ${
                        language === 'id' 
                          ? 'bg-primary text-primary-content shadow-sm' 
                          : 'text-base-content/70 hover:text-base-content'
                      }`}>
                        {t.bahasa}
                      </span>
                    </label>
                  </div>
                </div>
                
                <button
                  onClick={closeModal}
                  className="btn btn-ghost btn-sm btn-circle flex-shrink-0"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <TestimonialForm onSuccess={closeModal} language={language} />
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
