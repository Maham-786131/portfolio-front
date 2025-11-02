import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import { fadeInUp, staggerContainer } from "../animations/motionVariants";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-bold mb-12"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
              >
                <Icon size={48} color={skill.color} className="mb-3" />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
