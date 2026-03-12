import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Cpu, MemoryStick, Wifi, AlertTriangle } from 'lucide-react'

const nodes = [
  {
    id: '01',
    q: 'How much time do I need to commit?',
    a: 'This is an immersion program, not a casual course. Expect to dedicate 15-20 hours per week. If you cannot clear your calendar, do not apply. We move fast.',
  },
  {
    id: '02',
    q: 'Do I need a technical background?',
    a: 'No, but you need a builder’s mindset. We have no-code founders shipping faster than engineers. The tool doesn’t matter; the output does.',
  },
  {
    id: '03',
    q: 'What stage should my startup be at?',
    a: 'Pre-seed to Seed. You should have a thesis and ideally an MVP. If you are still ‘brainstorming ideas’, this environment will be too intense for you.',
  },
  {
    id: '04',
    q: 'Is there funding or investment involved?',
    a: 'Not directly. We don’t take equity and we don’t write checks. We provide the environment to build the traction that makes you investable.',
  },
  {
    id: '05',
    q: 'What happens after the 5 weeks?',
    a: 'You’ll have shipped more in 5 weeks than most do in 5 months. You’ll have a network of fellow founders and a clear path to your next milestone.',
  },
  {
    id: '06',
    q: 'How selective is the program?',
    a: 'Extremely. We accept <2% of applicants. We look for slope, not intercept. Show us what you have shipped in the last 30 days.',
  },
]

function DiagnosticNode({ node, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`border transition-all duration-500 overflow-hidden relative group bg-surface/30 ${isOpen ? 'border-gold-400/50 shadow-[0_0_30px_rgba(251,191,36,0.1)]' : 'border-white/5 hover:border-gold-400/30'}`}
    >
      {/* Custom 'spin': scanner line that sweeps across the active node */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "200%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[20%] bg-gradient-to-r from-transparent via-gold-400/10 to-transparent pointer-events-none transform -skew-x-12"
          />
        )}
      </AnimatePresence>

      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer relative z-10"
      >
        <div className="flex items-center gap-6">
          <span className={`font-mono text-xs md:text-sm uppercase tracking-[3px] flex-shrink-0 transition-colors duration-500 font-bold ${isOpen ? 'text-gold-400' : 'text-gold-400/50 group-hover:text-gold-400'}`}>
            NODE {node.id}
          </span>
          <span className={`font-serif md:text-2xl text-xl transition-colors duration-500 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
            {node.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          className={`flex-shrink-0 ml-4 p-2 rounded-full border transition-colors duration-500 ${isOpen ? 'border-gold-400/50 text-gold-400 bg-gold-400/10' : 'border-white/10 text-white/40 group-hover:border-gold-400/50 group-hover:text-gold-400'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-deep-900/50"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1, duration: 0.4 }} 
                className="border-t border-gold-400/20 pt-6"
              >
                <p className="font-serif italic text-lg md:text-2xl text-white/80 leading-relaxed md:leading-relaxed">
                  {node.a}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function DiagnosticsSection() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <section className="relative w-full py-32 md:py-48 z-20 border-t border-white/5">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div className="md:w-1/2">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[4px] text-gold-400 block mb-6 md:mb-10 font-bold">
                DIAGNOSTICS
              </span>
              <h2 className="font-serif text-[10vw] md:text-[8vw] leading-[0.8] text-white tracking-tighter drop-shadow-xl mix-blend-plus-lighter">
                Frequently asked.
              </h2>
          </div>

          <div className="md:w-1/2 flex justify-end">
              {/* System status bar - Enhanced with glowing pulses */}
              <div className="flex flex-wrap items-center gap-6 py-4 px-6 border border-gold-400/30 bg-gold-400/5 rounded-sm shadow-[0_0_20px_rgba(251,191,36,0.1)] relative overflow-hidden">
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent w-[200%]"
                    animate={{ x: ["-100%", "50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                      <AlertTriangle size={16} className="text-gold-400" />
                  </motion.div>
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[2px] text-gold-400 font-bold">
                    System Status: Critical
                  </span>
                </div>
                <div className="w-[1px] h-4 bg-white/20 hidden md:block relative z-10" />
                <div className="flex items-center gap-3 relative z-10">
                  <Cpu size={14} className="text-white/50" />
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[2px] text-white/50">
                    CPU: 98%
                  </span>
                </div>
                <div className="w-[1px] h-4 bg-white/20 hidden md:block relative z-10" />
                <div className="flex items-center gap-3 relative z-10">
                  <MemoryStick size={14} className="text-white/50" />
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[2px] text-white/50">
                    MEM: 64TB
                  </span>
                </div>
                <div className="w-[1px] h-4 bg-white/20 hidden md:block relative z-10" />
                <div className="flex items-center gap-3 relative z-10">
                  <Wifi size={14} className="text-white/50" />
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[2px] text-white/50">
                    NET: SECURE
                  </span>
                </div>
              </div>
          </div>
        </motion.div>

        {/* FAQ nodes — Single column for maximum visual impact, larger grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1600px] mx-auto">
          {nodes.map((node) => (
            <DiagnosticNode
              key={node.id}
              node={node}
              isOpen={openId === node.id}
              onClick={() => toggle(node.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
