import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const weeks = [
  {
    num: '01',
    name: 'Foundation',
    desc: 'Clarify your thesis. Kill your darlings.',
    output: 'One-page brief that survives scrutiny',
  },
  {
    num: '02',
    name: 'Distribution',
    desc: 'Build channels that don’t require ad spend.',
    output: 'First 100 users strategy',
  },
  {
    num: '03',
    name: 'Momentum',
    desc: 'Ship publicly. Document the journey.',
    output: 'Launch sequence executed',
  },
  {
    num: '04',
    name: 'Feedback',
    desc: 'Brutal honesty from people who’ve done it.',
    output: 'Actionable pivot or conviction',
  },
  {
    num: '05',
    name: 'Demo Day',
    desc: 'Present to investors who write checks.',
    output: 'Seed round readiness',
  },
]

export default function ProgramSection() {
  const containerRef = useRef(null)
  
  // Track scroll through the whole program section for the main vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })
  
  const springProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 })

  return (
    <section id="program" ref={containerRef} className="relative w-full z-20 py-32 md:py-48 overflow-hidden">
      
      {/* Top Header */}
      <div className="w-full px-4 md:px-12 mb-32 md:mb-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-baseline gap-[2vw]"
        >
          <h2 className="font-serif text-[12vw] leading-[0.8] text-white tracking-tighter mix-blend-plus-lighter">
            Five weeks.
          </h2>
          <h2 className="font-serif italic text-[12vw] leading-[0.8] text-white/50 tracking-tighter">
            One focus.
          </h2>
        </motion.div>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full px-4 md:px-12">
        
        {/* The Continuous Background Track Line */}
        <div className="absolute left-[24px] md:left-[50px] top-0 bottom-0 w-[1px] bg-white/5" />
        
        {/* The Animated Golden Tracking Line */}
        <motion.div 
          className="absolute left-[23px] md:left-[49px] top-0 bottom-0 w-[3px] bg-gold-400 origin-top shadow-[0_0_15px_rgba(251,191,36,0.6)]"
          style={{ scaleY: springProgress }}
        />

        <div className="flex flex-col gap-32 md:gap-40 relative z-10 w-full">
          {weeks.map((week, i) => {
            return (
              <ProgramRow key={week.num} week={week} index={i} total={weeks.length} />
            )
          })}
        </div>

      </div>
    </section>
  )
}

function ProgramRow({ week, index, total }) {
  const rowRef = useRef(null)
  
  // Track if this specific row is in the center of the viewport to trigger "active" state glows
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["center 80%", "center 20%"]
  })

  // We consider it "active" (glowing) while it passes through the center
  // 0 to 0.5 it fades in the glow, 0.5 to 1 it holds or fades out
  // Actually, let's just use whileInView for the entrance animations, and a spring for the line drawing.
  
  return (
    <motion.div 
      ref={rowRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-20%" }}
      className="relative w-full flex flex-col md:flex-row items-start md:items-center group"
    >
      
      {/* 1. Golden Dot (Left margin) */}
      <div className="absolute left-[8px] md:left-[34px] flex items-center justify-center w-[33px] h-[33px]">
        <motion.div 
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.5, type: "spring" } }
          }}
          className="w-4 h-4 rounded-full bg-gold-400 z-20 group-hover:scale-150 transition-transform duration-500"
          style={{ boxShadow: '0 0 20px rgba(251,191,36,0.8)' }}
        />
        {/* Pulse ring */}
        <motion.div
           variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: { scale: 1.5, opacity: 0, transition: { duration: 1.5, repeat: Infinity } }
          }}
          className="absolute inset-0 rounded-full border border-gold-400 z-10"
        />
      </div>

      {/* Desktop Grid Layout container */}
      <div className="w-full flex pl-16 md:pl-32 items-baseline">
        
        {/* 2. WEEK Label */}
        <div className="w-[15%] hidden md:block shrink-0">
          <motion.span 
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
            }}
            className="font-mono text-[0.8rem] uppercase tracking-[2px] text-gold-400 font-bold"
          >
            WEEK {week.num}
          </motion.span>
        </div>

        {/* Mobile WEEK label */}
        <div className="md:hidden block mb-4 w-full">
          <span className="font-mono text-[0.7rem] uppercase tracking-[2px] text-gold-400 font-bold">
            WEEK {week.num}
          </span>
        </div>

        {/* 3. Title (Foundation / Distribution) */}
        <div className="w-full md:w-[35%] shrink-0 pr-8">
          <motion.h3 
            variants={{
              hidden: { opacity: 0, y: 30, color: "rgba(255,255,255,0.3)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                color: "rgba(255,255,255,0.9)",
                textShadow: "0 0 40px rgba(255,184,0,0.3)",
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            whileHover={{ 
              color: "#fff", 
              textShadow: "0 0 60px rgba(255,184,0,0.6)",
              scale: 1.02
            }}
            className="font-serif text-[4rem] md:text-[6vw] leading-[0.85] tracking-tighter cursor-default transition-all duration-500"
          >
            {week.name}
          </motion.h3>
        </div>

        {/* 4. Description */}
        <div className="w-full md:w-[25%] shrink-0 pr-8 mt-6 md:mt-0">
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
            }}
            className="font-serif italic text-xl md:text-[2vw] leading-tight text-white/50 group-hover:text-white/80 transition-colors duration-500"
          >
            {week.desc}
          </motion.p>
        </div>

        {/* 5. Output Box */}
        <div className="w-full md:w-[25%] shrink-0 mt-8 md:mt-0 border-l border-white/10 pl-6 relative">
          <motion.div
             variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
            }}
          >
            <span className="font-mono text-[0.6rem] md:text-[0.7rem] uppercase tracking-[2px] text-gold-400/80 mb-3 block">
              OUTPUT
            </span>
            <p className="font-sans text-sm md:text-lg text-white/90 leading-snug font-medium pr-4">
              {week.output}
            </p>
          </motion.div>
          
          {/* Animated underline */}
          <motion.div 
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="absolute bottom-[-16px] left-0 w-full h-[2px] bg-gradient-to-r from-gold-400 to-transparent origin-left"
          />
        </div>

      </div>
    </motion.div>
  )
}
