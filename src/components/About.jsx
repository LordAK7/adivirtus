import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaChartLine, FaRoute, FaBrain } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: <FaBrain />,
      title: "Adaptive Assessments",
      description: "Smart evaluation systems that evolve with learner progress"
    },
    {
      icon: <FaRoute />,
      title: "Personalized Learning Paths",
      description: "Customized training journeys tailored to individual needs"
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Analytics",
      description: "Real-time insights to track and optimize learning outcomes"
    }
  ];

  return (
    <section ref={ref} className="relative bg-[#000000] overflow-hidden py-32 sm:py-40">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#001132] to-[#000000] opacity-40" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-16">
          {/* Header Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#2C7EFF] text-sm font-medium tracking-[0.2em] uppercase 
                             bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl font-light text-white leading-tight tracking-tight"
            >
              Empowering the{' '}
              <span className="bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text font-normal">
                future
              </span>
              {' '}of learning
            </motion.h2>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative pl-8 border-l border-[#2C7EFF]/30 max-w-4xl"
          >
            <div className="absolute left-0 top-0 w-[1px] h-full overflow-hidden">
              <motion.div 
                className="h-full w-full bg-gradient-to-b from-[#2C7EFF] to-[#47A2FF]"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <p className="mt-4 text-2xl text-gray-400 leading-relaxed max-w-2xl">
              Adivirtus AI is a cutting-edge corporate upskilling platform that leverages adaptive assessments, personalized learning paths, and data-driven analytics to help businesses future-proof their workforce.
            </p>
            <p className="mt-4 text-2xl text-gray-400 leading-relaxed max-w-2xl">
              By seamlessly integrating with existing systems and focusing on real-time feedback, Adivirtus AI empowers employees to master emerging skills, boosts organizational productivity, and drives innovation across teams.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-12 pt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="relative pl-8 border-l border-[#2C7EFF]/30"
              >
                <div className="absolute left-0 top-0 w-[1px] h-full overflow-hidden">
                  <motion.div 
                    className="h-full w-full bg-gradient-to-b from-[#2C7EFF] to-[#47A2FF]"
                    initial={{ y: "100%" }}
                    whileInView={{ y: "0%" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <div className="text-2xl text-[#2C7EFF] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
