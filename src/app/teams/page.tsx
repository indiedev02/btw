"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Avirup Basu",
    role: "IoT Solutions Architect",
    color: "bg-gradient-to-br from-blue-100 to-blue-200",
  },
  {
    name: "Kunal Sharma",
    role: "Full Stack Developer",
    color: "bg-gradient-to-br from-purple-100 to-purple-200",
  },
  {
    name: "Debajyoti Sarkar",
    role: "DevOps Engineer",
    color: "bg-gradient-to-br from-gray-100 to-gray-200",
  },
  {
    name: "Shubranil Sharkar",
    role: "UX/UI Designer",
    color: "bg-gradient-to-br from-green-100 to-green-200",
  },
];

const highlights = [
  {
    title: "Quick and adaptable",
    description:
      "Scale your team within 72 hours. Easily adjust team size from month to month as required.",
    color: "bg-gradient-to-br from-emerald-100 to-teal-100",
  },
  {
    title: "Expert Talent Pool",
    description:
      "Pre-vetted developers, designers, and engineers with world-class technical and communication skills.",
    color: "bg-gradient-to-br from-purple-100 to-indigo-100",
  },
  {
    title: "Transparent pricing",
    description:
      "Rest assured, there are no crazy fees or legal hassle to worry about.",
    color: "bg-gradient-to-br from-orange-100 to-amber-100",
  },
];

const TeamHeroSection = () => {
  return (
    <section className="relative min-h-screen lg:h-screen w-full bg-gradient-to-br from-gray-50 to-white overflow-hidden lg:py-12">
      <div className="h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 lg:py-0">
        <div className="h-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:space-y-10"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
              >
                Build your dream team today.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-600 max-w-xl"
              >
                Unlock success with our handpicked dream team of experts. Hire
                now for unparalleled results.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="https://calendly.com/blackspektro/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Hiring? Book a call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Team Avatars */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 font-semibold text-xs">
                    +28
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Grid - Team Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 auto-rows-fr">
            {/* Large team member card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="col-span-2 md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`${teamMembers[0].color} h-full p-6 flex flex-col justify-end min-h-[300px] lg:min-h-[400px]`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 inline-flex items-center gap-2 self-start shadow-md">
                  <span className="font-semibold text-gray-900">
                    {teamMembers[0].name}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2 ml-4">
                  {teamMembers[0].role}
                </p>
              </div>
            </motion.div>

            {/* Highlight card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="col-span-2 md:col-span-1 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`${highlights[0].color} h-full p-6 flex flex-col justify-between min-h-[200px]`}
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {highlights[0].title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {highlights[0].description}
                </p>
              </div>
            </motion.div>

            {/* Team member card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="col-span-1 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`${teamMembers[1].color} h-full p-6 flex flex-col justify-end min-h-[200px]`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 inline-flex items-center gap-2 self-start shadow-md">
                  <span className="font-semibold text-gray-900 text-sm">
                    {teamMembers[1].name}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                </div>
                <p className="text-gray-600 text-xs mt-2 ml-4">
                  {teamMembers[1].role}
                </p>
              </div>
            </motion.div>

            {/* Highlight card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="col-span-1 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`${highlights[1].color} h-full p-6 flex flex-col justify-between min-h-[200px]`}
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {highlights[1].title}
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  {highlights[1].description}
                </p>
              </div>
            </motion.div>

            {/* Team member card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="col-span-1 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`${teamMembers[2].color} h-full p-6 flex flex-col justify-end min-h-[200px]`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 inline-flex items-center gap-2 self-start shadow-md">
                  <span className="font-semibold text-gray-900 text-sm">
                    {teamMembers[2].name}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                </div>
                <p className="text-gray-600 text-xs mt-2 ml-4">
                  {teamMembers[2].role}
                </p>
              </div>
            </motion.div>

            {/* Highlight card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="col-span-1 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`${highlights[2].color} h-full p-6 flex flex-col justify-between min-h-[200px]`}
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {highlights[2].title}
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  {highlights[2].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHeroSection;
