import { CarouselSlide } from "@/types/carousel";

export const SLIDES: CarouselSlide[] = [
  {
    id: 1,
    image: "/sustainable_community_market.png",
    title: "Sustainable Community Market API",
    description:
      "An e-commerce-like API platform that enable users to act as both seller and buyer, selling ranged from recycleable products to near-expiry goods, developed using Flask, hosted on Render and Supabase",
    link: `https://github.com/alfifrr/sustainable-community-market`,
  },
  {
    id: 2,
    image: "/banking_system.png",
    title: "Banking System API",
    description:
      "An M-banking platform that allow users to have multiple accounts and conduct deposit, withdrawal, bill scheduling and payment, budgeting, and even transfer to another account, developed using Flask, hosted on Render and Supabase, and has Docker version for local uses",
    link: `https://github.com/alfifrr/banking-system/tree/feature-docker`,
  },
  {
    id: 3,
    image: "/mosphere.png",
    title: "Mosphere",
    description:
      "React TS + Laravel application about creating Markdown-powered user posts (CRUD) with administrator feature, currently hosted on Hostinger (istamosh.com) and please don't use real e-mail, click on the image to view the Github repo",
    link: `https://github.com/istamosh/laravel-react-fullstack`,
  },
];
