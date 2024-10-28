"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';

const PortfolioPage = () => {
  const [language, setLanguage] = useState("en");
  const router = useRouter();
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const content = {
    en: {
      title: "My Works",
      hireSection: {
        title: "Do you have a project?",
        circleText: "Fullstack Developer and Data Engineer",
        button: "Hire Me"
      },
      items: [
        {
          id: 1,
          color: "from-red-300 to-blue-300",
          title: "React App Poll Master",
          desc: "Web application for creating and managing interactive surveys, featuring real-time result tracking and comprehensive analytics. Built with modern technologies including React for dynamic interfaces, TypeScript for type safety, Redux Toolkit for state management, and Tailwind CSS for responsive design.",
          img: "https://i.imgur.com/Q3Ow28X.png",
          link: "https://pollmaster-aab4f.web.app/",
          button: "See Demo"
        },
        {
          id: 2,
          color: "from-blue-300 to-violet-300",
          title: "Data Analysis Dashboard",
          desc: "CSV and XLSX data analysis application designed for efficient data processing and visualization. Built with React for interactive components and TypeScript for enhanced code reliability, utilizing Vite as a modern build tool for optimal performance.",
          img: "https://i.imgur.com/VdL0kmX.png",
          link: "https://analysisdashboard-data.web.app",
          button: "See Demo"
        },
        {
          id: 3,
          color: "from-violet-300 to-purple-300",
          title: "Mario Romero Website",
          desc: "Freelance project for Mario Romero Website, built with PHP, cpanel, and MySQL for a dynamic and responsive user experience.",
          img: "https://i.imgur.com/Y25AKQq.png",
          link: "https://marioromero.com.co/",
          button: "See Demo"
        },
        {
          id: 4,
          color: "from-purple-300 to-red-300",
          title: "DataCamp Projects and Career",
          desc: "Experienced in data engineering through DataCamp's comprehensive program, with expertise in SQL, Python, and cloud computing. Completed the Associate Data Engineer track, mastering database design, data warehousing, and ETL processes.",
          img: "https://i.imgur.com/NQeODxU.png",
          link: "https://www.datacamp.com/portfolio/juansebastianquinterofernandez",
          button: "See Demo"
        },
      ]
    },
    es: {
      title: "Mis Trabajos",
      hireSection: {
        title: "¿Tienes un proyecto?",
        circleText: "Fullstack Developer and Data Engineer",
        button: "Contrátame"
      },
      items: [
        {
          id: 1,
          color: "from-red-300 to-blue-300",
          title: "React App Poll Master",
          desc: "Aplicación web para crear y gestionar encuestas interactivas, con seguimiento de resultados en tiempo real y análisis completo. Construida con tecnologías modernas incluyendo React para interfaces dinámicas, TypeScript para seguridad de tipos, Redux Toolkit para gestión de estado y Tailwind CSS para diseño responsivo.",
          img: "https://i.imgur.com/Q3Ow28X.png",
          link: "https://pollmaster-aab4f.web.app/",
          button: "Ver Demo"
        },
        {
          id: 2,
          color: "from-blue-300 to-violet-300",
          title: "Panel de Análisis de Datos",
          desc: "Aplicación de análisis de datos CSV y XLSX diseñada para procesamiento y visualización eficiente de datos. Construida con React para componentes interactivos y TypeScript para mayor fiabilidad del código, utilizando Vite como herramienta de construcción moderna para un rendimiento óptimo.",
          img: "https://i.imgur.com/VdL0kmX.png",
          link: "https://analysisdashboard-data.web.app",
          button: "Ver Demo"
        },
        {
          id: 3,
          color: "from-violet-300 to-purple-300",
          title: "Sitio Web Mario Romero",
          desc: "Proyecto freelance para el sitio web de Mario Romero, construido con PHP, cpanel y MySQL para una experiencia de usuario dinámica y responsiva.",
          img: "https://i.imgur.com/Y25AKQq.png",
          link: "https://marioromero.com.co/",
          button: "Ver Demo"
        },
        {
          id: 4,
          color: "from-purple-300 to-red-300",
          title: "Proyectos y Carrera DataCamp",
          desc: "Experiencia en ingeniería de datos a través del programa integral de DataCamp, con experiencia en SQL, Python y computación en la nube. Completé la certificación de Ingeniero de Datos Asociado, dominando diseño de bases de datos, almacenamiento de datos y procesos ETL.",
          img: "https://i.imgur.com/NQeODxU.png",
          link: "https://www.datacamp.com/portfolio/juansebastianquinterofernandez",
          button: "Ver Demo"
        },
      ]
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

      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          {content[language].title}
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {content[language].items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end" target="_blank" rel="noopener noreferrer">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      {item.button}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">{content[language].hireSection.title}</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                {content[language].hireSection.circleText}
              </textPath>
            </text>
          </motion.svg>
          <button
            onClick={() => router.push('/contact')}
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            {content[language].hireSection.button}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;