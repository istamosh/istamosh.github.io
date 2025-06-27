import {
  Docker,
  Flask,
  Next,
  Photoshop,
  Python,
  Typescript,
  ReactIcon
} from "@/components/icons/SoftwareDevelopmentIcons";

export interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'proficient' | 'learning';
}

export const technologies: Technology[] = [
  // Proficient Technologies
  {
    name: "TypeScript",
    icon: Typescript,
    category: "proficient"
  },
  {
    name: "React",
    icon: ReactIcon,
    category: "proficient"
  },
  {
    name: "Next.js",
    icon: Next,
    category: "proficient"
  },
  {
    name: "Python",
    icon: Python,
    category: "proficient"
  },
  {
    name: "Photoshop",
    icon: Photoshop,
    category: "proficient"
  },
  
  // Currently Learning
  {
    name: "Flask",
    icon: Flask,
    category: "learning"
  },
  {
    name: "Docker",
    icon: Docker,
    category: "learning"
  }
];

// Helper functions to filter technologies by category
export const getProficientTechnologies = () => 
  technologies.filter(tech => tech.category === 'proficient');

export const getLearningTechnologies = () => 
  technologies.filter(tech => tech.category === 'learning');

export default technologies;
