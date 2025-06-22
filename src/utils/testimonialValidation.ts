// Validation schemas for testimonial form
import * as Yup from 'yup';
import { getTranslation } from '@/utils/i18n';
import { TestimonialFormValues } from '@/types/testimonial';

// Create dynamic validation schema based on language
export const getValidationSchema = (t: ReturnType<typeof getTranslation>) => Yup.object<TestimonialFormValues>({
  first_name: Yup.string()
    .required(`${t.firstName} ${t.required}`)
    .min(2, t.minLength)
    .max(60, t.maxLength),
  last_name: Yup.string()
    .required(`${t.lastName} ${t.required}`)
    .min(2, t.minLength)
    .max(60, t.maxLength),
  role_company: Yup.string()
    .max(120, t.maxLength),
  profile_link: Yup.string()
    .required(`${t.profileLink} ${t.required}`)
    .url(t.invalidUrl)
    .max(500, t.maxLength),
  testimonial: Yup.string()
    .required(`${t.testimonial} ${t.required}`)
    .min(10, t.minLength10)
    .max(1000, t.maxLength),
  consent_given: Yup.boolean()
    .oneOf([true], t.consentRequired),
});

// Initial form values
export const getInitialValues = (): TestimonialFormValues => ({
  first_name: '',
  last_name: '',
  role_company: '',
  profile_link: '',
  testimonial: '',
  censor_first_name: false,
  censor_last_name: false,
  consent_given: false,
});
