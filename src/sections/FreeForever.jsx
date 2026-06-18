import React from "react";
import { motion } from "framer-motion";
import { ProfileBadge } from "../components/ui/ProfileBadge";
import { SectionBtn } from "../components/ui/SectionBtn";
import { Check } from "lucide-react";
import { PayPalBadge } from "../components/ui/PayPalBadge";

export const FreeForever = () => {
  const data = [
    "Up to 25 active job posts",
    "Premium Placement & Visibility",
    "Messaging anyone, unlimited",
    "Unlimited invites",
    "View all applicants",
    "Unlimited invites to jobseekers"
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

  // Right content animations (moved to right side)
  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // Left content animations (moved to left side)
  const leftContentVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
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

  // List item animation
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut"
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
        className="flex flex-1 justify-center lg:justify-start w-full"
        variants={leftContentVariants}
      >
        <div className="relative p-4 lg:p-6 lg:p-10 scale-[0.85] lg:scale-90 lg:scale-100 origin-center">
          
          {/* small dot */}
          <motion.div 
            className="absolute top-10 -left-2 lg:top-10 lg:left-0 h-5 w-5 lg:h-6 lg:w-6 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85]"
            variants={floatingVariants}
            whileHover={{ scale: 1.3, rotate: 90 }}
            transition={{ duration: 0.3 }}
          />

          {/* blue icon */}
          <motion.div 
            className="absolute top-20 lg:top-30 right-0 lg:right-2 h-16 w-16 lg:h-22 lg:w-22 z-10 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85] flex items-center justify-center"
            variants={floatingVariants}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/images/blue.svg"
              alt="RR"
              className="h-10 w-10 lg:h-14 lg:w-14 object-contain"
            />
          </motion.div>

          {/* PayPal badge */}
          <motion.div 
            className="absolute bottom-8 lg:bottom-20 -left-7 lg:left-0 scale-90 lg:scale-100"
            variants={badgeVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <PayPalBadge
              title="Upcoming Payment In…"
              subtitle="14 Days - $79.99"
              titleColor="text-[#1E3E85]"
            />
          </motion.div>

          {/* main card */}
          <motion.div 
            className="h-100 w-80 lg:h-113 lg:w-88 rounded-4xl shadow-[14px_41px_100px_0px_#3159D31F] flex flex-col items-start pt-4"
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "20px 50px 120px 0px #3159D34D",
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex flex-col items-start space-y-3 p-4">
              <motion.div 
                className="flex items-start justify-start flex-col space-y-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h3 className="text-[#808191] capitalize text-xs">
                  Your Membership Tier
                </h3>
                <h2 className="capitalize text-xl font-semibold bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] bg-clip-text text-transparent">
                  Premium
                </h2>
              </motion.div>
              
              <motion.div 
                className="flex items-start justify-start flex-col space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h3 className="text-[#808191] uppercase tracking-widest text-[10px]">
                  features
                </h3>
                <div>
                  {data.map((item, index) => (
                    <motion.div 
                      key={item} 
                      className="flex items-center gap-4 space-y-3.5"
                      variants={listItemVariants}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (index * 0.08) }}
                    >
                      <motion.div 
                        className="w-4 h-4 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85] flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="text-white" size={10} />
                      </motion.div>
                      <p className="text-[#323445E6] text-xs lg:text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div 
        className="flex flex-1 flex-col items-start space-y-6 lg:space-y-8"
        variants={rightContentVariants}
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
          <SectionBtn title="Actually Fee Free" />
        </motion.div>

        <motion.h1 
          className="primary-text text-2xl lg:text-3xl lg:text-4xl font-medium leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: true,
            amount: 0.4,
            margin: "-100px 0px -100px 0px"
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Fee-Free Forever
        </motion.h1>

        <motion.p 
          className="secondary-text text-base lg:text-lg lg:text-xl font-normal leading-7 lg:leading-9 w-[95%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: true,
            amount: 0.4,
            margin: "-100px 0px -100px 0px"
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We don't charge you fees and we don't put up paywalls. We're the
          bridge that connects job opportunities with the best candidates, with
          no middleman involved.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};