import { motion } from 'framer-motion';
import { AlertTriangle, ArrowUp, Target } from 'lucide-react';

const GapMetrics = ({ data, className }) => {
  const getGapSeverity = (currentLevel, targetLevel) => {
    const gap = targetLevel - currentLevel;
    if (gap <= 15) return { label: 'Minor Gap', color: 'yellow' };
    if (gap <= 30) return { label: 'Moderate Gap', color: 'orange' };
    return { label: 'Critical Gap', color: 'red' };
  };

  const getPriorityBadge = (isPriority) => {
    if (!isPriority) return null;
    return (
      <span className="px-2 py-0.5 text-xs font-medium bg-red-500/20 text-red-400 rounded-full border border-red-500/20">
        High Priority
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`bg-gradient-to-br from-[#111111]/95 via-[#141414]/98 to-[#111111]/95 
        backdrop-blur-xl border border-gray-800/30 rounded-xl p-6 ${className}`}
    >
      <h3 className="text-lg font-semibold text-white/95 mb-4">Skills Gap Analysis</h3>
      <div className="h-[calc(100%-3rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-800 space-y-4">
        {data.map((skill) => {
          const gapSeverity = getGapSeverity(skill.proficiency, skill.targetLevel);
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 bg-[#1A1A1A]/50 rounded-lg border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </h4>
                    {getPriorityBadge(skill.highPriority)}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full bg-${gapSeverity.color}-500/20 text-${gapSeverity.color}-400 border border-${gapSeverity.color}-500/20`}>
                    {gapSeverity.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Target className="w-4 h-4 text-[#2C7EFF]" />
                  <span className="text-[#2C7EFF] font-medium">
                    Target: {skill.targetLevel}%
                  </span>
                </div>
              </div>

              <div className="relative h-4 bg-gray-800/50 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-[#2C7EFF]/30 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                />
                <div
                  className="absolute h-full border-r-2 border-[#2C7EFF] transition-all duration-300"
                  style={{ left: `${skill.targetLevel}%` }}
                />
              </div>

              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-gray-400">Current: {skill.proficiency}%</span>
                <div className="flex items-center gap-1 text-[#2C7EFF]">
                  <ArrowUp className="w-3 h-3" />
                  <span>Gap: {skill.targetLevel - skill.proficiency}%</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default GapMetrics; 