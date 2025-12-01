"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import furnaceImg from "@/assets/furnace.png";
import salesforce from "@/assets/salesforce.png";
import f500 from "@/assets/f500.png";

export default function CaseStudy() {
  const caseStudies = [
    {
      id: 1,
      category: "AUTOMATION",
      title:
        "Automated Case Creation in Salesforce for a Global Furnace Manufacturer",
      stats: [
        {
          value: "100%",
          description: "Automated case creation via Azure Functions",
        },
        {
          value: "Scalable",
          description: "Serverless architecture with rule-based triggers",
        },
      ],
      image: salesforce,
      companyLogo: f500,
      readMoreLink: "/case-studies/ca",
      accentColor: "bg-blue-600",
    },
    {
      id: 2,
      category: "INDUSTRIAL IOT",
      title: "Edge-to-Cloud Furnace Monitoring for a Leading Manufacturer",
      stats: [
        { value: "100%", description: "Custom Device-to-Cloud Communication" },
        { value: "Real-time", description: "Monitoring and Alerting System" },
      ],
      image: furnaceImg,
      companyLogo: f500,
      readMoreLink: "/case-studies/monitoring",
      accentColor: "bg-teal-600",
    },
  ];

  return (
    <section
      id="casestudies"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Crafted. Deployed. Delivered.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {
              "Real-world solutions we've built — and the outcomes they delivered."
            }
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>

                    {/* Category badge on image */}
                    <div className="absolute top-6 left-6">
                      <span
                        className={`${study.accentColor} text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full shadow-lg`}
                      >
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                    {/* Company Logo */}
                    {study.companyLogo && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          src={study.companyLogo}
                          alt="Company logo"
                          height={48}
                          width={140}
                          className="opacity-70"
                        />
                      </motion.div>
                    )}

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight"
                    >
                      {study.title}
                    </motion.h3>

                    {/* Stats Grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="grid grid-cols-2 gap-6 pt-4"
                    >
                      {study.stats.map((stat, statIdx) => (
                        <div key={statIdx} className="space-y-2">
                          <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                          <div className="text-sm lg:text-base text-gray-600 leading-relaxed">
                            {stat.description}
                          </div>
                        </div>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="pt-4"
                    >
                      <motion.a
                        href={study.readMoreLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl group"
                      >
                        Read Case Study
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
