"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { BarChart3, Database, FileText, Palette, Code2, TrendingUp, Zap, Target, Layers } from 'lucide-react'

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeCategory, setActiveCategory] = useState('technical')

  const handleTabClick = (categoryKey: string) => {
    console.log('Tab clicked:', categoryKey)
    setActiveCategory(categoryKey)
  }

  const skillCategories = {
    technical: {
      title: "Technical Skills",
      icon: <Code2 size={24} />,
      color: "blue",
      skills: [
        { name: "Excel", level: 95, description: "Advanced formulas, pivot tables, data analysis, VBA automation" },
        { name: "Power BI", level: 90, description: "Interactive dashboards, DAX functions, data modeling" },
        { name: "SQL", level: 85, description: "Complex queries, data analysis, database management" },
        { name: "Python", level: 80, description: "Data analysis, automation, scripting" },
        { name: "Power Query", level: 88, description: "Data transformation, ETL processes" },
        { name: "Pentaho", level: 75, description: "Data integration, ETL workflows, reporting" }
      ]
    },
    analytical: {
      title: "Analytical Skills",
      icon: <BarChart3 size={24} />,
      color: "purple",
      skills: [
        { name: "Requirements Gathering", level: 95, description: "Stakeholder interviews, functional requirement documentation" },
        { name: "Data Analysis", level: 90, description: "Statistical analysis, trend identification, quantitative analysis" },
        { name: "Gap Analysis", level: 88, description: "Process improvement identification, workflow optimization" },
        { name: "Wireframing", level: 85, description: "UI/UX design, mockups, prototyping with Visio and Balsamiq" },
        { name: "User Acceptance Testing", level: 87, description: "UAT sessions, feature validation, quality assurance" },
        { name: "Process Documentation", level: 90, description: "Flowcharts, business process mapping, technical documentation" }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: <TrendingUp size={24} />,
      color: "green",
      skills: [
        { name: "Communication", level: 92, description: "Stakeholder presentations, technical documentation" },
        { name: "Problem Solving", level: 90, description: "Critical thinking, analytical approach" },
        { name: "Project Management", level: 85, description: "Timeline management, resource coordination" },
        { name: "Leadership", level: 82, description: "Team guidance, mentoring, decision making" },
        { name: "Collaboration", level: 88, description: "Cross-functional teamwork, conflict resolution" },
        { name: "Adaptability", level: 90, description: "Learning agility, change management" }
      ]
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
    })
  }

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-slate-800/5 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-8">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
            Core
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-light">
              Expertise
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
          <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
            A comprehensive arsenal of technical mastery, analytical prowess, and leadership capabilities 
            refined through years of data-driven excellence and strategic business transformation.
          </p>
        </motion.div>

        {/* Premium Skill Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {Object.entries(skillCategories).map(([key, category]) => {
            const isActive = activeCategory === key;
            
            return (
              <motion.button
                key={key}
                onClick={() => handleTabClick(key)}
                type="button"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-4 px-8 py-4 rounded-2xl font-medium transition-all duration-500 cursor-pointer glass-panel border ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/50 text-white shadow-2xl shadow-blue-500/25'
                    : 'border-white/10 text-slate-300 hover:border-white/20 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className={`p-2 rounded-xl ${
                  isActive 
                    ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20' 
                    : 'bg-slate-800/50'
                }`}>
                  {category.icon}
                </div>
                <span className="text-lg">{category.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Premium Skills Grid */}
        <motion.div
          key={`skills-${activeCategory}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={`${activeCategory}-${skill.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-light text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {skill.name}
                  </h3>
                  <span className={`text-2xl font-extralight ${
                    activeCategory === 'technical' ? 'text-cyan-400' :
                    activeCategory === 'analytical' ? 'text-purple-400' : 'text-emerald-400'
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                
                {/* Premium Progress Bar */}
                <div className="mb-6">
                  <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + index * 0.1 }}
                      className={`h-full rounded-full ${
                        activeCategory === 'technical' ? 'bg-gradient-to-r from-cyan-400 to-blue-500' :
                        activeCategory === 'analytical' ? 'bg-gradient-to-r from-purple-400 to-indigo-500' :
                        'bg-gradient-to-r from-emerald-400 to-teal-500'
                      } shadow-lg relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-sm" />
                    </motion.div>
                  </div>
                </div>

                <p className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Skill Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="text-center p-10 glass-panel rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-300">
                <Database className="text-cyan-400" size={36} />
              </div>
              <h3 className="text-2xl font-light text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">Data Mastery</h3>
              <p className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Expert-level proficiency in data analysis, visualization, and business intelligence tools
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="text-center p-10 glass-panel rounded-3xl border border-white/10 hover:border-purple-400/30 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-purple-400/20 group-hover:border-purple-400/40 transition-all duration-300">
                <Target className="text-purple-400" size={36} />
              </div>
              <h3 className="text-2xl font-light text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">Process Excellence</h3>
              <p className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Strong analytical thinking and process optimization capabilities for business improvement
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="text-center p-10 glass-panel rounded-3xl border border-white/10 hover:border-emerald-400/30 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-emerald-400/20 group-hover:border-emerald-400/40 transition-all duration-300">
                <Zap className="text-emerald-400" size={36} />
              </div>
              <h3 className="text-2xl font-light text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300">Creative Solutions</h3>
              <p className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Innovative problem-solving approach with excellent communication and collaboration skills
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Technologies & Tools */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-24 pt-16 relative"
        >
          {/* Premium Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" />
          
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-tight">
              Technologies & 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-light">
                Arsenal
              </span>
            </h3>
            <p className="text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of cutting-edge tools and technologies for data analysis, 
              visualization, and business intelligence excellence.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
          >
            {[
              { name: 'Excel', category: 'data' },
              { name: 'Power BI', category: 'analytics' },
              { name: 'SQL', category: 'data' },
              { name: 'Python', category: 'dev' },
              { name: 'Power Query', category: 'analytics' },
              { name: 'Pentaho', category: 'etl' },
              { name: 'Visio', category: 'design' },
              { name: 'Balsamiq', category: 'design' },
              { name: 'JIRA', category: 'management' },
              { name: 'Draw.io', category: 'design' },
              { name: 'Lucid Chart', category: 'design' },
              { name: 'Confluence', category: 'management' },
              { name: 'UAT', category: 'testing' },
              { name: 'Agile', category: 'methodology' },
              { name: 'FRDs', category: 'documentation' },
              { name: 'BRDs', category: 'documentation' },
              { name: 'ETL', category: 'etl' },
              { name: 'Wireframing', category: 'design' }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="glass-panel px-4 py-3 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 group cursor-pointer text-center"
              >
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}