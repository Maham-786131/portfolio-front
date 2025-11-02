import React from 'react'
import { motion } from 'framer-motion'
import about from '../assets/images/Contact Us.png';

export default function About(){
  return (
    <section id="about" className="mt-6">
      <motion.div className="grid md:grid-cols-2 gap-8 items-center" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
        <div className="relative">
          {/* <div className="absolute -left-6 -top-6 w-44 h-44 bg-gradient-to-br from-primary to-accent rounded-2xl blur-3xl opacity-30"></div> */}
          <div className="card overflow-hidden">
            <img src={about} alt="me" className="w-full object-cover h-96"/>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I turn ideas into interactive, beautiful websites. My process blends rapid prototyping with attention to accessibility and performance.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="glass p-3 rounded-lg">Responsive UI</li>
            <li className="glass p-3 rounded-lg">Design Systems</li>
            <li className="glass p-3 rounded-lg">Animations</li>
            <li className="glass p-3 rounded-lg">Performance</li>
          </ul>

          <div className="mt-6">
            <a href="#projects" className="px-4 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition">
              See Projects
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
