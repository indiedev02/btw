"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { TeamMemberCard } from "./_components/TeamMemberCard";
import { FounderCard } from "./_components/FounerCard";
import Navbar from "@/components/Navbar";
import Kazi from "@/assets/Kazi.jpeg";
import Avirup from "@/assets/Avirup.jpeg";
import Kunal from "@/assets/Kunal.jpg";
import Debajyoti from "@/assets/Debajyoti.jpeg";
import Swarna from "@/assets/Swarna.jpg";
import Akash from "@/assets/Akash.jpeg";
import Shubranil from "@/assets/Shubranil.jpeg";
// Founder data
const founders = [
  {
    name: "Avirup Basu",
    role: "Founder & Director",
    description:
      "Avirup is an engineering-led founder with experience across cloud platforms, AI systems, SaaS product development, and large-scale real-time applications. Before starting Blackspektro, he helped architect and roll out multiple enterprise SaaS products at P360. Driven by research and real-world impact, he enjoys building intelligent, scalable systems that solve meaningful problems. He also leads GDG Siliguri, one of the region’s most active tech communities, and has been recognised as an Intel Software Innovator and has delivered multiple talks within India and global platforms. Outside work, he’s a passionate technologist and cyclist.",
    image: Avirup,
    linkedin: "https://in.linkedin.com/in/avirup171",
  },
  {
    name: "Kazi Haque",
    role: "Co-Founder & Chief Growth Architect",
    description:
      "Kazi is an engineering-led growth architect and co-founder at Blackspektro, with hands-on experience in scaling SaaS products, shaping growth strategies, and building platforms that solve real-world problems. He brings a mix of business insight, product thinking, and a passion for growth always focused on creating value and impact through smart, scalable solutions. Outside of work, Kazi is driven by curiosity, constant learning, and building communities around technology and innovation.",
    image: Kazi,
    linkedin: "https://in.linkedin.com/in/haquekazi",
  },
];

// Team members data
const teamMembers = [
  {
    name: "Debajyoti Sarkar",
    role: "Lead Engineer",
    image: Debajyoti,
  },
  {
    name: "Kunal Sharma",
    role: "Product Engineer",
    image: Kunal,
  },
  {
    name: "Akash Bilung",
    role: "Product Engineer",
    image: Akash,
  },
  {
    name: "Subranil Sarkar",
    role: "Product Designer",
    image: Shubranil,
  },
  {
    name: "Swarna Shikar Das",
    role: "Full Stack Engineer",
    image: Swarna,
  },
];

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Main Team Page Component
export default function TeamPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <main className="bg-zinc-50 min-h-screen overflow-x-hidden">
      <Navbar isDark={true} />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-200 to-cyan-200 blur-3xl opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-violet-200 to-fuchsia-200 blur-3xl opacity-40"
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          style={{ y: heroY }}
        >
          <motion.span
            className="inline-block uppercase font-semibold text-emerald-600 mb-6"
            style={{ fontSize: "13px", letterSpacing: "0.3em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The People Behind the Vision
          </motion.span>

          <motion.h1
            className="font-extrabold text-zinc-900 leading-none mb-8"
            style={{ fontSize: "clamp(48px, 10vw, 120px)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Meet Our
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h1>

          <motion.p
            className="text-zinc-500 font-normal max-w-2xl mx-auto"
            style={{ fontSize: "18px", lineHeight: "1.7" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            A collective of dreamers, builders, and innovators united by a
            shared passion for creating meaningful impact through technology.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-7 h-12 border-2 border-zinc-300 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-3 bg-zinc-400 rounded-full"
                animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Founders Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.span
              className="inline-block uppercase font-semibold text-emerald-600 mb-4"
              style={{ fontSize: "13px", letterSpacing: "0.2em" }}
              variants={fadeInUp}
            >
              Leadership
            </motion.span>
            <motion.h2
              className="font-bold text-zinc-900"
              style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
              variants={fadeInUp}
            >
              Our Founders
            </motion.h2>
          </motion.div>

          {/* Founders Cards */}
          {founders.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-40 flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="relative z-10 w-4 h-4 bg-gradient-to-br from-emerald-500 to-cyan-500 rotate-45 rounded-sm"
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>

      {/* Team Members Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.span
              className="inline-block uppercase font-semibold text-emerald-600 mb-4"
              style={{ fontSize: "13px", letterSpacing: "0.2em" }}
              variants={fadeInUp}
            >
              The Team
            </motion.span>
            <motion.h2
              className="font-bold text-zinc-900 mb-6"
              style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
              variants={fadeInUp}
            >
              Brilliant Minds
            </motion.h2>
            <motion.p
              className="text-zinc-500 font-normal max-w-xl mx-auto"
              style={{ fontSize: "16px", lineHeight: "1.7" }}
              variants={fadeInUp}
            >
              The talented individuals who bring expertise, creativity, and
              dedication to everything we build.
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-20 bg-zinc-50" />
    </main>
  );
}
