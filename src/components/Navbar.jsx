import React, { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import imglogo from '../assets/android-chrome-512x512.png'

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  // 🏠 Added "Home" at the top
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed w-full z-40 backdrop-blur-md ${
        theme === "dark"
          ? "bg-[#0b1120]/70 border-b border-gray-800"
          : "bg-white/70 border-b border-gray-200"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-bold shadow-md group-hover:scale-105 transition-transform duration-200">
            <img src={imglogo} alt="me" className=""/>
          </div>
          <div className="leading-tight">
            <div className="font-bold text-gray-900 dark:text-white">Maham</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 -mt-0.5">
              Front-End Developer
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              theme === "dark"
                ? "bg-[#0b1120]/90 border-t border-gray-800"
                : "bg-white/90 border-t border-gray-200"
            } backdrop-blur-md`}
          >
            <div className="px-5 py-4 flex flex-col gap-3 text-sm font-medium">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
