import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

export const HelpSection = () => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  // Left content (image) animation
  const leftContentVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  // Right content animation
  const rightContentVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Text animations
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "backOut",
        type: "spring",
        stiffness: 200,
        delay: 0.4
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(82, 180, 218, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  // Floating blob animations
  const blobVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Image animation with floating effect
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        delay: 0.3
      }
    },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Arrow icon animation
  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.6
      }
    },
    hover: {
      x: [0, 5, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative overflow-hidden min-h-[40vh] bg-[linear-gradient(132.56deg,rgba(87,153,235,0.2)_5.63%,rgba(159,116,251,0.2)_106.18%)] flex flex-col-reverse md:flex-row"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: 0.3,
        margin: "-50px 0px -50px 0px"
      }}
      variants={containerVariants}
    >

      {/* Animated White blobs */}
      <motion.div 
        className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-white/30 z-0"
        variants={blobVariants}
        animate="float"
        style={{ animationDelay: "0s" }}
      />
      <motion.div 
        className="absolute -top-20 -right-24 h-72 w-72 rounded-full bg-white/30 z-0"
        variants={blobVariants}
        animate="float"
        style={{ animationDelay: "0.5s" }}
      />
      <motion.div 
        className="absolute -bottom-10 left-[40%] -translate-x-1/2 h-60 w-60 rounded-full bg-white/30 z-0"
        variants={blobVariants}
        animate="float"
        style={{ animationDelay: "1s" }}
      />

      {/* LEFT */}
      <motion.div 
        className="relative z-10 flex-1 flex items-end"
        variants={leftContentVariants}
      >
        <motion.div 
          className="bg-white pt-4 pr-4 rounded-tr-3xl mt-auto h-[80%]"
          variants={imageVariants}
          animate="float"
        >
          <motion.img
            src="/images/pic2.png"
            alt="hero"
            loading="lazy"
            className="
              w-[320px]
              lg:w-140
              object-cover
              origin-top
              rounded-tr-3xl
              drop-shadow-2xl
            "
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      </motion.div>

      {/* RIGHT */}
      <motion.div 
        className="relative z-10 flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 lg:px-12 py-12 gap-6"
        variants={rightContentVariants}
      >
        <motion.p 
          className="text-[#1E3E85] font-semibold tracking-[0.2em] uppercase"
          variants={textVariants}
        >
          Are you ready?
        </motion.p>

        <motion.h1 
          className="primary-text text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-md"
          variants={textVariants}
        >
          Help is only a few clicks away!
        </motion.h1>

        <motion.p 
          className="text-[#767784] text-base lg:text-lg max-w-sm"
          variants={textVariants}
        >
          Click below to get set up super quickly and find help now!
        </motion.p>

        <motion.button 
          className="flex items-center gap-4 pl-2 pr-5 py-2 rounded-full bg-[#52b3da3f] hover:bg-[#52b3da55] transition cursor-pointer group"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div 
            className="w-8 h-8 rounded-full bg-[#52B4DA] flex items-center justify-center"
            whileHover={{ 
              rotate: 360,
              transition: { duration: 0.6 }
            }}
          >
            <motion.div
              variants={arrowVariants}
              animate="visible"
              whileHover="hover"
            >
              <FaArrowRightLong className="text-white" />
            </motion.div>
          </motion.div>

          <motion.span 
            className="capitalize text-[#1E3E85] text-base font-medium"
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            Get Started
          </motion.span>
        </motion.button>

      </motion.div>
    </motion.section>
  );
};