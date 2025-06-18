"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { pt_sans } from "@/app/fonts";
import axios, { AxiosError } from '@/utils/axios';
import ReCAPTCHA from 'react-google-recaptcha';

interface TestimonialFormProps {
  onSuccess?: () => void;
}

interface TestimonialFormValues {
  first_name: string;
  last_name: string;
  role_company: string;
  profile_link: string;
  testimonial: string;
  censor_first_name: boolean;
  censor_last_name: boolean;
  consent_given: boolean;
}

const validationSchema = Yup.object({
  first_name: Yup.string()
    .required('First name is required')
    .min(2, 'Must be at least 2 characters')
    .max(60, 'Must not exceed 60 characters'),
  last_name: Yup.string()
    .required('Last name is required')
    .min(2, 'Must be at least 2 characters')
    .max(60, 'Must not exceed 60 characters'),
  role_company: Yup.string()
    .max(120, 'Must not exceed 120 characters'),
  profile_link: Yup.string()
    .required('Profile link is required')
    .url('Please enter a valid URL (e.g., https://linkedin.com/in/yourname)')
    .max(500, 'Must not exceed 500 characters'),
  testimonial: Yup.string()
    .required('Testimonial is required')
    .min(10, 'Must be at least 10 characters')
    .max(1000, 'Must not exceed 1000 characters'),
  consent_given: Yup.boolean()
    .oneOf([true], 'You must consent to share your testimonial'),
});

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onSuccess }) => {
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

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

  const initialValues: TestimonialFormValues = {
    first_name: '',
    last_name: '',
    role_company: '',
    profile_link: '',
    testimonial: '',
    censor_first_name: false,
    censor_last_name: false,
    consent_given: false,
  };

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
        message: 'Please complete the reCAPTCHA verification before submitting.'
      });
      setSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('/api/testimonial', values);
      
      if (response.status === 201 || response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your testimonial! It will be reviewed before being published.'
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
                First Name
              </label>
              <Field
                type="text"
                id="first_name"
                name="first_name"
                className="input input-bordered w-full input-sm"
                placeholder="Your first name"
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
                Last Name
              </label>
              <Field
                type="text"
                id="last_name"
                name="last_name"
                className="input input-bordered w-full input-sm"
                placeholder="Your last name"
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
              Role & Company <span className="text-xs text-gray-500">(Optional)</span>
            </label>
            <Field
              type="text"
              id="role_company"
              name="role_company"
              className="input input-bordered w-full input-sm"
              placeholder="e.g., Senior Developer at ABC Corp"
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
              Professional Profile Link <span className="text-error">*</span>
            </label>
            <Field
              type="url"
              id="profile_link"
              name="profile_link"
              className="input input-bordered w-full input-sm"
              placeholder="https://linkedin.com/in/yourname or https://yourwebsite.com"
            />
            <ErrorMessage
              name="profile_link"
              component="div"
              className="text-error text-xs mt-1"
            />
            <div className="text-xs text-gray-500 mt-1">
              Add your social media or personal website to verify your identity and will be featured with your testimonial.
            </div>
          </div>

          <div>
            <label
              htmlFor="testimonial"
              className={`block text-sm font-medium mb-1 ${pt_sans.className}`}
            >
              Testimonial
            </label>
            <Field
              as="textarea"
              id="testimonial"
              name="testimonial"
              className="textarea textarea-bordered w-full h-24"
              placeholder="Share your experience working with me..."
            />
            <ErrorMessage
              name="testimonial"
              component="div"
              className="text-error text-xs mt-1"
            />
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Privacy Options</div>
            
            <div className="form-control">
              <label className="label cursor-pointer py-1">
                <span className="label-text text-sm">Hide my first name (show as &quot;A****&quot;)</span>
                <Field
                  type="checkbox"
                  name="censor_first_name"
                  className="checkbox checkbox-primary checkbox-sm"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer py-1">
                <span className="label-text text-sm">Hide my last name (show as &quot;S****&quot;)</span>
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
                  I consent to my testimonial being displayed publicly on this website
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
                  Please complete the reCAPTCHA verification
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full mt-4"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TestimonialForm;
