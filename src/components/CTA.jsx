import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-[#0b1120] text-center transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Do you have a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Project Idea?
          </span>
          <br />
          Let’s discuss your project!
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new projects and creative ideas. Let’s
          connect and build something amazing together.
        </p>

        {/* Button */}
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/30 dark:shadow-purple-700/30"
          >
            Let’s work Together <FaArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
