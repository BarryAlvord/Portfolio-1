import React from "react";

import {
  FaGithub,
  FaStackOverflow,
  FaSpotify,
  FaInstagram,
} from "react-icons/fa";
import { SiGmail, SiLinkedin } from "react-icons/si";

export let SideItems = [
  {
    id: "Github",
    url: "https://github.com/bibidentuhanoi",
    icon: <FaGithub />,
  },
  {
    id: "StackOverFlow",
    url: "https://stackoverflow.com/users/11347682/barry-allen",
    icon: <FaStackOverflow />,
  },
  {
    id: "LinkIn",
    url: "https://www.linkedin.com/in/bibidentuhanoi2212/",
    icon: <SiLinkedin />,
  },
  {
    id: "Spotify",
    url: "",
    icon: <FaSpotify />,
  },
  {
    id: "Instagram",
    url: "https://www.instagram.com/barry_2212/",
    icon: <FaInstagram />,
  },
  {
    id: "Gmail",
    url: "mailto:ngtuankiet.2212@gmail.com",
    icon: <SiGmail />,
  },
];
