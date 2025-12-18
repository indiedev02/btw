"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Dashboard from "@/assets/Dashbaord.png";
import Home from "@/assets/Home.png";
import Rules from "@/assets/Rules.png";
import Image from "next/image";

const products = {
  title: "Kernopy",
  description:
    "Kernopy is an industrial intelligence platform that connects machines to the cloud, running real-time logic at the edge. It supports MODBUS, OPC-UA, MQTT, and delivers KPIs, OTA updates, and ERP integration—bringing operational clarity from workshop floor to CXO dashboards.",
  images: [
    {
      id: 1,
      url: Home,
      text: "A thoughtfully designed interface brings together devices, data, and core capabilities, offering a seamless starting point for managing and interacting with the entire IoT ecosystem.",
    },
    {
      id: 2,
      url: Dashboard,
      text: "Live data is presented through rich visualizations that provide continuous insight into device behavior and system performance, supporting faster, more informed decision-making.",
    },
    {
      id: 3,
      url: Rules,
      text: "A visual, flow-driven configuration enables flexible definition of conditions and actions, allowing alerts and automated responses to adapt dynamically as operational thresholds are reached.",
    },
  ],
};

export default function ProductPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % products.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleThumbnailClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const textVariants = {
    enter: { y: 30, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -30, opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-rose-500/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Go Back Button */}
        <Link href={"/"}>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group"
          >
            <motion.span
              className="inline-block"
              animate={{ x: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ←
            </motion.span>
            <span className="text-sm tracking-widest uppercase font-light">
              Go Back
            </span>
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-4">
            {products.title}
          </h1>
          <p className="text-neutral-400 text-lg font-light max-w-2xl leading-relaxed">
            {products.description}
          </p>

          {/* View More Button */}
          <motion.a
            href="https://www.kernopy.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:from-blue-400 hover:to-blue-500 transition-all"
          >
            View More
            <span className="text-lg">→</span>
          </motion.a>
        </motion.div>

        {/* Main Image Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/50">
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-neutral-700/30 rounded-xl pointer-events-none z-20" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={products.images[activeIndex].url}
                  alt={products.images[activeIndex].text}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Image Text */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-extralight tracking-wide"
                >
                  {products.images[activeIndex].text}
                </motion.p>
              </AnimatePresence>

              {/* Progress indicator */}
              <div className="flex gap-2 mt-6">
                {products.images.map((_, index) => (
                  <motion.div
                    key={index}
                    className="h-0.5 rounded-full overflow-hidden bg-neutral-700 flex-1 max-w-16"
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-800 to-blue-400"
                      initial={{ width: "0%" }}
                      animate={{
                        width:
                          index === activeIndex
                            ? "100%"
                            : index < activeIndex
                              ? "100%"
                              : "0%",
                      }}
                      transition={{
                        duration: index === activeIndex ? 4 : 0.3,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => {
                setDirection(-1);
                setActiveIndex(
                  (prev) =>
                    (prev - 1 + products.images.length) %
                    products.images.length,
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-20"
            >
              <span className="text-xl">‹</span>
            </button>
            <button
              onClick={() => {
                setDirection(1);
                setActiveIndex((prev) => (prev + 1) % products.images.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-20"
            >
              <span className="text-xl">›</span>
            </button>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 overflow-x-auto h-fit p-4 scrollbar-hide"
        >
          {products.images.map((image, index) => (
            <motion.button
              key={image.id}
              onClick={() => handleThumbnailClick(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex-shrink-0"
            >
              <div
                className={`w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === activeIndex
                    ? "outline-2 outline-offset-4 outline-blue-400"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent transition-opacity ${
                    index === activeIndex ? "opacity-30" : "opacity-60"
                  }`}
                />
              </div>

              {/* Active indicator dot */}
              {index === activeIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex items-center justify-between text-neutral-500 text-sm"
        >
          <span className="font-light tracking-wider">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(products.images.length).padStart(2, "0")}
          </span>
          <span className="font-light tracking-widest uppercase text-xs">
            {isPaused ? "Paused" : "Auto-playing"}
          </span>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
