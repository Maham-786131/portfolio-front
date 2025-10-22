import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-bgLight dark:bg-[#05060a] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 py-12 space-y-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
