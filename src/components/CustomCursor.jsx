import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Custom cursor — large circle that follows mouse with a spring delay.
 * Matches the ship-studio.co delayed cursor effect.
 */
export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  /* Spring config: low stiffness + moderate damping = delayed, smooth follow */
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  const dotRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    /* Hide on touch devices */
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    window.addEventListener('mousemove', moveCursor)
    document.body.style.cursor = 'none'

    /* Add/remove hover class for interactive elements */
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, [role="button"]')
      if (target && dotRef.current) {
        dotRef.current.classList.add('cursor-hover')
      }
    }
    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, input, textarea, [role="button"]')
      if (target && dotRef.current) {
        dotRef.current.classList.remove('cursor-hover')
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.body.style.cursor = ''
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Outer ring — delayed follow */}
      <motion.div
        ref={dotRef}
        className="custom-cursor-ring"
        style={{
          x,
          y,
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(255, 184, 0, 0.4)',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s',
        }}
      />
      {/* Inner dot — instant follow */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 184, 0, 0.8)',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
