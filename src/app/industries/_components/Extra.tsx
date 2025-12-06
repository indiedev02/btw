"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Specialize from "@/assets/Specialize.jpg";

const reasons = [
  "Multi-protocol Industrial Sensors (temperature, vibration, pressure, torque, flow)",
  "Condition Monitoring Sensors for rotating & high-wear equipment",
  "Energy & Utility Load Sensors for efficiency monitoring",
  "Edge Gateways to connect PLCs, legacy controls & SCADA systems",
  "OPC-UA, Modbus, EtherCAT, Profinet, CANbus integrations",
  "Time-series data historians & real-time dashboards",
  "Cloud or On-Prem Data Pipelines for Enterprise Analytics",
];

const Extra = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We specialize in deploying Industrial IoT (IIoT) ecosystems using
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
                    <p className="text-sm text-gray-600">{reason}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                src={Specialize}
                alt="Specialization"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Extra;
