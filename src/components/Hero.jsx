import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen bg-[#020202] flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle animated background dots */}
      <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)]">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-[1px] h-[1px] bg-white/10 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              gridColumn: Math.floor(Math.random() * 40) + 1,
              gridRow: Math.floor(Math.random() * 40) + 1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-[#2C7EFF] text-sm font-medium tracking-widest uppercase">
              The Future of Corporate Learning
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight max-w-4xl"
          >
            Transform how we understand and develop{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2C7EFF] to-[#2C7EFF]/70">
              human potential
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl"
          >
            Redefining corporate training through AI-powered competency mapping and adaptive learning pathways that evolve with your team's growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://forms.gle/PiPPcoqyYF75s5su5', '_blank')}
              className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium tracking-wide
                       transition-all duration-200 hover:bg-white/90"
            >
              Join the waitlist
            </motion.button>
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gray-800" />
              <span className="text-sm text-gray-500">100+ companies already waiting</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
