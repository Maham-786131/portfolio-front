import React, { useState } from 'react'
import { useTheme } from '../theme/ThemeProvider'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function Navbar(){
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <motion.header initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.45}} className="fixed w-full z-40">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white font-semibold">M</div>
          <div className="leading-tight">
            <div className="font-bold">Maham</div>
            <div className="text-xs text-muted -mt-0.5">Front-End • Creative</div>
          </div>
        </a>

        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button onClick={toggle} aria-label="toggle theme" className="p-2 rounded-md glass">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} className="p-2 rounded-md glass">{theme === 'dark' ? '🌙' : '☀️'}</button>
          <button onClick={()=>setOpen(o=>!o)} className="p-2 rounded-md glass">
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* mobile slide */}
      {open && (
        <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0}} className="md:hidden bg-white/60 dark:bg-[#071026]/60 border-t glass">
          <div className="px-5 py-4 flex flex-col gap-3">
            <a href="#about" onClick={()=>setOpen(false)}>About</a>
            <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
            <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
