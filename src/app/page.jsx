"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Homepage = () => {
  const [language, setLanguage] = useState("en");
  const router = useRouter();
  
  const cvUrl = "https://drive.google.com/file/d/1X1c8pLfCOBMn3DRkX4DB6X1nhlN4yIaO/view?usp=sharing";
  
  const downloadCV = () => {
    window.open(cvUrl, "_blank");
  };
  
  const content = {
    en: {
      title: (
        <span>
          Hi, I'm Sebastian.
        </span>
      ),
      description:
        "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
      hireMe: "Hire Me",
      cv: "CV"
    },
    es: {
      title: "Hola, Soy Sebastián",
      description:
        "Soy una persona motivada y versátil, siempre dispuesta a asumir nuevos desafíos. Con pasión por aprender, me dedico a entregar resultados de alta calidad. Con una actitud positiva y una mentalidad de crecimiento, estoy lista para hacer una contribución significativa y lograr grandes cosas.",
      hireMe: "Contrátame",
      cv: "CV"
    },
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  // Enhanced decorative elements animation variants
  const shapeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 0.4, transition: { duration: 0.8 } }
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-30, 30, -30],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotatingAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const breathingAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const splineAnimation = {
    initial: { 
      pathLength: 0,
      opacity: 0 
    },
    animate: {
      pathLength: [0, 1, 1, 0],
      opacity: [0, 0.4, 0.4, 0],
      transition: {
        duration: 6,
        times: [0, 0.4, 0.6, 1], // Controla los tiempos de cada etapa de la animación
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.5 // Pequeña pausa entre ciclos
      }
    }
  };

  return (
    <div className="relative h-full overflow-hidden font-sans"> {/* Añadido font-sans aquí */}
      {/* Original gradient blobs with increased opacity */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 blur-3xl"
        initial={shapeVariants.initial}
        animate={shapeVariants.animate}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-blue-300 to-cyan-300 blur-3xl"
        initial={shapeVariants.initial}
        animate={shapeVariants.animate}
      />

      {/* Enhanced floating geometric shapes */}
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border-4 border-purple-400 rounded-lg shadow-lg"
        initial="initial"
        animate="animate"
        variants={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-40 left-32 w-24 h-24 border-4 border-blue-400 rotate-45 shadow-lg"
        initial="initial"
        animate="animate"
        variants={{
          ...floatingAnimation,
          animate: {
            ...floatingAnimation.animate,
            rotate: [45, 225, 45],
          }
        }}
      />

      {/* New circular elements with animations */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full border-4 border-pink-400 shadow-lg"
        initial="initial"
        animate="animate"
        variants={rotatingAnimation}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full border-4 border-cyan-400 shadow-lg"
        initial="initial"
        animate="animate"
        variants={breathingAnimation}
      />
      
      {/* Double circle with gradient border */}
      <motion.div
        className="absolute top-1/3 right-1/3"
        initial="initial"
        animate="animate"
        variants={floatingAnimation}
      >
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent opacity-40"
            style={{ 
              background: 'linear-gradient(to right, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4))',
              backgroundClip: 'content-box'
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-transparent opacity-40"
            style={{ 
              background: 'linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(34, 211, 238, 0.4))',
              backgroundClip: 'content-box'
            }}
            animate={{
              rotate: [360, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>

      {/* Enhanced animated splines */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        <motion.path
          d="M-100,100 Q200,150 400,100 T900,100"
          fill="none"
          stroke="rgba(147, 51, 234, 0.4)"
          strokeWidth="3"
          strokeLinecap="round"
          initial="initial"
          animate="animate"
          variants={splineAnimation}
        />
        <motion.path
          d="M-100,200 Q200,250 400,200 T900,200"
          fill="none"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="3"
          strokeLinecap="round"
          initial="initial"
          animate="animate"
          variants={{
            ...splineAnimation,
            animate: {
              ...splineAnimation.animate,
              transition: {
                ...splineAnimation.animate.transition,
                delay: 0.5 // Desfase entre las dos líneas
              }
            }
          }}
        />
      </svg>

      {/* Enhanced dots pattern */}
      <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="h-full flex items-center justify-center relative z-10"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {content[language].title}
          </motion.h1>
          <motion.p 
            className="md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {content[language].description}
          </motion.p>
          
          <motion.div 
            className="w-full flex gap-4 justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <button
              className={`px-6 py-4 rounded-lg font-semibold transition duration-300 ease-in-out transform ${
                language === "en" ? "bg-black text-white" : "bg-gray-200 text-black"
              } hover:bg-gray-800 hover:text-white hover:scale-105`}
              onClick={() => toggleLanguage("en")}
            >
              English
            </button>
            <button
              className={`px-6 py-4 rounded-lg font-semibold transition duration-300 ease-in-out transform ${
                language === "es" ? "bg-black text-white" : "bg-gray-200 text-black"
              } hover:bg-gray-800 hover:text-white hover:scale-105`}
              onClick={() => toggleLanguage("es")}
            >
              Español
            </button>
          </motion.div>
          
          <motion.div 
            className="flex gap-4 justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <Link
              href="https://drive.google.com/file/d/1X1c8pLfCOBMn3DRkX4DB6X1nhlN4yIaO/view?usp=sharing"
              className="px-6 py-4 w-32 rounded-lg bg-gradient-to-r from-blue-400 to-violet-400 text-white font-semibold transition duration-300 ease-in-out transform hover:from-blue-500 hover:to-violet-500 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </Link>
            <button
              className="px-6 py-4 w-32 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition duration-300 ease-in-out transform hover:from-purple-700 hover:to-blue-700 hover:scale-105"
              onClick={() => router.push('/contact')}
            >
              {content[language].hireMe}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;