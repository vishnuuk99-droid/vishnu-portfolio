"use client"

import { motion, useInView } from 'framer-motion'
import { ChevronDown, Download, ExternalLink, BarChart3, TrendingUp, Activity, Zap } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import CountUp from 'react-countup'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [counts, setCounts] = useState({ experience: 0, efficiency: 0, projects: 0, savings: 0 })
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true })

  useEffect(() => setMounted(true), [])

  // Animated counter for stats
  useEffect(() => {
    if (isStatsInView) {
      const timers = [
        // Experience counter (4+)
        setTimeout(() => {
          let start = 0
          const end = 4
          const timer = setInterval(() => {
            start += 0.1
            setCounts(prev => ({ ...prev, experience: Math.min(start, end) }))
            if (start >= end) clearInterval(timer)
          }, 50)
        }, 300),
        
        // Efficiency counter (40%)
        setTimeout(() => {
          let start = 0
          const end = 40
          const timer = setInterval(() => {
            start += 1
            setCounts(prev => ({ ...prev, efficiency: Math.min(start, end) }))
            if (start >= end) clearInterval(timer)
          }, 30)
        }, 600),
        
        // Projects counter (15+)
        setTimeout(() => {
          let start = 0
          const end = 15
          const timer = setInterval(() => {
            start += 1
            setCounts(prev => ({ ...prev, projects: Math.min(start, end) }))
            if (start >= end) clearInterval(timer)
          }, 80)
        }, 900),
        
        // Savings counter (2M+)
        setTimeout(() => {
          let start = 0
          const end = 2
          const timer = setInterval(() => {
            start += 0.1
            setCounts(prev => ({ ...prev, savings: Math.min(start, end) }))
            if (start >= end) clearInterval(timer)
          }, 100)
        }, 1200),
      ]
      return () => timers.forEach(timer => clearTimeout(timer))
    }
  }, [isStatsInView])

  const scrollToNext = () => {
    const nextSection = document.querySelector('#experience')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900">
      {/* Premium Analytics Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950/95 to-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/8 via-transparent to-blue-500/12" />
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/6 via-transparent to-cyan-400/8" />
        
        {/* Animated Data Flow Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Horizontal flowing lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
              style={{ 
                top: `${15 + i * 12}%`, 
                left: '-100%',
                width: '200%'
              }}
              animate={{ 
                x: ['0%', '100%', '0%'] 
              }}
              transition={{ 
                duration: 8 + i * 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
          
          {/* Vertical flowing lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/15 to-transparent"
              style={{ 
                left: `${20 + i * 15}%`, 
                top: '-100%',
                height: '200%'
              }}
              animate={{ 
                y: ['0%', '100%', '0%'] 
              }}
              transition={{ 
                duration: 10 + i * 1.5, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 0.8
              }}
            />
          ))}
        </div>
        
        {/* Floating Analytics Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Premium Glow Orbs */}
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-gradient-to-br from-blue-500/12 to-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/8 to-blue-500/6 rounded-full blur-3xl" />
        
        {/* Analytics Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Premium Analytics Content Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start min-h-screen py-20"
        >
          {/* Left Column - Main Analytics Identity (7 columns) */}
          <div className="lg:col-span-7 space-y-12">
            {/* Analytics Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full backdrop-blur-sm">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300 tracking-wide">ANALYTICS PROFESSIONAL</span>
              </div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </motion.div>
            {/* Premium Analytics Identity Header */}
            <div className="space-y-8">
              {/* Name with Premium Typography */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight">
                  <span className="block text-white/95 font-extralight">Vishnu</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold tracking-wider">U K</span>
                </h1>
              </motion.div>

              {/* Professional Title with Analytics Flair */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold tracking-wide">
                    Business Analyst
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-cyan-300 font-medium tracking-wide ml-16">
                  ZeOmega • Bengaluru, India
                </p>
              </motion.div>

              {/* Premium Analytics Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="ml-16"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    Turning Data into Decisions
                  </span>
                </div>
                <p className="text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
                  Transforming complex datasets into strategic insights that drive 
                  <span className="text-cyan-400 font-semibold"> 40% efficiency gains</span> and 
                  <span className="text-blue-400 font-semibold"> ₹2M+ cost savings</span>
                </p>
              </motion.div>
            </div>

            {/* Premium Analytics Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="space-y-8 ml-16"
            >
              {/* Core Value Proposition */}
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light max-w-4xl">
                  <span className="text-cyan-400 font-semibold">4+ years</span> of transforming complex healthcare data into strategic insights at 
                  <span className="text-blue-400 font-semibold"> ZeOmega</span>, specializing in advanced analytics and business intelligence solutions 
                  that drive measurable business outcomes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                  <div className="flex items-center gap-3 p-4 bg-cyan-500/5 border border-cyan-400/20 rounded-xl backdrop-blur-sm">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">Advanced Power BI Analytics</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-blue-500/5 border border-blue-400/20 rounded-xl backdrop-blur-sm">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className="text-slate-300">Process Optimization</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-indigo-500/5 border border-indigo-400/20 rounded-xl backdrop-blur-sm">
                    <Activity className="w-5 h-5 text-indigo-400" />
                    <span className="text-slate-300">Healthcare Intelligence</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-500/5 border border-purple-400/20 rounded-xl backdrop-blur-sm">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-300">Digital Transformation</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack with Analytics Flair */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white/90 flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                  Analytics Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2 max-w-4xl">
                  {[
                    { name: 'Power BI', level: 'Expert', color: 'cyan' },
                    { name: 'SQL Server', level: 'Advanced', color: 'blue' },
                    { name: 'Azure', level: 'Proficient', color: 'indigo' },
                    { name: 'Python', level: 'Intermediate', color: 'purple' },
                    { name: 'DAX', level: 'Expert', color: 'cyan' },
                    { name: 'SSRS', level: 'Advanced', color: 'blue' },
                    { name: 'Tableau', level: 'Proficient', color: 'indigo' },
                    { name: 'Excel VBA', level: 'Advanced', color: 'purple' }
                  ].map((skill) => (
                    <motion.div 
                      key={skill.name} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`group px-4 py-2 bg-gradient-to-r from-${skill.color}-500/10 to-${skill.color}-600/10 border border-${skill.color}-400/30 rounded-lg backdrop-blur-sm hover:border-${skill.color}-400/50 transition-all duration-300 cursor-pointer`}
                    >
                      <span className={`text-sm font-medium text-${skill.color}-300 group-hover:text-${skill.color}-200 transition-colors duration-300`}>
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400 ml-2">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Premium Analytics CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap gap-6 ml-16 pt-8"
            >
              <motion.a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToNext()
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white transition-all duration-300 flex items-center gap-3 shadow-2xl overflow-hidden min-w-[200px]"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                
                {/* Content */}
                <BarChart3 className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 text-lg">View Analytics</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="relative z-10"
                >
                  <ExternalLink size={18} />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="/vishnu-uk-resume.pdf"
                download="Vishnu_UK_Resume.pdf"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 border-2 border-cyan-400/40 rounded-xl font-semibold text-cyan-300 hover:text-white backdrop-blur-sm transition-all duration-300 flex items-center gap-3 bg-cyan-500/5 hover:bg-cyan-500/10 min-w-[200px]"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <Download className="w-5 h-5 relative z-10 group-hover:translate-y-[-1px] transition-transform duration-300" />
                <span className="relative z-10 text-lg">Download CV</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse relative z-10" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Interactive Stats & Skills (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Premium Analytics Dashboard Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  label: "Experience", 
                  value: 4, 
                  suffix: "+", 
                  unit: "Years",
                  icon: TrendingUp,
                  color: "cyan",
                  trend: "+15% YoY",
                  desc: "Business Analytics"
                },
                { 
                  label: "Projects", 
                  value: 25, 
                  suffix: "+", 
                  unit: "Delivered",
                  icon: BarChart3,
                  color: "blue", 
                  trend: "98% Success",
                  desc: "Successfully Completed"
                },
                { 
                  label: "Efficiency", 
                  value: 40, 
                  suffix: "%", 
                  unit: "Improvement",
                  icon: Activity,
                  color: "indigo",
                  trend: "Avg Gain",
                  desc: "Process Optimization"
                },
                { 
                  label: "Cost Savings", 
                  value: 2, 
                  suffix: "M+", 
                  unit: "₹ Generated",
                  icon: Zap,
                  color: "purple",
                  trend: "ROI 300%",
                  desc: "Client Value"
                },
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 group hover:border-cyan-500/40 transition-all duration-300 overflow-hidden"
                  >
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Header with icon and trend */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg bg-${stat.color}-500/20 border border-${stat.color}-500/30`}>
                        <IconComponent className={`w-4 h-4 text-${stat.color}-400`} />
                      </div>
                      <div className={`px-2 py-1 rounded-full bg-${stat.color}-500/10 border border-${stat.color}-500/20`}>
                        <span className={`text-xs font-medium text-${stat.color}-400`}>
                          {stat.trend}
                        </span>
                      </div>
                    </div>
                    
                    {/* Animated counter */}
                    <div className="space-y-1">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={isStatsInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                        className="flex items-baseline gap-1"
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isStatsInView ? { 
                            opacity: 1,
                          } : {}}
                          transition={{ 
                            opacity: { duration: 0.5, delay: 1.2 + index * 0.1 },
                          }}
                          className={`text-2xl xl:text-3xl font-bold bg-gradient-to-r from-${stat.color}-400 to-white bg-clip-text text-transparent`}
                        >
                          <CountUp end={isStatsInView ? stat.value : 0} duration={2} delay={1.2 + index * 0.1} />
                        </motion.span>
                        <span className={`text-xl font-bold text-${stat.color}-400`}>
                          {stat.suffix}
                        </span>
                      </motion.div>
                      
                      <p className="text-slate-400 text-sm font-medium">
                        {stat.unit}
                      </p>
                      <p className="text-slate-500 text-xs">
                        {stat.desc}
                      </p>
                    </div>
                    
                    {/* Data visualization accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                  </motion.div>
                );
              })}
            </div>

            {/* Interactive Key Skills */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-10 rounded-3xl border border-slate-700/50 hover:border-slate-600/60 transition-all duration-500 group bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl"
            >
              <motion.h3 
                className="text-2xl xl:text-3xl font-bold text-slate-100 mb-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500 tracking-wide"
              >
                Core Expertise
              </motion.h3>
              <div className="space-y-8">
                <motion.div 
                  className="flex justify-between items-center group/skill"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-1">
                    <span className="text-slate-100 text-lg font-semibold group-hover/skill:text-blue-400 transition-colors duration-300 tracking-wide">Power BI & Dashboards</span>
                    <span className="text-slate-400 text-base block group-hover/skill:text-slate-300 transition-colors duration-300 font-medium mt-1">Advanced Analytics & Visualization</span>
                  </div>
                  <div className="w-36 h-4 bg-slate-700/60 rounded-full overflow-hidden ml-8 group-hover/skill:bg-slate-600/60 transition-all duration-300 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '95%' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-full relative overflow-hidden shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full animate-pulse" />
                    </motion.div>
                  </div>
                  <span className="text-blue-400 text-lg font-bold ml-4 group-hover/skill:text-blue-300 transition-colors duration-300 min-w-[3rem]">95%</span>
                </motion.div>
                
                <motion.div 
                  className="flex justify-between items-center group/skill"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-1">
                    <span className="text-slate-100 text-lg font-semibold group-hover/skill:text-indigo-400 transition-colors duration-300 tracking-wide">SQL & Data Analysis</span>
                    <span className="text-slate-400 text-base block group-hover/skill:text-slate-300 transition-colors duration-300 font-medium mt-1">Complex Queries & Database Design</span>
                  </div>
                  <div className="w-36 h-4 bg-slate-700/60 rounded-full overflow-hidden ml-8 group-hover/skill:bg-slate-600/60 transition-all duration-300 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '90%' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.8, delay: 1.0, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-600 rounded-full relative overflow-hidden shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full animate-pulse" />
                    </motion.div>
                  </div>
                  <span className="text-indigo-400 text-lg font-bold ml-4 group-hover/skill:text-indigo-300 transition-colors duration-300 min-w-[3rem]">90%</span>
                </motion.div>
                
                <motion.div 
                  className="flex justify-between items-center group/skill"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-1">
                    <span className="text-slate-100 text-lg font-semibold group-hover/skill:text-cyan-400 transition-colors duration-300 tracking-wide">Business Intelligence</span>
                    <span className="text-slate-400 text-base block group-hover/skill:text-slate-300 transition-colors duration-300 font-medium mt-1">Strategic Decision Support</span>
                  </div>
                  <div className="w-36 h-4 bg-slate-700/60 rounded-full overflow-hidden ml-8 group-hover/skill:bg-slate-600/60 transition-all duration-300 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.8, delay: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600 rounded-full relative overflow-hidden shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full animate-pulse" />
                    </motion.div>
                  </div>
                  <span className="text-cyan-400 text-lg font-bold ml-4 group-hover/skill:text-cyan-300 transition-colors duration-300 min-w-[3rem]">85%</span>
                </motion.div>
                
                <motion.div 
                  className="flex justify-between items-center group/skill"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-1">
                    <span className="text-slate-100 text-lg font-semibold group-hover/skill:text-purple-400 transition-colors duration-300 tracking-wide">Process Optimization</span>
                    <span className="text-slate-400 text-base block group-hover/skill:text-slate-300 transition-colors duration-300 font-medium mt-1">Workflow Enhancement & Automation</span>
                  </div>
                  <div className="w-36 h-4 bg-slate-700/60 rounded-full overflow-hidden ml-8 group-hover/skill:bg-slate-600/60 transition-all duration-300 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '88%' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.8, delay: 1.4, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 rounded-full relative overflow-hidden shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full animate-pulse" />
                    </motion.div>
                  </div>
                  <span className="text-purple-400 text-lg font-bold ml-4 group-hover/skill:text-purple-300 transition-colors duration-300 min-w-[3rem]">88%</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/40 hover:text-white/60 transition-colors duration-300"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}