import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Vision = () => {
  const [showVideo, setShowVideo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowVideo(false);
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains('video-overlay')) {
        setShowVideo(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col lg:flex-row items-center justify-center bg-black p-6 lg:p-10 pb-16 lg:pb-20 max-w-7xl mx-auto"
      >
        {/* Vision Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-[#3B5BDB] text-white p-8 lg:p-10 rounded-2xl shadow-xl flex-1 lg:mr-8 transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/20 before:to-transparent"
        >
          <div className="max-w-xl relative">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold mb-6 tracking-tight flex items-center"
            >
              OUR VISION
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-base mb-4 leading-relaxed opacity-90 font-bold hover:opacity-100 transition-opacity duration-300 relative before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-white/10 before:rounded-full pl-4"
            >
              Our vision at Adivirtus is to bridge the gap between personalized learning and workforce efficiency. By leveraging AI-driven static and dynamic profiling, we aim to empower individuals and businesses to unlock their full potential. We're here to solve real-world challenges with innovative, scalable solutions.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-base mb-8 leading-relaxed opacity-90 font-bold hover:opacity-100 transition-opacity duration-300 relative before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-white/10 before:rounded-full pl-4"
            >
              Building the future of corporate training.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-between mt-auto relative"
            >
              <div className="group">
                <span className="text-6xl font-bold tracking-tight">05</span>
                <div className="mt-2">
                  <span className="text-sm opacity-90">We have</span>
                  <span className="block text-sm opacity-90">Years of experience</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  const teamSection = document.getElementById('team');
                  teamSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center text-sm hover:opacity-80 group transition-all duration-300"
              >
                <span className="group-hover:mr-4 transition-all duration-300">Meet the Team</span>
                <span className="transform group-hover:translate-x-2 transition-all duration-300">⟶</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Image/Video Section */}
        <motion.div 
          variants={itemVariants}
          className="relative flex-1 mt-8 lg:mt-0 w-full"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src="https://i3.ytimg.com/vi/cBsHFf5VGOw/maxresdefault.jpg"
              alt="Break the Cage Podcast"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
            />
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg z-20 hover:bg-opacity-90 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-white/30 before:scale-150 before:opacity-0 hover:before:scale-125 hover:before:opacity-100 before:transition-all"
              aria-label="Play video"
            >
              <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-transparent border-l-blue-600 ml-2 group-hover:border-l-blue-700" />
            </motion.button>
            
            <motion.div 
              variants={itemVariants}
              className="absolute bottom-4 left-4 text-white z-20"
            >
              <p className="text-sm font-medium tracking-wide">Watch Our Story</p>
              <div className="flex items-center mt-1">
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <p className="text-xs opacity-80 ml-2">03:45 mins</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center video-overlay backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl mx-4 aspect-video relative"
          >
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/cBsHFf5VGOw?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Vision;
