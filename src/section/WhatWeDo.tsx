"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  Cloud,
  BarChart3,
  Cpu,
  Layers,
  Zap,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: <Network className="w-6 h-6" />,
    title: "Industrial IoT",
    description: "Connected systems that bridge physical and digital worlds",
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Architecture",
    description: "Scalable infrastructure for modern enterprises",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics & Insights",
    description: "Data-driven intelligence for real-time decisions",
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "R&D Innovation",
    description: "Advanced engineering for complex challenges",
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-600",
  },
];

const WhatWeDo = () => {
  return (
    <section className="min-h-screen 2xl:h-screen flex items-center py-12 md:py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 2xl:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Layers className="w-4 h-4" />
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            Engineering Digital Transformation
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building connected, scalable, and data-driven systems for modern
            enterprises
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm p-6 md:p-8 2xl:p-10 mb-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 2xl:gap-12 items-center">
            {/* Left: Description */}
            <div className="space-y-4 2xl:space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00525E] to-[#003d47] flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl 2xl:text-2xl font-semibold mb-2">
                    Our Approach
                  </h3>
                  <p className="text-sm 2xl:text-base text-gray-600 leading-relaxed">
                    We combine strong R&D with advanced IoT, cloud, and
                    analytics capabilities to create intelligent platforms that
                    streamline operations and power real-time decision-making.
                  </p>
                </div>
              </div>

              <div className="pl-16 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E7563D] mt-2 flex-shrink-0" />
                  <p className="text-sm 2xl:text-base text-gray-700">
                    Bridge physical and digital worlds
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E7563D] mt-2 flex-shrink-0" />
                  <p className="text-sm 2xl:text-base text-gray-700">
                    Modernize industrial systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E7563D] mt-2 flex-shrink-0" />
                  <p className="text-sm 2xl:text-base text-gray-700">
                    Drive measurable impact
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Capabilities Grid */}
            <div className="grid grid-cols-2 gap-3 2xl:gap-4">
              {capabilities.map((capability, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 2xl:p-6 border border-gray-200 hover:shadow-sm transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 2xl:w-12 2xl:h-12 rounded-xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center text-white mb-3 shadow-sm`}
                  >
                    {capability.icon}
                  </div>
                  <h4 className="font-semibold text-sm 2xl:text-base text-gray-900 mb-1">
                    {capability.title}
                  </h4>
                  <p className="text-xs 2xl:text-sm text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <motion.a
            href="#casestudies"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 2xl:px-8 2xl:py-4 rounded-xl font-semibold text-base 2xl:text-lg hover:bg-gray-800 transition-colors duration-300 shadow-sm hover:shadow-md group"
          >
            See Our Impact
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
