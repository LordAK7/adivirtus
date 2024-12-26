import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Time = () => {
  const [rotation, setRotation] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  const containerScale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
  const containerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const clockScale = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);
  const clockOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const clockRotate = useTransform(scrollYProgress, [0, 0.3], [-20, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    let startTime = performance.now();
    let animationPhase = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      
      if (elapsed > 3000 && animationPhase === 0) {
        animationPhase = 1;
      } else if (elapsed > 4000 && animationPhase === 1) {
        animationPhase = 2;
      } else if (elapsed > 6000 && animationPhase === 2) {
        animationPhase = 3;
      }

      let currentSpeed;
      switch (animationPhase) {
        case 0:
          currentSpeed = 0.5;
          break;
        case 1:
          currentSpeed = 4;
          break;
        case 2:
          currentSpeed = 2;
          break;
        default:
          currentSpeed = 1;
      }

      setSpeed(currentSpeed);
      setRotation(prev => (prev + currentSpeed) % 360);
      requestAnimationFrame(animate);
    };
    
    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <motion.div 
      className="bg-black py-20 relative overflow-hidden"
      style={{
        scale: containerScale,
        opacity: containerOpacity
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute top-0 left-0 w-1/3 h-full bg-orange-500/20 blur-[100px] transform -rotate-45"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-1/3 h-full bg-blue-500/20 blur-[100px] transform rotate-45"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-1/4 h-full bg-purple-500/10 blur-[120px] transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="relative w-72 h-72 group"
            style={{
              scale: clockScale,
              opacity: clockOpacity,
              rotate: clockRotate
            }}
            whileHover={{ 
              scale: isHovering ? 1.05 : 1,
              transition: { duration: 0.3 }
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 blur-[2px]" />
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-8 border-gray-700 shadow-xl">
              <div className="absolute inset-2 rounded-full border border-gray-700/50" />
              
              <div className="absolute inset-0 rounded-full">
                {[...Array(60)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-full"
                    style={{ transform: `rotate(${i * 6}deg)` }}
                  >
                    <div 
                      className={`w-0.5 mx-auto bg-gray-600 transform -translate-y-1
                        ${i % 5 === 0 ? 'h-3 bg-gray-400' : 'h-1.5'}`}
                      style={{ marginTop: '4px' }}
                    />
                  </div>
                ))}

                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-full"
                    style={{ transform: `rotate(${i * 30}deg)` }}
                  >
                    <div 
                      className="text-gray-400 text-sm font-medium absolute w-full"
                      style={{ 
                        transform: `rotate(-${i * 30}deg)`,
                        top: '12px',
                        textAlign: 'center'
                      }}
                    >
                      {i === 0 ? '12' : i}
                    </div>
                  </div>
                ))}
                
                <div className="absolute inset-0">
                  <div 
                    className="w-2 h-14 bg-gradient-to-b from-white via-white to-gray-300 mx-auto rounded-full origin-bottom absolute left-1/2 bottom-1/2 shadow-lg"
                    style={{ 
                      transform: `translateX(-50%) rotate(${rotation / 12}deg)`,
                    }}
                  />
                  <div 
                    className="w-1.5 h-20 bg-gradient-to-b from-white via-white to-gray-300 mx-auto rounded-full origin-bottom absolute left-1/2 bottom-1/2 shadow-lg"
                    style={{ 
                      transform: `translateX(-50%) rotate(${rotation}deg)`,
                    }}
                  />
                  <div 
                    className="w-0.5 h-24 mx-auto origin-bottom absolute left-1/2 bottom-1/2"
                    style={{ 
                      transform: `translateX(-50%) rotate(${rotation * speed * 6}deg)`,
                    }}
                  >
                    <div className="w-full h-full bg-red-500" />
                    <div className="absolute -bottom-4 left-1/2 w-3 h-3 bg-red-500 rounded-full -translate-x-1/2" />
                  </div>
                </div>
              </div>

              <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeDasharray="301.59"
                  strokeDashoffset="100"
                  filter="url(#glow)"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: 'center',
                  }}
                />
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-gray-600" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-gray-800 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-xl font-mono
              transition-all duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
              {formatTime(currentTime)}
            </div>

            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: isHovering 
                  ? '0 0 50px rgba(59,130,246,0.5)' 
                  : '0 0 0px rgba(59,130,246,0)'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div 
            className="text-center md:text-left md:flex-1"
            style={{
              y: textY,
              opacity: textOpacity
            }}
          >
            <motion.h2 
              className="text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Time Waits for No One
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Every second counts in your journey towards success. 
              Don't let time slip away – make it count by working with Adivirtus's innovative team.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a 
                href="https://forms.gle/croLBVjbvxSXVv3y6"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire me
              </motion.a>
              <motion.a 
                href="mailto:adityatinkercad@gmail.com"
                className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contact us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Time;
