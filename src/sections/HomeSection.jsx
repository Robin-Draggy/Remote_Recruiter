import React from "react";
import { motion } from "framer-motion";

export const HomeSection = () => {
  // Animation variants for consistent styling
  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Middle Transparent Circle */}
      <div className="absolute -top-50 left-48 h-80 w-80 -translate-x-1/2 rounded-full bg-white/3" />
      <div className="absolute -bottom-20 lg:-bottom-10 -left-20 md:left-[60%] h-110 w-110 -translate-x-1/2 rounded-full bg-white/5" />

      <div className="bg-[linear-gradient(131.63deg,#1E3E85_6.87%,#336DA6_106.04%)] z-60 py-20 md:py-0">
        {/* Content */}
        <div className="relative z-10 flex h-[60vh] md:h-[80vh] flex-col items-center justify-center px-6 py-20 text-center">
          {/* Animated Heading */}
          <motion.h1 
            className="max-w-4xl text-4xl font-bold text-white md:text-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            RemoteRecruit's Difference
          </motion.h1>

          {/* Animated Paragraph with slight delay */}
          <motion.p 
            className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            RemoteRecruit is connecting the world with an easy-to-use platform
            that lets full-time, part-time, and freelance workers showcase their
            talents to businesses that need them. With no paywalls, no fees, and
            no barriers, there's nothing but you, your talents, and the next
            step in your career.
          </motion.p>
        </div>
      </div>

      <svg
        className="absolute bottom-0 lg:-bottom-20 left-0 w-full z-20 hidden md:block"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFFFFF"
          d="
    M0,120
    C250,240 450,250 650,180
    C850,100 1050,60 1250,130
    C1350,160 1400,200 1440,210
    L1440,320
    L0,320
    Z
  "
        />
      </svg>
    </section>
  );
};