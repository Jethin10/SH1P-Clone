import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * LoadingScreen — exact replica of the original.
 * Spinning compass rose with status messages: 
 * INITIALIZING CORE → CALIBRATING PHYSICS → SYNCING ASSETS → READY
 * Then exits with a scale-30 explosion effect.
 */
export default function LoadingScreen({ onComplete }) {
  const [status, setStatus] = useState('INITIALIZING CORE...')

  useEffect(() => {
    const messages = [
      'INITIALIZING CORE...',
      'CALIBRATING PHYSICS...',
      'SYNCING ASSETS...',
      'READY.',
    ]
    let idx = 0
    const interval = setInterval(() => {
      idx++
      if (idx < messages.length) setStatus(messages[idx])
    }, 550)
    const timeout = setTimeout(() => {
      onComplete()
    }, 2400)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2 } }}
    >
      {/* Spinning compass loader */}
      <motion.div
        className="w-[120px] h-[120px] relative mix-blend-screen"
        exit={{ scale: 30, opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <defs>
            <filter id="glow-spin" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <circle cx="50" cy="50" r="48" stroke="#333" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" fill="none" opacity="0.5" />
          <g filter="url(#glow-spin)">
            {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
              <line key={deg} x1="50" y1="50" x2="50" y2="10" stroke="white" strokeWidth="2" transform={`rotate(${deg} 50 50)`} />
            ))}
          </g>
          <circle cx="50" cy="50" r="10" fill="#000" stroke="#FFB800" strokeWidth="2" />
          <circle cx="50" cy="50" r="4" fill="#FFB800" />
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="#FFB800" strokeWidth="0.5" opacity="0.5" />
        </motion.svg>
      </motion.div>

      {/* Status text */}
      <div className="absolute bottom-12 h-6 flex items-center justify-center overflow-hidden">
        <motion.p
          key={status}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="font-mono text-xs tracking-[0.3em] text-[#FFB800] uppercase"
        >
          {status}
        </motion.p>
      </div>
    </motion.div>
  )
}
