import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Resource = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-8 bg-[#3C61E0] bg-gradient-to-b from-[#3C61E0] via-[#3C61E0]/90 to-black sm:py-12"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          variants={itemVariants}
          className="max-w-6xl mx-auto overflow-hidden bg-gradient-to-br from-[#1a1f35] to-black rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
        >
          <div className="p-8 sm:p-10">
            <motion.div 
              variants={itemVariants}
              className="mb-10 p-5 rounded-2xl bg-[#0d1117]/80"
            >
              <h2 className="text-3xl font-bold text-white">
                Panel Discussion Insights, At NMIMS 
              </h2>
              <p className="mt-2 text-lg font-medium text-white/70">
                Exclusive content creation strategies using AI
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
              <div className="md:w-1/3">
                <div className="relative group">
                  <img 
                    className="relative object-cover w-full h-auto rounded-2xl shadow-lg transition duration-500 group-hover:scale-[1.02] group-hover:shadow-xl" 
                    src="/Team/MiniGod.png" 
                    alt="Founder at Panel Discussion" 
                  />
                </div>

                <motion.div 
                  variants={itemVariants}
                  className="mt-6"
                >
                  <a
                    href="/AI.ContentCreation.pdf"
                    download
                    className="relative inline-flex items-center justify-center w-full px-6 py-4 text-base font-semibold 
                    text-white bg-[#1a1f35] rounded-xl 
                    hover:bg-[#252b47] transition-all duration-300
                    shadow-[0_0_20px_rgba(60,97,224,0.3)]
                    hover:shadow-[0_0_30px_rgba(60,97,224,0.5)]
                    before:absolute before:inset-0
                    before:p-[2px]
                    before:bg-gradient-to-r before:from-[#ff0000] before:via-[#00ff00] before:to-[#0000ff]
                    before:rounded-xl
                    before:content-['']
                    before:animate-[border-rotate_3s_linear_infinite]
                    before:-z-10
                    hover:before:bg-gradient-to-r 
                    hover:before:from-[#ff0000] hover:before:via-[#00ff00] hover:before:to-[#0000ff]
                    overflow-hidden"
                    role="button"
                  >
                    DOWNLOAD PDF GUIDE
                  </a>
                </motion.div>
              </div>

              <div className="mt-8 md:mt-0 md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-6">
                  AI Content Creation Guide
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <motion.li 
                    variants={itemVariants}
                    className="flex flex-col space-y-2 p-5 rounded-2xl bg-[#0d1117]/80"
                  >
                    <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">PRESENTED BY:</p>
                    <p className="text-lg font-semibold text-white">Aditya Vijay Kamble</p>
                  </motion.li>

                  <motion.li 
                    variants={itemVariants}
                    className="flex flex-col space-y-2 p-5 rounded-2xl bg-[#0d1117]/80"
                  >
                    <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">EVENT:</p>
                    <p className="text-lg font-semibold text-white">Future Trends in Digital Careers</p>
                  </motion.li>
                </ul>

                <motion.div 
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-[#0d1117]/80"
                >
                  <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">OVERVIEW:</p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    During a recent panel discussion, our founder shared valuable insights on leveraging AI for content creation. 
                    We've compiled these strategies into a comprehensive guide to help you navigate the AI-driven content landscape effectively.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resource;
