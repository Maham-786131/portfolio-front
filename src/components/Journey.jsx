import React from "react";
import { motion } from "framer-motion";
import { FaSeedling, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function Journey() {
  const milestones = [
    {
      icon: <FaSeedling className="text-green-500" />,
      year: "2024",
      title: "The Beginning",
      description:
        "Started exploring the world of web development — learning HTML, CSS, and understanding how design turns into code.",
    },
    {
      icon: <FaCode className="text-blue-500" />,
      year: "2025",
      title: "Building Foundations",
      description:
        "Dived into JavaScript and React to bring ideas to life through interactive projects. Learned to think like a developer — solving problems with logic and creativity.",
    },
    {
      icon: <FaLaptopCode className="text-indigo-500" />,
      year: "Present",
      title: "Growing with Purpose",
      description:
        "Continuing to refine my skills, explore new technologies, and focus on creating clean, responsive, and meaningful user experiences.",
    },
    {
      icon: <FaRocket className="text-purple-500" />,
      year: "Future",
      title: "Aiming Higher",
      description:
        "My goal is to become a well-rounded front-end developer — contributing to impactful projects and building tools that help people.",
    },
  ];

  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-[#111827]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          My Developer Journey 🚀
        </motion.h2>

        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-6">
          {milestones.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-10 ml-6"
            >
              <div className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
                {step.icon}
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
                <span className="text-sm text-blue-500 font-medium">{step.year}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 text-center text-gray-600 dark:text-gray-400 italic"
        >
          “Every developer starts small — what matters is the passion to keep growing.”
        </motion.p>
      </div>
    </section>
  );
}
