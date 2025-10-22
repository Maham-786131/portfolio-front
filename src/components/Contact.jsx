import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact(){
  const [loading, setLoading] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(()=> setLoading(false), 800)
    // integrate EmailJS / backend here
  }

  return (
    <section id="contact" className="mt-6">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <motion.form onSubmit={submit} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} className="glass p-6 rounded-2xl">
          <div className="grid gap-3">
            <input name="name" required placeholder="Your name" className="p-3 border rounded-md bg-transparent"/>
            <input name="email" type="email" required placeholder="Email" className="p-3 border rounded-md bg-transparent"/>
            <textarea name="message" required placeholder="Message" rows={6} className="p-3 border rounded-md bg-transparent"></textarea>
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-3 rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </div>
        </motion.form>

        <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} className="p-6">
          <div className="glass p-4 rounded-xl">
            <h3 className="font-semibold">Let’s build something ✨</h3>
            <p className="mt-2 text-sm text-muted">Prefer email? <a className="text-primary" href="mailto:you@example.com">you@example.com</a></p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="p-3 rounded-md glass"><FaGithub/></a>
              <a href="#" className="p-3 rounded-md glass"><FaLinkedin/></a>
              <a href="mailto:you@example.com" className="p-3 rounded-md glass"><FaEnvelope/></a>
            </div>
          </div>
          <div className="mt-6 text-sm text-muted">Note: I can integrate EmailJS or Netlify forms — tell me if you want that wired up now.</div>
        </motion.div>
      </div>
    </section>
  )
}
