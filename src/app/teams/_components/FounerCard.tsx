import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { StaticImageData } from "next/image";
// Founder Card Component
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
export function FounderCard({
  founder,
  index,
}: {
  founder: {
    name: string;
    role: string;
    description: string;
    image: StaticImageData;
  };
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center min-h-[80vh] py-20`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      {/* Image Section */}
      <motion.div className="w-full lg:w-1/2 relative" style={{ y: imageY }}>
        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] max-w-md mx-auto lg:max-w-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-300/20 to-cyan-400/20 mix-blend-overlay z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <motion.img
            src={founder.image.src}
            alt={founder.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
          {/* Decorative frame */}
          <div
            className={`absolute ${isEven ? "-right-4 -bottom-4" : "-left-4 -bottom-4"} w-full h-full border-2 border-zinc-300 rounded-2xl -z-10`}
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div className="w-full lg:w-1/2 space-y-6" style={{ y }}>
        <motion.span
          className="inline-block uppercase font-semibold tracking-widest text-emerald-600"
          style={{ fontSize: "12px", letterSpacing: "0.2em" }}
          variants={fadeInUp}
        >
          {founder.role}
        </motion.span>
        <motion.h2
          className="font-bold text-zinc-900 leading-tight"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          variants={fadeInUp}
        >
          {founder.name}
        </motion.h2>
        <motion.div
          className="h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
          style={{ width: "64px" }}
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text-zinc-600 leading-relaxed font-normal"
          style={{ fontSize: "18px", lineHeight: "1.8" }}
          variants={fadeInUp}
        >
          {founder.description}
        </motion.p>
        <motion.div className="flex gap-4 pt-4" variants={fadeInUp}>
          <a
            href="#"
            className="w-11 h-11 rounded-full border-2 border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-11 h-11 rounded-full border-2 border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
