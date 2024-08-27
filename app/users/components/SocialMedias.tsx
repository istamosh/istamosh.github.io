import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedias = () => {
  const socials = [
    { icon: faGithub, link: "https://github.com/istamosh" },
    { icon: faInstagram, link: "https://www.instagram.com/istamosh/" },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/alfian-f-02a0032a9/",
    },
    { icon: faYoutube, link: "https://www.youtube.com/@istamosh/" },
  ];
  return (
    <>
      <h1 className="font-sans text-2xl sm:text-8xl text-center mb-3">
        Let&apos;s Get In Touch!
      </h1>
      <div className="flex justify-evenly w-1/2">
        {socials.map((social, i) => (
          <a
            key={i}
            className="text-xl sm:text-5xl hover:animate-bounce"
            href={social.link}
            target="_blank"
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialMedias;
