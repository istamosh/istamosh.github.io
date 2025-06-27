import type { Metadata } from "next";
import { Syne, Ropa_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ReactLenis } from "@/utils/lenis";

const ropaSans = Ropa_Sans({
  variable: "--font-ropa-sans",
  subsets: ["latin"],
  weight: "400",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Alfian - Full Stack Developer & Software Engineer",
    template: "%s | Alfian - Full Stack Developer"
  },
  description: "Alfian is a passionate full-stack developer and software engineer specializing in modern web technologies, React, Next.js, and Python. Explore my portfolio of innovative projects and professional experience.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer", 
    "React Developer",
    "Next.js",
    "Python Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Alfian",
    "Software Development",
    "API Development"
  ],
  authors: [{ name: "Alfian" }],
  creator: "Alfian",
  publisher: "Alfian",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://istamosh-github-io.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://istamosh-github-io.vercel.app',
    title: 'Alfian - Full Stack Developer & Software Engineer',
    description: 'Passionate full-stack developer specializing in modern web technologies. Explore my portfolio of innovative projects and professional experience.',
    siteName: 'Alfian Portfolio',
    images: [
      {
        url: '/portfolio-page-hero-transparent.webp',
        width: 1200,
        height: 630,
        alt: 'Alfian - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alfian - Full Stack Developer & Software Engineer',
    description: 'Passionate full-stack developer specializing in modern web technologies. Explore my portfolio of innovative projects.',
    images: ['/portfolio-page-hero-transparent.webp'],
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
  verification: {

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alfian',
    jobTitle: 'Full Stack Developer',
    description: 'Passionate full-stack developer and software engineer specializing in modern web technologies',
    url: 'https://istamosh-github-io.vercel.app',
    image: 'https://istamosh-github-io.vercel.app/portfolio-page-hero-transparent.webp',
    sameAs: [
      // Add your social media profiles here
      'https://github.com/istamosh',
      'https://github.com/alfifrr',
      'https://www.linkedin.com/in/alfian-ferdinan/',
      'https://www.youtube.com/@istamosh',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript', 
      'React',
      'Next.js',
      'Python',
      'Node.js',
      'Web Development',
      'Software Engineering',
      'Full Stack Development'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance Developer'
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192x192.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${ropaSans.variable} ${syne.variable} antialiased`}>
        <ReactLenis root>
          <ThemeProvider>{children}</ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
