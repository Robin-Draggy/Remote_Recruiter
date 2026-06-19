import React from "react";
import { motion } from "framer-motion";

const questions = [
  {
    q: "Do I have to sign a long-term contract?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
  },
  {
    q: "Can I pay for a whole year?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
  },
  {
    q: "What if I need help?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
  },
];

export const QuestionSection = () => {
  // Container animation with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  // Item animation - fade in with subtle bounce
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Header animation
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: -20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Button animation
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.85,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.section 
      className="section space-y-9"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: 0.2,
        margin: "-50px 0px -50px 0px"
      }}
      variants={containerVariants}
    >
      <motion.h1 
        className="text-2xl lg:text-4xl primary-text"
        variants={headerVariants}
      >
        Common Questions
      </motion.h1>

      {/* Q&A */}
      <motion.div className="space-y-4">
        {questions.map((item, index) => (
          <motion.div 
            key={index} 
            className="space-y-3"
            variants={itemVariants}
          >
            <h2 className="font-medium primary-text text-lg">{item.q}</h2>
            <p className="text-[#6D6E7A] leading-9">{item.a}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.button 
        aria-label="More quesions"
        className="border-2 border-[#53B4DAB1] px-4 py-2 rounded-2xl"
        variants={buttonVariants}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
      >
        <span className="text-[#1E3E85] font-semibold text-[16px]">
          More Questions
        </span>
      </motion.button>
    </motion.section>
  );
};