"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const BlackspektroBanner = () => {
  return (
    <section className="w-full py-8 md:py-12 px-6 md:px-12 lg:px-24">
      <div className="relative max-w-7xl mx-auto overflow-hidden bg-gradient-to-br from-[#00525E] via-[#003d47] to-[#002a30] rounded-3xl py-12 md:py-16 px-6 md:px-12 lg:px-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative space-y-6 md:space-y-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6">
              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Why Blackspektro?
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                  From{" "}
                  <span className="text-teal-300 font-semibold">
                    Industrial IoT & SCADA systems
                  </span>{" "}
                  to{" "}
                  <span className="text-emerald-300 font-semibold">
                    startup MVPs
                  </span>{" "}
                  and{" "}
                  <span className="text-cyan-300 font-semibold">
                    government platforms
                  </span>{" "}
                  — we build digital products end-to-end.
                </p>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
              >
                {/* Phone number */}
                <motion.a
                  href="tel:+919475525357"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-[#00525E] px-5 py-3 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 94755 25357</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href="https://calendly.com/blackspektro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-5 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-[#00525E] transition-all duration-300"
                >
                  Schedule a Call
                </motion.a>
              </motion.div>
            </div>

            {/* Right Content - Features grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { label: "Industrial IoT", value: "SCADA & PLCs" },
                { label: "Startup", value: "MVPs & SaaS" },
                { label: "Government", value: "Public Sector" },
                { label: "Enterprise", value: "Modernization" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-teal-300 text-xs font-medium mb-1">
                    {item.label}
                  </div>
                  <div className="text-white text-base font-bold">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 rounded-b-3xl" />
      </div>
    </section>
  );
};

export default BlackspektroBanner;
