import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const mentors = [
  { role: 'OPERATOR', desc: 'Scaled restaurants to 2,000+ locations.', track: '$2B+ Rev' },
  { role: 'FOUNDER', desc: 'Grew B2C products to 10M+ users.', track: '10M Users' },
  { role: 'GROWTH', desc: 'Led growth at viral consumer apps.', track: 'Ex-Uber' },
  { role: 'COMMUNITY', desc: 'Built communities of 500K+ members.', track: '500K+ DAO' },
]

export default function MentorsSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  
  // Custom "spin": The entire section's background subtly shifts and scales as you scroll through it
  const bgRange = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="mentors" ref={containerRef} className="relative w-full py-32 md:py-48 z-20 border-t border-white/10 overflow-hidden">
      
      {/* Dynamic background gradient that tracks scroll */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 100%, rgba(251,191,36,0.1) 0%, transparent 60%)",
          y: bgRange
        }}
      />

      <div className="max-w-[1920px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Section header — vastly upscaled */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-2/3"
          >
            <span className="font-mono text-xs md:text-sm uppercase tracking-[4px] text-gold-400 block mb-6 md:mb-10 font-bold">
              THE CREW
            </span>
            <h2 className="font-serif text-[8vw] md:text-[6vw] leading-[0.8] text-white tracking-tighter">
              People who’ve actually <span className="italic text-gold-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">done it.</span>
            </h2>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: '-100px' }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="md:w-1/3 mt-12 md:mt-0 text-right"
          >
            <p className="font-serif italic text-2xl md:text-3xl text-white/50 leading-relaxed border-l border-gold-400/30 pl-8 md:pl-0 md:border-l-0 md:border-r md:pr-8">
              No theorists. No gurus.<br/>
              <span className="text-white/80">Just operators who have built, scaled, and exited.</span>
            </p>
          </motion.div>
        </div>

        {/* Mentor cards grid — Custom rotating border + 3D floating animation spin */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12">
          {mentors.map((mentor, i) => {
            return (
              <motion.div
                key={mentor.role}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative p-1 leading-none rounded-sm transition-all duration-300"
              >
                {/* The "slight spin" — animated glowing perimeter that circles the card on hover */}
                <div className="absolute inset-0 bg-white/5 rounded-sm overflow-hidden z-0 mask-image:linear-gradient(white,transparent)">
                    <motion.div 
                        className="absolute w-full h-[200%] bg-gradient-to-b from-transparent via-gold-400/50 to-transparent left-0 top-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 4, ease: "linear", repeat: Infinity }} 
                        style={{ transformOrigin: "center center" }}
                    />
                </div>

                <div className="relative z-10 p-8 md:p-12 bg-deep-900 border border-white/10 rounded-sm h-full flex flex-col justify-between group-hover:border-gold-400/30 transition-colors duration-500 overflow-hidden">
                  
                  {/* Background flare on hover */}
                  <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gold-400/0 group-hover:bg-gold-400/10 rounded-full blur-3xl transition-colors duration-700" />
                  
                  <div>
                    {/* Role label */}
                    <motion.span 
                      initial={{ opacity: 0.5 }}
                      whileHover={{ opacity: 1, letterSpacing: "6px" }}
                      className="font-mono text-[10px] md:text-xs uppercase tracking-[4px] text-gold-400 block mb-8 transition-all duration-500 font-bold"
                    >
                      {mentor.role}
                    </motion.span>
    
                    {/* Description */}
                    <p className="font-serif italic text-2xl md:text-3xl text-white/80 leading-tight mb-12">
                      “{mentor.desc}”
                    </p>
                  </div>
    
                  {/* Track record footer element */}
                  <div className="border-t border-white/10 pt-6 group-hover:border-gold-400/30 transition-colors duration-500">
                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[2px] text-white/30 block mb-2">
                      TRACK RECORD
                    </span>
                    <span className="font-sans text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                      {mentor.track}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
