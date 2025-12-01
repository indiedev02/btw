"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const phases = [
  {
    id: "discover",
    title: "Discover",
    subtitle: "Discover & Understand",
    description:
      "We start by aligning on your vision, goals, and the real problems your product needs to solve. Through workshops, workflow mapping, and feasibility assessments, we define what to build and why.",
    outcome:
      "Outcome: A clear product strategy, roadmap, and technical architecture that everyone understands.",
    color: "#FF5733",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Design & Prototype",
    description:
      "Next, we transform the vision into user journeys, wireframes, and high-fidelity UI/UX designs. We create clickable prototypes to validate usability and gather feedback early — before development begins.",
    outcome:
      "Outcome: A well-designed experience that is intuitive, branded, and user-validated.",
    color: "#FF5733",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=800&fit=crop",
  },
  {
    id: "build",
    title: "Build",
    subtitle: "Build & Develop",
    description:
      "We develop the product in iterative sprints, ensuring progress is visible and continuous. Our engineering covers frontend, backend, APIs, databases, integrations, and DevOps pipelines. You review each increment in real-time.",
    outcome:
      "Outcome: A stable, scalable MVP or full product delivered with clean code and transparency.",
    color: "#FF5733",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=800&fit=crop",
  },
  {
    id: "deploy",
    title: "Deploy & Scale",
    subtitle: "Test, Deploy & Scale",
    description:
      "Once the product is ready, we test it thoroughly, optimize performance, and launch it to production. After deployment, we monitor usage, fix issues, and add features as your users grow.",
    outcome:
      "Outcome: A smooth rollout with reliable performance — ready to scale confidently.",
    color: "#FF5733",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
  },
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);
      const phaseIndex = Math.min(
        Math.max(Math.floor(scrollProgress * phases.length), 0),
        phases.length - 1,
      );

      setActivePhase(phaseIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Progress Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
          <div className="flex justify-between items-center">
            {phases.map((phase, idx) => (
              <div key={phase.id} className="flex items-center flex-1">
                <div className="text-center flex-1">
                  <div
                    className={`text-sm md:text-lg font-semibold transition-all duration-300 ${
                      idx === activePhase
                        ? "text-[#FF5733] scale-110"
                        : idx < activePhase
                          ? "text-[#00525E]"
                          : "text-gray-400"
                    }`}
                  >
                    {phase.title}
                  </div>
                </div>
                {idx < phases.length - 1 && (
                  <div className="w-16 md:w-24 h-0.5 bg-gray-300 mx-2">
                    <div
                      className="h-full bg-[#FF5733] transition-all duration-500"
                      style={{
                        width: idx < activePhase ? "100%" : "0%",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 overflow-x-hidden">
        {phases.map((phase, idx) => (
          <div key={phase.id} className="min-h-screen flex items-center py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF5733] mb-4">
                    {phase.title}
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#00525E] mb-6">
                    {phase.subtitle}
                  </h3>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  {phase.description}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-600 text-base leading-relaxed font-medium"
                >
                  {phase.outcome}
                </motion.p>

                <motion.a
                  href="https://calendly.com/blackspektro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-[#00525E] text-white px-6 py-4 rounded-xl font-semibold text-base hover:bg-[#003d47] transition-colors duration-300 shadow-lg hover:shadow-xl mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  {"Let's discuss"}
                </motion.a>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
                  <img
                    src={phase.image}
                    alt={phase.subtitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                  className="absolute -bottom-6 lg:-left-6 left bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
                >
                  <div className="text-5xl font-bold text-[#FF5733]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">
                    Phase
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </div>
  );
};

export default Process;
