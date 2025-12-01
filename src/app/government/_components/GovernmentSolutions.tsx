"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Building2,
  Coins,
  Factory,
  GraduationCap,
  Bot,
  Map,
  Bus,
  Lock,
  ArrowUpRight,
} from "lucide-react";

const integrations = [
  "On-prem data centers & NIC hosting",
  "Legacy MIS systems and internal ERP/CRM systems",
  "Digital identity platforms & role-based access controls",
  "IoT + SCADA + control room infrastructure (for PSUs & utilities)",
  "Secure Gov-cloud / hybrid deployments",
];

const domains = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Smart City Mission Control & Civic Governance Dashboards",
  },
  {
    icon: <Coins className="w-5 h-5" />,
    title: "Finance & Treasury Digital Platforms",
  },
  {
    icon: <Factory className="w-5 h-5" />,
    title: "PSUs: Oil, Gas, Refineries, Manufacturing Plants",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Government Education & Skill Development Platforms",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Robotics, Drones and Autonomous systems",
  },
  {
    icon: <Map className="w-5 h-5" />,
    title: "Land Records, Survey, GIS & Urban Planning",
  },
  {
    icon: <Bus className="w-5 h-5" />,
    title: "State Transport & RTO Automation System",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Defense and Security Information Systems",
  },
];

const security = [
  "Compliance with Government Security Standards",
  "Controlled access to data, environments, and infrastructures",
  "Secure development workflows and audit-ready documentation",
  "Employee background verification and clearance protocols",
  "Zero third-party dependency without approval",
  "No public portfolios / no unauthorized case studies",
];

const GovernmentSolutions = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Modern Solutions for Public Operations
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work with IT departments, government leadership, and PSU
              engineering teams to modernize internal systems without disrupting
              ongoing services. Every solution is built to scale securely across
              large user bases — from state-wide platforms to national public
              systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Government team collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Integration Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Integration infrastructure"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Seamless Integration with Existing Government Infrastructure
            </h2>
            <p className="text-lg text-gray-600">We integrate with:</p>
            <div className="space-y-3">
              {integrations.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00525E] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 bg-[#E7563D]/10 text-[#E7563D] px-6 py-3 rounded-xl font-semibold">
                <span>Outcome:</span>
                <span className="text-gray-900">
                  No disruption. Rapid modernization. Future-ready systems.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Domain Coverage Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Extensive Domain Coverage
            </h2>
            <p className="text-lg text-gray-600">
              If it powers public service, we can digitize it
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-3">
              {domains.map((domain, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center justify-between p-4 bg-white border-b border-gray-200 hover:border-[#E7563D] transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-[#E7563D] group-hover:text-white transition-colors duration-300">
                      {domain.icon}
                    </div>
                    <span className="font-medium text-gray-900">
                      {domain.title}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#E7563D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Domain coverage"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Security Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Security compliance"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Confidentiality & Secure Delivery
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              We operate with full government-grade compliance and strict
              confidentiality in all engagements.
            </p>
            <p className="font-semibold text-gray-900">We ensure:</p>
            <div className="space-y-3">
              {security.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00525E] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSolutions;
