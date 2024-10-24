"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Homepage = () => {
  const [language, setLanguage] = useState("en");
  const switchToSpanish = () => {
    setLanguage("es");
  };

  const switchToEnglish = () => {
    setLanguage("en");
  };
  const cvUrl = "https://drive.google.com/file/d/1qOU4ix2YfZfVrUqA_3LITF8FaUkPzO7Q/view?usp=sharing";
  const englishButtonClass = language === "en" ? "bg-black text-white" : "bg-transparent text-black";
  const spanishButtonClass = language === "es" ? "bg-black text-white" : "bg-transparent text-black";

  const downloadCV = () => {
    window.open(cvUrl, "_blank");
  };
  const cvButtonStyle = {
    backgroundColor: "black",
    
    color: "white",
    borderRadius: "1rem",
    marginRight: "0.5rem"
  };


  const content = {
    en: {
      title: "Crafting Digital Experiences, Designing Tomorrow.",
      description:
        "Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
    },
    es: {
      title: "Creando experiencias digitales, diseñando el mañana.",
      description:
        "Bienvenido a mi Portafolio, donde la innovación y la creatividad convergen. Con un ojo agudo para la estética y un dominio del código, mi portafolio muestra una colección diversa de proyectos que reflejan mi compromiso con la excelencia.",
      viewWork: "Ver mi trabajo",
      contactMe: "Contáctame",
    },
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* CONTENEDOR DE TEXTO */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TÍTULO */}
          <h1 className="text-4xl md:text-6xl font-bold">
            {content[language].title}
          </h1>
          {/* DESCRIPCIÓN */}
          <p className="md:text-xl">{content[language].description}</p>
          {/* BOTONES */}
          <div className="w-full flex gap-4">
            <div style={{ marginRight: "0.5rem" }}>
              <button
                className={`p-4 rounded-lg ring-1 ring-black ${englishButtonClass}`}
                onClick={switchToEnglish}
              >
                English
              </button>
            </div>
            <div style={{ marginRight: "0.5rem" }}>
              <button
                className={`p-4 rounded-lg ring-1 ring-black ${spanishButtonClass}`}
                onClick={switchToSpanish}
              >
                Español
              </button>
            </div>
            <div style={{ marginRight: "0.5rem" }}>
              <button
                className="p-4 rounded-lg ring-1 ring-black"
                style={cvButtonStyle}
                onClick={downloadCV}
              >
                CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
