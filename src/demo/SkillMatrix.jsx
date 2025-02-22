import { motion, AnimatePresence } from 'framer-motion';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { useState, useMemo, useEffect } from 'react';
import { FaLayerGroup } from 'react-icons/fa';
import SkillIntelligenceHub from '../components/SkillIntelligenceHub';
import GrowthVelocityTracker from '../components/GrowthVelocityTracker';

const SkillIcons = {
  technical: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  leadership: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4H8V6H16V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 9H17L19 18H5L7 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  communication: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  problemSolving: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3V7M12 17V21M21 12H17M7 12H3M18.364 5.636L15.536 8.464M8.464 15.536L5.636 18.364M18.364 18.364L15.536 15.536M8.464 8.464L5.636 5.636" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  innovation: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  levelUp: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2" 
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const radarVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0 
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1
    }
  }
};

/**
 * Skill Matrix Pentagon Areas:
 * 
 * 1. Technical Skills (System Architecture, Coding, Cloud)
 *    - Current: Represents your current technical proficiency
 *    - Growth: How much you've improved recently
 *    - Industry Average: The standard level in the industry
 *    - Top Percentile: The highest achievers in this area
 * 
 * 2. Leadership (Team Management, Decision Making, Strategy)
 *    - Current: Your current leadership capabilities
 *    - Growth: Recent improvement in leadership skills
 *    - Industry Average: Standard leadership level
 *    - Top Percentile: Top leadership performers
 * 
 * 3. Communication (Team Collaboration, Documentation, Presentation)
 *    - Current: Your communication effectiveness
 *    - Growth: Recent improvement in communication
 *    - Industry Average: Standard communication level
 *    - Top Percentile: Top communicators
 * 
 * 4. Problem Solving (Analysis, Solutions, Critical Thinking)
 *    - Current: Your problem-solving ability
 *    - Growth: Recent improvement in problem solving
 *    - Industry Average: Standard problem-solving level
 *    - Top Percentile: Top problem solvers
 * 
 * 5. Innovation (Creativity, New Ideas, Implementation)
 *    - Current: Your innovation capabilities
 *    - Growth: Recent improvement in innovation
 *    - Industry Average: Standard innovation level
 *    - Top Percentile: Top innovators
 */

const skillAreas = {
  technical: {
    name: 'Technical Skills',
    metrics: {
      current: 85, // Current proficiency (0-100)
      growth: 15,  // Recent growth percentage
      industryAvg: 72, // Industry average (0-100)
      industryTop: 92, // Top percentile (0-100)
    },
    details: {
      components: ['System Architecture', 'Coding Practices', 'Cloud Infrastructure'],
      nextMilestone: 90,
      timeToNext: '3 months',
      criticalGaps: ['Cloud Native', 'ML/AI'],
      focusAreas: ['System Design', 'Cloud Architecture', 'API Development']
    }
  },
  leadership: {
    name: 'Leadership',
    metrics: {
      current: 70,
      growth: 8,
      industryAvg: 75,
      industryTop: 85,
    },
    details: {
      components: ['Team Management', 'Decision Making', 'Strategic Planning'],
      nextMilestone: 75,
      timeToNext: '6 months',
      criticalGaps: ['Leadership Training', 'Team Dynamics'],
      focusAreas: ['Team Management', 'Leadership Skills', 'Conflict Resolution']
    }
  },
  communication: {
    name: 'Communication',
    metrics: {
      current: 82,
      growth: 12,
      industryAvg: 78,
      industryTop: 88,
    },
    details: {
      components: ['Team Collaboration', 'Documentation', 'Presentation'],
      nextMilestone: 85,
      timeToNext: '4 months',
      criticalGaps: ['Active Listening', 'Conflict Resolution'],
      focusAreas: ['Team Collaboration', 'Active Listening', 'Conflict Management']
    }
  },
  problemSolving: {
    name: 'Problem Solving',
    metrics: {
      current: 78,
      growth: 5,
      industryAvg: 75,
      industryTop: 85,
    },
    details: {
      components: ['Analysis', 'Solution Design', 'Critical Thinking'],
      nextMilestone: 95,
      timeToNext: '5 months',
      criticalGaps: ['Analytical Framework', 'Data-Driven Decision Making'],
      focusAreas: ['Data Analysis', 'Decision Making', 'Problem Identification']
    }
  },
  innovation: {
    name: 'Innovation',
    metrics: {
      current: 65,
      growth: 10,
      industryAvg: 70,
      industryTop: 80,
    },
    details: {
      components: ['Creativity', 'New Ideas', 'Implementation'],
      nextMilestone: 80,
      timeToNext: '2 months',
      criticalGaps: ['Idea Generation', 'Risk Management'],
      focusAreas: ['Idea Development', 'Risk Assessment', 'Creative Thinking']
    }
  }
};

const SkillMatrix = ({ skills }) => {
  const [activeView, setActiveView] = useState('all');

  const CHART_COLORS = {
    all: {
      stroke: '#2C7EFF',
      gradient: [
        { offset: '0%', color: '#2C7EFF', opacity: 0.9 },
        { offset: '50%', color: '#2563eb', opacity: 0.7 },
        { offset: '100%', color: '#1d4ed8', opacity: 0.5 }
      ]
    },
    current: {
      stroke: '#2C7EFF',
      gradient: [
        { offset: '0%', color: '#2C7EFF', opacity: 0.9 },
        { offset: '50%', color: '#2563eb', opacity: 0.7 },
        { offset: '100%', color: '#1d4ed8', opacity: 0.5 }
      ]
    },
    industry: {
      stroke: '#ffffff',
      fill: '#ffffff',
      opacity: 0.25
    },
    top: {
      stroke: '#ef4444',
      fill: '#ef4444',
      opacity: 0.2
    }
  };

  const viewOptions = [
    { id: 'all', label: 'All', color: '#2C7EFF' },
    { id: 'current', label: 'Current', color: '#2C7EFF' },
    { id: 'industry', label: 'Industry', color: '#ffffff' },
    { id: 'top', label: 'Top', color: '#ef4444' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const skill = data.find(item => item.subject === payload[0].payload.subject);
      return (
        <motion.div 
          initial={{ opacity: 0, y: 5, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gradient-to-br from-[#0A0A0A]/98 via-[#111111]/99 to-[#141414]/97 
            backdrop-blur-xl p-6 rounded-xl border border-gray-800/40 shadow-2xl"
          style={{ width: '420px' }}
        >
          {/* Header with Skill Icon and Title */}
          <div className="flex items-center space-x-3 mb-5">
            <div className="p-2.5 bg-gradient-to-br from-[#2C7EFF]/15 to-[#2C7EFF]/5 
              rounded-lg border border-[#2C7EFF]/20 shadow-lg shadow-[#2C7EFF]/5">
              <div className="text-[#2C7EFF] w-5 h-5">
                {SkillIcons[skill.icon]}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-lg text-white/95">{skill.subject}</h4>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-[#2C7EFF]">{skill.proficiencyLevel}</span>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-green-400">{skill.learningVelocity} Velocity</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400/90 mb-5 min-h-[40px] leading-relaxed">
            {skill.description}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="p-4 bg-gradient-to-br from-[#0A0A0A]/90 to-[#111111]/95 
              rounded-xl border border-gray-800/30 hover:border-[#2C7EFF]/20 transition-colors group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">Current Level</span>
                <div className="px-2 py-0.5 bg-[#2C7EFF]/10 rounded-full">
                  <span className="text-xs font-medium text-[#2C7EFF] group-hover:text-white transition-colors">
                    +{skill.growth}
                  </span>
                </div>
              </div>
              <div className="text-xl font-semibold text-[#2C7EFF] group-hover:text-white transition-colors">
                {skill.value}%
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-[#0A0A0A]/90 to-[#111111]/95 
              rounded-xl border border-gray-800/30 group hover:border-gray-700/50 transition-colors">
              <span className="text-xs text-gray-400">Industry Average</span>
              <div className="text-xl font-semibold text-gray-300 mt-2 group-hover:text-white transition-colors">
                {skill.industryAvg}%
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-[#0A0A0A]/90 to-[#111111]/95 
              rounded-xl border border-gray-800/30 group hover:border-green-500/20 transition-colors">
              <span className="text-xs text-gray-400">Learning Velocity</span>
              <div className="flex items-center space-x-2 mt-2">
                <div className="text-xl font-semibold text-green-400 group-hover:text-green-300 transition-colors">
                  {skill.learningVelocity}
                </div>
                <svg className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-[#0A0A0A]/90 to-[#111111]/95 
              rounded-xl border border-gray-800/30 group hover:border-red-500/20 transition-colors">
              <span className="text-xs text-gray-400">Top Percentile</span>
              <div className="text-xl font-semibold text-red-400 mt-2 group-hover:text-red-300 transition-colors">
                {skill.industryTop}%
              </div>
            </div>
          </div>

          {/* Critical Gaps */}
          <div className="pt-3 border-t border-gray-800/30">
            <span className="text-xs text-gray-400">Critical Gaps</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {skill.criticalGaps.map((gap, index) => (
                <span key={index} className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded-full">
                  {gap}
                </span>
              ))}
            </div>
          </div>

          {/* Time to Next Level */}
          <div className="mt-4 pt-4 border-t border-gray-800/30">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-2">
                <span className="text-xs text-gray-400">Time to Next Level</span>
                <div className="text-sm font-medium text-[#2C7EFF] mt-1">{skill.timeToNextLevel}</div>
              </div>
              <div className="p-2">
                <span className="text-xs text-gray-400">Learning Velocity</span>
                <div className="text-sm font-medium text-green-400 mt-1">{skill.learningVelocity}</div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }
    return null;
  };

  // Memoize the data transformation
  const data = useMemo(() => 
    Object.entries(skillAreas).map(([key, skill]) => ({
      subject: skill.name,
      value: skill.metrics.current,
      previousValue: skill.metrics.current - skill.metrics.growth,
      industryAvg: skill.metrics.industryAvg,
      industryTop: skill.metrics.industryTop,
      fullMark: 100,
      icon: key,
      growth: `+${skill.metrics.growth}%`,
      nextMilestone: skill.details.nextMilestone,
      description: `Proficient in ${skill.details.components.join(', ')}`,
      recommendations: skill.details.focusAreas.map(area => `Focus on ${area}`),
      learningVelocity: skill.metrics.growth > 10 ? 'High' : skill.metrics.growth > 5 ? 'Medium' : 'Low',
      proficiencyLevel: skill.metrics.current > 80 ? 'Advanced' : skill.metrics.current > 60 ? 'Intermediate' : 'Beginner',
      criticalGaps: skill.details.criticalGaps,
      timeToNextLevel: skill.details.timeToNext,
      focusAreas: skill.details.focusAreas
    })), 
    []  // Empty dependency array since skillAreas is static
  );

  // Memoize the overall progress calculation
  const overallProgress = useMemo(() => {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    return Math.round(total / data.length);
  }, [data]);

  // Cleanup animations on unmount
  useEffect(() => {
    return () => {
      // Cleanup any running animations
    };
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl sm:text-6xl font-light text-white leading-tight tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We identify{' '}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-r from-[#2C7EFF] to-[#47A2FF] text-transparent bg-clip-text font-normal"
          >
            skill competencies
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {' '}like{' '}
            <span className="relative">
              never before
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{
                  delay: 1.8,
                  duration: 3,
                  ease: [0.22, 1, 0.36, 1],
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2C7EFF] to-transparent"
                style={{
                  background: 'linear-gradient(to right, transparent, #2C7EFF 20%, #47A2FF 80%, transparent)'
                }}
              />
            </span>
          </motion.span>
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-12">
          <div className="relative pl-8 border-l border-[#2C7EFF]/30">
            <div className="absolute left-0 top-0 w-[1px] h-full overflow-hidden">
              <motion.div 
                className="h-full w-full bg-gradient-to-b from-[#2C7EFF] to-[#47A2FF]"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl">
              Our advanced skill matrix provides a comprehensive view of your professional capabilities, 
              helping you understand where you stand and how to progress. This data-driven approach 
              ensures targeted development and measurable growth in your career journey.
            </p>
          </div>
          
          <div className="space-y-6">
            <SkillIntelligenceHub />
            <GrowthVelocityTracker />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-4 pt-8 bg-gradient-to-br from-[#050505]/95 via-[#070707]/90 to-[#090909]/85 
            backdrop-blur-xl rounded-2xl border border-gray-900/20 shadow-2xl"
        >
          <motion.div 
            variants={itemVariants}
            className="flex justify-between items-start mb-8"
          >
            <div>
              <h3 className="text-2xl font-medium bg-gradient-to-r from-white via-white to-gray-400 
                bg-clip-text text-transparent tracking-tight">Skill Matrix</h3>
              <p className="text-sm text-gray-400/80 mt-1 tracking-wide">Professional Competency Overview</p>
            </div>
            <div className="flex gap-2 p-1 bg-gray-800/30 rounded-lg">
              {viewOptions.map((view) => (
                <motion.button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all
                    ${activeView === view.id 
                      ? 'bg-opacity-20 shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                    }`}
                  style={{
                    backgroundColor: activeView === view.id ? `${view.color}20` : 'transparent',
                    color: activeView === view.id ? view.color : undefined,
                    border: activeView === view.id ? `1px solid ${view.color}40` : '1px solid transparent'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {view.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="h-[600px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#2C7EFF]/5 to-transparent 
              rounded-xl opacity-50" />
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid 
                  stroke="#374151" 
                  strokeDasharray="3 3" 
                  gridType="polygon"
                />
                <PolarAngleAxis 
                  dataKey="subject" 
                  stroke="#9CA3AF"
                  tickLine={false}
                  fontSize={12}
                  fontFamily="SF Pro Display, system-ui"
                />
                <Tooltip content={<CustomTooltip />} />
                
                {(activeView === 'all' || activeView === 'industry') && (
                  <Radar
                    name="Industry Average"
                    dataKey="industryAvg"
                    stroke={CHART_COLORS.industry.stroke}
                    fill={CHART_COLORS.industry.fill}
                    fillOpacity={activeView === 'all' ? 0.15 : CHART_COLORS.industry.opacity}
                    strokeWidth={1}
                    strokeDasharray="4 4"
                    strokeOpacity={0.6}
                  />
                )}
                
                {(activeView === 'all' || activeView === 'current') && (
                  <Radar
                    name="Current"
                    dataKey="value"
                    stroke={CHART_COLORS.current.stroke}
                    fill="url(#blueGradient)"
                    fillOpacity={activeView === 'all' ? 0.3 : 0.4}
                    strokeWidth={2}
                    strokeOpacity={0.8}
                  />
                )}
                
                {(activeView === 'all' || activeView === 'top') && (
                  <Radar
                    name="Top Percentile"
                    dataKey="industryTop"
                    stroke={CHART_COLORS.top.stroke}
                    fill={CHART_COLORS.top.fill}
                    fillOpacity={activeView === 'all' ? 0.15 : CHART_COLORS.top.opacity}
                    strokeWidth={1}
                    strokeDasharray="4 4"
                    strokeOpacity={0.6}
                  />
                )}
                
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    {CHART_COLORS.current.gradient.map((stop) => (
                      <stop 
                        key={stop.offset}
                        offset={stop.offset}
                        stopColor={stop.color}
                        stopOpacity={activeView === 'all' ? stop.opacity * 0.75 : stop.opacity}
                      />
                    ))}
                  </linearGradient>
                </defs>
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillMatrix; 