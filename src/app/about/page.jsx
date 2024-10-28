"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const AboutPage = () => {
  const [language, setLanguage] = useState("en");
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const content = {
    en: {
      biography: {
        title: "Biography",
        description: "Juan Sebastian Quintero Fernandez is a Colombian Computer Science Engineer who graduated in 2023 with a distinguished GPA of 4.11/5.0. Throughout his professional career, he has developed innovative web solutions, including an interactive survey platform and a sophisticated data analysis system. His experience includes notable freelance projects, such as developing a political campaign website, and he holds an Associate Data Engineer certification from DataCamp. Fluent in Spanish and English, with basic Portuguese skills, he focuses on creating intuitive technological solutions that prioritize user experience.",
        quote: "A masterful brush paints digital canvases with codes that breathe life."
      },
      skills: {
        title: "SKILLS AS FULL STACK DEVELOPER AND DATA ENGINEER"
      },
      experience: {
        title: "EXPERIENCE",
        jobs: [
          {
            title: "Freelancer Data Engineer",
            description: "I provided data engineering solutions, including data analysis and visualization, using React, Python and Snowflake.",
            date: "2024"
          },
          {
            title: "Project Manager and Developer",
            description: "Mario Romero's political campaign, candidate for mayor of Villavicencio 2024, resulting in over 15,000 votes.",
            date: "2023 - 2024",
            company: "Marioromero.com.co"
          },
          {
            title: "Freelancer designer and developer",
            description: "I provided web solutions, applying a range of technologies to address client requirements using React and Figma.",
            date: "2020 - 2023"
          }
        ]
      }
    },
    es: {
      biography: {
        title: "Biografía",
        description: "Juan Sebastian Quintero Fernandez es un Ingeniero en Ciencias de la Computación colombiano que se graduó en 2023 con un destacado promedio de 4.11/5.0. A lo largo de su carrera profesional, ha desarrollado soluciones web innovadoras, incluyendo una plataforma interactiva de encuestas y un sofisticado sistema de análisis de datos. Su experiencia incluye proyectos freelance notables, como el desarrollo de un sitio web para campaña política, y posee una certificación de Ingeniero de Datos Asociado de DataCamp. Con fluidez en español e inglés, y conocimientos básicos de portugués, se enfoca en crear soluciones tecnológicas intuitivas que priorizan la experiencia del usuario.",
        quote: "Un pincel maestro pinta lienzos digitales con códigos que cobran vida."
      },
      skills: {
        title: "HABILIDADES COMO DESARROLLADOR FULL STACK E INGENIERO DE DATOS"
      },
      experience: {
        title: "EXPERIENCIA",
        jobs: [
          {
            title: "Ingeniero de Datos Freelance",
            description: "Proporcioné soluciones de ingeniería de datos, incluyendo análisis y visualización de datos, utilizando React, Python y Snowflake.",
            date: "2024"
          },
          {
            title: "Gerente de Proyecto y Desarrollador",
            description: "Campaña política de Mario Romero, candidato a la alcaldía de Villavicencio 2024, logrando más de 15,000 votos.",
            date: "2023 - 2024",
            company: "Marioromero.com.co"
          },
          {
            title: "Diseñador y desarrollador freelance",
            description: "Proporcioné soluciones web, aplicando una variedad de tecnologías para abordar los requisitos del cliente usando React y Figma.",
            date: "2020 - 2023"
          }
        ]
      }
    }
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* LANGUAGE BUTTONS */}
      <div className="fixed top-4 right-4 z-50 flex gap-4">
        <button
          className={`p-2 rounded-lg font-semibold transition duration-300 ease-in-out transform ${
            language === "en" ? "bg-black text-white" : "bg-gray-200 text-black"
          } hover:bg-gray-800 hover:text-white`}
          onClick={() => toggleLanguage("en")}
        >
          English
        </button>
        <button
          className={`p-2 rounded-lg font-semibold transition duration-300 ease-in-out transform ${
            language === "es" ? "bg-black text-white" : "bg-gray-200 text-black"
          } hover:bg-gray-800 hover:text-white`}
          onClick={() => toggleLanguage("es")}
        >
          Español
        </button>
      </div>

      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2 mx-auto">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="https://i.imgur.com/OpEkoZC.jpeg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">{content[language].biography.title}</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">{content[language].biography.description}</p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">{content[language].biography.quote}</span>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              {content[language].skills.title}
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {/* Skills remain the same as they are technology names */}
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Cloud Computing
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SnowSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Adobe
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Azure
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Github
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Snowflake
              </div>
              {/* ... (rest of the skills) ... */}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              {content[language].experience.title}
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {content[language].experience.jobs.map((job, index) => (
                <div key={index} className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className={`w-1/3 ${index % 2 === 0 ? "" : "invisible"}`}>
                    {index % 2 === 0 && (
                      <>
                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                          {job.title}
                        </div>
                        <div className="p-3 text-sm italic">{job.description}</div>
                        <div className="p-3 text-red-400 text-sm font-semibold">{job.date}</div>
                        {job.company && (
                          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                            {job.company}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center">
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className={`w-1/3 ${index % 2 === 1 ? "" : "invisible"}`}>
                    {index % 2 === 1 && (
                      <>
                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                          {job.title}
                        </div>
                        <div className="p-3 text-sm italic">{job.description}</div>
                        <div className="p-3 text-red-400 text-sm font-semibold">{job.date}</div>
                        {job.company && (
                          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                            {job.company}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;