"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Homepage = () => {
  const [language, setLanguage] = useState("en");
  
  const cvUrl = "https://drive.google.com/file/d/1qOU4ix2YfZfVrUqA_3LITF8FaUkPzO7Q/view?usp=sharing";
  
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
    },
    es: {
      title: "Hola, Soy Sebastián",
      description:
        "Soy una persona motivada y versátil, siempre dispuesta a asumir nuevos desafíos. Con pasión por aprender, me dedico a entregar resultados de alta calidad. Con una actitud positiva y una mentalidad de crecimiento, estoy lista para hacer una contribución significativa y lograr grandes cosas.",
    },
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <motion.div
      className="h-full flex items-center justify-center" // Centrar el contenido
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-2xl mx-auto"> {/* Limitar el ancho y centrar */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4"> {/* Añadir margen inferior */}
          {content[language].title}
        </h1>
        <p className="md:text-xl">{content[language].description}</p>
        {/* BOTONES */}
        <div className="w-full flex gap-4 justify-center mt-4"> {/* Añadir margen superior */}
          <button
            className={`p-4 rounded-lg font-semibold transition duration-300 ease-in-out transform ${language === "en" ? "bg-black text-white" : "bg-gray-200 text-black"} hover:bg-gray-800 hover:text-white`}
            onClick={() => toggleLanguage("en")}
          >
            English
          </button>
          <button
            className={`p-4 rounded-lg font-semibold transition duration-300 ease-in-out transform ${language === "es" ? "bg-black text-white" : "bg-gray-200 text-black"} hover:bg-gray-800 hover:text-white`}
            onClick={() => toggleLanguage("es")}
          >
            Español
          </button>
        </div>
        {/* BOTÓN CV */}
        <button
          className="mt-4 p-4 rounded-lg bg-gradient-to-r from-gray-800 to-black text-white font-semibold transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105"
          onClick={downloadCV}
        >
          CV
        </button>
      </div>
    </motion.div>
  );
};

export default Homepage;