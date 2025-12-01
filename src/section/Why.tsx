import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import teamImg from "@/assets/industryGirl.png";

const reasons = [
  {
    title: "Built for the Future",
    description:
      "Every transformation we deliver is secure, scalable, and ready to evolve with tomorrow’s technology.",
  },
  {
    title: "Industry-Ready Solutions",
    description:
      "Trusted by startups, enterprises, and industrial leaders, our systems are built to adapt to any business environment.",
  },
  {
    title: "End-to-End Transformation",
    description:
      "From legacy audits to complete digital modernization, we handle every step with precision and scalability in mind.",
  },
  {
    title: "Strategy Meets Engineering",
    description:
      "We blend business insight with deep technical expertise to deliver solutions that drive real growth not just code.",
  },
];

const Why = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white lg:h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Why Blackspektro?
            </h2>

            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-3 pb-4 border-b border-gray-200 group-hover:border-[#E7563D] transition-colors duration-300">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://calendly.com/blackspektro/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#00525E] text-white px-6 py-4 rounded-xl font-semibold text-base hover:bg-[#003d47] transition-colors duration-300 shadow-sm hover:shadow-md group"
            >
              <MessageCircle className="w-5 h-5" />
              {"Let's discuss"}
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={teamImg}
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Floating stats card - positioned at bottom center */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 w-[calc(100%-3rem)]"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00525E] mb-1">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#E7563D] mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Client Success</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;
