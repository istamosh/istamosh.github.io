import { CarouselSlide } from "@/types/carousel";

export const SLIDES: CarouselSlide[] = [
  {
    id: 1,
    slug: "sustainable-community-market",
    image: "/sustainable_community_market_fe.png",
    title: "Sustainable Community Market",
    description:
      "A group final project about e-commerce-like platform that encourages sustainability lifestyle and enable users to act as both seller, buyer, and expedition. Selling ranged from upcycled products to near-expiry goods within local area. Created using NextJS and Leaflet",
    projectLink: "https://sustainable-community-market-fe.vercel.app/team",
    githubLink: "https://github.com/alfifrr/sustainable-community-market-fe",
    techStack: ["Next", "Typescript"]
  },
  {
    id: 2,
    slug: "sc-market-api-documentation",
    image: "/sustainable_community_market.png",
    title: "Swagger Documentation for SC Market",
    description:
      "A collection of API endpoints for the SC Market project. Developed with Flask, hosted on Render and Supabase",
    projectLink: "https://sustainable-community-market.onrender.com/api/docs/",
    githubLink: "https://github.com/alfifrr/sustainable-community-market",
    techStack: ["Flask", "Python"]
  },
  {
    id: 3,
    slug: "banking-system-api",
    image: "/banking_system.png",
    title: "Banking System API",
    description:
      "An M-banking platform that allow users to have multiple accounts and conduct deposit, withdrawal, bill scheduling and payment, budgeting, and even transfer to another account, developed using Flask, hosted on Render and Supabase, and has Docker version for local uses",
    projectLink: "https://banking-system-r349.onrender.com/api/docs/",
    githubLink: "https://github.com/alfifrr/banking-system/tree/feature-docker",
    techStack: ["Flask", "Python", "Docker"]
  },
  {
    id: 4,
    slug: "werent-clothing-rental-platform",
    image: "/werent.webp",
    title: "WeRent - Sustainable Clothing Rental Platform",
    description:
      "A collaborative MVP project for sustainable clothing rental platform promoting eco-friendly fashion consumption. Led as Project Manager while contributing as Software Engineer, delivering comprehensive rental workflow with user authentication, inventory management, and review systems.",
    projectLink: "https://werent-backend-api.onrender.com/docs/",
    githubLink: "https://github.com/alfifrr/werent-backend",
    githubLinks: {
      frontend: "https://github.com/thegoner24/werent-frontend",
      backend: "https://github.com/alfifrr/werent-backend"
    },
    techStack: ["Next", "Flask", "Supabase"]
  },
  {
    id: 5,
    slug: "mosphere-fullstack",
    image: "/mosphere.png",
    title: "Mosphere",
    description:
      "React TS + Laravel application about creating Markdown-powered user posts with administrator feature, currently hosted on Hostinger (please don't use your real e-mail there)",
    projectLink: "https://istamosh.com/guestposts",
    githubLink: "https://github.com/istamosh/laravel-react-fullstack",
    techStack: ["Typescript", 'ReactIcon']
  },
  {
    id: 6,
    slug: "tiketq-smart-booking-dashboard",
    image: "/tiketq_logo.webp",
    title: "TiketQ Smart Booking Dashboard",
    description:
      "A comprehensive virtual internship project developing a multi-modal ticketing and PPOB bill payment platform. Built scalable dashboard interfaces for transaction management with FastAPI backend, PostgreSQL database, and Midtrans payment gateway integration.",
    // githubLink removed due to NDA
    techStack: ["Next", "FastAPI", "PostgreSQL"]
  }
];