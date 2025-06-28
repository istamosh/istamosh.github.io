import { Book, Briefcase, VideoCam } from "@/components/icons/AboutMeIcons";
import { ComponentType } from "react";

export interface CurrentActivity {
  id: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  links?: {
    text: string;
    url: string;
    className?: string;
  }[];
}

export const getCurrentActivities = (): CurrentActivity[] => [
  {
    id: "freelance",
    icon: Briefcase,
    description: "Currently working as a freelance graphic designer that dabbles in Photoshop.",
  },
  {
    id: "education",
    icon: Book,
    description: "Enrolled as RevoU FSSE student.",
    links: [
      {
        text: "RevoU FSSE",
        url: "https://journal.revou.co/kenalan-fsse/",
        className: "link link-hover link-primary",
      },
    ],
  },
  {
    id: "youtube",
    icon: VideoCam,
    description: "Creating Youtube videos about solving Hackerrank & Leetcode challenges.",
    links: [
      {
        text: "Youtube videos",
        url: "https://www.youtube.com/@istamosh",
        className: "link link-hover link-primary",
      },
    ],
  },
];
