"use client";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Government from "@/assets/government.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const item = {
  src: "For Government & Public Sector Projects",

  href: "/industries",
  title: "Reliable Digital Transformation for Mission-Critical Infrastructure.",
  description:
    "We collaborate with public institutions, EPC firms, and large organizations to modernize asset management, maintenance workflows, and facility intelligence delivered securely, compliantly, and at scale.",
  overlay: "blue",
  image: Government,
  content: [
    "15+ years of combined experience in delivering end-to-end product engineering and digital transformation solutions.",
    "Led by known technology innovators with a proven track record in driving large-scale community and enterprise initiatives across India.",
  ],
};

const overlayClass: Record<string, string> = {
  yellow: "bg-yellow-700/60",
  cyan: "bg-cyan-700/60",
  blue: "bg-blue-700/60",
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images - All mounted, crossfade via opacity */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
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
        </div>
      </div>
      <div className="w-full">
        <Navbar />
      </div>
      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl w-full">
          {/* Text Content with Staggered Animation */}
          <div className="relative">
            <div key={item.src} className="absolute top-0 left-0">
              <h1 className="max-w-5xl text-4xl md:text-6xl font-semibold text-white leading-tight">
                {item.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base md:text-lg text-white/90">
                {item.description}
              </p>
            </div>
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

          <div className="flex flex-col gap-4 mt-12">
            {item.content.map((txt, index) => (
              <div
                key={index}
                className="text-white text-lg md:text-xl flex gap-2 items-center"
              >
                <span className="flex flex-wrap items-center">
                  <ChevronRight />
                  {txt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
