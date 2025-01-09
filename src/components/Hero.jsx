import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative"
    >
      <section className="relative py-32 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <motion.div 
          className="absolute inset-0"
          style={{ zIndex: 1 }}
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl" style={{ zIndex: 2 }}>
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <motion.h1 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.7,
                  type: "spring",
                  bounce: 0.4
                }} 
                whileHover={{ scale: 1.02 }}
                className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 bg-300% animate-gradient"
                >
                  Corporate Trainings
                  <br />
                  powered by AI
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 text-lg font-normal text-gray-400 sm:mt-8"
              >
               Our product revolutionizes how trainers and businesses design, deliver, and measure the impact of corporate training. By integrating Artificial Intelligence (AI) and adaptive learning methods.
              </motion.p>

              <motion.form 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="relative mt-8 rounded-full sm:mt-12"
                style={{ zIndex: 3 }}
              >
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="100+ people already waiting"
                      className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                      style={{ position: 'relative', zIndex: 4 }}
                    />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0" style={{ zIndex: 4 }}>
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    type="button"
                    onClick={() => window.open('https://forms.gle/PiPPcoqyYF75s5su5', '_blank')}
                    className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90 hover:shadow-lg"
                  >
                    Join waitlist
                  </motion.button>
                </div>
              </motion.form>

            </div>

            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              animate={{
                y: [0, -20, 0],
                rotateZ: [-1, 1, -1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0">
                <svg
                  className="blur-3xl filter opacity-70"
                  style={{ filter: 'blur(64px)' }}
                  width="444"
                  height="536"
                  viewBox="0 0 444 536"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                    fill="url(#c)"
                  />
                  <defs>
                    <linearGradient
                      id="c"
                      x1="82.7339"
                      y1="550.792"
                      x2="-39.945"
                      y2="118.965"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" style={{ stopColor: 'var(--color-cyan-500)' }} />
                      <stop offset="100%" style={{ stopColor: 'var(--color-purple-500)' }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full opacity-50"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                  alt="Background"
                />
              </div>

              <img
                className="relative w-full max-w-md mx-auto"
                src="/Conection.png"
                alt="AI Connection Illustration"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
