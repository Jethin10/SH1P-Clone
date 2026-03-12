import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const requirements = [
  {
    label: 'REQUIRED',
    text: 'Something live. Doesn’t have to be pretty.',
  },
  {
    label: 'EXPECTED',
    text: '5-10 hours per week. Non-negotiable.',
  },
  {
    label: 'OPTIONAL',
    text: 'Prior experience. We care about velocity.',
  },
]

export default function ApplicationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coordinates: '',
    payload: '',
  })

  const [activeField, setActiveField] = useState(null)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="relative w-full overflow-hidden min-h-[70vh] flex flex-col items-center justify-center z-20 py-32 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[1920px] px-4 md:px-12 w-full"
        >
          {/* Custom Spin: massive animated "S1 — 2026" background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
             <motion.h1 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.02 }}
                transition={{ duration: 2 }}
                className="font-serif font-bold text-[30vw] leading-none text-white whitespace-nowrap select-none"
             >
                S1 — 2026
             </motion.h1>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="mb-12"
            >
              <div className="w-16 h-16 rounded-full border border-gold-400/50 flex items-center justify-center bg-gold-400/10 backdrop-blur-md shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                <Sparkles className="text-gold-400" size={24} />
              </div>
            </motion.div>
            
            <span className="font-mono text-sm uppercase tracking-[6px] text-gold-400 block mb-8 font-bold">
              APPLICATION // S1-2026
            </span>
            <p className="font-serif italic text-4xl md:text-5xl lg:text-[4vw] text-white leading-tight mb-8">
              We review applications weekly. <br className="hidden md:block"/>If we think there’s a fit, <span className="text-gold-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">you’ll hear back within 48 hours.</span>
            </p>
          </div>
        </motion.div>
      </section>

      <section id="apply" className="relative w-full z-20 pb-48">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          
          <form onSubmit={handleSubmit} className="space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <InputField 
                label="CODENAME" 
                name="name" 
                placeholder="Full Name" 
                value={formData.name} 
                onChange={handleChange} 
                onFocus={() => setActiveField('name')}
                onBlur={() => setActiveField(null)}
                active={activeField === 'name'}
              />
              <InputField 
                label="FREQUENCY" 
                name="email" 
                type="email" 
                placeholder="Email Address" 
                value={formData.email} 
                onChange={handleChange} 
                onFocus={() => setActiveField('email')}
                onBlur={() => setActiveField(null)}
                active={activeField === 'email'}
              />
            </div>

            <InputField 
              label="COORDINATES" 
              name="coordinates" 
              placeholder="Twitter / LinkedIn / Portfolio URL" 
              value={formData.coordinates} 
              onChange={handleChange} 
              onFocus={() => setActiveField('coordinates')}
              onBlur={() => setActiveField(null)}
              active={activeField === 'coordinates'}
            />

            <div className="group relative">
              <label className={`font-mono text-xs uppercase tracking-[3px] font-bold block mb-4 transition-colors duration-300 ${activeField === 'payload' ? 'text-gold-400' : 'text-gold-400/60'}`}>
                THE PAYLOAD
              </label>
              <div className="relative">
                <textarea
                  name="payload"
                  placeholder="What are you building? Why now? Don't hold back."
                  value={formData.payload}
                  onChange={handleChange}
                  onFocus={() => setActiveField('payload')}
                  onBlur={() => setActiveField(null)}
                  rows={8}
                  className="w-full bg-surface/30 border border-white/10 hover:border-gold-400/30 focus:border-gold-400/80 text-white placeholder:text-white/20 p-6 text-xl md:text-2xl font-serif italic outline-none transition-all duration-300 resize-none shadow-inner"
                />
                <AnimatePresence>
                    {activeField === 'payload' && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 pointer-events-none border border-gold-400 shadow-[0_0_20px_rgba(251,191,36,0.3)] z-10"
                        />
                    )}
                </AnimatePresence>
              </div>
            </div>

            {/* Massive CTA Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, backgroundColor: "#FFB800" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gold-400 text-black font-sans font-bold text-lg md:text-2xl uppercase tracking-[4px] py-8 flex items-center justify-center gap-6 hover:shadow-[0_0_60px_rgba(255,184,0,0.6)] active:bg-gold-500 transition-all duration-300 group overflow-hidden relative"
            >
              {/* Button sweep effect */}
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[sweep_1s_ease-in-out]" />
              <span className="relative z-10">INITIATE LAUNCH SEQUENCE</span>
              <ArrowRight size={28} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </form>

          {/* Requirements row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-white/10">
            {requirements.map((req, i) => (
              <motion.div
                key={req.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-deep-900/50 p-8 border border-white/5 hover:border-gold-400/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6 pr-4">
                  <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center border border-gold-400/30">
                     <Sparkles size={14} className="text-gold-400" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[2px] text-gold-400 font-bold border-b border-gold-400/30 pb-1">
                    {req.label}
                  </span>
                </div>
                <p className="font-serif italic text-xl text-white/80 leading-relaxed">
                  {req.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function InputField({ label, name, type = "text", placeholder, value, onChange, onFocus, onBlur, active }) {
  return (
    <div className="group relative">
      <label className={`font-mono text-xs uppercase tracking-[3px] font-bold block mb-4 transition-colors duration-300 ${active ? 'text-gold-400' : 'text-gold-400/60'}`}>
        {label}
      </label>
      <div className="relative">
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`w-full bg-surface/30 border-b-2 hover:border-gold-400/50 text-white placeholder:text-white/20 py-4 px-4 text-xl md:text-2xl font-serif italic outline-none transition-all duration-300 ${active ? 'border-gold-400' : 'border-white/20'}`}
        />
        {/* Animated bottom border glow */}
        <motion.div 
           initial={{ scaleX: 0 }}
           animate={{ scaleX: active ? 1 : 0 }}
           transition={{ duration: 0.3 }}
           className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-gold-400 shadow-[0_0_15px_rgba(251,191,36,0.8)] origin-left"
        />
      </div>
    </div>
  )
}
