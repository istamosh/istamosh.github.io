// Types for testimonial form and related components
import { Language } from '@/utils/i18n';

export interface TestimonialFormProps {
  onSuccess?: () => void;
  language: Language;
}

export interface TestimonialFormValues {
  first_name: string;
  last_name: string;
  role_company: string;
  profile_link: string;
  testimonial: string;
  censor_first_name: boolean;
  censor_last_name: boolean;
  consent_given: boolean;
}

export interface SubmitStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export interface ApprovedTestimonial {
  id: number;
  name: string;
  role_company: string;
  profile_link: string;
  testimonial: string;
  created_at: string;
}
