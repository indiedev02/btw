import { motion, Variants } from "framer-motion";
import { StaticImageData } from "next/image";

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
export function TeamMemberCard({
  member,
  index,
}: {
  member: { name: string; role: string; image: StaticImageData };
  index: number;
}) {
  return (
    <motion.div
      className="group relative"
      variants={scaleIn}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
        <motion.img
          src={member.image.src}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Content */}
        {/* <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"> */}
        {/*   <div className="flex gap-3"> */}
        {/*     <a */}
        {/*       href="#" */}
        {/*       className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-zinc-900 transition-colors duration-300" */}
        {/*     > */}
        {/*       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> */}
        {/*         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> */}
        {/*       </svg> */}
        {/*     </a> */}
        {/*     <a */}
        {/*       href="#" */}
        {/*       className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-zinc-900 transition-colors duration-300" */}
        {/*     > */}
        {/*       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> */}
        {/*         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> */}
        {/*       </svg> */}
        {/*     </a> */}
        {/*   </div> */}
        {/* </div> */}
      </div>

      {/* Info Below Image */}
      <div className="mt-5 space-y-1">
        <h3
          className="font-semibold text-zinc-900"
          style={{ fontSize: "18px" }}
        >
          {member.name}
        </h3>
        <p className="text-zinc-500 font-medium" style={{ fontSize: "14px" }}>
          {member.role}
        </p>
      </div>

      {/* Decorative number */}
      <span
        className="absolute -top-3 -right-3 font-bold text-zinc-100 -z-10 select-none"
        style={{ fontSize: "80px" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}
