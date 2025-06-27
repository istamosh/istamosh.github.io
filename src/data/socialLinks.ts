import { LinkedInIcon, YouTubeIcon, GitHubIcon } from "@/components/icons/SocialMediaIcons";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alfian-ferdinan", // Update this with your actual LinkedIn profile
    icon: LinkedInIcon,
    ariaLabel: "Visit Alfian's LinkedIn profile"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@istamosh",
    icon: YouTubeIcon,
    ariaLabel: "Visit Alfian's YouTube channel"
  },
  {
    name: "GitHub",
    url: "https://github.com/istamosh", // Update this with your actual GitHub profile
    icon: GitHubIcon,
    ariaLabel: "Visit Alfian's GitHub profile"
  }
];

export default socialLinks;
