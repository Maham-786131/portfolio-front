import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { title:'Ace of Cuts', img:'/images/homepage-seen-computer-screen.jpg', tags:['React','UI'], live:'#', repo:'#' },
  { title:'Travel Hero', img:'/images/stock-market-investment-finance-concept.jpg', tags:['Landing','Tailwind'], live:'#', repo:'#' },
  { title:'Nature Gallery', img:'/images/man-taking-e-leraning-courses.jpg', tags:['Photography'], live:'#', repo:'#' },
]

export default function Projects(){
  return (
    <section id="projects" className="mt-6">
      <h2 className="text-2xl font-bold">Selected Projects</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {projects.map((p, i)=>(
          <motion.div key={i} whileHover={{scale:1.03}} className="card tilt relative overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted dark:text-gray-300">A polished demo showcasing UI and interactions.</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.tags.map((t, idx)=>(<span key={idx} className="text-xs px-2 py-1 rounded-full glass">{t}</span>))}
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
              <div className="w-full flex justify-between items-center">
                <div className="text-white font-medium">{p.title}</div>
                <div className="flex gap-2">
                  <a href={p.live} className="px-3 py-2 rounded-md bg-white/10 text-white text-sm">Live</a>
                  <a href={p.repo} className="px-3 py-2 rounded-md bg-white/10 text-white text-sm">Code</a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
