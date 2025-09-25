export type CarouselSlide = {
  id: number;
  slug: string; // URL-friendly identifier for detail pages
  image: string;
  title: string;
  description: string;
  projectLink?: string;
  githubLink?: string; // Made optional to handle NDA projects
  githubLinks?: { // Optional array for multiple GitHub repositories
    frontend?: string;
    backend?: string;
    fullstack?: string;
  };
  techStack?: string[]; // Array of tech stack icon names
};

export type ProjectDetails = CarouselSlide & {
  slug: string; // URL-friendly identifier
  detailedBackground: {
    overview: string;
    problem: string;
    objectives: string[];
    techStackDetails: {
      frontend?: string[];
      backend?: string[];
      database?: string[];
      tools?: string[];
      deployment?: string[];
    };
  };
  methodology: {
    strategy: string;
    approach: string[];
    solution: string;
    metrics?: string[];
  };
  results: {
    outcomes: string[];
    achievements: string[];
    impact?: string;
    screenshots?: string[];
  };
  responsibilities: {
    role: string;
    scope: string[];
    teamSize?: number;
    duration: string;
  };
};
