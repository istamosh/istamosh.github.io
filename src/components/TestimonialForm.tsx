"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { pt_sans } from "@/app/fonts";
import axios, { AxiosError } from '@/utils/axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { getTranslation } from '@/utils/i18n';
import { TestimonialFormProps, TestimonialFormValues, SubmitStatus } from '@/types/testimonial';
import { getValidationSchema, getInitialValues } from '@/utils/testimonialValidation';

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onSuccess, language }) => {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ 
    type: null, 
    message: '' 
  });
  
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Get translations for current language
  const t = getTranslation(language);
  
  // Create validation schema that updates when language changes
  const validationSchema = useMemo(() => getValidationSchema(t), [t]);
  
  // Get initial form values
  const initialValues = getInitialValues();

  // Handle responsive reCAPTCHA size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      // Use compact size for mobile and tablets in portrait mode
      setIsMobile(width < 768); // Tailwind's md breakpoint
    };

    // Check initial screen size
    checkScreenSize();

    // Listen for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSubmit = async (
    values: TestimonialFormValues,
    { resetForm, setSubmitting }: { 
      resetForm: () => void; 
      setSubmitting: (isSubmitting: boolean) => void;
    }
  ) => {
    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      setSubmitStatus({
        type: 'error',
        message: t.recaptchaError
      });
      setSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('/api/testimonial', values);
      
      if (response.status === 201 || response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: t.successMessage
        });
        resetForm();
        
        // Reset reCAPTCHA
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
          setRecaptchaToken('');
        }
        
        // Call onSuccess callback after a short delay to show the success message
        setTimeout(() => {
          onSuccess?.();
        }, 2000);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      setSubmitStatus({
        type: 'error',
        message: axiosError.response?.data?.message || 'Failed to submit testimonial. Please try again.'
      });
      
      // Reset reCAPTCHA on error
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setRecaptchaToken('');
      }
    } finally {
      setSubmitting(false);

      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-3 w-full">
          {submitStatus.type && (
            <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-error'} mb-4`}>
              <span>{submitStatus.message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="first_name"
                className={`block text-sm font-medium mb-1 ${pt_sans.className}`}
              >
                {t.firstName}
              </label>
              <Field
                type="text"
                id="first_name"
                name="first_name"
                className="input input-bordered w-full input-sm"
                placeholder={t.firstNamePlaceholder}
              />
              <ErrorMessage
                name="first_name"
                component="div"
                className="text-error text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="last_name"
                className={`block text-sm font-medium mb-1 ${pt_sans.className}`}
              >
                {t.lastName}
              </label>
              <Field
                type="text"
                id="last_name"
                name="last_name"
                className="input input-bordered w-full input-sm"
                placeholder={t.lastNamePlaceholder}
              />
              <ErrorMessage
                name="last_name"
                component="div"
                className="text-xs text-error mt-1"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="role_company"
              className={`block text-sm font-medium mb-1 ${pt_sans.className}`}
            >
              {t.roleCompany} <span className="text-xs text-gray-500">{t.optional}</span>
            </label>
            <Field
              type="text"
              id="role_company"
              name="role_company"
              className="input input-bordered w-full input-sm"
              placeholder={t.roleCompanyPlaceholder}
            />
            <ErrorMessage
              name="role_company"
              component="div"
              className="text-error text-xs mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="profile_link"
              className={`block text-sm font-medium mb-1 ${pt_sans.className}`}
            >
              {t.profileLink} <span className="text-error">*</span>
            </label>
            <Field
              type="url"
              id="profile_link"
              name="profile_link"
              className="input input-bordered w-full input-sm"
              placeholder={t.profileLinkPlaceholder}
            />
            <ErrorMessage
              name="profile_link"
              component="div"
              className="text-error text-xs mt-1"
            />
            <div className="text-xs text-gray-500 mt-1">
              {t.profileLinkDescription}
            </div>
          </div>

          <div>
            <label
              htmlFor="testimonial"
              className={`block text-sm font-medium mb-1 ${pt_sans.className}`}
            >
              {t.testimonial}
            </label>
            <Field
              as="textarea"
              id="testimonial"
              name="testimonial"
              className="textarea textarea-bordered w-full h-24"
              placeholder={t.testimonialPlaceholder}
            />
            <ErrorMessage
              name="testimonial"
              component="div"
              className="text-error text-xs mt-1"
            />
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">{t.privacyOptions}</div>
            
            <div className="form-control">
              <label className="label cursor-pointer py-1">
                <span className="label-text text-sm">{t.hideFirstName}</span>
                <Field
                  type="checkbox"
                  name="censor_first_name"
                  className="checkbox checkbox-primary checkbox-sm"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer py-1">
                <span className="label-text text-sm">{t.hideLastName}</span>
                <Field
                  type="checkbox"
                  name="censor_last_name"
                  className="checkbox checkbox-primary checkbox-sm"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer py-1">
                <span className="label-text text-sm">
                  {t.consentText}
                  <span className="text-error"> *</span>
                </span>
                <Field
                  type="checkbox"
                  name="consent_given"
                  className="checkbox checkbox-primary checkbox-sm"
                />
              </label>
              <ErrorMessage
                name="consent_given"
                component="div"
                className="text-error text-xs mt-1"
              />
            </div>
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center my-4 px-2">
            <div className="w-full max-w-sm md:max-w-none overflow-hidden">
              <div className="flex justify-center">
                <div className={`scale-75 xs:scale-85 sm:scale-95 md:scale-100 origin-center transition-all duration-200 ${
                  !recaptchaToken && submitStatus.type === 'error' && submitStatus.message.includes('reCAPTCHA') 
                    ? 'ring-2 ring-error ring-opacity-50 rounded-lg p-1' 
                    : ''
                }`}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    size={isMobile ? 'compact' : 'normal'}
                    theme="light"
                    onChange={(token) => {
                      setRecaptchaToken(token || '');
                    }}
                    onExpired={() => {
                      setRecaptchaToken('');
                    }}
                    onError={() => {
                      setRecaptchaToken('');
                    }}
                    style={{
                      transform: 'scale(1)',
                      transformOrigin: 'center center'
                    }}
                  />
                </div>
              </div>
              {!recaptchaToken && submitStatus.type === 'error' && submitStatus.message.includes('reCAPTCHA') && (
                <div className="text-error text-xs mt-2 text-center font-medium">
                  {t.recaptchaPlaceholder}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full mt-4"
          >
            {isSubmitting ? t.submitting : t.submitTestimonial}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TestimonialForm;
