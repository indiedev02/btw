"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Database, FileCheck, Globe } from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Smart Infrastructure Monitoring",
    description:
      "IoT & command control systems for utilities, transport, PSU operations.",
    color: "from-gray-100 to-gray-200",
    textColor: "text-gray-900",
    borderColor: "border-gray-400",
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Central Data Platforms",
    description:
      "Unified data systems for governance analytics & decision dashboards.",
    color: "from-gray-100 to-gray-200",
    textColor: "text-gray-900",
    borderColor: "border-gray-400",
  },
  {
    icon: <FileCheck className="w-12 h-12" />,
    title: "Secure Workflow Automation",
    description:
      "Digitize approvals, documents, audits & inter-department workflows.",
    color: "from-gray-100 to-gray-200",
    textColor: "text-gray-900",
    borderColor: "border-gray-400",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Connected Public Portals",
    description:
      "Citizen & department service portals with multilingual access.",
    color: "from-gray-100 to-gray-200",
    textColor: "text-gray-900",
    borderColor: "border-gray-400",
  },
];

const GovernmentServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Key Capabilities for Government & Public Sectors
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mission-critical infrastructure and secure digital transformation
            solutions
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Card */}
          <div className="relative h-[450px] md:h-[400px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div
                  className={`h-full rounded-3xl border-2 ${services[currentIndex].borderColor} bg-gradient-to-br ${services[currentIndex].color} p-8 md:p-12 shadow-sm`}
                >
                  <div className="flex flex-col h-full justify-center">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className={`w-20 h-20 rounded-2xl bg-white/50 border-2 ${services[currentIndex].borderColor} flex items-center justify-center ${services[currentIndex].textColor} mb-8`}
                    >
                      {services[currentIndex].icon}
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-6">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${services[currentIndex].textColor}`}
                      >
                        {services[currentIndex].title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`text-lg md:text-xl ${services[currentIndex].textColor} opacity-80 leading-relaxed max-w-3xl`}
                      >
                        {services[currentIndex].description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-gray-900" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentServices;
