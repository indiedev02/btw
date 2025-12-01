"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, UserRound, Quote } from "lucide-react";
import React from "react";
import emp1 from "@/assets/emp1.png";
import emp2 from "@/assets/emp2.png";
import emp3 from "@/assets/emp3.png";
import emp4 from "@/assets/emp4.png";
import emp5 from "@/assets/emp5.png";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const testimonials = [
  {
    name: "Sriram Chitlur",
    role: "Founder, Hosachiguru",
    feedback:
      "Blackspectro helped us quickly launch the Myfarm app, connecting our customers digitally to their farms. Despite limited Agri domain knowledge initially, they adapted fast and delivered on both Android and iOS. We continue to work with them to enhance the app.",
    variant: "dark",
  },
  {
    name: "Sabyasachi Saha",
    role: "Manager, IOCL",
    feedback:
      "The feedback system helped us to maintain the hygiene system of our toilet and also ensure automatic maintenance resulting in cost cutting for the complete process.",
    variant: "light",
  },
];

const people = [
  {
    id: 1,
    name: "Employee 1",
    designation: "Developer",
    image: emp1.src,
  },
  {
    id: 2,
    name: "Employee 2",
    designation: "Designer",
    image: emp2.src,
  },
  {
    id: 3,
    name: "Employee 3",
    designation: "Manager",
    image: emp3.src,
  },
  {
    id: 4,
    name: "Employee 5",
    designation: "Support",
    image: emp5.src,
  },
  {
    id: 5,
    name: "Employee 4",
    designation: "QA Engineer",
    image: emp4.src,
  },
];

const Testimonial = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 items-center mb-16"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Built for Impact. Backed by Trust.
            </h2>
            <motion.a
              href="https://calendly.com/blackspektro/"
              target="_blank"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-xl font-semibold text-[#00525E] hover:text-[#003d47] transition-colors group"
            >
              Schedule a call
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
          <div className="lg:text-right">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed lg:ml-auto lg:max-w-md">
              See how industry leaders experienced transformation through our
              solutions.
            </p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                item.variant === "dark"
                  ? "bg-gradient-to-br from-[#00525E] to-[#003d47] text-white"
                  : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote
                  className={`w-10 h-10 ${
                    item.variant === "dark" ? "text-white/30" : "text-gray-300"
                  }`}
                />
              </div>

              {/* Feedback */}
              <div className="mb-8">
                <p
                  className={`text-base md:text-lg leading-relaxed ${
                    item.variant === "dark" ? "text-white/95" : "text-gray-700"
                  }`}
                >
                  {`"${item.feedback}"`}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.variant === "dark" ? "bg-white/20" : "bg-gray-200"
                  }`}
                >
                  <UserRound className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p
                    className={`text-sm ${
                      item.variant === "dark"
                        ? "text-white/70"
                        : "text-gray-500"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Statement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Team Avatars & Statement */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center lg:justify-start relative">
              <AnimatedTooltip items={people} />
            </div>
            <div className="lg:col-span-8 mt-8 lg:mt-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-center lg:text-left">
                At Blackspektro, we design, engineer, and scale digital
                solutions{" "}
                <span className="text-gray-400">
                  for growing startups and global enterprises.
                </span>
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
