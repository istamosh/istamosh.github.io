export type CarouselSlide = {
  id: number;
  image: string;
  title: string;
  description: string;
  projectLink?: string;
  githubLink: string;
  techStack?: string[]; // Array of tech stack icon names
};
