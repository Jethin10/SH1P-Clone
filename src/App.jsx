import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import BlueprintBackground from './components/BlueprintBackground'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ManifestoSection from './components/ManifestoSection'
import ProgramSection from './components/ProgramSection'
import MentorsSection from './components/MentorsSection'
import EnvironmentSection from './components/EnvironmentSection'
import ApplicationSection from './components/ApplicationSection'
import DiagnosticsSection from './components/DiagnosticsSection'
import Footer from './components/Footer'

/**
 * App — EXACT architecture from the original JS bundle.
 * 
 * Features from original source:
 * 1. Loading screen with animated exit
 * 2. Mouse-reactive 3D parallax on main content (rotateX/Y + x/y transforms)
 * 3. Radial gradient cursor spotlight (mix-blend-screen)
 * 4. Vignette overlay
 * 5. Blueprint background (fixed, z-0)
 */
export default function App() {
  const [loading, setLoading] = useState(true)

  /* Lock scroll during loading */
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [loading])

  /* Mouse position for 3D parallax + cursor spotlight */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 100, mass: 2 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  /* 3D tilt transforms — exactly as in original */
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['1deg', '-1deg'])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-1deg', '1deg'])
  const translateX = useTransform(smoothX, [-0.5, 0.5], ['-10px', '10px'])
  const translateY = useTransform(smoothY, [-0.5, 0.5], ['-10px', '10px'])

  /* Cursor spotlight position (as percentage for radial-gradient) */
  const spotlightX = useTransform(smoothX, [-0.5, 0.5], ['0%', '100%'])
  const spotlightY = useTransform(smoothY, [-0.5, 0.5], ['0%', '100%'])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = e.clientX / innerWidth - 0.5
      const y = e.clientY / innerHeight - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background antialiased selection:bg-[#FFB800]/20 selection:text-white overflow-hidden">
      {/* Blueprint background — fixed layer */}
      <BlueprintBackground />

      {/* Loading screen */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Navigation */}
      <Navigation />

      {/* Cursor spotlight — radial gradient that follows mouse */}
      <motion.div
        className="fixed inset-0 z-30 pointer-events-none mix-blend-screen"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(600px circle at ${x} ${y}, rgba(255,255,255,0.15), transparent 40%)`
          ),
        }}
      />

      {/* Main content with 3D parallax */}
      <div className="perspective-[1000px] flex-grow w-full flex flex-col relative z-10">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            rotateX,
            rotateY,
            x: translateX,
            y: translateY,
          }}
          className="w-full flex flex-col relative origin-center"
        >
          <HeroSection />
          <ManifestoSection />
          <ProgramSection />
          <MentorsSection />
          <EnvironmentSection />
          <DiagnosticsSection />
          <ApplicationSection />
          <Footer />
        </motion.main>
      </div>

      {/* Vignette overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]" />
    </div>
  )
}
