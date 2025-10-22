import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-12 py-6 text-center text-sm text-muted">
      © {new Date().getFullYear()} Maham — Crafted with care • Built with React + Tailwind
    </footer>
  )
}
