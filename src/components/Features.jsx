import { motion } from "framer-motion";
import { IconAnalytics, IconRoadmap, IconBrain, IconPlatform, IconStyle, IconIntegration } from "./Icons"; // You'll need to create these icons

const Features = () => {
  const features = [
    {
      icon: <IconAnalytics className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "In-depth Need & Gap Analysis",
      description: "Uncover precise skill gaps with advanced data analytics, ensuring your training initiatives are spot on."
    },
    {
      icon: <IconRoadmap className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Personalized Learning Roadmaps",
      description: "Deliver tailor-made learning journeys that cater to each employee's unique needs and career goals."
    },
    {
      icon: <IconBrain className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "In-depth Skill Insights",
      description: "Gain deep, actionable insights into your team's competencies—often revealing strengths they weren't even aware of."
    },
    {
      icon: <IconPlatform className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Ultimate Learning Platform",
      description: "Experience a comprehensive, integrated environment that unifies all your corporate training efforts seamlessly."
    },
    {
      icon: <IconStyle className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Understanding User's Learning Style",
      description: "Leverage intelligent algorithms to adapt to individual learning preferences, accelerating progress and retention."
    },
    {
      icon: <IconIntegration className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Seamless LMS Integration",
      description: "Easily integrate with your existing LMS, ensuring a smooth transition and enhanced learning continuity."
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-black">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001132] to-black opacity-10" />
      
      {/* Refined animated lines - more subtle and elegant */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[0.5px] w-[200%] bg-gradient-to-r from-transparent via-[#2C7EFF]/5 to-transparent"
            style={{
              top: `${15 + (i * 18)}%`,
              left: '-50%',
              filter: 'blur(0.5px)',
            }}
            animate={{ x: ['0%', '100%'] }}
            transition={{
              duration: 18 + (i * 4),
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Refined Header with Apple-inspired typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.span 
            className="inline-block text-[#2C7EFF] text-xs font-medium tracking-[0.2em] uppercase mb-6 
                     relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:w-12 
                     after:h-[0.5px] after:bg-[#2C7EFF]/30 after:-translate-x-1/2"
            whileHover={{ letterSpacing: "0.25em" }}
            transition={{ duration: 0.3 }}
          >
            Features
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight max-w-4xl mx-auto"
            initial={{ backgroundPosition: "0% 50%" }}
            whileHover={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 1.5 }}
            style={{ backgroundSize: "200% auto" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Your One-Stop Platform for{' '}
            <span className="bg-gradient-to-r from-[#2C7EFF] via-[#47A2FF] to-[#2C7EFF] text-transparent bg-clip-text font-normal bg-size-200">
              Corporate Learning & Upskilling
            </span>
          </motion.h2>
        </motion.div>

        {/* Refined Feature Grid with Apple-inspired card design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative p-8 sm:p-10 rounded-3xl
                         bg-black/80 backdrop-blur-md
                         border border-white/[0.03]
                         shadow-[0_0_25px_rgba(0,0,0,0.2)]
                         overflow-hidden"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C7EFF]/[0.01] to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Subtle glow effect on hover */}
                <motion.div 
                  className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#2C7EFF]/5 to-transparent 
                            opacity-0 group-hover:opacity-100 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                />

                {/* Animated accent line */}
                <motion.div 
                  className="absolute h-[1px] w-0 bg-gradient-to-r from-transparent via-[#2C7EFF]/30 to-transparent top-0 left-0"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />

                {/* Content with refined spacing and animations */}
                <div className="relative z-10">
                  <motion.div 
                    className="text-[#2C7EFF] mb-7"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl font-light text-white mb-4 tracking-tight"
                    initial={{ backgroundPosition: "0% 50%" }}
                    whileHover={{ backgroundPosition: "100% 50%" }}
                    transition={{ duration: 0.8 }}
                    style={{ backgroundSize: "200% auto" }}
                    className="text-xl sm:text-2xl font-light mb-4 tracking-tight bg-gradient-to-r from-white via-white to-[#2C7EFF] bg-clip-text text-transparent bg-size-200"
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <p className="text-gray-400/90 text-sm sm:text-base leading-relaxed
                               group-hover:text-gray-300/90 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;