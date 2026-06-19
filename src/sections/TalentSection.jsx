import React from "react";
import { motion } from "framer-motion";
import { SectionBtn } from "../components/ui/SectionBtn";
import { ProfileBadge } from "../components/ui/ProfileBadge";
import { FaPlay } from "react-icons/fa";

export const TalentSection = () => {
  const stacks = [
    "Python Dev",
    "Javascript",
    "Front End",
    "Back End",
    "IOS Development",
    "+12",
  ];

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

  // Stack item animation
  const stackVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut"
      }
    }
  };

  // Play button animation
  const playButtonVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.6, 
        ease: "backOut",
        type: "spring",
        stiffness: 250
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
        amount: 0.4,
        margin: "-100px 0px -100px 0px"
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
          <SectionBtn title="Custom Profile" />
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
          Showcase Your Talent
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
          Personalize your profile with everything that makes you unique. Add an
          introductory video and other media for a personal touch that stands
          out to employers and candidates.
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

          {/* Profile icon */}
          <motion.div 
            className="absolute top-30 lg:top-50 right-0 lg:right-2 z-10 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85] p-1"
            variants={floatingVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full">
              <img
                src="/images/cartoon.png"
                alt="RR"
                loading="lazy"
                className="h-[90%] w-[90%] rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Play Button */}
          <motion.div 
            className="absolute top-20 lg:top-25 left-35 lg:left-45 z-10 scale-90 sm:scale-100"
            variants={playButtonVariants}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-16 h-16 rounded-full bg-[#52B4DA7E] backdrop-blur-[5.44px] flex items-center justify-center"
              animate={{ 
                boxShadow: ["0px 0px 0px 0px rgba(82, 180, 218, 0.4)", "0px 0px 30px 10px rgba(82, 180, 218, 0.2)", "0px 0px 0px 0px rgba(82, 180, 218, 0.4)"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaPlay size={28} className="text-[#1E3E85] ml-1" />
            </motion.div>
          </motion.div>

          {/* badges */}
          <motion.div 
            className="absolute bottom-45 lg:bottom-45 -left-7 lg:left-0 scale-90 sm:scale-100"
            variants={badgeVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <ProfileBadge
              title="Past Client Feedback"
              subtitle="Best Developer Ever!"
              titleColor="text-[#1E3E85]"
            />
          </motion.div>

          {/* main card */}
          <motion.div 
            className="h-100 w-80 lg:h-113 lg:w-88 rounded-4xl shadow-[14px_41px_100px_0px_#3159D31F] flex flex-col items-center justify-between pt-4"
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "20px 50px 120px 0px #3159D34D",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="h-32 sm:h-40 w-[90%] rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.img
                src="/images/pic1.png"
                alt="social"
                loading="lazy"
                className="h-full w-full object-cover object-center scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 items-center justify-center py-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {stacks.map((stack, index) => (
                <motion.p
                  key={stack}
                  className={`
                    text-xs px-3 py-2
                    bg-[linear-gradient(132.56deg,rgba(87,153,235,0.1)_5.63%,rgba(159,116,251,0.1)_106.18%)]
                    ${index === stacks.length - 1 ? "w-fit rounded-full" : "rounded-lg"}
                    cursor-pointer
                  `}
                  variants={stackVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.06) }}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: "0px 4px 15px rgba(82, 180, 218, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="bg-[linear-gradient(131.63deg,#336DA6_6.87%,#1E3E85_106.04%)] bg-clip-text text-transparent font-medium">
                    {stack}
                  </span>
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};