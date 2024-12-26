import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Info = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1,
            scale: 1,
            transition: { 
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Add button animation variants
    const buttonVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: { 
            scale: 0.95,
            transition: {
                duration: 0.1
            }
        }
    };

    return (
      <section ref={ref} className="relative py-16 pb-32 mb-32 overflow-hidden bg-gradient-to-b from-black-900 to-gray-900 sm:py-20 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center lg:w-1/2 xl:w-2/5 lg:text-left lg:pr-8"
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg font-medium text-emerald-400 font-pj"
            >
              Join the waitlist
            </motion.p>

            <motion.h2 
              variants={itemVariants}
              className="mt-6 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj leading-tight"
            >
              Adivirtus helps you train faster
            </motion.h2>
  
            <motion.ul 
              variants={containerVariants}
              className="mt-8 space-y-5 lg:mt-16"
            >
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center justify-center text-white lg:justify-start hover:scale-105 transition-transform"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      className="w-6 h-6 text-emerald-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.div>
                  <span className="ml-3 text-lg font-bold font-pj">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
  
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center mt-8 lg:justify-start sm:justify-center sm:flex-row lg:mt-16"
            >
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  href="#time"
                  variant="primary"
                  className="animate-glow"
                >
                  Contact us for more Info
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
  
        <motion.div 
          initial={{ x: 200, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:absolute lg:bottom-0 lg:right-0 lg:translate-x-1/2 xl:translate-x-1/3 2xl:translate-x-1/4"
        >
          <div className="relative max-w-full lg:max-w-[800px]">
            <div className="absolute -inset-2">
              <div
                className="w-full h-full mx-auto opacity-30 blur-lg filter animate-pulse"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              />
            </div>
  
            <div className="relative">
              <div className="aspect-w-16 aspect-h-8 lg:aspect-none lg:h-[500px] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="object-cover object-top w-full rounded-lg shadow-2xl 
                    sm:max-w-xl md:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl"
                  src="/Main.png"
                  alt="Main illustration"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
};
  
// Separate Button component for reusability
const Button = ({ href, variant = "primary", children, className = "" }) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-bold transition-all duration-200 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white relative overflow-hidden";
    
    const variants = {
      primary: `w-48 sm:w-auto bg-white text-gray-900 border-2 border-transparent hover:bg-opacity-90 rounded-xl 
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-400 before:to-emerald-600 
        before:opacity-0 before:transition-opacity hover:before:opacity-20 ${className}`,
      secondary: "w-48 sm:w-auto text-white border-2 border-gray-400 rounded-xl hover:bg-white focus:bg-white hover:text-gray-900 focus:text-gray-900 hover:border-white focus:border-white mt-5 sm:mt-0"
    };
  
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]}`} role="button">
        <span className="relative z-10">{children}</span>
      </a>
    );
  };
  
  // Features data
  const features = [
    "Dynamic analytics",
    "Clear performance insights",
    "Pinpoint skill gaps"
  ];
  
  export default Info;