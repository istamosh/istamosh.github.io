import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}

export function generateSEOMetadata({
  title = 'Alfian - Full Stack Developer & Software Engineer',
  description = 'Passionate full-stack developer specializing in modern web technologies, React, Next.js, and Python.',
  keywords = ['Full Stack Developer', 'Software Engineer', 'React', 'Next.js', 'Python'],
  image = '/portfolio-page-hero-transparent.webp',
  url = 'https://istamosh-github-io.vercel.app/',
  type = 'website',
  noIndex = false,
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    alternates: {
      canonical: url,
    },
  };
}

// Common keywords for the portfolio
export const portfolioKeywords = [
  'Full Stack Developer',
  'Software Engineer',
  'React Developer',
  'Next.js',
  'Python Developer',
  'Web Development',
  'Frontend Developer',
  'Backend Developer',
  'JavaScript',
  'TypeScript',
  'Portfolio',
  'Alfian',
  'Software Development',
  'API Development',
  'Modern Web Technologies',
  'Responsive Design',
  'UI/UX Development',
  'Database Design',
  'Git Version Control',
];

export default generateSEOMetadata;
