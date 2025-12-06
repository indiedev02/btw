"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Industrial from "@/assets/Industrial.jpg";
import Startups from "@/assets/startups.jpg";
import Government from "@/assets/Government.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const heroContent = [
  {
    src: "For Industrial Companies",
    href: "/industries",
    title:
      "Digitize Your Plant. Optimize Your Operations. Scale with Intelligence.",
    description:
      "We implement Industrial IoT, Digital Twin systems, and connected factory platforms to give you real-time visibility into machines, energy, production lines, and maintenance — improving efficiency, uptime, and quality.",
    overlay: "yellow",
    image: Industrial,
  },
  {
    src: "For Startups & Enterprises",

    href: "/startups",
    title: "Your End-to-End Product & Technology Partner.",
    description:
      "From MVPs to full-scale enterprise platforms, we design, build, and deploy digital products, IoT systems, and digital twin solutions. Work with a dedicated tech team that scales with you—on a simple subscription.",
    overlay: "cyan",
    image: Startups,
  },
  {
    src: "For Government & Public Sector Projects",

    href: "/industries",
    title:
      "Reliable Digital Transformation for Mission-Critical Infrastructure.",
    description:
      "We collaborate with public institutions, EPC firms, and large organizations to modernize asset management, maintenance workflows, and facility intelligence delivered securely, compliantly, and at scale.",
    overlay: "blue",
    image: Government,
  },
];

const overlayClass: Record<string, string> = {
  yellow: "bg-yellow-700/60",
  cyan: "bg-cyan-700/60",
  blue: "bg-blue-700/60",
};

const SLIDE_MS = 7000;
const Hero = () => {
  const [index, setIndex] = useState(0);
  const isPaused = false;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroContent.length);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (i: number) => {
    setIndex(i % heroContent.length);
  };
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images - All mounted, crossfade via opacity */}
      <div className="absolute inset-0">
        {heroContent.map((item, i) => (
          <motion.div
            key={item.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.05,
            }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 7, ease: "linear" },
            }}
          >
            <Image
              src={item.image}
              alt={item.src}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Color overlay */}
            <div
              className={`absolute inset-0 mix-blend-multiply ${overlayClass[item.overlay]}`}
            />
            {/* Dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </motion.div>
        ))}
      </div>
      <div className="w-full">
        <Navbar />
      </div>
      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl w-full">
          {/* Text Content with Staggered Animation */}
          <div className="relative">
            {heroContent.map((item, i) => (
              <motion.div
                key={item.src}
                className="absolute top-0 left-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: i === index ? 1 : 0,
                  y: i === index ? 0 : 20,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ pointerEvents: i === index ? "auto" : "none" }}
              >
                <motion.h1
                  className="max-w-5xl text-4xl md:text-6xl font-semibold text-white leading-tight"
                  animate={{
                    opacity: i === index ? 1 : 0,
                    y: i === index ? 0 : 20,
                  }}
                  transition={{
                    delay: 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.title}
                </motion.h1>

                <motion.p
                  className="mt-4 max-w-2xl text-base md:text-lg text-white/90"
                  animate={{
                    opacity: i === index ? 1 : 0,
                    y: i === index ? 0 : 20,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
          <div className="mt-[350px]">
            <motion.a
              href="https://calendly.com/blackspektro/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-background text-foreground px-8 py-4 rounded-xl font-semibold text-lg duration-300 shadow-lg hover:shadow-xl group inline-flex items-center gap-3"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4 mt-12">
            {heroContent.map((item, i) => (
              <motion.a
                href={item.href}
                key={item.src}
                className="text-left group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-white text-lg md:text-xl flex gap-2 items-center">
                  <span
                    className={`underline underline-offset-[10px] inline-flex items-center gap-2 transition-all duration-300 ${
                      i === index
                        ? "decoration-4 decoration-white font-bold"
                        : "decoration-2 decoration-white/40 group-hover:decoration-white/70"
                    }`}
                  >
                    {item.src}
                    <motion.div
                      animate={{
                        x: i === index ? 4 : 0,
                        y: i === index ? -4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight />
                    </motion.div>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Progress Bars */}
          <div className="mt-8 flex items-center gap-2">
            {heroContent.map((_, i) => (
              <motion.div
                key={i}
                className="relative h-1 w-16 rounded-full bg-white/20 overflow-hidden cursor-pointer"
                onClick={() => goTo(i)}
                whileHover={{ scaleY: 1.5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{
                    width: i === index ? "100%" : "0%",
                  }}
                  transition={{
                    duration: i === index && !isPaused ? SLIDE_MS / 1000 : 0.3,
                    ease: i === index && !isPaused ? "linear" : "easeOut",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
