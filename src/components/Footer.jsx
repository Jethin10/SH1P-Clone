import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function FooterCompassStar() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <polygon points="16,1 17.5,13 16,11.5 14.5,13" fill="#FBBF24" opacity="0.6" />
      <polygon points="16,31 17.5,19 16,20.5 14.5,19" fill="#FBBF24" opacity="0.6" />
      <polygon points="1,16 13,14.5 11.5,16 13,17.5" fill="#FBBF24" opacity="0.6" />
      <polygon points="31,16 19,14.5 20.5,16 19,17.5" fill="#FBBF24" opacity="0.6" />
      <circle cx="16" cy="16" r="2" fill="#FBBF24" opacity="0.8" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative w-full py-24 z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 md:px-16 flex flex-col items-center gap-8">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">
            Ready to ship?
          </h3>
          <p className="font-serif italic text-base text-secondary mb-8">
            Applications for Cohort 1 are now open.
          </p>
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-gold-400 text-black font-sans font-bold text-sm uppercase tracking-[2.8px] px-10 py-4 hover:bg-[#FFC000] hover:shadow-[0_0_50px_rgba(255,184,0,0.5)] transition-all duration-300"
          >
            Apply Now
            <ArrowRight size={16} strokeWidth={2} />
          </motion.a>
        </motion.div>

        <FooterCompassStar />
        <p className="font-sans text-xs text-white/30 uppercase tracking-[1px]">
          © 2026 SHIP STUDIO. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="font-sans text-[10px] text-white/30 uppercase tracking-[0.5px] hover:text-gold-400 transition-colors duration-300">
            Twitter
          </a>
          <span className="text-white/10">|</span>
          <a href="#" className="font-sans text-[10px] text-white/30 uppercase tracking-[0.5px] hover:text-gold-400 transition-colors duration-300">
            Terms
          </a>
          <span className="text-white/10">|</span>
          <a href="#" className="font-sans text-[10px] text-white/30 uppercase tracking-[0.5px] hover:text-gold-400 transition-colors duration-300">
            Privacy
          </a>
        </div>
      </div>

      {/* Repeat tagline at absolute bottom like reference */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-between items-end px-8 md:px-16">
        <p className="font-sans text-[10px] text-white/30 uppercase tracking-[0.5px] leading-tight">
          A FIVE-WEEK COHORT FOR FOUNDERS<br />
          WHO BELIEVE IN EXECUTION OVER OPTICS.
        </p>
        <p className="font-sans text-[10px] text-white/30 uppercase tracking-[0.5px] text-right leading-tight">
          HIGH SIGNAL<br />
          LOW NOISE
        </p>
      </div>
    </footer>
  )
}
