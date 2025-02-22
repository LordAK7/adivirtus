import { motion } from 'framer-motion';

const GrowthVelocityTracker = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 
        hover:border-[#2C7EFF]/20 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h4 className="text-gray-400 text-sm mb-1">Growth Velocity Tracker</h4>
          <p className="text-xs text-gray-500">Real-time skill progression analysis</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400 text-xs px-2 py-1 rounded-full bg-green-500/10">
            Accelerating
          </span>
          <motion.svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-green-400"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
            />
          </motion.svg>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { period: 'This Week', progress: 92, change: '+4.2%', velocity: 'High' },
          { period: 'This Month', progress: 78, change: '+12.8%', velocity: 'Accelerating' },
          { period: 'This Quarter', progress: 85, change: '+23.5%', velocity: 'Peak' }
        ].map((period, index) => (
          <div key={period.period} className="group/period">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-400">{period.period}</span>
                <span className="text-xs text-green-400">{period.change}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#2C7EFF]">{period.velocity}</span>
                <span className="text-sm text-white font-light">{period.progress}%</span>
              </div>
            </div>
            <div className="relative">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${period.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                  className="h-full bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF]"
                />
              </div>
              <motion.div
                className="absolute top-0 h-1 w-1 rounded-full bg-white"
                style={{ left: `${period.progress}%` }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-500/5 to-transparent border border-green-500/10">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">Learning Momentum</span>
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            <span className="text-sm text-green-400">Peak Performance</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GrowthVelocityTracker; 