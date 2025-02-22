import { motion } from "framer-motion";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const HRDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  
  // Detailed skill data categorized
  const skillCategories = {
    technical: {
      title: "Technical Competencies",
      data: [
        { skill: "Programming", current: 85, target: 95, gap: 10, priority: "High", timeline: "Q2 2024" },
        { skill: "Data Analysis", current: 70, target: 90, gap: 20, priority: "Critical", timeline: "Q1 2024" },
        { skill: "Cloud Computing", current: 75, target: 85, gap: 10, priority: "Medium", timeline: "Q3 2024" },
        { skill: "DevOps", current: 65, target: 80, gap: 15, priority: "High", timeline: "Q2 2024" },
        { skill: "Security", current: 80, target: 90, gap: 10, priority: "Critical", timeline: "Q1 2024" }
      ]
    },
    soft: {
      title: "Soft Skills",
      data: [
        { skill: "Communication", current: 75, target: 90, gap: 15, priority: "High", timeline: "Q2 2024" },
        { skill: "Leadership", current: 70, target: 85, gap: 15, priority: "Medium", timeline: "Q3 2024" },
        { skill: "Problem Solving", current: 85, target: 95, gap: 10, priority: "High", timeline: "Q2 2024" },
        { skill: "Teamwork", current: 90, target: 95, gap: 5, priority: "Low", timeline: "Q4 2024" },
        { skill: "Adaptability", current: 80, target: 90, gap: 10, priority: "Medium", timeline: "Q3 2024" }
      ]
    },
    domain: {
      title: "Domain Knowledge",
      data: [
        { skill: "Industry Standards", current: 75, target: 90, gap: 15, priority: "High", timeline: "Q2 2024" },
        { skill: "Best Practices", current: 80, target: 95, gap: 15, priority: "Critical", timeline: "Q1 2024" },
        { skill: "Regulations", current: 85, target: 95, gap: 10, priority: "Critical", timeline: "Q1 2024" },
        { skill: "Market Trends", current: 70, target: 85, gap: 15, priority: "Medium", timeline: "Q3 2024" },
        { skill: "Tools & Platforms", current: 75, target: 90, gap: 15, priority: "High", timeline: "Q2 2024" }
      ]
    }
  };

  const getPriorityColor = (priority) => {
    const colors = {
      Critical: 'text-red-500',
      High: 'text-orange-500',
      Medium: 'text-yellow-500',
      Low: 'text-green-500'
    };
    return colors[priority] || 'text-gray-400';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/90 border border-[#2C7EFF]/20 rounded-lg p-4 backdrop-blur-xl">
          <h3 className="text-white font-medium mb-2">{label}</h3>
          {payload.map((entry, index) => (
            <div key={index} className="text-sm">
              <span className="text-gray-400">{entry.name}: </span>
              <span className="text-[#2C7EFF]">{entry.value}%</span>
            </div>
          ))}
          <div className="mt-2 pt-2 border-t border-white/10">
            <div className="text-sm">
              <span className="text-gray-400">Priority: </span>
              <span className={getPriorityColor(payload[0]?.payload?.priority)}>
                {payload[0]?.payload?.priority}
              </span>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Timeline: </span>
              <span className="text-[#2C7EFF]">{payload[0]?.payload?.timeline}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  // Calculate summary statistics
  const calculateStats = () => {
    const currentData = skillCategories[activeCategory].data;
    const avgCurrent = Math.round(
      currentData.reduce((acc, item) => acc + item.current, 0) / currentData.length
    );
    const avgGap = Math.round(
      currentData.reduce((acc, item) => acc + item.gap, 0) / currentData.length
    );
    const criticalSkills = currentData.filter(item => item.priority === 'Critical').length;
    return { avgCurrent, avgGap, criticalSkills };
  };

  const stats = calculateStats();

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001132] to-black opacity-20" />
      
      {/* Animated Lines */}
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
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF]" />
              <span className="text-[#2C7EFF] text-sm font-medium tracking-widest uppercase">
                HR Dashboard
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Empowering HR: Redefine{' '}
              <span className="bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text font-normal">
                Team Competency Management
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At the heart of our platform lies a revolutionary HR dashboard. Designed from an HR perspective, 
              it seamlessly consolidates individual skill assessments into a comprehensive team competency matrix.
            </motion.p>

            {/* Category Selection */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {Object.entries(skillCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  className={`p-4 rounded-xl text-sm font-medium transition-all duration-300
                            ${activeCategory === key 
                              ? 'bg-[#2C7EFF] text-white' 
                              : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                  onClick={() => setActiveCategory(key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.title}
                </motion.button>
              ))}
            </div>

            {/* Enhanced Summary Stats with Better Responsiveness - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* First Row */}
              <motion.div
                className="group p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#2C7EFF]/20 
                         transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-gray-400 text-sm">Average Score</h4>
                  <div className="flex flex-col items-end ml-2">
                    <span className="text-[#2C7EFF] text-[11px] sm:text-xs px-2 py-1 rounded-full bg-[#2C7EFF]/10 whitespace-nowrap">
                      +5% growth
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-500 mt-1">vs last quarter</span>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl sm:text-3xl text-white font-light">{stats.avgCurrent}%</span>
                  <span className="text-xs sm:text-sm text-gray-400 mb-1">of target</span>
                </div>
                <div className="mt-3 sm:mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stats.avgCurrent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <div className="mt-2 sm:mt-3 flex justify-between text-[11px] sm:text-xs text-gray-400">
                  <span>Previous: 73%</span>
                  <span>Target: 95%</span>
                </div>
              </motion.div>

              <motion.div
                className="group p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#2C7EFF]/20 
                         transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-gray-400 text-sm">Critical Skills</h4>
                  <div className="flex flex-col items-end ml-2">
                    <span className="text-red-500 text-[11px] sm:text-xs px-2 py-1 rounded-full bg-red-500/10 whitespace-nowrap">
                      Needs attention
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-500 mt-1">High priority</span>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl sm:text-3xl text-white font-light">{stats.criticalSkills}</span>
                  <span className="text-xs sm:text-sm text-gray-400 mb-1">skills flagged</span>
                </div>
                <div className="mt-3 sm:mt-4 grid grid-cols-5 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full ${
                        i < stats.criticalSkills ? 'bg-red-500' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center text-[11px] sm:text-xs">
                  <span className="text-gray-400 mb-1 sm:mb-0">Target: 0 critical skills</span>
                  <span className="text-red-500">+2 since last month</span>
                </div>
              </motion.div>

              {/* Second Row */}
              <motion.div
                className="group p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#2C7EFF]/20 
                         transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-gray-400 text-sm">Average Gap</h4>
                  <div className="flex flex-col items-end ml-2">
                    <span className="text-orange-500 text-[11px] sm:text-xs px-2 py-1 rounded-full bg-orange-500/10 whitespace-nowrap">
                      -2% from last quarter
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-500 mt-1">Improving trend</span>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl sm:text-3xl text-white font-light">{stats.avgGap}%</span>
                  <span className="text-xs sm:text-sm text-gray-400 mb-1">to target</span>
                </div>
                <div className="mt-3 sm:mt-4 flex items-center gap-2">
                  <div className="flex-1 h-1 bg-white/10 rounded-full">
                    <motion.div
                      className="h-full bg-orange-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stats.avgGap}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs text-gray-400 whitespace-nowrap">Target: 0%</span>
                </div>
                <div className="mt-2 sm:mt-3 grid grid-cols-3 gap-2 text-[11px] sm:text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Critical: 20%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span>High: 15%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Medium: 10%</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#2C7EFF]/20 
                         transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-gray-400 text-sm">Next Review</h4>
                  <div className="flex flex-col items-end ml-2">
                    <span className="text-[#2C7EFF] text-[11px] sm:text-xs px-2 py-1 rounded-full bg-[#2C7EFF]/10 whitespace-nowrap">
                      Scheduled
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-500 mt-1">Q1 2025</span>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl sm:text-3xl text-white font-light">8</span>
                  <span className="text-xs sm:text-sm text-gray-400 mb-1">reviews pending</span>
                </div>
                <div className="mt-3 sm:mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#2C7EFF]" />
                      <span className="text-gray-400">Critical Reviews</span>
                    </div>
                    <span className="text-[#2C7EFF] ml-2">3 pending</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] sm:text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-gray-400">Regular Reviews</span>
                    </div>
                    <span className="text-orange-500 ml-2">5 pending</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10">
                    <div className="flex justify-between items-center text-[11px] sm:text-xs text-gray-400">
                      <span>Next deadline</span>
                      <span className="text-[#2C7EFF] ml-2">Jan 15, 2025</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Dashboard */}
          <motion.div
            className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/10 backdrop-blur-xl pt-12 mt-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Bar Chart */}
            <div className="h-[400px] w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillCategories[activeCategory].data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#2C7EFF20" />
                  <XAxis 
                    dataKey="skill" 
                    tick={{ fill: '#9CA3AF' }}
                    stroke="#2C7EFF10"
                  />
                  <YAxis 
                    tick={{ fill: '#9CA3AF' }}
                    stroke="#2C7EFF10"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar 
                    dataKey="current" 
                    name="Current Level"
                    fill="#2C7EFF" 
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="target" 
                    name="Target Level"
                    fill="#47A2FF" 
                    radius={[4, 4, 0, 0]}
                    fillOpacity={0.3}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Enhanced Detailed Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {skillCategories[activeCategory].data.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-white text-sm font-medium">{skill.skill}</h4>
                      <span className={`text-xs ${getPriorityColor(skill.priority)}`}>
                        {skill.priority} Priority • {skill.timeline}
                      </span>
                    </div>
                    <span className="text-[#2C7EFF] text-sm">{skill.gap}% gap</span>
                  </div>
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mt-2">
                    <motion.div
                      className="absolute h-full bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.current}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <div 
                      className="absolute h-full bg-[#47A2FF] opacity-30"
                      style={{ width: `${skill.target}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HRDashboard; 