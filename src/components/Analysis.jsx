import { motion } from "framer-motion";

const Analysis = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-12 bg-black overflow-hidden sm:py-16 lg:py-20 xl:py-24"
    >
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/30 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
              <span className="text-gray-400 uppercase text-sm tracking-wider">Analytics Platform</span>
            </motion.div>

            <motion.h2 
              className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Analysis Data
            </motion.h2>

            <motion.p 
              className="mt-8 text-xl font-normal text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 animate-gradient">
                Keep control on your trainings.
              </span>{" "}
              Don't waste time on tracking.
            </motion.p>

            <motion.p 
              className="mt-8 text-lg font-normal text-gray-400"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Automate your entire training workflow—from agenda creation to testing—so you can focus on teaching, not logistics.
              Reduce tedious admin work and reclaim valuable hours to deliver engaging, high-impact sessions.
            </motion.p>

            {/* Feature list */}
            <motion.div 
              className="mt-10 space-y-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                "Real-time data analysis",
                "Advanced employee tracking",
                "AI-powered insights",
                "Custom reporting"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0">
              <svg
                className="filter blur-3xl"
                style={{ filter: "blur(64px)" }}
                width="343"
                height="339"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M158.612 289.158C68.377 300.506 12.834 390.699.684 294.077-11.467 197.455 205.537 12.391 295.772 1.043c90.236-11.347 19.532 155.318 31.683 251.94 12.151 96.622-78.607 24.828-168.843 36.175Z"
                  fill="url(#a)"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1="335.877"
                    y1="-4"
                    x2="338.499"
                    y2="338.656"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" style={{ stopColor: "var(--color-cyan-500)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--color-purple-500)" }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full mx-auto rounded-xl shadow-2xl"
              src="/Training_data.png"
              alt="Analytics Dashboard"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Analysis;
