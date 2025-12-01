"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Code,
  Database,
  Cloud,
  Smartphone,
  BarChart,
} from "lucide-react";

const services = [
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "MVP Development",
    description:
      "Rapid prototyping and launch-ready MVPs to validate your idea in the market quickly and efficiently.",
    features: ["Quick Time-to-Market", "Iterative Approach", "Cost-Effective"],
    color: "from-[#E7563D] to-[#d94426]",
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Full-Stack Development",
    description:
      "End-to-end web and mobile application development with modern frameworks and best practices.",
    features: ["React/Next.js", "Node.js Backend", "Scalable Architecture"],
    color: "from-[#00525E] to-[#003d47]",
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Database & Backend",
    description:
      "Robust database design and API development to power your application with reliable infrastructure.",
    features: ["API Design", "Database Optimization", "Secure & Scalable"],
    color: "from-[#000B9E] to-[#000878]",
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: "Cloud Infrastructure",
    description:
      "Cloud deployment and DevOps setup on AWS, Azure, or GCP with automated CI/CD pipelines.",
    features: ["Auto-Scaling", "Load Balancing", "Monitoring & Alerts"],
    color: "from-[#004C3F] to-[#003830]",
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    features: ["React Native", "Flutter", "App Store Deployment"],
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: <BarChart className="w-12 h-12" />,
    title: "Analytics & Insights",
    description:
      "Data pipeline setup and analytics dashboards to track metrics and make data-driven decisions.",
    features: [
      "Custom Dashboards",
      "Real-time Analytics",
      "Business Intelligence",
    ],
    color: "from-emerald-600 to-emerald-800",
  },
];

const Services = () => {
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
            Services for Startups
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to scale, we provide end-to-end technology solutions
            tailored for startup success
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Card */}
          <div className="relative h-[500px] md:h-[450px] overflow-hidden">
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
                  className={`h-full rounded-3xl bg-gradient-to-br ${services[currentIndex].color} p-8 md:p-12 shadow-2xl`}
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-6"
                    >
                      {services[currentIndex].icon}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                      >
                        {services[currentIndex].title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl"
                      >
                        {services[currentIndex].description}
                      </motion.p>

                      {/* Features */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-3"
                      >
                        {services[currentIndex].features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </motion.div>
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

export default Services;
