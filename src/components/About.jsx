import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';

const About = () => {
  // Control gradient position behind phone image
  const x = 100.883; // x-axis position of gradient
  const y = -100000.451; // y-axis position of gradient
  
  // Control animation delay (in seconds)
  const delay = 0.3;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Enhanced container variants with smoother transitions
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        delay,
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut"
      }
    }
  };

  // Enhanced item variants with scale effect
  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        delay,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Enhanced phone variants with rotation
  const phoneVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      rotateY: 15
    },
    visible: { 
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { 
        delay: delay + 0.3,
        duration: 1,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  // Update the gradient text class with animation
  const gradientTextClass = "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient";

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black min-h-screen flex items-center">
      <div className="absolute bottom-0 right-0 transform translate-y-1/2 lg:bottom-auto lg:top-0 xl:-translate-x-20 2xl:-translate-x-40">
        <svg className="filter blur-3xl" style={{ filter: 'blur(64px)' }} width="644" height="411" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M180.781 217.613C85.977 122.809-63.572 134.004 31.232 39.2c94.804-94.804 495.712 1.312 590.516 96.116 94.804 94.804-152.396 152.395-247.2 247.199s-98.963-70.098-193.767-164.902Z" fill="url(#b)" />
          <defs>
            <linearGradient id="b" x1="663.883" y1="177.451" x2="295.437" y2="472.757" gradientUnits="userSpaceOnUse">
              <stop offset="0%" style={{ stopColor: 'var(--color-cyan-500)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--color-purple-500)' }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 transform lg:translate-x-1/4 lg:translate-y-1/4">
        <svg className="filter blur-3xl" style={{ filter: 'blur(64px)' }} width="544" height="411" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.781 217.613C285.977 122.809 136.428 134.004 231.232 39.2c94.804-94.804 495.712 1.312 590.516 96.116 94.804 94.804-152.396 152.395-247.2 247.199s-98.963-70.098-193.767-164.902Z" fill="url(#phone-gradient)" />
          <defs>
            <linearGradient id="phone-gradient" x1={x} y1={y} x2="295.437" y2="472.757" gradientUnits="userSpaceOnUse">
              <stop offset="0%" style={{ stopColor: '#FF69B4' }} />
              <stop offset="50%" style={{ stopColor: '#4B0082' }} />
              <stop offset="100%" style={{ stopColor: '#00CED1' }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0">
        <img className="object-cover w-full h-full opacity-50 bg-blend-multiply" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="pt-12 sm:pt-16 lg:py-36"
          >
            <motion.h2 
              variants={itemVariants} 
              className={`text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl ${gradientTextClass}`}
            >
              Become an early adopter of our app.
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-lg font-normal text-white sm:mt-6 sm:text-xl">
            Automate your entire training workflow—from agenda creation to testing—so you can focus on teaching, not logistics.
            </motion.p>

            <motion.p variants={itemVariants} className="mt-8 text-lg font-normal text-white sm:text-xl sm:mt-12">
              Join Adivirtus to:
            </motion.p>
            <motion.ul 
              variants={containerVariants} 
              className="mt-5 space-y-4"
            >
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start text-lg font-normal text-gray-300 transition-colors duration-200 hover:text-white"
              >
                <span className="mr-3 text-lg text-blue-500">✓</span>
                Reduce tedious admin work
              </motion.li>

              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start text-lg font-normal text-gray-300 transition-colors duration-200 hover:text-white"
              >
                <span className="mr-3 text-lg text-blue-500">✓</span>
                Reclaim valuable hours
              </motion.li>

              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start text-lg font-normal text-gray-300 transition-colors duration-200 hover:text-white"
              >
                <span className="mr-3 text-lg text-blue-500">✓</span>
                Deliver engaging, high-impact sessions
              </motion.li>
            </motion.ul>

            <motion.div 
              variants={containerVariants}
              className="flex flex-col items-center justify-center mt-8 space-y-5 md:mt-12 sm:flex-row sm:space-y-0 sm:space-x-5 sm:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex group"
              >
                <div className="absolute rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient-xy -inset-0.5 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative px-8 py-3 bg-black rounded-lg">
                  <span className="relative text-white font-medium">
                    Launching in April !
                  </span>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={phoneVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="self-end mt-12 lg:mt-0 relative"
          >
            <div className="absolute inset-0 transform scale-150">
              <svg className="filter blur-3xl" style={{ filter: 'blur(64px)' }} width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.781 217.613C285.977 122.809 136.428 134.004 231.232 39.2c94.804-94.804 495.712 1.312 590.516 96.116 94.804 94.804-152.396 152.395-247.2 247.199s-98.963-70.098-193.767-164.902Z" fill="url(#phone-gradient)" />
                <defs>
                  <linearGradient id="phone-gradient" x1={x} y1={y} x2="295.437" y2="472.757" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" style={{ stopColor: '#FF69B4' }} />
                    <stop offset="50%" style={{ stopColor: '#4B0082' }} />
                    <stop offset="100%" style={{ stopColor: '#00CED1' }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <motion.img 
              className="w-full max-w-sm mx-auto transform xl:translate-y-24 lg:max-w-none relative z-10"
              src="/App_Phone.png" 
              alt="Adivirtus App Interface"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
