import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import kernopy from "@/assets/kernopy.png";
import kernopyEdge from "@/assets/KernopyEdgeScreenshot.png";
import FactoryFloor from "@/assets/FactoryFloor.png";
import { SquareCheckBig } from "lucide-react";

const features = [
  "Unified view of all devices and operations",
  "Real-time control and configuration",
  "Scales effortlessly across sites",
  "Actionable insights for faster decisions",
];

const Product = () => {
  return (
    <div
      id="products"
      className="bg-[#F5F5F5] rounded-xl py-16 px-4 sm:px-6 lg:px-8 my-16 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl 2xl:text-[40px] font-semibold">
          Our Product
        </h2>
        <p className="text-lg 2xl:text-xl text-[#00000075] max-w-2xl mx-auto 2xl:leading-[34px]">
          Powering real-world outcomes through engineered <br /> products built
          to scale.
        </p>
      </div>

      <Card>
        <CardContent className="md:flex">
          <div className="md:w-6/12 flex justify-center items-center">
            <div className="space-y-3 2xl:space-y-6">
              <div className="text-[#00000075] text-lg 2xl:text-2xl">
                Introducing
              </div>
              <Image src={kernopy} alt="kernopy" width={200} height={200} />
              <p className="2xl:text-xl 2xl:leading-[30px]">
                A unified platform to monitor devices, manage configurations,
                and streamline operations — boosting efficiency and accelerating
                decisions at scale.
              </p>
              <ul className="space-y-3 2xl:space-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="2xl:mt-1">
                      <SquareCheckBig className="w-5 h-5 text-[#0055CC]" />
                    </div>
                    <p className="text-base md:text-xs lg:text-lg 2xl:text-xl leading-snug">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-6/12 flex justify-center md:justify-end items-center my-4 md:my-0">
            <Image src={kernopyEdge} alt="edge" unoptimized />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center my-14 lg:px-40">
        <Image src={FactoryFloor} alt="architecture" placeholder="blur" />
      </div>
    </div>
  );
};

export default Product;
