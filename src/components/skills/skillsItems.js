import React from "react";

import { FaHtml5, FaReact, FaPython } from "react-icons/fa";
import { DiJavascript, DiJqueryUiLogo } from "react-icons/di";

export const skillItems = [
  { id: "1", name: "Html5 & Css3", percent: "80", icon: <FaHtml5 /> },
  {
    id: "2",
    name: "JavaScript",
    percent: "55",
    icon: <DiJavascript />,
  },
  { id: "3", name: "Jquery", percent: "55", icon: <DiJqueryUiLogo /> },
  { id: "4", name: "ReactJs", percent: "55", icon: <FaReact /> },
  { id: "5", name: "Python", percent: "45", icon: <FaPython /> },
];
