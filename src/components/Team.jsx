import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Aditya Vijay Kamble",
    role: "Founder & Chief Executive Officer",
    image: "/Team/God.jpeg",
    isLarge: true
  }
];  

const TeamMember = ({ image, name, role, isLarge, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`relative overflow-hidden lg:order-2 group ${isLarge ? 'row-span-2' : ''}`}
    >
      <img 
        className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110" 
        src={image} 
        alt={name} 
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
        <div className="scale-90 sm:scale-100">
          <p className="text-base font-semibold text-white">{name}</p>
          <p className="mt-1 text-sm font-normal text-gray-300">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#001132] to-[#000000] opacity-40" />
      
      {/* Multiple animated lines for more depth */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-[0.5px] w-[200%] bg-gradient-to-r from-transparent via-[#2C7EFF]/20 to-transparent"
          style={{
            top: '20%',
            left: '-50%',
            filter: 'blur(0.5px)',
          }}
          animate={{ x: ['0%', '100%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute h-[0.5px] w-[200%] bg-gradient-to-r from-transparent via-[#2C7EFF]/10 to-transparent"
          style={{
            top: '60%',
            left: '-50%',
            filter: 'blur(0.5px)',
          }}
          animate={{ x: ['100%', '0%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute w-2 h-2 bg-[#2C7EFF]/20 rounded-full blur-sm top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-2 h-2 bg-[#2C7EFF]/20 rounded-full blur-sm top-3/4 right-1/4 animate-pulse delay-700" />
        <div className="absolute w-2 h-2 bg-[#2C7EFF]/20 rounded-full blur-sm top-1/2 right-1/3 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Reduced Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative aspect-[3/4] lg:aspect-[4/5] max-w-sm mx-auto lg:max-w-md group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2C7EFF]/30 to-transparent rounded-3xl 
              blur-3xl transform -rotate-6 scale-95 transition-transform duration-700 group-hover:scale-100" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#47A2FF]/20 to-transparent rounded-3xl 
              blur-2xl transform rotate-3 scale-95 transition-transform duration-700 group-hover:scale-100" />
            <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 
              shadow-lg shadow-[#2C7EFF]/10">
              <img 
                src="/Team/God.jpeg" 
                alt="Aditya Vijay Kamble" 
                className="object-cover w-full h-full object-top transform transition-all duration-700 
                  hover:scale-105 filter brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 
                transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </motion.div>

          {/* Enhanced Content Section with New Features */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block"
            >
              <span className="relative inline-block text-[#2C7EFF] text-sm font-medium tracking-[0.2em] uppercase 
                bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text
                before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[1px]
                before:bg-gradient-to-r before:from-[#2C7EFF]/50 before:to-transparent">
                Founder & CEO
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl font-light text-white leading-tight"
            >
              Meet{' '}
              <span className="bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text 
                font-normal">
                Aditya Vijay Kamble
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-8"
            >
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                Visionary technologist and entrepreneur dedicated to revolutionizing the landscape 
                of skill development and professional growth through innovative AI solutions.
              </p>

              {/* Enhanced Stats with Curved Design */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C7EFF]/10 to-transparent rounded-3xl blur-xl"></div>
                <div className="relative grid grid-cols-3 gap-8 py-8">
                  <div className="text-center relative group">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative z-10"
                    >
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text
                        group-hover:scale-110 transform transition-transform duration-300">
                        5+
                      </div>
                      <div className="text-sm text-gray-400 mt-2 group-hover:text-[#2C7EFF] transition-colors duration-300">
                        Years Experience
                      </div>
                    </motion.div>
                  </div>
                  <div className="text-center relative group">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text
                        group-hover:scale-110 transform transition-transform duration-300">
                        10+
                      </div>
                      <div className="text-sm text-gray-400 mt-2 group-hover:text-[#2C7EFF] transition-colors duration-300">
                        Projects Led
                      </div>
                    </motion.div>
                  </div>
                  <div className="text-center relative group">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="relative z-10"
                    >
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text
                        group-hover:scale-110 transform transition-transform duration-300">
                        1000+
                      </div>
                      <div className="text-sm text-gray-400 mt-2 group-hover:text-[#2C7EFF] transition-colors duration-300">
                        Users Impacted
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex items-center gap-6 pt-8">
                <motion.a
                  href="https://www.linkedin.com/in/aditya-kamble-entrepreneur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800/80 
                    text-white text-sm font-medium transition-all duration-300 hover:scale-105 
                    hover:shadow-lg hover:shadow-gray-700/30 border border-gray-700/50
                    backdrop-blur-sm group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg 
                    className="w-5 h-5 mr-2 text-[#0A66C2] group-hover:text-[#0A66C2]/80 transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="group-hover:text-gray-200 transition-colors duration-300">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] 
                    text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2C7EFF]/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#2C7EFF]/20 to-transparent 
                rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-[#47A2FF]/20 to-transparent 
                rounded-full blur-3xl pointer-events-none"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
