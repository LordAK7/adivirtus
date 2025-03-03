import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative bg-[#000000] overflow-hidden py-20 sm:py-28">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#001132] to-[#000000] opacity-10" />
      
      {/* Refined animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[0.5px] w-[200%] bg-gradient-to-r from-transparent via-[#2C7EFF]/5 to-transparent"
            style={{
              top: `${20 + (i * 15)}%`,
              left: '-50%',
              filter: 'blur(0.5px)',
            }}
            animate={{ x: ['0%', '100%'] }}
            transition={{
              duration: 20 + (i * 5),
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-16">
          {/* Header Section with refined typography */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-3"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase 
                             bg-gradient-to-r from-[#2C7EFF] via-[#47A2FF] to-[#2C7EFF] text-transparent bg-clip-text bg-size-200
                             relative after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:w-10 
                             after:h-[0.5px] after:bg-[#2C7EFF]/30 after:-translate-x-1/2"
                    initial={{ backgroundPosition: "0% 50%" }}
                    whileHover={{ backgroundPosition: "100% 50%", letterSpacing: "0.25em" }}
                    transition={{ duration: 1 }}
              >
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl font-light text-white leading-tight tracking-tight max-w-4xl mx-auto"
              initial={{ backgroundPosition: "0% 50%" }}
              whileHover={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 1.5 }}
              style={{ backgroundSize: "200% auto" }}
            >
              Empowering the{' '}
              <span className="bg-gradient-to-r from-[#2C7EFF] via-[#47A2FF] to-[#2C7EFF] text-transparent bg-clip-text font-normal bg-size-200">
                future
              </span>
              {' '}of corporate learning and upskilling
            </motion.h2>
          </div>

          {/* Redesigned Content Section - Elegant Layout */}
          <div className="max-w-3xl mx-auto">
            {/* Content paragraphs with elegant styling */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="flex items-start space-x-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C7EFF]/10 to-[#47A2FF]/5 backdrop-blur-sm border border-[#2C7EFF]/20 flex items-center justify-center overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#2C7EFF] to-[#47A2FF] opacity-0"
                        whileHover={{ opacity: 0.2 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span 
                        className="relative z-10 text-[#2C7EFF] text-base font-medium"
                        animate={{ 
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        01
                      </motion.span>
                    </div>
                    <motion.div 
                      className="absolute -inset-1 rounded-xl bg-[#2C7EFF]/10 blur-md"
                      animate={{ 
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text mb-2">Our Innovation</h3>
                    <p className="text-base text-gray-300/90 leading-relaxed">
                      Adivirtus AI is a cutting-edge corporate upskilling platform that leverages adaptive assessments, personalized learning paths, and data-driven analytics to help businesses future-proof their workforce.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative"
              >
                <div className="flex items-start space-x-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C7EFF]/10 to-[#47A2FF]/5 backdrop-blur-sm border border-[#2C7EFF]/20 flex items-center justify-center overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#2C7EFF] to-[#47A2FF] opacity-0"
                        whileHover={{ opacity: 0.2 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span 
                        className="relative z-10 text-[#2C7EFF] text-base font-medium"
                        animate={{ 
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      >
                        02
                      </motion.span>
                    </div>
                    <motion.div 
                      className="absolute -inset-1 rounded-xl bg-[#2C7EFF]/10 blur-md"
                      animate={{ 
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text mb-2">Our Philosophy</h3>
                    <p className="text-base text-gray-300/90 leading-relaxed">
                      By seamlessly integrating with existing systems and focusing on real-time feedback, Adivirtus AI empowers employees to master emerging skills, boosts organizational productivity, and drives innovation across teams.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative"
              >
                <div className="flex items-start space-x-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C7EFF]/10 to-[#47A2FF]/5 backdrop-blur-sm border border-[#2C7EFF]/20 flex items-center justify-center overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#2C7EFF] to-[#47A2FF] opacity-0"
                        whileHover={{ opacity: 0.2 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span 
                        className="relative z-10 text-[#2C7EFF] text-base font-medium"
                        animate={{ 
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                      >
                        03
                      </motion.span>
                    </div>
                    <motion.div 
                      className="absolute -inset-1 rounded-xl bg-[#2C7EFF]/10 blur-md"
                      animate={{ 
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text mb-2">Our Results</h3>
                    <p className="text-base text-gray-300/90 leading-relaxed">
                      Our platform has helped organizations reduce training costs by 40% while increasing skill acquisition rates by 65%. Teams using Adivirtus AI report higher engagement and faster adaptation to new technologies.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Highly improved call to action button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-14 text-center"
            >
              <motion.div className="relative inline-block">
                {/* Button glow effect */}
                <motion.div 
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#2C7EFF]/60 to-[#47A2FF]/60 blur-md opacity-0"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Main button */}
                <motion.a
                  href="#contact"
                  className="relative inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-black border border-[#2C7EFF]/30 text-white text-sm font-medium tracking-wide overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Button background animation */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Button content */}
                  <span className="relative z-10 bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                    Learn more
                  </span>
                  
                  <motion.div
                    className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] group-hover:bg-white transition-colors duration-300"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.span 
                      className="text-black text-xs"
                      animate={{ x: [0, 1, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse"
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
