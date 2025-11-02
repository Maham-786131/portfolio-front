import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Crafted with care • Built with React + Tailwind";
  const currentYear = new Date().getFullYear();

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // typing speed
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <footer className="py-10 bg-gray-100 dark:bg-[#0b1120] border-t border-gray-200 dark:border-gray-800 text-center transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-5">
          <a
            href="https://github.com/Maham-786131"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/maham-javed-95a055325"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mahamjaved994@example.com"
            className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition text-xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Animated Text */}
         <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} <span className="font-semibold text-gray-800 dark:text-gray-200">Maham</span> — Crafted with care • Built with{" "}
          <span className="text-blue-500 dark:text-blue-400 font-medium">React</span> +{" "}
          <span className="text-cyan-500 dark:text-cyan-400 font-medium">Tailwind CSS</span>
        </p>
      </motion.div>
    </footer>
  );
}
