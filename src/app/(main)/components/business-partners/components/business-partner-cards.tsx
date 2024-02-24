"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../../../../components/ui/infinite-moving-cards";

export function BusinessPartnerCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        className=""
      />
    </div>
  );
}

const testimonials = [
  {
    src: "/homepage/nestle_logo.png",
  },
  {
    src: "/homepage/cgcc_logo.png",
  },
  {
    src: "/homepage/ccc_logo.png",
  },
  {
    src: "/homepage/haris&co_logo.png",
  },
  {
    src: "/homepage/fwo_logo.png",
  },
  {
    src: "/homepage/omarassociates_logo.png",
  },
];
