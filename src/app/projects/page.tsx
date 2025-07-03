import { PROJECT_DETAILS } from '@/data/projectDetails';
import Link from 'next/link';
import { pt_sans } from '@/app/fonts';
import Image from 'next/image';
import { Metadata } from 'next';

// SEO Metadata for projects listing page
export const metadata: Metadata = {
  title: 'Projects | Alfian\'s Portfolio - Full Stack Developer',
  description: 'Explore my portfolio of web development projects including full-stack applications, API systems, e-commerce platforms, and modern frontend solutions. Built with Next.js, React, Python Flask, Laravel, and more.',
  keywords: [
    'web development projects',
    'full stack developer portfolio',
    'Next.js projects',
    'React applications',
    'Python Flask API',
    'Laravel projects',
    'e-commerce platform',
    'banking system API',
    'sustainable technology',
    'mobile-first design'
  ],
  openGraph: {
    title: 'Projects | Alfian\'s Portfolio',
    description: 'Explore my portfolio of web development projects including full-stack applications, API systems, and modern frontend solutions.',
    url: '/projects',
    siteName: 'Alfian\'s Portfolio',
    images: [
      {
        url: '/portfolio-page-hero-transparent.webp',
        width: 1200,
        height: 630,
        alt: 'Alfian\'s Portfolio Projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Alfian\'s Portfolio',
    description: 'Explore my portfolio of web development projects including full-stack applications and API systems.',
    images: ['/portfolio-page-hero-transparent.webp'],
  },
  alternates: {
    canonical: '/projects',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ProjectsPage() {
  // Generate structured data for the projects portfolio
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Alfian's Web Development Projects",
    "description": "Portfolio of web development projects including full-stack applications, API systems, and modern frontend solutions",
    "url": "https://yoursite.com/projects", // Replace with actual domain
    "numberOfItems": PROJECT_DETAILS.length,
    "itemListElement": PROJECT_DETAILS.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "image": project.image,
      "url": `https://yoursite.com/projects/${project.slug}`, // Replace with actual domain
      "programmingLanguage": project.techStack,
      "sameAs": [
        project.githubLink,
        ...(project.projectLink ? [project.projectLink] : [])
      ]
    }))
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${pt_sans.className}`}>
            Projects
          </h1>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Explore my portfolio of web development projects, from full-stack applications 
            to API systems and modern frontend solutions.
          </p>
          <Link 
            href="/#projects"
            className="btn btn-outline btn-sm mt-4"
          >
            ← Back to Homepage
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_DETAILS.map((project) => (
            <div key={project.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <figure className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
              <div className="card-body">
                <h2 className={`card-title text-xl ${pt_sans.className}`}>
                  {project.title}
                </h2>
                <p className="text-sm text-base-content/80 line-clamp-3">
                  {project.description}
                </p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="flex gap-2">
                    {project.techStack?.slice(0, 3).map((tech) => (
                      <div key={tech} className="badge badge-outline badge-sm">
                        {tech}
                      </div>
                    ))}
                    {project.techStack && project.techStack.length > 3 && (
                      <div className="badge badge-outline badge-sm">
                        +{project.techStack.length - 3}
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
