import { ProjectDetails } from "@/types/carousel";

export const PROJECT_DETAILS: ProjectDetails[] = [
  {
    id: 1,
    slug: "sustainable-community-market",
    image: "/sustainable_community_market_fe.png",
    title: "Sustainable Community Market",
    description: "A group final project about e-commerce-like platform that encourages sustainability lifestyle and enable users to act as both seller, buyer, and expedition. Selling ranged from upcycled products to near-expiry goods within local area. Created using Next.js and Leaflet",
    projectLink: "https://sustainable-community-market-fe.vercel.app/team",
    githubLink: "https://github.com/alfifrr/sustainable-community-market-fe",
    techStack: ["Next", "Typescript"],
    detailedBackground: {
      overview: "Sustainable Community Market is a comprehensive e-commerce platform designed to promote sustainable living practices within local communities. The platform connects environmentally conscious consumers with local sellers offering upcycled products, near-expiry goods, and sustainable alternatives.",
      problem: "Traditional e-commerce platforms often contribute to overconsumption and waste. There was a need for a platform that specifically promotes sustainability while supporting local economies and reducing environmental impact.",
      objectives: [
        "Create a user-friendly platform for sustainable product trading",
        "Implement geolocation features for local community focus",
        "Develop a multi-role system (seller, buyer, expedition, and admin)",
        "Integrate mapping functionality for local delivery",
        "Build responsive design for all device types"
      ],
      techStackDetails: {
        frontend: ["Next.js 14 & TypeScript", "Tailwind & DaisyUI", 'Axios', 'Zustand' ],
        backend: ["Python 3.11", 'Flask', "SQLAlchemy", 'Flask-Migrate', "PostgreSQL", 'Bcrypt', 'JWT', 'Flask-Mail', 'Swagger', 'Psycopg2'],
        tools: ["Leaflet.js", "Vercel", "Git"],
        deployment: ["Vercel (Frontend)", "Render (Backend)", "Supabase (Database)"]
      }
    },
    methodology: {
      strategy: "Agile development approach with focus on MVP delivery and iterative improvements based on user feedback and sustainability impact metrics.",
      approach: [
        "User-centered design research and persona development",
        "Component-driven development with reusable UI elements",
        "API-first architecture for scalable backend integration",
        "Mobile-first responsive design implementation",
        "Continuous integration and deployment pipeline"
      ],
      solution: "Developed a full-stack web application with integrated mapping, user authentication, product management, and transaction systems. The platform features role-based access control, geolocation services, and an intuitive interface for sustainable commerce.",
      metrics: [
        "100% responsive design across all devices",
        "Sub-3 second page load times",
        "Multi-role user authentication system",
        "Integrated mapping with location-based filtering"
      ]
    },
    results: {
      outcomes: [
        "Successfully deployed MVP within 2 weeks",
        "Deployed functional e-commerce platform",
        "Implemented complete user journey from registration to purchase",
        "Implemented complete seller journey from registration to selling",
        "Created intuitive admin panel for product management",
        "Achieved responsive design across desktop, tablet, and mobile",
        "Integrated real-time mapping for local delivery coordination",
        "Team received the best feature implementation (Geolocation and product status handling feature)",
      ],
      achievements: [
        "Delivered as final capstone project for RevoU Full Stack Software Engineering program",
        "Demonstrated proficiency in modern web development stack",
        "Successfully collaborated in agile team environment",
        "Created comprehensive documentation and presentation materials"
      ],
      impact: "The platform demonstrates how technology can be leveraged to promote sustainable living practices while supporting local economies and reducing environmental impact through conscious consumption.",
      screenshots: ["/sustainable_community_market_fe.png"]
    },
    responsibilities: {
      role: "Full Stack Developer, Group Leader",
      scope: [
        "Responsible for backend implementation and API documentation",
        "UI/UX design, mobile-first, and responsive implementation",
        "API integration and state management",
        "Map integration using Leaflet.js",
        "User authentication and authorization flows",
        "Collaborating on the product checkout flows",
        "Performance optimization and deployment"
      ],
      teamSize: 3,
      duration: "3 weeks (Full-time capstone project)"
    }
  },
  {
    id: 2,
    slug: "sc-market-api-documentation",
    image: "/sustainable_community_market.png",
    title: "Swagger Documentation for SC Market",
    description: "A collection of API endpoints for the SC Market project. Developed with Flask, hosted on Render and Supabase",
    projectLink: "https://sustainable-community-market.onrender.com/api/docs/",
    githubLink: "https://github.com/alfifrr/sustainable-community-market",
    techStack: ["Flask", "Python"],
    detailedBackground: {
      overview: "Comprehensive RESTful API backend system for the Sustainable Community Market platform, featuring complete CRUD operations, user authentication, and business logic implementation with extensive Swagger documentation.",
      problem: "The frontend application required a robust, well-documented backend API that could handle complex e-commerce operations while maintaining scalability and security standards.",
      objectives: [
        "Design and implement RESTful API architecture",
        "Create comprehensive API documentation using Swagger",
        "Implement secure authentication and authorization",
        "Build scalable database schema and relationships",
        "Deploy to production with proper error handling"
      ],
      techStackDetails: {
        backend: ["Python 3.11", 'Flask', "SQLAlchemy", 'Flask-Migrate', "PostgreSQL", 'Bcrypt', 'JWT', 'Flask-Mail', 'Swagger', 'Psycopg2'],
        database: ["PostgreSQL", "Supabase"],
        tools: ["Swagger / OpenAPI", "Postman / Insomnia", "Git"],
        deployment: ["Render", "Supabase"]
      }
    },
    methodology: {
      strategy: "API-first development approach with comprehensive documentation and testing to ensure seamless frontend integration and future scalability.",
      approach: [
        "Database schema design with proper relationships",
        "RESTful API design following industry best practices",
        "Comprehensive error handling and validation",
        "Automated API documentation generation",
        "Unit testing and integration testing implementation"
      ],
      solution: "Built a robust Flask-based API with complete CRUD operations, JWT authentication, role-based access control, and comprehensive Swagger documentation for easy frontend integration and future maintenance.",
      metrics: [
        "25+ documented API endpoints",
        "100% API endpoint coverage in documentation",
        "Sub-200ms average response time",
        "Comprehensive error handling with proper HTTP status codes"
      ]
    },
    results: {
      outcomes: [
        "Deployed fully functional API with comprehensive documentation",
        "Implemented secure authentication and authorization system",
        "Created scalable database schema supporting complex e-commerce operations",
        "Achieved seamless integration with frontend application",
        "Established proper error handling and validation throughout the system",
        "Implemented extra feature for sustainable product certification and geolocation support"
      ],
      achievements: [
        "Successfully designed and implemented complete backend architecture",
        "Created industry-standard API documentation using Swagger",
        "Demonstrated proficiency in Python web development and database design",
        "Achieved production-ready deployment with proper configuration management"
      ],
      impact: "The API serves as the backbone for the sustainable e-commerce platform, enabling all frontend functionality while maintaining security, scalability, and maintainability standards.",
      screenshots: ["/sustainable_community_market.png"]
    },
    responsibilities: {
      role: "Full Stack Developer, Group Leader",
      scope: [
        "Complete backend architecture design and implementation",
        "Database schema design and optimization",
        "RESTful API development with Flask",
        "Swagger documentation creation and maintenance",
        "Authentication and authorization system implementation",
        "Production deployment and configuration management"
      ],
      teamSize: 3,
      duration: "2 weeks (Backend development phase)"
    }
  },
  {
    id: 3,
    slug: "banking-system-api",
    image: "/banking_system.png",
    title: "Banking System API",
    description: "An M-banking platform that allow users to have multiple accounts and conduct deposit, withdrawal, bill scheduling and payment, budgeting, and even transfer to another account, developed using Flask, hosted on Render and Supabase, and has Docker version for local uses",
    projectLink: "https://banking-system-r349.onrender.com/api/docs/",
    githubLink: "https://github.com/alfifrr/banking-system/tree/feature-docker",
    techStack: ["Flask", "Python", "Docker"],
    detailedBackground: {
      overview: "A comprehensive mobile banking API system that simulates real-world banking operations including multi-account management, transactions, bill payments, budgeting tools, and inter-account transfers with full security implementations.",
      problem: "Traditional banking systems often lack modern API-first architecture and comprehensive functionality for digital banking needs. The project aimed to create a complete banking backend that could support a full-featured mobile banking application.",
      objectives: [
        "Build a complete banking system with core financial operations",
        "Implement multi-account management for users",
        "Create secure transaction processing with proper validation",
        "Develop budgeting, bill payments, and other financial management features",
        "Ensure production-ready deployment with Docker containerization"
      ],
      techStackDetails: {
        backend: ["Python 3.11", "Flask", "Flask-SQLAlchemy", "Flask-JWT-Extended", 'Flask-Limiter', 'Flask-Mail', 'Flask-Migrate', 'Swagger', 'Psycopg2'],
        database: ["PostgreSQL", "Supabase"],
        tools: ["Docker", "Swagger / OpenAPI", "Postman / Insomnia"],
        deployment: ["Render", "Docker Hub", "Supabase"]
      }
    },
    methodology: {
      strategy: "Security-first development approach with emphasis on financial transaction integrity, comprehensive testing, and scalable architecture suitable for banking operations.",
      approach: [
        "Security-first design with encryption and validation",
        "Comprehensive transaction logging and audit trails",
        "Modular architecture for different banking services",
        "Docker containerization for consistent deployment",
        "Extensive API testing and validation"
      ],
      solution: "Developed a full-featured banking API with secure authentication, multi-account support, transaction processing, budgeting tools, and comprehensive financial operations with proper security measures and audit logging.",
      metrics: [
        "25+ banking-specific API endpoints",
        "Multi-layer security implementation",
        "Complete transaction audit trail system",
        "Docker containerization with 99% uptime"
      ]
    },
    results: {
      outcomes: [
        "Successfully deployed comprehensive banking API system",
        "Implemented secure multi-account management functionality",
        "Created complete transaction processing with proper validation",
        "Developed budgeting, bill transactions, and other financial planning features",
        "Achieved production deployment with Docker containerization"
      ],
      achievements: [
        "Built enterprise-grade banking system architecture",
        "Demonstrated expertise in financial system security",
        "Successfully implemented complex business logic for banking operations",
        "Created comprehensive documentation for banking API endpoints",
        "Achieved seamless Docker deployment for scalability"
      ],
      impact: "The system demonstrates capability to build enterprise-level financial applications with proper security, scalability, and functionality required for real-world banking operations.",
      screenshots: ["/banking_system.png"]
    },
    responsibilities: {
      role: "Backend",
      scope: [
        "Complete system architecture design and implementation",
        "Banking business logic and financial calculations",
        "Security implementation and validation systems",
        "Database design for complex financial relationships",
        "Docker containerization and deployment automation",
        "Comprehensive API documentation and testing"
      ],
      duration: "3 weeks (Individual project)"
    }
  },
  {
    id: 4,
    slug: "mosphere-fullstack",
    image: "/mosphere.png",
    title: "Mosphere",
    description: "React TS + Laravel application about creating Markdown-powered user posts with administrator feature, currently hosted on Hostinger (please don't use your real e-mail there)",
    projectLink: "https://istamosh.com/guestposts",
    githubLink: "https://github.com/istamosh/laravel-react-fullstack",
    techStack: ["Typescript", "ReactIcon"],
    detailedBackground: {
      overview: "Mosphere is a full-stack web application that combines React TypeScript frontend with Laravel backend to create a content management platform where users can create, edit, and publish their own Markdown-powered posts with administrative oversight.",
      problem: "There was a need for a modern content management system that supports Markdown editing, user authentication, and administrative controls while providing a seamless user experience across different devices.",
      objectives: [
        "Create a modern content management system with Markdown support",
        "Implement user authentication and role-based access control",
        "Build responsive React TypeScript frontend",
        "Develop robust Laravel backend with API architecture",
        "Deploy to production hosting environment"
      ],
      techStackDetails: {
        frontend: ["Vite & React 18", "TypeScript", "Tailwind & Flowbite", "React Router DOM", 'React Markdown', 'React Icons', 'Axios'],
        backend: ["Laravel", "PHP 8.2", "MySQL", "Laravel Sanctum"],
        tools: ["Markdown Parser", "Hostinger", "Git"],
        deployment: ["Hostinger", "MySQL Database"]
      }
    },
    methodology: {
      strategy: "Full-stack development approach focusing on modern web technologies, RESTful API design, and user-centric interface design with emphasis on content creation and management.",
      approach: [
        "Component-based React architecture with TypeScript",
        "RESTful API design with Laravel backend",
        "Markdown-first content creation workflow",
        "Role-based authentication and authorization",
        "Responsive design for optimal user experience"
      ],
      solution: "Built a complete full-stack application with React TypeScript frontend consuming Laravel API backend, featuring user authentication, Markdown post creation, administrative controls, and responsive design.",
      metrics: [
        "Full-stack TypeScript/Laravel integration",
        "Markdown-powered content management",
        "Role-based user authentication system",
        "Responsive design across all devices"
      ]
    },
    results: {
      outcomes: [
        "Successfully deployed full-stack web application",
        "Implemented complete user authentication and authorization",
        "Created intuitive Markdown-based content creation system",
        "Developed administrative dashboard for content management",
        "Achieved responsive design with optimal user experience"
      ],
      achievements: [
        "Demonstrated proficiency in full-stack development",
        "Successfully integrated React TypeScript with Laravel backend",
        "Created production-ready application with proper hosting",
        "Implemented modern web development best practices",
        "Built scalable architecture for content management"
      ],
      impact: "The platform showcases modern full-stack development capabilities while providing a practical content management solution with emphasis on user experience and administrative control.",
      screenshots: ["/mosphere.png"]
    },
    responsibilities: {
      role: "Full Stack",
      scope: [
        "Complete application architecture and development",
        "React TypeScript frontend development",
        "Laravel backend API development",
        "Database design and implementation",
        "User authentication and authorization system",
        "Production deployment and hosting configuration"
      ],
      duration: "5 weeks (Personal project)"
    }
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): ProjectDetails | undefined => {
  return PROJECT_DETAILS.find(project => project.slug === slug);
};

// Helper function to get all project slugs for static generation
export const getAllProjectSlugs = (): string[] => {
  return PROJECT_DETAILS.map(project => project.slug);
};
