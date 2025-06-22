// Internationalization utilities for English and Bahasa Indonesia
export type Language = 'en' | 'id';

export interface Translations {
  // Modal Header
  modalTitle: string;
  
  // Form Labels
  firstName: string;
  lastName: string;
  roleCompany: string;
  optional: string;
  profileLink: string;
  testimonial: string;
  
  // Form Placeholders
  firstNamePlaceholder: string;
  lastNamePlaceholder: string;
  roleCompanyPlaceholder: string;
  profileLinkPlaceholder: string;
  testimonialPlaceholder: string;
  
  // Privacy Options
  privacyOptions: string;
  hideFirstName: string;
  hideLastName: string;
  consentText: string;
  
  // Buttons
  submitTestimonial: string;
  submitting: string;
  addYourTestimonial: string;
  
  // Messages
  successMessage: string;
  recaptchaError: string;
  recaptchaPlaceholder: string;
  
  // Profile Link Description
  profileLinkDescription: string;
  
  // Testimonials Section
  testimonialsTitle: string;
  loadingTestimonials: string;
  noTestimonials: string;
  
  // Language Labels
  language: string;
  english: string;
  bahasa: string;
  
  // Validation Error Messages
  required: string;
  minLength: string;
  maxLength: string;
  minLength10: string;
  invalidUrl: string;
  consentRequired: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Modal Header
    modalTitle: "Share Your Experience",
    
    // Form Labels
    firstName: "First Name",
    lastName: "Last Name",
    roleCompany: "Role & Company",
    optional: "(Optional)",
    profileLink: "Professional Profile Link",
    testimonial: "Testimonial",
    
    // Form Placeholders
    firstNamePlaceholder: "Your first name",
    lastNamePlaceholder: "Your last name",
    roleCompanyPlaceholder: "e.g., Senior Developer at ABC Corp",
    profileLinkPlaceholder: "https://linkedin.com/in/yourname or https://yourwebsite.com",
    testimonialPlaceholder: "Share your experience working with me...",
    
    // Privacy Options
    privacyOptions: "Privacy Options",
    hideFirstName: "Hide my first name (show as \"A****\")",
    hideLastName: "Hide my last name (show as \"S****\")",
    consentText: "I consent to my testimonial being displayed publicly on this website",
    
    // Buttons
    submitTestimonial: "Submit Testimonial",
    submitting: "Submitting...",
    addYourTestimonial: "Add Your Testimonial",
    
    // Messages
    successMessage: "Thank you for your testimonial! It will be reviewed before being published.",
    recaptchaError: "Please complete the reCAPTCHA verification before submitting.",
    recaptchaPlaceholder: "Please complete the reCAPTCHA verification",
    
    // Profile Link Description
    profileLinkDescription: "Add your LinkedIn, Instagram, personal website, or portfolio link to verify your identity and increase credibility",
    
    // Testimonials Section
    testimonialsTitle: "Testimonials",
    loadingTestimonials: "Loading testimonials...",
    noTestimonials: "No testimonials yet. Be the first to share your experience!",
    
    // Language Labels
    language: "Language",
    english: "English",
    bahasa: "Bahasa",
    
    // Validation Error Messages
    required: "is required",
    minLength: "Must be at least 2 characters",
    maxLength: "Must not exceed the character limit",
    minLength10: "Must be at least 10 characters",
    invalidUrl: "Please enter a valid URL (e.g., https://linkedin.com/in/yourname)",
    consentRequired: "You must consent to share your testimonial"
  },
  id: {
    // Modal Header
    modalTitle: "Bagikan Pengalaman Anda",
    
    // Form Labels
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    roleCompany: "Posisi & Perusahaan",
    optional: "(Opsional)",
    profileLink: "Link Profil Profesional",
    testimonial: "Testimoni",
    
    // Form Placeholders
    firstNamePlaceholder: "Nama depan Anda",
    lastNamePlaceholder: "Nama belakang Anda",
    roleCompanyPlaceholder: "misal: Senior Developer di ABC Corp",
    profileLinkPlaceholder: "https://linkedin.com/in/namaanda atau https://websiteanda.com",
    testimonialPlaceholder: "Bagikan pengalaman Anda bekerja dengan saya...",
    
    // Privacy Options
    privacyOptions: "Opsi Privasi",
    hideFirstName: "Sembunyikan nama depan saya (tampilkan sebagai \"A****\")",
    hideLastName: "Sembunyikan nama belakang saya (tampilkan sebagai \"S****\")",
    consentText: "Saya menyetujui testimoni saya ditampilkan secara publik di website ini",
    
    // Buttons
    submitTestimonial: "Kirim Testimoni",
    submitting: "Mengirim...",
    addYourTestimonial: "Tambah Testimoni Anda",
    
    // Messages
    successMessage: "Terima kasih atas testimoni Anda! Testimoni akan ditinjau sebelum dipublikasikan.",
    recaptchaError: "Harap selesaikan verifikasi reCAPTCHA sebelum mengirim.",
    recaptchaPlaceholder: "Harap selesaikan verifikasi reCAPTCHA",
    
    // Profile Link Description
    profileLinkDescription: "Tambahkan LinkedIn, Instagram, website pribadi, atau link portofolio untuk memverifikasi identitas dan meningkatkan kredibilitas",
    
    // Testimonials Section
    testimonialsTitle: "Testimoni",
    loadingTestimonials: "Memuat testimoni...",
    noTestimonials: "Belum ada testimoni. Jadilah yang pertama membagikan pengalaman Anda!",
    
    // Language Labels
    language: "Bahasa",
    english: "English",
    bahasa: "Bahasa",
    
    // Validation Error Messages
    required: "wajib diisi",
    minLength: "Minimal 2 karakter",
    maxLength: "Tidak boleh melebihi batas karakter",
    minLength10: "Minimal 10 karakter",
    invalidUrl: "Masukkan URL yang valid (misal: https://linkedin.com/in/namaanda)",
    consentRequired: "Anda harus menyetujui untuk membagikan testimoni"
  }
};

export const getTranslation = (lang: Language): Translations => {
  return translations[lang];
};
