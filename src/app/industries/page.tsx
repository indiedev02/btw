import Product from "@/section/Product";
import Hero from "./_components/Hero";
import WhatWeDo from "./_components/WhatWeDo";
import CaseStudy from "@/section/CaseStudy";
import GetinTouch from "@/section/GetinTouch";
import IndustriesWeServe from "./_components/IndustriesWeServe";
import Extra from "./_components/Extra";
import BlackspektroBanner from "@/section/Banner";

const Industries = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <IndustriesWeServe />
      <CaseStudy />
      <Product />
      <Extra />
      <BlackspektroBanner />
      <GetinTouch />
    </>
  );
};

export default Industries;
