import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Globe, Clock, Users, DollarSign } from 'lucide-react'

const items = [
  {
    icon: Globe,
    label: 'FORMAT',
    value: 'Virtual',
    desc: 'Work from anywhere. Show up when it matters.',
  },
  {
    icon: Clock,
    label: 'DURATION',
    value: '5 Weeks',
    desc: 'Long enough to build. Short enough to stay focused.',
  },
  {
    icon: Users,
    label: 'COHORT',
    value: '12 Founders',
    desc: 'Small by design. Every voice heard.',
  },
  {
    icon: DollarSign,
    label: 'INVESTMENT',
    value: '$0',
    desc: 'We don’t take equity. We take your commitment.',
  },
]

export default function EnvironmentSection() {
  return (
    <section className="relative w-full py-32 md:py-48 z-20 border-t border-white/5">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12">
        {/* Section header — Massive scale */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex flex-col justify-center items-center text-center w-full"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-[2vw]">
              <h2 className="font-serif text-[10vw] md:text-[8vw] leading-[0.9] text-white tracking-tighter mix-blend-plus-lighter">
                Not an accelerator.
              </h2>
          </div>
          <div className="flex justify-center mt-2 group relative cursor-default">
             <div className="absolute inset-0 bg-gold-400/0 blur-[60px] group-hover:bg-gold-500/20 transition-all duration-1000 -z-10 rounded-full" />
             <h2 className="font-serif italic text-[12vw] md:text-[9vw] leading-[0.9] text-white/50 group-hover:text-gold-400 tracking-tighter transition-colors duration-700">
               A working room.
             </h2>
          </div>
        </motion.div>

        {/* 4 logistics cards w/ unique staggered scale intro + icon spin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-10">
          {items.map((item, i) => {
            const IconComp = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.15, type: "spring", bounce: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-10 md:p-14 border border-white/5 hover:border-gold-400/30 bg-surface/30 hover:bg-surface/80 transition-all duration-500 rounded-sm overflow-hidden"
              >
                {/* Background active ring flare */}
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 2, opacity: 0.05 }}
                    transition={{ duration: 0.8 }}
                    className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full pointer-events-none"
                    style={{ mixBlendMode: 'screen' }}
                />

                {/* Icon w/ the requested "spin" logic */}
                <div className="relative w-16 h-16 flex items-center justify-center mb-8 border border-white/10 rounded-full group-hover:border-gold-400/50 transition-colors duration-500 bg-deep-900 overflow-hidden">
                   {/* Cool inner radial rotating gradient effect on hover */}
                   <motion.div 
                      className="absolute inset-x-0 top-0 h-1/2 bg-gold-400/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 origin-bottom"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   />
                  <div className="relative z-10 bg-deep-900 w-[95%] h-[95%] rounded-full flex items-center justify-center">
                    <IconComp size={24} className="text-white/50 group-hover:text-gold-400 transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative z-10">
                    <span className="font-mono text-xs md:text-sm uppercase tracking-[3px] text-gold-400/80 group-hover:text-gold-400 block mb-3 font-bold transition-colors">
                    {item.label}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 drop-shadow-md">
                    {item.value}
                    </h3>
                    <div className="w-8 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-gold-400/50 my-6 transition-all duration-700 ease-[0.16,1,0.36,1]" />
                    <p className="font-serif italic text-lg md:text-xl text-white/50 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {item.desc}
                    </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
