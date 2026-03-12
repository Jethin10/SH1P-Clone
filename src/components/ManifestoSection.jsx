import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

/* Svg definition components extracting original paths from chunks */

const iconDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.1, type: "spring", duration: 2.5, bounce: 0 },
      opacity: { delay: i * 0.1, duration: 0.5 }
    }
  })
}

const ringSpin = {
  hidden: { rotate: 0, opacity: 0 },
  visible: {
    rotate: 360,
    opacity: 0.3,
    transition: {
      rotate: { duration: 60, repeat: Infinity, ease: "linear" },
      opacity: { duration: 1 }
    }
  }
}

// 01. Ship Icon
function SailboatIcon({ className = '' }) {
  const id = "icon-ship"
  return (
    <svg viewBox="0 0 120 120" className={`w-32 h-32 md:w-64 md:h-64 ${className}`} fill="none">
      <defs>
        <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id={`${id}-gold-stroke`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id={`${id}-gold-fill`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(251,191,36,0.2)" />
          <stop offset="100%" stopColor="rgba(217,119,6,0.05)" />
        </linearGradient>
      </defs>
      
      <motion.g variants={ringSpin} initial="hidden" whileInView="visible" style={{ originX: "60px", originY: "60px" }}>
        <circle cx="60" cy="60" r="50" stroke={`url(#${id}-gold-stroke)`} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
        <circle cx="60" cy="60" r="40" stroke={`url(#${id}-gold-stroke)`} strokeWidth="0.2" />
      </motion.g>

      <g style={{ filter: `url(#${id}-glow)` }}>
        <motion.path variants={iconDraw} initial="hidden" whileInView="visible" custom={1} d="M25 75 Q 60 95 95 75 L 95 65 L 25 65 Z" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={`url(#${id}-gold-fill)`} />
        <motion.path variants={iconDraw} initial="hidden" whileInView="visible" custom={2} d="M60 15 L 90 60 L 60 60 Z" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={`url(#${id}-gold-fill)`} />
        <motion.path variants={iconDraw} initial="hidden" whileInView="visible" custom={3} d="M55 25 L 30 60 L 55 60 Z" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={`url(#${id}-gold-fill)`} />
        <motion.path variants={iconDraw} initial="hidden" whileInView="visible" custom={4} d="M60 60 L 60 12" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" strokeLinecap="round" />
        <motion.path variants={iconDraw} custom={5} d="M15 85 Q 30 90 45 85 T 75 85 T 105 85" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1" strokeOpacity="0.5" />
        <motion.path variants={iconDraw} custom={6} d="M25 92 Q 40 97 55 92 T 85 92" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1" strokeOpacity="0.3" />
      </g>
    </svg>
  )
}

// 02. Locomotive Icon
function LocomotiveIcon({ className = '' }) {
  const id = "icon-train"
  return (
    <svg viewBox="0 0 120 120" className={`w-32 h-32 md:w-64 md:h-64 ${className}`} fill="none">
      <defs>
        <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id={`${id}-gold-stroke`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id={`${id}-gold-fill`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(251,191,36,0.2)" />
          <stop offset="100%" stopColor="rgba(217,119,6,0.05)" />
        </linearGradient>
      </defs>

      <motion.g initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 0.2 }} transition={{ duration: 1 }}>
        <line x1="10" y1="20" x2="110" y2="20" stroke={`url(#${id}-gold-stroke)`} strokeWidth="0.5" />
        <line x1="0" y1="100" x2="120" y2="100" stroke={`url(#${id}-gold-stroke)`} strokeWidth="0.5" />
      </motion.g>

      <g style={{ filter: `url(#${id}-glow)` }}>
        <motion.path variants={iconDraw} initial="hidden" whileInView="visible" custom={1} d="M20 80 L 100 80 L 100 45 Q 100 35 90 35 L 40 35 Q 20 35 20 60 Z" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={`url(#${id}-gold-fill)`} />
        <motion.rect variants={iconDraw} initial="hidden" whileInView="visible" custom={2} x="75" y="42" width="20" height="15" rx="2" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1.5" fill="none" />
        <motion.path variants={iconDraw} custom={3} d="M25 55 L 95 55" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1" opacity="0.6" />
        <motion.g variants={iconDraw} custom={4}>
          <circle cx="35" cy="80" r="12" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" />
          <circle cx="35" cy="80" r="4" fill={`url(#${id}-gold-stroke)`} />
        </motion.g>
        <motion.g variants={iconDraw} custom={5}>
          <circle cx="65" cy="80" r="12" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" />
          <circle cx="65" cy="80" r="4" fill={`url(#${id}-gold-stroke)`} />
        </motion.g>
        <motion.g variants={iconDraw} custom={6}>
          <circle cx="95" cy="80" r="12" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" />
          <circle cx="95" cy="80" r="4" fill={`url(#${id}-gold-stroke)`} />
        </motion.g>
        <motion.path variants={iconDraw} custom={7} d="M20 60 L 10 80" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" />
        <motion.path variants={iconDraw} custom={8} d="M20 70 L 12 80" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1" />
      </g>
    </svg>
  )
}

// 03. Compass Icon
function CompassStarIcon({ className = '' }) {
  const id = "icon-compass"
  return (
    <svg viewBox="0 0 120 120" className={`w-32 h-32 md:w-64 md:h-64 ${className}`} fill="none">
      <defs>
        <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id={`${id}-gold-stroke`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id={`${id}-gold-fill`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(251,191,36,0.2)" />
          <stop offset="100%" stopColor="rgba(217,119,6,0.05)" />
        </linearGradient>
      </defs>

      <motion.g variants={ringSpin} initial="hidden" whileInView="visible" style={{ originX: "60px", originY: "60px" }}>
        <circle cx="60" cy="60" r="50" stroke={`url(#${id}-gold-stroke)`} strokeWidth="0.8" strokeDasharray="2 6" />
        <path d="M60 5 L 60 15 M 60 105 L 60 115 M 5 60 L 15 60 M 105 60 L 115 60" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1.5" />
      </motion.g>

      <g style={{ filter: `url(#${id}-glow)` }}>
        <motion.circle variants={iconDraw} initial="hidden" whileInView="visible" custom={1} cx="60" cy="60" r="35" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1.5" />
        <motion.path variants={iconDraw} initial="hidden" whileInView="visible" custom={2} d="M60 25 L 70 50 L 95 60 L 70 70 L 60 95 L 50 70 L 25 60 L 50 50 Z" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" strokeLinejoin="round" fill={`url(#${id}-gold-fill)`} />
        <motion.circle variants={iconDraw} custom={3} cx="60" cy="60" r="3" fill="#FFFBEB" />
        <motion.path variants={iconDraw} custom={4} d="M60 25 L 60 20" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" />
        <motion.path variants={iconDraw} custom={5} d="M95 60 L 100 60" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" />
        <motion.path variants={iconDraw} custom={6} d="M60 95 L 60 100" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" />
        <motion.path variants={iconDraw} custom={7} d="M25 60 L 20 60" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" />
      </g>
    </svg>
  )
}

// 04. Balloon Icon
function BalloonIcon({ className = '' }) {
  const id = "icon-balloon"
  const waveAnim = {
    visible: { opacity: [0.3, 0.6, 0.3], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
  }
  return (
    <svg viewBox="0 0 120 120" className={`w-32 h-32 md:w-64 md:h-64 ${className}`} fill="none">
       <defs>
        <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id={`${id}-gold-stroke`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id={`${id}-gold-fill`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(251,191,36,0.2)" />
          <stop offset="100%" stopColor="rgba(217,119,6,0.05)" />
        </linearGradient>
      </defs>

      <motion.path variants={waveAnim} initial="hidden" whileInView="visible" d="M10 80 Q 25 70 40 80 T 70 80 T 100 80" stroke={`url(#${id}-gold-stroke)`} strokeWidth="0.5" fill="none" opacity="0.3" />
      
      <g style={{ filter: `url(#${id}-glow)` }}>
        <motion.path variants={iconDraw} initial="hidden" whileInView="visible" custom={1} d="M30 45 Q 60 -10 90 45 Q 90 75 70 90 L 50 90 Q 30 75 30 45 Z" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={`url(#${id}-gold-fill)`} />
        <motion.path variants={iconDraw} custom={2} d="M60 5 L 60 90" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1.5" opacity="0.7" />
        <motion.path variants={iconDraw} custom={3} d="M30 45 Q 45 45 60 45 Q 75 45 90 45" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        <motion.path variants={iconDraw} custom={4} d="M50 90 L 45 105" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1.5" />
        <motion.path variants={iconDraw} custom={5} d="M70 90 L 75 105" stroke={`url(#${id}-gold-stroke)`} strokeWidth="1.5" />
        <motion.rect variants={iconDraw} initial="hidden" whileInView="visible" custom={6} x="45" y="105" width="30" height="10" rx="2" stroke={`url(#${id}-gold-stroke)`} strokeWidth="2" fill={`url(#${id}-gold-fill)`} />
      </g>
    </svg>
  )
}

const manifesto = [
  {
    id: '01',
    heading: 'Execution compounds. Optics don’t.',
    body: 'We ignore vanity metrics. We focus on shipping code, content, and product. If it doesn’t move the needle, we don’t do it.',
    Icon: SailboatIcon,
    isLeft: true,
  },
  {
    id: '02',
    heading: 'Distribution is a skill, not a budget line.',
    body: 'Paid ads are for scaling. Organic traction is for validation. We build channels that belong to us, not platforms that rent to us.',
    Icon: LocomotiveIcon,
    isLeft: false,
  },
  {
    id: '03',
    heading: 'Ship in public. Learn in public.',
    body: 'Secrecy protects bad ideas. Feedback refines good ones. We document the journey to build momentum before the launch.',
    Icon: CompassStarIcon,
    isLeft: true,
  },
  {
    id: '04',
    heading: 'Honest feedback over polite applause.',
    body: 'We don’t do ‘great job’ unless it is actually a great job. Radical candor saves time and builds better products.',
    Icon: BalloonIcon,
    isLeft: false,
  },
]

// Animated introductory text block
const IntroText = ({ text }) => (
  <motion.div className="relative w-full cursor-default group" whileHover="hover" initial="rest">
    <motion.h2 
      className="font-serif italic text-[14vw] leading-[0.8] tracking-tighter w-full absolute top-0 left-0 select-none z-0" 
      style={{ WebkitTextStroke: "10px rgba(255,255,255,0.1)", color: "transparent" }}
      variants={{
        rest: { WebkitTextStrokeColor: "rgba(255,255,255,0.1)", opacity: 0.5 },
        hover: { WebkitTextStrokeColor: "rgba(255, 184, 0, 0.2)", opacity: 0.8 }
      }}
    >
      {text}
    </motion.h2>
    <motion.h2 
      className="font-serif italic text-[14vw] leading-[0.8] tracking-tighter w-full relative z-10"
      style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)", color: "transparent" }}
      variants={{
        rest: { WebkitTextStrokeColor: "rgba(255,255,255,0.9)", color: "transparent" },
        hover: { WebkitTextStrokeColor: "#FFB800", color: "rgba(255, 184, 0, 0.05)", filter: "drop-shadow(0 0 25px rgba(255,184,0,0.4))" }
      }}
    >
      {text}
    </motion.h2>
  </motion.div>
)

// Floating particles effect
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {Array.from({ length: 40 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-gold-200/20 rounded-full blur-[1px]"
        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0, scale: 0 }}
        animate={{
          y: [null, Math.random() * -40 - 20 + "%"],
          x: [null, (Math.random() - 0.5) * 20 + "%"],
          opacity: [0, Math.random() * 0.3 + 0.1, 0],
          scale: [0, Math.random() * 0.5 + 0.5, 0]
        }}
        transition={{ duration: Math.random() * 20 + 10, repeat: Infinity, delay: Math.random() * 10, ease: "linear" }}
        style={{ width: Math.random() * 4 + 1 + "px", height: Math.random() * 4 + 1 + "px" }}
      />
    ))}
  </div>
)

export default function ManifestoSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 30, restDelta: 0.001 })

  // Define the exact coordinates of the diagonal line and nodes from original code
  const nodes = [
    { x: 12, y: 12.5 },
    { x: 88, y: 37.5 },
    { x: 12, y: 62.5 },
    { x: 88, y: 87.5 }
  ]
  const linePath = `M ${nodes[0].x} ${nodes[0].y} L ${nodes[1].x} ${nodes[1].y} L ${nodes[2].x} ${nodes[2].y} L ${nodes[3].x} ${nodes[3].y}`

  return (
    <section id="manifesto" className="relative w-full z-30 pt-0 pb-32">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        
        {/* Intro Block "We believe in founders who work" */}
        <div className="mb-32 flex flex-col select-none cursor-default">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex items-baseline flex-wrap -ml-[0.5vw]">
            <motion.h2 className="font-serif text-[12vw] leading-[0.8] text-white tracking-tighter" whileHover={{ color: "#FFB800", textShadow: "0 0 40px rgba(255,184,0,0.3)", scale: 1.01 }} transition={{ duration: 0.3 }}>
              We believe
            </motion.h2>
            <motion.span className="font-serif italic text-[6vw] text-[#FFB800] ml-[3vw] transform -translate-y-[2vw]" whileHover={{ scale: 1.1, rotate: 5, filter: "brightness(1.2)" }}>
              in
            </motion.span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="w-full text-right pr-[2vw] -mt-[2vw]">
            <motion.h2 className="font-serif italic text-[13vw] leading-[0.8] text-white/90 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" whileHover={{ color: "#FFB800", textShadow: "0 0 60px rgba(255,184,0,0.5)", scale: 1.02, rotate: -1 }} transition={{ duration: 0.3 }}>
              founders
            </motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} className="w-full -mt-[3vw]">
            <IntroText text="who work." />
          </motion.div>
        </div>

        {/* Diagonal Line Tracking Block */}
        <div ref={ref} className="relative w-full max-w-[2400px] mx-auto py-24 overflow-hidden">
          <Particles />
          
          <div className="absolute inset-0 pointer-events-none select-none overflow-visible hidden md:block z-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                  <stop offset="10%" stopColor="#fbbf24" stopOpacity="0.8" />
                  <stop offset="90%" stopColor="#fbbf24" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={linePath} fill="none" stroke="rgba(251, 191, 36, 0.05)" strokeWidth="0.08" />
              <motion.path 
                d={linePath} fill="none" stroke="url(#line-gradient)" strokeWidth="0.25" filter="url(#gold-glow)" 
                strokeLinecap="round" strokeLinejoin="round" style={{ pathLength: smoothProgress }} 
              />
              <motion.path 
                d={linePath} fill="none" stroke="#fffbeb" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" 
                strokeDasharray="4 400" initial={{ strokeDashoffset: 404 }} animate={{ strokeDashoffset: 0 }} 
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ opacity: 0.8, filter: "blur(1px)" }} 
              />
              {/* Nodes styling (circles at corners of the zigzag) */}
              {nodes.map((n, i) => {
                const nodeScale = useTransform(smoothProgress, [i * 0.25, i * 0.25 + 0.1], [0, 1])
                return (
                  <motion.g key={i} style={{ scale: nodeScale, transformBox: "fill-box", transformOrigin: "center" }}>
                    <circle cx={n.x} cy={n.y} r="0.8" stroke="#fbbf24" strokeWidth="0.05" fill="#050505" opacity="0.8" />
                    <line x1={n.x - 1.5} y1={n.y} x2={n.x + 1.5} y2={n.y} stroke="#fbbf24" strokeWidth="0.05" opacity="0.4" />
                    <line x1={n.x} y1={n.y - 1.5} x2={n.x} y2={n.y + 1.5} stroke="#fbbf24" strokeWidth="0.05" opacity="0.4" />
                  </motion.g>
                )
              })}
            </svg>
          </div>

          <div className="flex flex-col relative z-10 w-full">
            {manifesto.map((item, index) => {
              const { isLeft, heading, body, Icon, id } = item
              
              // Map scroll to Y translation for parallax text
              const pStart = index * 0.25
              const pEnd = pStart + 0.25
              const yMove = useTransform(scrollYProgress, [pStart, pEnd], [60, -60])

              return (
                <div key={id} className={`w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-between ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                  
                  {/* Icon Block */}
                  <div className={`w-[25%] md:w-[25%] flex ${isLeft ? "justify-start md:pl-[4%]" : "justify-end md:pr-[4%]"}`}>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }} 
                      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }} 
                      viewport={{ once: true, margin: "-10%" }} 
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
                      className="relative shrink-0 z-10 flex items-center justify-center"
                    >
                      <div className="absolute -inset-16 md:-inset-24 bg-deep-900 rounded-full blur-xl z-0 opacity-90 scale-110" />
                      <motion.div className="absolute -inset-8 md:-inset-16 rounded-full border border-gold-500/20 z-0" animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                      <motion.div className="absolute -inset-2 md:-inset-6 rounded-full border border-gold-400/30 z-0 border-dashed" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
                      <motion.div className="absolute -inset-5 md:-inset-12 rounded-full border border-gold-400/10 z-0" animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} />
                      <div className="absolute inset-0 bg-gold-500/10 blur-[40px] md:blur-[80px] rounded-full z-0 mix-blend-screen" />
                      <div className="relative z-20">
                        <Icon className="w-full h-full text-gold-300 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex-grow" />

                  {/* Text Block */}
                  <div className="w-[65%] md:w-[55%]">
                    <motion.div style={{ y: yMove }} className={`relative z-20 flex flex-col justify-center h-full ${isLeft ? "items-start text-left" : "items-end text-right"}`}>
                      <div className={`relative max-w-6xl group cursor-default ${isLeft ? "mr-auto" : "ml-auto"}`}>
                        <div className={`absolute -top-32 z-0 pointer-events-none select-none font-serif font-bold text-[12rem] md:text-[20rem] text-white/[0.02] leading-none transition-colors duration-700 group-hover:text-gold-500/[0.04] ${isLeft ? "-left-24" : "-right-24"}`}>
                          {id}
                        </div>
                        <motion.h3 
                          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} 
                          className="relative z-10 font-serif text-5xl md:text-8xl lg:text-[7rem] text-white/60 group-hover:text-gold-400 transition-colors duration-700 ease-[0.22,1,0.36,1] leading-[0.9] tracking-tighter mb-10 drop-shadow-xl"
                        >
                          {heading}
                        </motion.h3>
                        <div className={`relative z-10 flex ${isLeft ? "justify-start" : "justify-end"}`}>
                          <motion.div initial={{ width: 0 }} whileInView={{ width: "120px" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} className="h-[1px] bg-white/20 group-hover:bg-gold-400 transition-colors duration-700 mb-10" />
                        </div>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} className="relative z-10 font-serif italic text-2xl md:text-4xl text-white/30 group-hover:text-gold-200 transition-colors duration-700 delay-75 leading-tight tracking-wide">
                          {body}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                  
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
