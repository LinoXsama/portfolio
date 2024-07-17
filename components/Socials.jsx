"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: '/',
    path: <RiYoutubeFill />,
  },
  {
    path: '/',
    path: <RiLinkedinFill />,
  },
  {
    path: '/',
    path: <RiGithubFill />,
  },
  {
    path: '/',
    path: <RiFacebookFill />,
  },
  {
    path: '/',
    path: <RiInstallFill />,
  },
];


const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        
      })}
    </div>
  );
};

export default Socials;
