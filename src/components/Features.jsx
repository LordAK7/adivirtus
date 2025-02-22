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
      {/* Refined gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001132] to-black opacity-20" />
      
      {/* Enhanced animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-[200%] bg-gradient-to-r from-transparent via-[#2C7EFF]/10 to-transparent"
            style={{
              top: `${20 + (i * 30)}%`,
              left: '-50%',
              filter: 'blur(1px)',
            }}
            animate={{ x: ['0%', '100%'] }}
            transition={{
              duration: 15 + (i * 5),
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.span 
            className="inline-block text-[#2C7EFF] text-sm font-medium tracking-widest uppercase mb-6 
                     relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full 
                     after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#2C7EFF]/50 
                     after:to-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Features
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            Your One-Stop Platform for{' '}
            <span className="bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text font-normal">
              Corporate Learning & Upskilling
            </span>
          </motion.h2>
        </motion.div>

        {/* Enhanced Feature Grid with Improved Responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-6 sm:p-8 rounded-2xl backdrop-blur-sm
                         transition-all duration-300
                         bg-gradient-to-b from-white/[0.03] to-transparent
                         border border-white/[0.05]
                         hover:border-[#2C7EFF]/20
                         hover:bg-[#2C7EFF]/[0.02]"
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#2C7EFF]/[0.03] to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glow effect */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#2C7EFF]/10 to-transparent 
                              opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

                {/* Content */}
                <div className="relative">
                  <div className="text-[#2C7EFF] mb-6 transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-3 sm:mb-4 tracking-tight
                               transition-colors duration-300 group-hover:text-[#2C7EFF]">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed
                               transition-colors duration-300 group-hover:text-gray-300">
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