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
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#001132] to-[#000000] opacity-30" />
      
      {/* Enhanced animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-[0.5px] w-[200%] bg-gradient-to-r from-transparent via-[#2C7EFF]/20 to-transparent"
          style={{
            top: '30%',
            left: '-50%',
            filter: 'blur(0.5px)',
          }}
          animate={{
            x: ['0%', '100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative aspect-[4/5] lg:aspect-[3/4]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2C7EFF]/20 to-transparent rounded-3xl 
              blur-2xl transform -rotate-6 scale-95" />
            <div className="relative h-full rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="/Team/God.jpeg" 
                alt="Aditya Vijay Kamble" 
                className="object-cover w-full h-full object-top transform transition-transform duration-700 
                  hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-[#2C7EFF] text-sm font-medium tracking-[0.2em] uppercase 
                bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text">
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
              className="space-y-6"
            >
              <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl">
                Visionary technologist and entrepreneur dedicated to revolutionizing the landscape 
                of skill development and professional growth through innovative AI solutions.
              </p>

              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF]" />
                <span className="text-gray-400 text-sm font-medium tracking-wide">
                  Innovation. Vision. Impact.
                </span>
              </div>

              <motion.a
                href="https://www.linkedin.com/in/aditya-kamble-god/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#2C7EFF] group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm font-medium">Connect on LinkedIn</span>
                <svg 
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
