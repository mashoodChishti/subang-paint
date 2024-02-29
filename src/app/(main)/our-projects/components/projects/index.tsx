"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";

export const ProjectsParallax = () => {
  return<div>
   <HeroParallax products={products} />;
   
   </div>
};
export const products = [
  {
    title: "Axis Mall, Faisal Town",
    link: "https://gomoonbeam.com",
    thumbnail: "/projects/axis-mall.jpg",
  },
  {
    title: "11 Central, G-11",
    link: "https://cursor.so",
    thumbnail: "/projects/11-central.jpeg",
  },
  {
    title: "Magnus Residence, Top City",
    link: "https://userogue.com",
    thumbnail: "/projects/magnus-residence.jpg",
  },

  {
    title: "Hazara Motorway",
    link: "https://editorially.org",
    thumbnail: "/projects/hazara-motorway.jpg",
  },
  {
    title: "Dasu Dam",
    link: "https://editrix.ai",
    thumbnail: "/projects/dasu-dam.jpg",
  },
];
