import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function useTypewriter(words, speed = 110, pause = 1000){
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)
  useEffect(()=>{
    if (subIndex === words[index].length + 1 && !reverse){
      setTimeout(()=> setReverse(true), pause)
      return
    }
    if (subIndex === 0 && reverse){
      setReverse(false)
      setIndex(i => (i+1) % words.length)
      return
    }
    const timeout = setTimeout(()=> {
      setSubIndex(s => s + (reverse ? -1 : 1))
    }, speed)
    return ()=> clearTimeout(timeout)
  }, [subIndex, index, reverse, words, speed, pause])
  useEffect(()=>{ const blinkInt = setInterval(()=> setBlink(b => !b), 500); return ()=> clearInterval(blinkInt) },[])
  return { index, subIndex, blink }
}

export default function Hero(){
  const words = ["Front-End Developer","UI Designer","Creative Studio"]
  const { index, subIndex, blink } = useTypewriter(words)

  return (
    <section id="home" className="relative pt-24">
      <div className="blob left-0 top-8 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-primary to-accent -translate-x-16 -z-10" />
      <div className="blob right-0 bottom-6 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-accent to-primary -translate-x-10 -z-10 opacity-60" />

      <motion.div
        initial={{opacity:0, y:10}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.6}}
        className="glass p-8 md:p-12 rounded-3xl"
      >
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="text-sm uppercase text-muted tracking-wider mb-2">Hello — I’m</div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Maham <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Design + Code</span>
            </h1>

            <div className="mt-4 text-lg text-muted max-w-lg">
              <span className="typewriter">{words[index].slice(0, subIndex)}</span>
              <span className="caret" style={{opacity: blink ? 1 : 0}}/>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                I craft vibrant, high-performance UI that blends aesthetics and engineering — focusing on micro-interactions and delightful details.
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-gradient-to-br from-primary to-accent text-white shadow-lg transform transition hover:-translate-y-1">
                View Work
              </a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-primary text-primary dark:text-primary hover:bg-primary hover:text-white transition">
                Hire Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="card tilt p-3">
              <img src="/images/homepage-seen-computer-screen.jpg" alt="project" className="w-full h-64 object-cover rounded-xl"/>
            </div>
            <div className="mt-3 flex gap-3">
              <div className="p-3 glass rounded-xl text-sm">React • Tailwind • Framer</div>
              <div className="p-3 glass rounded-xl text-sm">UX • Animations</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
