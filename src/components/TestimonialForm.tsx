"use client";

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { pt_sans } from "@/app/fonts";
import axios, { AxiosError } from 'axios';

interface TestimonialFormValues {
  nameOrEmail: string;
  linkedinUrl: string;
  testimonial: string;
}

const validationSchema = Yup.object({
  nameOrEmail: Yup.string()
    .required('Required')
    .min(3, 'Must be at least 3 characters'),
  linkedinUrl: Yup.string()
    .url('Must be a valid URL')
    .required('Required')
    .matches(
      /^https?:\/\/(www\.)?linkedin\.com\/.*/i,
      'Must be a valid LinkedIn URL'
    ),
  testimonial: Yup.string()
    .required('Required')
    .min(10, 'Must be at least 10 characters')
    .max(500, 'Must not exceed 500 characters'),
});

const TestimonialForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const initialValues: TestimonialFormValues = {
    nameOrEmail: '',
    linkedinUrl: '',
    testimonial: '',
  };

  const handleSubmit = async (
    values: TestimonialFormValues,
    { resetForm, setSubmitting }: { resetForm: () => void; setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const response = await axios.post('/api/testimonial', values);
      
      if (response.status === 201 || response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your testimonial!'
        });
        resetForm();
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      setSubmitStatus({
        type: 'error',
        message: axiosError.response?.data?.message || 'Failed to submit testimonial. Please try again.'
      });
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
        <Form className="space-y-4 w-full max-w-md">
          {submitStatus.type && (
            <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-error'}`}>
              <span>{submitStatus.message}</span>
            </div>
          )}

          <div>
            <label
              htmlFor="nameOrEmail"
              className={`block text-sm font-medium mb-1 ${pt_sans.className}`}
            >
              Name or Email
            </label>
            <Field
              type="text"
              id="nameOrEmail"
              name="nameOrEmail"
              className="input input-bordered w-full"
              placeholder="Enter your name or email"
            />
            <ErrorMessage
              name="nameOrEmail"
              component="div"
              className="text-error text-sm mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="linkedinUrl"
              className={`block text-sm font-medium mb-1 ${pt_sans.className}`}
            >
              LinkedIn URL
            </label>
            <Field
              type="url"
              id="linkedinUrl"
              name="linkedinUrl"
              className="input input-bordered w-full"
              placeholder="https://linkedin.com/in/your-profile"
            />
            <ErrorMessage
              name="linkedinUrl"
              component="div"
              className="text-error text-sm mt-1"
            />
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
              className="textarea textarea-bordered w-full h-32"
              placeholder="Share your experience..."
            />
            <ErrorMessage
              name="testimonial"
              component="div"
              className="text-error text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TestimonialForm;
