"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import KernopyProduct from "@/assets/KernopyProduct.png";
import AriviProduct from "@/assets/AriviProduct.png";

const products = [
  {
    name: "",
    image: KernopyProduct, // Update with your actual image path
  },
  {
    name: "Airvi",
    image: AriviProduct, // Update with your actual image path
  },
  {
    name: "Incentive Management",
    image: "/images/incentive-management.jpg", // Update with your actual image path
  },
];

const Products = () => {
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
            {"Products We've Built"}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {
              "A peek into our proprietary platforms and the innovation we've delivered"
            }
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Large Card - Kernopy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="md:row-span-2"
          >
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src={products[0].image}
                alt={products[0].name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white group-hover:scale-110 transition-transform duration-500"
                >
                  {products[0].name}
                </motion.h3>
              </div>
            </div>
          </motion.div>

          {/* Top Right Card - Airvi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="md:row-span-1"
          >
            <div className="relative h-full min-h-[240px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src={products[1].image}
                alt={products[1].name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white group-hover:scale-110 transition-transform duration-500"
                >
                  {products[1].name}
                </motion.h3>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Card - Incentive Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="md:row-span-1"
          >
            <div
              className={`relative h-full min-h-[240px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#0a1f2e] via-[#0d4d5c] to-[#0a1f2e] group cursor-pointer`}
            >
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center group-hover:scale-110 transition-transform duration-500"
                >
                  {products[2].name}
                </motion.h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
