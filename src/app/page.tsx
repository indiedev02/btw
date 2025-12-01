"use client";
import React from "react";
import Hero from "@/section/Hero";
import Industry from "@/section/Industry";
import Solutions from "@/section/Solutions";
import Testimonial from "@/section/Testimonial";
import WhatWeDo from "@/section/WhatWeDo";
import Why from "@/section/Why";
import Product from "@/section/Product";
import GetinTouch from "@/section/GetinTouch";

export default function HeroCarousel() {
  return (
    <>
      <Hero />
      <Industry />
      <WhatWeDo />
      <Solutions />
      <Why />
      <Testimonial />
      <Product />
      <GetinTouch />
    </>
  );
}
