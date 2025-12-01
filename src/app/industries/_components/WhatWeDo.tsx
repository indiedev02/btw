"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, SquareCheckBig, Brain, ShieldQuestion } from "lucide-react";

const sections = [
  {
    title: "Our Capabilities",
    subtitle:
      "End-to-end product engineering — from idea to scalable deployment",
    icon: <Layers className="w-6 h-6 text-white" />,
    iconBg: "bg-[#004C3F]",
    bg: "bg-[#E7F0ED]",
    border: "border-[#004C3F]",
    checkColor: "text-[#004C3F]",
    items: [
      "Iot & Sensor Integration",
      "Digitial Twin Development",
      "Industrial HMI / SCADA Modernization",
      "Predective Maintenance Systems",
      "Manufacturing Data Platforms",
      "Custom MES / Tracebility Systems",
    ],
  },
  {
    title: "What It Means?",
    subtitle: "Connected systems for real-time visibility and control",
    icon: <ShieldQuestion className="w-6 h-6 text-white" />,
    iconBg: "bg-[#E7563D]",
    bg: "bg-[#FFF3ED]",
    border: "border-[#E7563D]",
    checkColor: "text-[#E7563D]",
    items: [
      "Connect furnaces, lines, machines, QC stations",
      "Virtual replicas of assets / processes",
      "High-performance interface design",
      "AI-based anomaly detection",
      "Centralized historian & analytics dashboards",
      "End-to-end product tracking",
    ],
  },
  {
    title: "Value Delivered",
    subtitle: "AI solutions that drive automation and insights",
    icon: <Brain className="w-6 h-6 text-white" />,
    iconBg: "bg-[#000B9E]",
    bg: "bg-[#EEF0FF]",
    border: "border-[#000B9E]",
    checkColor: "text-[#000B9E]",
    items: [
      "Real-time data, transparency, zero blind spots",
      "Simulation, forecasting, optimization",
      "Faster decisions, safer operations",
      "Reduce downtime & avoid failures",
      "Plant-wide performance intelligence",
      "Compliance, quality assurance, throughput visibility",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-12 lg:px-24 lg:h-screen lg:flex lg:items-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help industrial companies modernize operations end-to-end
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`${section.bg} ${section.border} border-2 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`${section.iconBg} w-14 h-14 flex items-center justify-center rounded-2xl shadow-md mb-6 absolute bottom-0 right-8`}
              >
                {section.icon}
              </motion.div>

              {/* Title & Subtitle */}
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {section.subtitle}
                </p>
              </div>

              {/* Items List */}
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <SquareCheckBig
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${section.checkColor} group-hover:scale-110 transition-transform duration-200`}
                    />
                    <span className="text-base text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
