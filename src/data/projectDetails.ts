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
    slug: "werent-clothing-rental-platform",
    image: "/werent.webp",
    title: "WeRent - Sustainable Clothing Rental Platform",
    description: "A collaborative MVP project for sustainable clothing rental platform promoting eco-friendly fashion consumption. Led as Project Manager while contributing as Software Engineer, delivering comprehensive rental workflow with user authentication, inventory management, and review systems.",
    projectLink: "https://werent-backend-api.onrender.com/docs/",
    githubLink: "https://github.com/alfifrr/werent-backend", // Primary repository (backend)
    githubLinks: {
      frontend: "https://github.com/thegoner24/werent-frontend",
      backend: "https://github.com/alfifrr/werent-backend"
    },
    techStack: ["Next", "Flask", "Supabase"],
    detailedBackground: {
      overview: "WeRent is a sustainable clothing rental platform developed during RevoU bootcamp, designed to promote eco-friendly fashion consumption through an online marketplace. The project focused on creating a scalable MVP that addresses user needs in rental services while emphasizing seamless user experience and operational efficiency.",
      problem: "The fashion industry is one of the largest polluters globally, with fast fashion contributing significantly to waste. There was a need for a platform that promotes sustainable fashion consumption through clothing rental services, reducing waste while making fashion more accessible and affordable.",
      objectives: [
        "Build a comprehensive clothing rental platform with sustainable focus",
        "Implement complete user rental workflow with authentication",
        "Create inventory management system for clothing items",
        "Develop user profiles with image upload capabilities",
        "Build review and rating system for rental items",
        "Implement penalty handling for rental due dates"
      ],
      techStackDetails: {
        frontend: ["Next.js 14", "TypeScript", "Tailwind CSS"],
        backend: ["Flask", "Python", "SQLAlchemy"],
        database: ["Supabase", "PostgreSQL"],
        tools: ["Swagger", "Notion", "Git", "Agile methodology"],
        deployment: ["Vercel", "Supabase"]
      }
    },
    methodology: {
      strategy: "Agile development approach with comprehensive project management, focusing on sprint planning, task delegation, and iterative reviews to maintain steady progress and adaptability throughout the development cycle.",
      approach: [
        "Agile development practices with sprint planning and iterative reviews",
        "Comprehensive PRD documentation for precise feature implementation",
        "Notion-based task management for frontend and backend synchronization",
        "Detailed project diagrams defining workflows and system architecture",
        "Cross-functional collaboration with enhanced team visibility",
        "Quality assurance processes throughout development lifecycle"
      ],
      solution: "Implemented a full-stack rental platform with robust user authentication, comprehensive inventory management, bulk renting capabilities, user profiles with image uploads, review systems, and penalty handling for overdue rentals.",
      metrics: [
        "MVP delivered 10% ahead of schedule",
        "Complete user rental workflow implementation",
        "Robust penalty handling system",
        "Full-featured inventory management",
        "Comprehensive user authentication and authorization"
      ]
    },
    results: {
      outcomes: [
        "Successfully delivered MVP 10% ahead of initially planned schedule",
        "Integrated comprehensive user authentication and authorization system",
        "Implemented complete inventory management for clothing items",
        "Developed bulk renting capabilities for enhanced user experience",
        "Created user profiles with image upload functionality",
        "Built comprehensive review and rating system",
        "Achieved fully functional rental workflow with penalty handling"
      ],
      achievements: [
        "Demonstrated effective project management and leadership skills",
        "Successfully coordinated frontend and backend development teams",
        "Delivered all features meeting quality benchmarks and business goals",
        "Positioned platform for further development and potential launch",
        "Showcased proficiency in both management and technical implementation"
      ],
      impact: "The WeRent platform demonstrates how technology can promote sustainable fashion consumption, reducing environmental impact while providing accessible and affordable fashion rental services to users.",
      screenshots: ["/werent.webp"]
    },
    responsibilities: {
      role: "Project Manager, Software Engineer Associate",
      scope: [
        "Led coordination of frontend and backend development activities",
        "Managed project tasks and ensured cross-team alignment using Notion",
        "Provided hands-on technical support during development phases",
        "Overcame technical challenges and integrated complex features",
        "Maintained quality assurance processes throughout development",
        "Ensured feature completeness and system functionality",
        "Created project diagrams and workflow documentation"
      ],
      teamSize: 7,
      duration: "2 months (July - August 2025)"
    }
  },
  {
    id: 5,
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
  },
  {
    id: 6,
    slug: "tiketq-smart-booking-dashboard",
    image: "/tiketq_logo.webp",
    title: "TiketQ Smart Booking Dashboard",
    description: "A comprehensive virtual internship project developing a multi-modal ticketing and PPOB bill payment platform. Built scalable dashboard interfaces for transaction management with FastAPI backend, PostgreSQL database, and Midtrans payment gateway integration.",
    // githubLink removed due to NDA restrictions
    techStack: ["Next", "FastAPI", "PostgreSQL"],
    detailedBackground: {
      overview: "TiketQ Smart Booking Dashboard is a comprehensive platform developed during a virtual internship program with RevoU x VI Partners. The project focuses on managing multi-modal ticketing services and PPOB (Payment Point Online Bank) bill payments through a scalable, data-driven dashboard interface.",
      problem: "The travel and utility payment industry requires a unified platform that can handle multiple service types including transportation bookings (plane, ferry, train) and utility payments. There was a need for a robust dashboard that could manage high-volume transactions while maintaining excellent user experience and administrative oversight.",
      objectives: [
        "Develop a comprehensive dashboard for multi-modal ticketing services",
        "Create seamless transaction flows for various payment types",
        "Implement robust payment gateway integration with Midtrans",
        "Build scalable backend services with FastAPI and PostgreSQL",
        "Ensure optimal UI/UX alignment with provided Figma designs",
        "Deliver fault-tolerant payment workflows with minimal latency"
      ],
      techStackDetails: {
        frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "UI components from Figma designs"],
        backend: ["FastAPI", "Python", "SQLAlchemy", "Pydantic"],
        database: ["PostgreSQL", "Database optimization"],
        tools: ["Docker", "Swagger", "Git", "Midtrans Payment Gateway", "JSON testing tools"],
        deployment: ["Docker containerization", "Agile methodology"]
      }
    },
    methodology: {
      strategy: "Agile team framework with emphasis on iterative development, comprehensive testing, and seamless integration between frontend dashboard interfaces and backend transaction processing systems.",
      approach: [
        "Agile development with sprints, daily stand-ups, and iterative feedback",
        "UI/UX development based on provided Figma designs and asset libraries",
        "FastAPI backend development with PostgreSQL database management",
        "Docker containerization for consistent development environments",
        "Comprehensive JSON testing for API validation and reliability",
        "End-to-end transaction process engineering with payment gateway integration"
      ],
      solution: "Developed a complete dashboard platform with optimized user and admin interfaces, featuring loginless transaction creation, order tracking, and integrated payment processing through Midtrans gateway, supporting multiple service types with high-volume transactional capability.",
      metrics: [
        "Minimal transaction errors through optimized workflows",
        "High-volume transactional data support",
        "Minimized latency in API calls and database operations",
        "Comprehensive end-to-end transaction processing",
        "Seamless multi-modal service integration"
      ]
    },
    results: {
      outcomes: [
        "Delivered optimized user and admin dashboard interfaces with smooth transaction management",
        "Engineered complete end-to-end transaction processes with loginless capabilities",
        "Successfully integrated Midtrans payment gateway for enhanced payment efficiency",
        "Implemented order fetching and tracking systems across multiple service types",
        "Improved transaction processing workflow for plane, ferry, train bookings, and utility payments",
        "Achieved streamlined API calls and database management for high-volume operations"
      ],
      achievements: [
        "Successfully completed virtual internship program with RevoU x VI Partners",
        "Demonstrated proficiency in full-stack development with modern technologies",
        "Built production-ready dashboard supporting multiple transaction types",
        "Achieved reliable and intuitive user experience across all platform features",
        "Contributed to fault-tolerant payment workflows with optimized performance"
      ],
      impact: "The TiketQ Smart Booking Dashboard demonstrates capability to build enterprise-level transaction management systems, showcasing skills in payment gateway integration, database optimization, and scalable dashboard development for real-world business applications.",
      screenshots: [
        "/tiketq_0.webp",
        "/tiketq_1.webp", 
        "/tiketq_2.webp",
        "/tiketq_3.webp",
        "/tiketq_4.webp"
      ]
    },
    responsibilities: {
      role: "Software Engineer Associate",
      scope: [
        "Designed and implemented frontend dashboard elements with intuitive navigation",
        "Ensured responsive design for both user and administrator interfaces",
        "Integrated multiple backend APIs with rigorous testing protocols",
        "Maintained transaction robustness and data integrity throughout the system",
        "Managed core transaction service features including payment gateway integration",
        "Implemented order processing and tracking functionalities",
        "Oversaw database maintenance and optimization for smooth operations",
        "Developed fault-tolerant payment workflows supporting high transaction volumes"
      ],
      teamSize: 5,
      duration: "2 months (August - September 2025)"
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
