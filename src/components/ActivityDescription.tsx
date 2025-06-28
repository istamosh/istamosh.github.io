import React from "react";
import { CurrentActivity } from "@/data/currentActivities";

interface ActivityDescriptionProps {
  activity: CurrentActivity;
}

export const ActivityDescription: React.FC<ActivityDescriptionProps> = ({ activity }) => {
  if (!activity.links || activity.links.length === 0) {
    return <span>{activity.description}</span>;
  }

  // Parse description and inject links
  const description = activity.description;
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;

  activity.links.forEach((link, index) => {
    const linkStartIndex = description.indexOf(link.text, lastIndex);
    if (linkStartIndex !== -1) {
      // Add text before link
      if (linkStartIndex > lastIndex) {
        parts.push(description.substring(lastIndex, linkStartIndex));
      }
      
      // Add link element
      parts.push(
        <a
          key={`link-${index}`}
          className={link.className || "link link-hover link-primary"}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.text}
        </a>
      );
      
      lastIndex = linkStartIndex + link.text.length;
    }
  });

  // Add remaining text
  if (lastIndex < description.length) {
    parts.push(description.substring(lastIndex));
  }

  return <span>{parts}</span>;
};
