import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import {
  FaXmark,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export const Footer = () => {
  const socials = [FaFacebook, FaInstagram, FaXTwitter, FaLinkedin];

  const free = [
    "1 Active Job",
    "Basic List Placement",
    "Unlimited Job Applic",
    "Invite Anyone to Apply to Your Jobs",
  ];

  const premium = [
    "Unlimited Job Posts",
    "Instant Job Post Approval",
    "Premium List Placement",
    "Unlimited Job Applicants",
  ];

  const isTouch = typeof window !== "undefined" &&
  window.matchMedia("(hover: none)").matches;

  // Container animation
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

  // Header animation
  const headerVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 200
      }
    }
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    },
    hover: {
      y: -8,
      boxShadow: "0px 20px 60px rgba(49, 89, 211, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  // Card content animations
  const cardContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // List item animation
  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
        delay: 0.3
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 8px 25px rgba(49, 89, 211, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.97,
      transition: { duration: 0.1 }
    }
  };

  // Social icon animation
  const socialVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.5,
        ease: "backOut",
        type: "spring",
        stiffness: 250
      }
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  // Logo animation
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        delay: 0.4
      }
    }
  };

  // Bottom icon animation
  const bottomIconVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        delay: 0.6
      }
    }
  };

  // Floating circle animation
  const circleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.footer 
      className="relative isolate overflow-hidden bg-[linear-gradient(131.63deg,#1E3E85_6.87%,#336DA6_106.04%)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: 0.1,
        margin: "-50px 0px -50px 0px"
      }}
      variants={containerVariants}
    >
      {/* TOP SVG CURVE (background layer) */}
      <svg
        className="absolute top-0 left-0 w-full z-0 pointer-events-none hidden lg:block"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFFFFF"
          d="
      M0,195
      C300,200 650,160 850,300
      C1000,260 1200,260 1440,260
      L1440,0
      L0,0
      Z
    "
        />
      </svg>

      <motion.div 
        className="absolute -top-30 md:-top-20 lg:top-0 -right-20 h-90 w-90 rounded-full bg-white/5"
        variants={circleVariants}
        animate="float"
      />
      
      {/* CONTENT (foreground layer) */}
      <div className="relative z-10 section !pb-10 flex flex-col items-center">

        <motion.h1 
          className="text-white lg:text-[#11142D] text-2xl lg:text-4xl font-semibold"
          variants={headerVariants}
        >
          Help Is One Click Away
        </motion.h1>

        <motion.div 
          className="flex flex-col md:flex-row items-center gap-4 mt-16 p-5"
          variants={cardVariants}
        >
          {/* left card */}
          <motion.div 
            className="rounded-3xl flex flex-col items-center justify-between bg-white p-6 gap-4 shadow-lg w-90 lg:w-105 h-75"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="flex items-center gap-8"
              variants={cardContentVariants}
            >
              <motion.div 
                className="bg-[#ECF2FF] flex flex-col items-center justify-center w-40 h-36 rounded-xl"
                whileHover={isTouch ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h2 
                  className="text-[#52B4DA] text-3xl font-semibold"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    delay: 0.3
                  }}
                >
                  Free
                </motion.h2>
                <p className="text-[#11142D65]">Basic</p>
              </motion.div>

              <motion.div className="space-y-3">
                {free.map((item, index) => {
                  const isDisabled = index >= free.length - 2;

                  return (
                    <motion.div 
                      key={item} 
                      className="flex items-center gap-3"
                      variants={listItemVariants}
                      custom={index}
                      transition={{ delay: 0.1 + (index * 0.05) }}
                    >
                      <motion.div
                        className={`
                          h-5 w-5 rounded-full flex items-center justify-center
                          ${
                            isDisabled
                              ? "bg-gray-200"
                              : "bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.16%)]"
                          }
                        `}
                        whileHover={isTouch ? {} : { scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isDisabled ? (
                          <div className="h-5 w-5 rounded-full flex items-center justify-center bg-[linear-gradient(132.56deg,#A2A3B8_5.63%,#808191_106.16%)]">
                            <FaXmark className="text-white text-[10px]" />
                          </div>
                        ) : (
                          <FaCheck className="text-white text-[10px]" />
                        )}
                      </motion.div>

                      <p
                        className={`text-sm ${
                          isDisabled ? "text-[#808191]" : "text-[#323445]"
                        }`}
                      >
                        {item}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div 
              className="w-full"
              variants={buttonVariants}
            >
              <div className="p-[2px] rounded-2xl bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]">
                <motion.button 
                  className="w-full py-3 rounded-2xl bg-white text-[#1E3E85] font-semibold cursor-pointer"
                  whileHover={isTouch ? {} : { scale: 1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* right card */}
          <motion.div 
            className="rounded-3xl flex flex-col items-center justify-between bg-white p-6 gap-4 shadow-lg w-90 lg:w-105 h-75"
            variants={cardVariants}
            whileHover="hover"
            transition={{ delay: 0.1 }}
          >
            <motion.div 
              className="flex items-center gap-8"
              variants={cardContentVariants}
            >
              <motion.div 
                className="bg-[#ECF2FF] relative flex flex-2 items-center justify-center flex-col w-44 h-38 rounded-xl"
                whileHover={isTouch ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="absolute -top-4 left-0 flex items-center gap-3 rounded-full bg-[#C2EEFF] pl-2 pr-6 py-1 w-full"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="flex items-center justify-center rounded-full bg-white w-6 h-6">
                    <img
                      src="/images/drop.png"
                      alt="premium plan icon"
                      loading="lazy"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                  <p className="text-xs font-medium primary-text">Premium</p>
                </motion.div>

                <motion.h2 
                  className="text-3xl font-semibold bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.16%)] bg-clip-text text-transparent"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    delay: 0.4
                  }}
                >
                  $79.99
                </motion.h2>

                <p className="text-[#11142D65]">Per Month</p>
              </motion.div>

              <motion.div className="space-y-5 flex-3">
                {premium.map((item, index) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center gap-3"
                    variants={listItemVariants}
                    transition={{ delay: 0.2 + (index * 0.05) }}
                  >
                    <motion.div 
                      className="h-5 w-5 rounded-full flex items-center justify-center bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.16%)]"
                      whileHover={isTouch ? {} : { scale: 1.02, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaCheck className="text-white text-[10px]" />
                    </motion.div>
                    <p className="text-sm text-[#323445]">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="w-full"
              variants={buttonVariants}
            >
              <motion.button 
                className="w-full py-3 rounded-2xl text-white font-semibold
                bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)]
                shadow-[10px_0px_50px_0px_#3159D347] cursor-pointer
                hover:opacity-95 transition"
                whileHover={isTouch ? {} : { scale: 1, boxShadow: "0px 8px 30px rgba(49, 89, 211, 0.4)" }}

                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* bottom bar */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-center justify-between w-full mt-10"
          variants={logoVariants}
        >
          <motion.img 
            src="/images/Menu.png" 
            alt="logo" 
            loading="lazy"
            className="w-37.5 object-contain"
            whileHover={isTouch ? {} : { scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div className="flex items-center gap-3">
            {socials.map((Icon, index) => (
              <motion.div
                key={index}
                aria-label={`Social link ${index + 1}`}
                className="h-10 w-10 rounded-full flex items-center justify-center
                bg-[linear-gradient(135deg,rgba(235,237,255,0.15)_0%,rgba(173,184,255,0.15)_100%)]
                cursor-pointer"
                variants={socialVariants}
                whileHover="hover"
                transition={{ delay: 0.1 + (index * 0.05) }}
              >
                <Icon className="h-5 w-5 text-white" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center mt-15"
          variants={bottomIconVariants}
        >
          <motion.img 
            src="/images/blue.svg" 
            alt="logo" 
            loading="lazy"
            className="w-12 h-12 object-contain"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.footer>
  );
};