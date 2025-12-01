import Image from "next/image";
import React from "react";
import logo1 from "@/assets/ipsen.png";
import logo2 from "@/assets/io.png";
import logo3 from "@/assets/hosachiguru.png";
import logo4 from "@/assets/multipie.png";
import logo5 from "@/assets/colfax.png";
import logo6 from "@/assets/bp.png";
import { motion } from "framer-motion";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Industry = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Trusted by Industry & Innovators
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From global enterprises to fast-growing startups, we build for all
          </p>
        </motion.div>

        {/* Mobile: marquee */}
        <div className="relative w-full overflow-hidden lg:hidden">
          <div className="flex animate-marquee space-x-8">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={`mobile-${idx}`}
                className="flex-shrink-0 flex justify-center items-center"
              >
                <Image
                  src={logo}
                  alt={`logo-${idx}`}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Static Grid with Animations */}
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-12">
          {logos.map((logo, idx) => (
            <motion.div
              key={`desktop-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex justify-center items-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md cursor-pointer"
            >
              <Image
                src={logo}
                alt={`Partner logo ${idx + 1}`}
                className="object-contain max-w-full max-h-full"
                width={120}
                height={60}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industry;
