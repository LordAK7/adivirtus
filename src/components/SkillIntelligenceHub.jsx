import { motion } from 'framer-motion';

const SkillIntelligenceHub = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 
        hover:border-[#2C7EFF]/20 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h4 className="text-gray-400 text-sm mb-1">Skill Intelligence Hub</h4>
          <p className="text-xs text-gray-500">AI-powered skill analysis and predictions</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#2C7EFF] text-xs px-2 py-1 rounded-full bg-[#2C7EFF]/10">
            Live Analysis
          </span>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#2C7EFF]"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 mb-2">
            <motion.div
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(44, 126, 255, 0.2)', '0 0 0 10px rgba(44, 126, 255, 0)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-[#2C7EFF]/20"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#2C7EFF] transform translate-x-[3px] translate-y-[3px]" />
            </motion.div>
            <span className="text-xs text-gray-400">Accuracy</span>
          </div>
          <span className="text-2xl text-white font-light">99.8%</span>
          <span className="text-xs text-green-400 mt-1">↑ 2.3% this month</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-purple-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 transform translate-x-[3px] translate-y-[3px]" />
            </div>
            <span className="text-xs text-gray-400">Data Points</span>
          </div>
          <span className="text-2xl text-white font-light">8.2M</span>
          <span className="text-xs text-purple-400 mt-1">+240K new entries</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-orange-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 transform translate-x-[3px] translate-y-[3px]" />
            </div>
            <span className="text-xs text-gray-400">AI Models</span>
          </div>
          <span className="text-2xl text-white font-light">16</span>
          <span className="text-xs text-orange-400 mt-1">Latest: GPT-4</span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-r from-[#2C7EFF]/5 to-transparent border border-[#2C7EFF]/10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-400">AI Confidence Score</span>
          <span className="text-sm text-[#2C7EFF]">98.6%</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "98.6%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillIntelligenceHub; 