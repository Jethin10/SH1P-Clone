import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

/* 8-point compass star SVG — MUCH larger to fill viewport */
function CompassStar({ size = 800, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle ring */}
      <motion.circle 
        cx="250" cy="250" r="230" 
        stroke="rgba(251,191,36,0.15)" strokeWidth="0.5" 
        className="transition-colors duration-700 group-hover:stroke-gold-500/50"
      />
      <motion.circle 
        cx="250" cy="250" r="210" 
        stroke="rgba(251,191,36,0.1)" strokeWidth="0.5" strokeDasharray="4 3" 
        className="transition-colors duration-700 group-hover:stroke-gold-400/40"
      />

      {/* Main 4-point star (N/S/E/W — primary, elongated) */}
      <polygon points="250,20 265,210 250,200 235,210" fill="url(#goldGrad)" opacity="0.9" className="transition-all duration-700 group-hover:opacity-100 group-hover:drop-shadow-[0_0_30px_rgba(255,184,0,0.8)]" />
      <polygon points="250,480 265,290 250,300 235,290" fill="url(#goldGrad)" opacity="0.9" className="transition-all duration-700 group-hover:opacity-100 group-hover:drop-shadow-[0_0_30px_rgba(255,184,0,0.8)]" />
      <polygon points="20,250 210,235 200,250 210,265" fill="url(#goldGrad)" opacity="0.9" className="transition-all duration-700 group-hover:opacity-100 group-hover:drop-shadow-[0_0_30px_rgba(255,184,0,0.8)]" />
      <polygon points="480,250 290,235 300,250 290,265" fill="url(#goldGrad)" opacity="0.9" className="transition-all duration-700 group-hover:opacity-100 group-hover:drop-shadow-[0_0_30px_rgba(255,184,0,0.8)]" />

      {/* Secondary 4-point star (NE/NW/SE/SW — shorter) */}
      <polygon points="100,100 230,230 220,240 240,220" fill="rgba(251,191,36,0.5)" opacity="0.6" className="transition-all duration-700 group-hover:fill-gold-400 group-hover:opacity-80" />
      <polygon points="400,100 270,230 280,220 260,240" fill="rgba(251,191,36,0.5)" opacity="0.6" className="transition-all duration-700 group-hover:fill-gold-400 group-hover:opacity-80" />
      <polygon points="100,400 230,270 220,260 240,280" fill="rgba(251,191,36,0.5)" opacity="0.6" className="transition-all duration-700 group-hover:fill-gold-400 group-hover:opacity-80" />
      <polygon points="400,400 270,270 260,280 280,260" fill="rgba(251,191,36,0.5)" opacity="0.6" className="transition-all duration-700 group-hover:fill-gold-400 group-hover:opacity-80" />

      {/* Thin lines from center outward — all 8 directions */}
      <line x1="250" y1="250" x2="250" y2="20" stroke="rgba(251,191,36,0.3)" strokeWidth="0.5" className="transition-colors duration-700 group-hover:stroke-gold-400/80" />
      <line x1="250" y1="250" x2="250" y2="480" stroke="rgba(251,191,36,0.3)" strokeWidth="0.5" className="transition-colors duration-700 group-hover:stroke-gold-400/80" />
      <line x1="250" y1="250" x2="20" y2="250" stroke="rgba(251,191,36,0.3)" strokeWidth="0.5" className="transition-colors duration-700 group-hover:stroke-gold-400/80" />
      <line x1="250" y1="250" x2="480" y2="250" stroke="rgba(251,191,36,0.3)" strokeWidth="0.5" className="transition-colors duration-700 group-hover:stroke-gold-400/80" />
      <line x1="250" y1="250" x2="100" y2="100" stroke="rgba(251,191,36,0.15)" strokeWidth="0.5" className="transition-colors duration-700 group-hover:stroke-gold-400/50" />
      <line x1="250" y1="250" x2="400" y2="100" stroke="rgba(251,191,36,0.15)" strokeWidth="0.5" className="transition-colors duration-700 group-hover:stroke-gold-400/50" />
      <line x1="250" y1="250" x2="100" y2="400" stroke="rgba(251,191,36,0.15)" strokeWidth="0.5" className="transition-colors duration-700 group-hover:stroke-gold-400/50" />
      <line x1="250" y1="250" x2="400" y2="400" stroke="rgba(251,191,36,0.15)" strokeWidth="0.5" className="transition-colors duration-700 group-hover:stroke-gold-400/50" />

      {/* Center circle */}
      <circle cx="250" cy="250" r="8" fill="#FBBF24" opacity="0.8" className="transition-all duration-700 group-hover:fill-white group-hover:scale-125 origin-center drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      <circle cx="250" cy="250" r="4" fill="#FFB800" className="transition-all duration-700 group-hover:fill-white" />

      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB800" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* Secondary compass rose — muted, slow-spinning, top-right */
function SecondaryCompass() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
      animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
      transition={{ duration: 2, ease: 'easeOut', delay: 0.8 }}
      className="absolute top-8 right-8 md:top-16 md:right-16 w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-spin-slow pointer-events-none"
    >
      <svg width="100%" height="100%" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="125" cy="125" r="120" stroke="rgba(251,191,36,0.2)" strokeWidth="0.5" />
        <circle cx="125" cy="125" r="100" stroke="rgba(251,191,36,0.15)" strokeWidth="0.5" strokeDasharray="3 2" />
        <circle cx="125" cy="125" r="80" stroke="rgba(251,191,36,0.1)" strokeWidth="0.5" />
        <circle cx="125" cy="125" r="40" stroke="rgba(251,191,36,0.15)" strokeWidth="0.5" strokeDasharray="2 2" />
        <polygon points="125,15 135,110 125,100 115,110" fill="rgba(251,191,36,0.3)" />
        <polygon points="125,235 135,140 125,150 115,140" fill="rgba(251,191,36,0.3)" />
        <polygon points="15,125 110,115 100,125 110,135" fill="rgba(251,191,36,0.3)" />
        <polygon points="235,125 140,115 150,125 140,135" fill="rgba(251,191,36,0.3)" />
        <circle cx="125" cy="125" r="3" fill="rgba(251,191,36,0.4)" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => {
          const rad = (deg * Math.PI) / 180
          const x1 = 125 + 115 * Math.cos(rad)
          const y1 = 125 + 115 * Math.sin(rad)
          const x2 = 125 + 120 * Math.cos(rad)
          const y2 = 125 + 120 * Math.sin(rad)
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(251,191,36,0.25)" strokeWidth="0.5" />
        })}
      </svg>
    </motion.div>
  )
}

/* Staggered entrance variants */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const compassLabelVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeOut', delay: 1.2 },
  },
}

export default function HeroSection() {
  const { scrollY } = useScroll()
  // Compass rotates significantly as you scroll down
  const rotateScroll = useTransform(scrollY, [0, 5000], [0, 360])
  const rotateSpring = useSpring(rotateScroll, { stiffness: 50, damping: 20 })

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center z-30 overflow-hidden">
      {/* Secondary compass rose */}
      <SecondaryCompass />

      {/* Center Group — Hover on text triggers massive glow on everything */}
      <div className="relative group w-full h-full flex items-center justify-center z-10 cursor-default">
        
        {/* Main compass star — FILLS ~90% viewport, SPINS slowly *and* rotates on scroll */}
        <motion.div
          className="absolute flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ rotate: rotateSpring }}
        >
          <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 blur-[80px] rounded-full mix-blend-screen transition-all duration-1000"></div>
          <div className="animate-spin-star">
            <CompassStar size={Math.min(900, typeof window !== 'undefined' ? window.innerHeight * 0.92 : 900)} />
          </div>
        </motion.div>

        {/* Compass direction labels */}
        <motion.div variants={compassLabelVariants} initial="hidden" animate="show" className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[6%] left-1/2 -translate-x-1/2 font-serif text-sm text-gold-400 tracking-wider transition-colors duration-700 group-hover:text-gold-300 group-hover:drop-shadow-[0_0_10px_rgba(255,184,0,0.8)]">N</span>
          <span className="absolute bottom-[6%] left-1/2 -translate-x-1/2 font-serif text-sm text-gold-400 tracking-wider transition-colors duration-700 group-hover:text-gold-300 group-hover:drop-shadow-[0_0_10px_rgba(255,184,0,0.8)]">S</span>
          <span className="absolute left-[8%] top-1/2 -translate-y-1/2 font-serif text-sm text-gold-400 tracking-wider transition-colors duration-700 group-hover:text-gold-300 group-hover:drop-shadow-[0_0_10px_rgba(255,184,0,0.8)]">W</span>
          <span className="absolute right-[8%] top-1/2 -translate-y-1/2 font-serif text-sm text-gold-400 tracking-wider transition-colors duration-700 group-hover:text-gold-300 group-hover:drop-shadow-[0_0_10px_rgba(255,184,0,0.8)]">E</span>
          <span className="absolute top-[16%] left-[16%] font-serif text-xs text-gold-400/30 tracking-wider">NW</span>
          <span className="absolute top-[16%] right-[16%] font-serif text-xs text-gold-400/30 tracking-wider">NE</span>
          <span className="absolute bottom-[16%] left-[16%] font-serif text-xs text-gold-400/30 tracking-wider">SW</span>
          <span className="absolute bottom-[16%] right-[16%] font-serif text-xs text-gold-400/30 tracking-wider">SE</span>
        </motion.div>

        {/* Central text — "Ship" + "COHORT 1" */}
        <motion.div
          className="relative z-10 text-center pointer-events-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="font-serif text-[10rem] md:text-[14rem] leading-[0.85] tracking-normal transition-all duration-700"
            style={{ 
              color: 'white',
              textShadow: '0 0 80px rgba(255,184,0,0.3)' 
            }}
          >
            <span className="group-hover:drop-shadow-[0_0_80px_rgba(255,255,255,1)] group-hover:text-white transition-all duration-700">
              Ship
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="font-serif italic text-[2rem] md:text-[2.5rem] tracking-wide mt-4 transition-all duration-700 text-white/50 group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          >
            COHORT 1
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom-left tagline */}
      <motion.div
        className="absolute bottom-8 left-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
      >
        <p className="font-sans text-[10px] font-medium uppercase tracking-[1px] text-secondary leading-relaxed group-hover:text-white transition-colors duration-700">
          A FIVE-WEEK COHORT FOR FOUNDERS<br />
          WHO BELIEVE IN EXECUTION OVER OPTICS.
        </p>
      </motion.div>

      {/* Bottom-right tagline + info toggle */}
      <motion.div
        className="absolute bottom-8 right-8 flex items-center gap-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.7 }}
      >
        <div className="text-right">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[1px] text-secondary group-hover:text-white transition-colors duration-700">
            HIGH SIGNAL
          </p>
          <p className="font-sans text-[10px] font-medium uppercase tracking-[1px] text-secondary group-hover:text-white transition-colors duration-700">
            LOW NOISE
          </p>
        </div>
        <button className="w-6 h-6 rounded-full border border-white/30 text-white/70 text-xs flex items-center justify-center hover:border-white/60 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          ?
        </button>
      </motion.div>
    </section>
  )
}
