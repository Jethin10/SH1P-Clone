import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'MANIFESTO', href: '#manifesto' },
  { label: 'PROGRAM', href: '#program' },
  { label: 'MENTORS', href: '#mentors' },
  { label: 'APPLY', href: '#apply' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-300 ${
        scrolled
          ? 'bg-deep-900/80 backdrop-blur-[12px]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-8">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            className="font-sans text-[11px] font-medium uppercase tracking-[0.55px] text-white hover:text-gold-400 transition-colors duration-300"
          >
            {link.label}
          </motion.a>
        ))}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="font-sans text-[11px] font-medium uppercase tracking-[0.55px] text-white"
      >
        S1 — 2026
      </motion.span>
    </motion.nav>
  )
}
