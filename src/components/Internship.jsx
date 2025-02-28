import { motion } from 'framer-motion';
import { useState } from 'react';

const internshipPositions = [
  {
    id: 'software-dev',
    title: 'Software Development Intern (Python/Django)',
    description: 'Assist in building and maintaining web applications using Django and Python.',
    requirements: [
      'Proficiency in Python programming.',
      'Experience with the Django framework.',
      'Familiarity with libraries such as PyTorch and NumPy.',
      'Ability to integrate and utilize Large Language Model (LLM) APIs.'
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3m8-3v3a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 10h2v4h-2v-4z" fill="currentColor"/>
        <path d="M9 10h2v4H9v-4z" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: 'ml-data',
    title: 'Machine Learning/Data Science Intern',
    description: 'Contribute to the development and optimization of machine learning models and data analysis processes.',
    requirements: [
      'Strong foundation in statistics and machine learning algorithms.',
      'Proficiency in Python and relevant libraries (e.g., PyTorch, NumPy, pandas).',
      'Experience with data preprocessing, model training, and evaluation.',
      'Ability to collaborate with cross-functional teams to integrate AI solutions.'
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 9h6m-6 3h6m-6 3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design Intern',
    description: 'Design intuitive and aesthetically pleasing user interfaces to enhance user experience.',
    requirements: [
      'Proficiency in design tools such as Figma.',
      'Strong understanding of UI/UX principles and best practices.',
      'Ability to create wireframes, prototypes, and high-fidelity designs.',
      'Keen eye for detail and aesthetics.'
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.5v15m7.5-7.5h-15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 9a3 3 0 100-6 3 3 0 000 6zm0 12a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 'frontend',
    title: 'Front-End Development Intern',
    description: 'Develop responsive and dynamic user interfaces using modern web technologies.',
    requirements: [
      'Proficiency in React.js.',
      'Experience with Tailwind CSS for styling.',
      'Familiarity with animation libraries such as Framer Motion.',
      'Strong understanding of responsive design and cross-browser compatibility.'
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m-10 1l-2-1M4 7l2 1m.5 10l-2 1 2-1zm15 1l-2-1 2 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4v4m0 12v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development Intern',
    description: 'Work on both front-end and back-end components to build comprehensive web applications.',
    requirements: [
      'Proficiency in front-end technologies (e.g., React.js, Tailwind CSS).',
      'Experience with back-end frameworks, preferably Django.',
      'Understanding of RESTful API design and implementation.',
      'Ability to manage databases (e.g., PostgreSQL, MySQL) and perform CRUD operations.'
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design Intern',
    description: 'Create visually compelling graphics to support marketing and product initiatives.',
    requirements: [
      'Proficiency in Adobe Photoshop and Lightroom.',
      'Strong aesthetic design sense with attention to detail.',
      'Ability to collaborate with cross-functional teams to deliver cohesive visual content.',
      'Experience with other Adobe Creative Suite applications is a plus.'
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4v2m0 12v2M4 12h2m12 0h2m-4.5-7.5l1.5-1.5m-9 9l1.5-1.5m6 0l1.5 1.5m-9-9l1.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  }
];

const Internship = () => {
  const [activePosition, setActivePosition] = useState(null);
  const [hoverPosition, setHoverPosition] = useState(null);

  return (
    <section className="relative pt-32 pb-24 bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2C7EFF]/10 rounded-full filter blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#47A2FF]/10 rounded-full filter blur-[80px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-2/3 right-1/4 w-72 h-72 bg-[#2C7EFF]/5 rounded-full filter blur-[90px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-16">
          {/* Header Section */}
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#2C7EFF] text-sm font-medium tracking-[0.2em] uppercase 
                             bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text">
                Join Our Team
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl font-light text-white leading-tight tracking-tight"
            >
              Internship{' '}
              <motion.span 
                className="bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text font-normal inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 100%' }}
              >
                Opportunities
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              Join our innovative team and help shape the future of corporate learning and upskilling.
              We're looking for talented individuals who are passionate about making a difference.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center"
            >
              <div className="h-px w-24 bg-gradient-to-r from-[#2C7EFF] to-transparent"></div>
            </motion.div>
          </div>

          {/* Internship Positions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`group p-6 rounded-2xl border transition-all duration-300 backdrop-blur-sm cursor-pointer
                  ${activePosition === position.id 
                    ? 'bg-[#2C7EFF]/10 border-[#2C7EFF]/30 shadow-lg shadow-[#2C7EFF]/5' 
                    : 'bg-white/[0.02] border-white/10 hover:border-[#2C7EFF]/20 hover:shadow-lg hover:shadow-[#2C7EFF]/5'}`}
                onClick={() => setActivePosition(activePosition === position.id ? null : position.id)}
                onMouseEnter={() => setHoverPosition(position.id)}
                onMouseLeave={() => setHoverPosition(null)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className={`p-3 rounded-xl transition-colors duration-300
                      ${activePosition === position.id 
                        ? 'bg-[#2C7EFF]/20 text-[#2C7EFF]' 
                        : 'bg-white/5 text-gray-400 group-hover:text-[#2C7EFF]'}`}
                    animate={hoverPosition === position.id ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {position.icon}
                  </motion.div>
                  <h3 className="text-lg font-medium text-white">{position.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-4">{position.description}</p>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activePosition === position.id ? 'auto' : 0,
                    opacity: activePosition === position.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <h4 className="text-[#2C7EFF] font-medium mb-2 mt-4">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * idx }}
                      >
                        <motion.span 
                          className="text-[#2C7EFF] mt-1"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, delay: 0.2 * idx, repeat: Infinity, repeatDelay: 5 }}
                        >
                          •
                        </motion.span>
                        <span className="text-gray-400 text-sm">{req}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Remote / Hybrid</span>
                  <motion.span 
                    className="text-[#2C7EFF] text-sm flex items-center gap-1"
                    animate={{ x: activePosition === position.id ? 0 : 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activePosition === position.id ? 'View Less' : 'View More'}
                    <motion.svg 
                      className={`w-4 h-4 transition-transform duration-300 ${activePosition === position.id ? 'rotate-180' : ''}`} 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                      animate={hoverPosition === position.id && activePosition !== position.id ? { x: [0, 3, 0] } : {}}
                      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Application Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center text-center space-y-8 mt-8"
          >
            <div className="max-w-2xl">
              <h3 className="text-2xl font-light text-white mb-4">Ready to start your journey with us?</h3>
              <p className="text-gray-400 mb-6">
                Submit your application today and take the first step towards an exciting career in technology.
                We're looking for passionate individuals who are eager to learn and grow with us.
              </p>
              
              {/* Application Instructions Card */}
              <motion.div 
                className="bg-gradient-to-br from-[#2C7EFF]/10 to-[#47A2FF]/5 p-6 rounded-xl border border-[#2C7EFF]/20 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ boxShadow: "0 0 20px 0 rgba(44, 126, 255, 0.2)" }}
              >
                <h4 className="text-[#2C7EFF] font-medium mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Application Instructions
                </h4>
                <ul className="text-left space-y-3">
                  <motion.li 
                    className="flex items-start gap-2 text-gray-300"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                  >
                    <span className="text-[#2C7EFF] font-bold mt-1">1.</span>
                    <span>Complete the application form with your contact information</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-2 text-gray-300"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 }}
                  >
                    <span className="text-[#2C7EFF] font-bold mt-1">2.</span>
                    <span>Include your <span className="text-white font-medium">LinkedIn profile URL</span> for professional background</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-2 text-gray-300"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                  >
                    <span className="text-[#2C7EFF] font-bold mt-1">3.</span>
                    <span>Attach your <span className="text-white font-medium">resume</span> and links to <span className="text-white font-medium">recent projects</span></span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-2 text-gray-300"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                  >
                    <span className="text-[#2C7EFF] font-bold mt-1">4.</span>
                    <span>Write a brief explanation of <span className="text-white font-medium">why you want to join</span> and how you can contribute</span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
            
            <motion.a
              href="https://forms.gle/mFgKLy1GNS74tHML8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(44, 126, 255, 0.9)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ boxShadow: "0 0 0 0 rgba(44, 126, 255, 0.5)" }}
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(44, 126, 255, 0.5)", "0 0 0 10px rgba(44, 126, 255, 0)", "0 0 0 0 rgba(44, 126, 255, 0)"],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="px-10 py-4 bg-[#2C7EFF] rounded-full text-white font-medium tracking-wide
                       transition-all duration-300 hover:shadow-lg hover:shadow-[#2C7EFF]/20
                       flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Apply Now</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </motion.a>
            
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="h-px w-12 bg-gray-800" />
              <span>Applications are reviewed on a rolling basis</span>
              <div className="h-px w-12 bg-gray-800" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Internship; 