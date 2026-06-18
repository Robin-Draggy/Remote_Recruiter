import React from "react";
import { motion } from "framer-motion";
import { SectionBtn } from "../components/ui/SectionBtn";
import { ProfileBadge } from "../components/ui/ProfileBadge";

export const JobBoard = () => {
  // Container animation with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  // Left content animations
  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // Right content animations
  const rightContentVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Individual badge animations
  const badgeVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "backOut",
        type: "spring",
        stiffness: 300
      }
    }
  };

  // Floating elements animation (dots, icons)
  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 200
      }
    }
  };

  // Main card animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.9,
      boxShadow: "0px 0px 0px 0px rgba(49, 89, 211, 0)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      boxShadow: "14px 41px 100px 0px #3159D31F",
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    }
  };

  return (
    <motion.section 
      className="section flex flex-col md:flex-row items-center justify-between gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: 0.4,  // Increased from 0.2 to require more of the section to be visible
        margin: "-100px 0px -100px 0px" // Triggers when section is in the middle of viewport
      }}
      variants={containerVariants}
    >
      
      {/* LEFT */}
      <motion.div 
        className="flex flex-1 flex-col items-start space-y-6 lg:space-y-8"
        variants={leftContentVariants}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ 
            once: true,
            amount: 0.4,
            margin: "-100px 0px -100px 0px"
          }}
          transition={{ duration: 0.4 }}
        >
          <SectionBtn title="Global Reach" />
        </motion.div>

        <motion.h1 
          className="primary-text text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: true,
            amount: 0.4,
            margin: "-100px 0px -100px 0px"
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The First Fully Global Job Board, Anywhere, Ever
        </motion.h1>

        <motion.p 
          className="secondary-text text-base sm:text-lg lg:text-xl font-normal leading-7 lg:leading-9 w-[95%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: true,
            amount: 0.4,
            margin: "-100px 0px -100px 0px"
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          RemoteRecruit connects candidates with opportunities around the world.
          With today's remote-first workforce, you need to be able to find the
          best jobs and the best people for them, wherever they may be.
        </motion.p>
      </motion.div>

      {/* RIGHT */}
      <motion.div 
        className="flex flex-1 justify-center lg:justify-end w-full"
        variants={rightContentVariants}
      >
        <div className="relative p-4 sm:p-6 lg:p-10 scale-[0.85] sm:scale-90 lg:scale-100 origin-center">
          
          {/* small dot */}
          <motion.div 
            className="absolute top-6 left-0 sm:top-10 sm:left-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85]"
            variants={floatingVariants}
            whileHover={{ scale: 1.3, rotate: 90 }}
            transition={{ duration: 0.3 }}
          />

          {/* blue icon */}
          <motion.div 
            className="absolute top-30 sm:top-50 right-0 sm:right-2 h-16 w-16 sm:h-22 sm:w-22 z-10 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85] flex items-center justify-center"
            variants={floatingVariants}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/images/blue.svg"
              alt="RR"
              className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
            />
          </motion.div>

          {/* badges */}
          <motion.div 
            className="absolute bottom-35 lg:bottom-50 -left-7 lg:left-0 scale-90 sm:scale-100"
            variants={badgeVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <ProfileBadge
              title="Python Developer"
              subtitle="Felonious Gru"
              titleColor="text-[#1E3E85]"
            />
          </motion.div>

          <motion.div 
            className="absolute bottom-12 lg:bottom-20 left-10 sm:left-17 scale-90 sm:scale-100"
            variants={badgeVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <ProfileBadge
              title="Front End Wizard"
              subtitle="Mel Muselphiem"
              titleColor="text-[#52B4DA]"
            />
          </motion.div>

          {/* main card */}
          <motion.div 
            className="h-100 w-80 lg:h-113 lg:w-88 rounded-4xl flex flex-col items-center pt-4"
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "20px 50px 120px 0px #3159D34D",
              transition: { duration: 0.3 }
            }}
          >
            <div className="h-32 sm:h-40 w-[90%] rounded-2xl overflow-hidden">
              <motion.img
                src="/images/pic2.png"
                alt=""
                className="h-full w-full object-cover object-top scale-110 sm:scale-120"
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Subtle floating animation for the entire card container */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

    </motion.section>
  );
};