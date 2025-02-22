import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="relative bg-[#000000] overflow-hidden py-32 sm:py-40">
      {/* Animated horizontal line */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden h-[1px]">
        <motion.div 
          className="h-full bg-blue-400"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: "linear-gradient(90deg, transparent 0%, #60A5FA 50%, transparent 100%)",
            width: "50%"
          }}
        />
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#001132] to-[#000000] opacity-40" />
      
      {/* Animated lines */}
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
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[#2C7EFF] text-sm font-medium tracking-[0.2em] uppercase 
                           bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text">
              Transform Your HR
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl font-light text-white leading-tight tracking-tight mb-8"
          >
            Elevate Your{' '}
            <span className="bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text font-normal">
              Workforce Management
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Empower your organization with our cutting-edge HR technology platform. Transform talent management, streamline operations, and drive unprecedented growth through data-driven insights and AI-powered solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center"
          >
            <motion.a
              href="mailto:ceo@adivirtus.com"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(44, 126, 255, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center px-8 py-4 bg-[#2C7EFF]/10 rounded-full 
                       text-[#2C7EFF] text-sm font-medium tracking-wide
                       border border-[#2C7EFF]/20 transition-all duration-500
                       hover:border-[#2C7EFF]/40 hover:shadow-lg hover:shadow-[#2C7EFF]/10
                       backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2C7EFF]/0 via-[#2C7EFF]/5 to-[#2C7EFF]/0 
                            group-hover:via-[#2C7EFF]/10 transition-all duration-500"></div>
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Schedule a Demo
              <span className="inline-block ml-2 transform transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
