"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Furnace from "@/assets/Furnace.jpg";
import Food from "@/assets/Food.jpg";
import Pharma from "@/assets/Pharma.jpg";
import Oil from "@/assets/Oil.jpg";
import Paint from "@/assets/Paint.jpg";
import Automotive from "@/assets/Automotive.jpg";
import IndustrialPlant from "@/assets/IndustrialPlant.jpg";
import SmartFactory from "@/assets/SmartFactory.jpg";
import Image from "next/image";

const industries = [
  {
    title: "Furnace & Heat Treatment System Manufacturers",
    description:
      "Vacuum furnaces, atm furnaces, induction heating, nitriding, brazing",
    image: Furnace,
  },
  {
    title: "Automotive & Mobility Manufacturing",
    description:
      "Bus/Truck assembly lines, EV parts manufacturing, powertrain machining",
    image: Automotive,
  },
  {
    title: "Paint, Coating & Chemical Production Plants",
    description:
      "Batch processing, mixing, curing, hazardous environment monitoring",
    image: Paint,
  },
  {
    title: "Heavy Engineering & Industrial Machinery Plants",
    description:
      "CNC, forging, casting, hydraulic systems, high-precision machining",
    image: IndustrialPlant,
  },
  {
    title: "Oil, Gas & Petrochemical Industries",
    description:
      "Refineries, tank farms, compressor stations, pipeline monitoring",
    image: Oil,
  },
  {
    title: "Pharma & Life Sciences Manufacturing",
    description:
      "Clean room environments, controlled batch production, QA traceability",
    image: Pharma,
  },
  {
    title: "Food & Beverage Processing Units",
    description: "Extrusion, molding, lamination, automated packing systems",
    image: Food,
  },
  {
    title: "Smart Factory Transition for Legacy Plants",
    description:
      "Brownfield IoT upgrades, PLC/SCADA integration, HMI modernization",
    image: SmartFactory,
  },
];

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
    setActiveIndex(idx);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Industries We Serve
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From heat treatment chambers to conveyor lines, from mixing reactors
            to robotic cells—we connect, digitize, and optimize every process
            inside your factory.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === idx
                    ? "border-[#E7563D] bg-white shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between group"
                >
                  <h3
                    className={`text-lg md:text-xl font-semibold pr-4 transition-colors duration-300 ${
                      openIndex === idx
                        ? "text-[#E7563D]"
                        : "text-gray-900 group-hover:text-[#E7563D]"
                    }`}
                  >
                    {industry.title}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === idx
                        ? "bg-[#E7563D] text-white"
                        : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                    }`}
                  >
                    {openIndex === idx ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-base text-gray-600 leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={industries[activeIndex].image}
                    alt={industries[activeIndex].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="text-2xl md:text-3xl font-bold text-white leading-tight"
                    >
                      {industries[activeIndex].title}
                    </motion.h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
