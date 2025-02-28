import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="relative bg-[#000000] overflow-hidden py-32 sm:py-40">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#001132] to-[#000000] opacity-40" />
      
      {/* Enhanced animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[0.5px] w-[200%] bg-gradient-to-r from-transparent via-[#2C7EFF]/30 to-transparent backdrop-blur-sm"
            style={{
              top: i === 0 ? '25%' : '90%',
              left: '-50%',
              filter: 'blur(0.5px)',
            }}
            animate={{
              x: ['0%', '100%']
            }}
            transition={{
              duration: 25 + (i * 5),
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <span className="text-[#2C7EFF] text-sm font-medium tracking-[0.2em] uppercase 
                             bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text">
                Our Vision
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl font-light text-white leading-tight tracking-tight"
            >
              Empowering{' '}
              <span className="bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text font-normal">
                future-ready
              </span>
              {' '}workforces through{' '}
              <span className="bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text font-normal">
                adaptive
              </span>
              {' '}and{' '}
              <span className="bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text font-normal">
                personalized
              </span>
              {' '}upskilling.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF]" />
              <span className="text-gray-400 text-sm font-medium tracking-wide">Upskill. Innovate. Grow.</span>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-start space-y-16 pt-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative pl-8 border-l border-[#2C7EFF]/30"
            >
              <div className="absolute left-0 top-0 w-[1px] h-full overflow-hidden">
                <motion.div 
                  className="h-full w-full bg-gradient-to-b from-[#2C7EFF] to-[#47A2FF]"
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl">
                We empower organizations with intelligent, data-driven upskilling solutions that transform the workforce, foster continuous growth, and drive tangible business impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative pl-8 border-l border-[#2C7EFF]/30"
            >
              <div className="absolute left-0 top-0 w-[1px] h-full overflow-hidden">
                <motion.div 
                  className="h-full w-full bg-gradient-to-b from-[#2C7EFF] to-[#47A2FF]"
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl">
                Through adaptive technology and personalized learning experiences, we make professional development more accessible, efficient, and future-focused—helping every employee and employer stay ahead in a rapidly evolving world.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
