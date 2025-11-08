"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Download, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const scrollToNext = () => {
    const nextSection = document.querySelector('#experience')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 py-12">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/12 via-transparent to-indigo-600/12" />
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/8 via-transparent to-cyan-600/8" />
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/12 to-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/12 to-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/6 to-blue-500/4 rounded-full blur-3xl" />
        
        {/* Additional ambient lighting */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/5 via-transparent to-purple-900/5" />
      </div>

      {/* Expanded Content Layout */}
      <div className="relative z-10 w-full max-w-[95rem] mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start"
        >
          {/* Left Column - Main Info (3 columns) */}
          <div className="lg:col-span-3 space-y-12 lg:space-y-16">
            {/* Header with Single Profile Image */}
            <div className="flex items-center gap-10">
              {/* Main Profile Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                {/* Primary Profile Image */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44">
                  <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-slate-400/30 shadow-2xl hover:ring-blue-400/50 transition-all duration-500">
                    <img 
                      src="/vishnu-professional-1.jpg" 
                      alt="Vishnu U K"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="fallback w-full h-full hidden items-center justify-center absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                      <span className="text-4xl font-light text-white/90">VUK</span>
                    </div>
                  </div>
                  {/* Enhanced glow effects */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/30 to-indigo-400/30 blur-xl scale-125 -z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 blur-2xl scale-150 -z-20 animate-pulse" style={{ animationDuration: '3s' }} />
                </div>
              </motion.div>

              {/* Name & Title */}
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-none tracking-tight">
                  Vishnu <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent font-medium">U K</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-100 font-normal mt-6 leading-relaxed">Associate Product Analyst</p>
                <p className="text-base md:text-lg lg:text-xl text-blue-300 font-medium mt-3 tracking-wide">ZeOmega • Bengaluru, India</p>
              </div>
            </div>

            {/* Expanded About Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 max-w-4xl"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-slate-100 leading-relaxed font-normal tracking-wide">
                Dedicated Business Analyst with <span className="text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded-lg">3.5+ years of experience</span> transforming complex data into actionable insights. 
                Currently driving digital transformation initiatives at ZeOmega, specializing in healthcare analytics and business intelligence solutions.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal tracking-wide">
                Expert in <span className="text-blue-400 font-semibold bg-blue-400/10 px-2 py-0.5 rounded-md">Power BI dashboards</span>, 
                <span className="text-indigo-400 font-semibold bg-indigo-400/10 px-2 py-0.5 rounded-md ml-1"> advanced SQL analytics</span>, 
                <span className="text-cyan-400 font-semibold bg-cyan-400/10 px-2 py-0.5 rounded-md ml-1"> process optimization</span>, and 
                <span className="text-purple-400 font-semibold bg-purple-400/10 px-2 py-0.5 rounded-md ml-1"> requirements engineering</span>. 
                Proven track record of delivering <span className="text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded-md">40% efficiency improvements</span> and 
                <span className="text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded-md">₹2M+ cost savings</span> through data-driven solutions.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['Power BI', 'SQL Server', 'Azure', 'Python', 'DAX', 'SSRS', 'Tableau', 'Excel VBA'].map((skill) => (
                  <motion.span 
                    key={skill} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm font-semibold text-slate-100 bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm rounded-full border border-slate-500/30 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Interactive CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <motion.a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToNext()
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                  background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 30%, #6366f1 70%, #8b5cf6 100%)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 backdrop-blur-xl text-white font-semibold border border-blue-400/30 transition-all duration-300 flex items-center gap-4 shadow-2xl relative overflow-hidden text-lg"
              >
                {/* Floating particles effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 tracking-wide">View Experience</span>
                <motion.div
                  whileHover={{ x: 5, rotate: 20 }}
                  className="relative z-10"
                >
                  <ExternalLink size={22} />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="/vishnu-uk-resume.pdf"
                download="Vishnu_UK_Resume.pdf"
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  borderColor: "rgba(16, 185, 129, 0.8)",
                  boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 rounded-2xl border-2 border-slate-400/40 backdrop-blur-xl text-slate-100 font-semibold hover:border-emerald-400/60 transition-all duration-300 flex items-center gap-4 relative overflow-hidden text-lg bg-slate-800/20"
              >
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-emerald-300 transition-colors duration-300 tracking-wide">Download Resume</span>
                <motion.div
                  animate={{ rotate: [0, -15, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="relative z-10 group-hover:text-emerald-300 transition-colors duration-300"
                >
                  <Download size={22} />
                </motion.div>
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
            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="glass-card p-8 rounded-3xl border border-slate-700/50 text-center group hover:border-blue-400/60 transition-all duration-500 relative overflow-hidden cursor-pointer bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-blue-500/10 to-blue-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating particles */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                
                <motion.div 
                  className="text-5xl xl:text-6xl font-bold text-blue-400 mb-4 relative z-10"
                  whileHover={{ scale: 1.15, rotateX: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  3.5+
                </motion.div>
                <div className="text-lg font-semibold text-slate-100 relative z-10 group-hover:text-white transition-colors duration-300">Years Experience</div>
                <div className="text-sm text-slate-400 mt-2 relative z-10 group-hover:text-blue-300 transition-colors duration-300 font-medium">in Business Analytics</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: -5,
                  boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="glass-card p-8 rounded-3xl border border-slate-700/50 text-center group hover:border-indigo-400/60 transition-all duration-500 relative overflow-hidden cursor-pointer bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-indigo-500/10 to-indigo-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 left-3 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" />
                
                <motion.div 
                  className="text-5xl xl:text-6xl font-bold text-indigo-400 mb-4 relative z-10"
                  whileHover={{ scale: 1.15, rotateZ: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  40%
                </motion.div>
                <div className="text-lg font-semibold text-slate-100 relative z-10 group-hover:text-white transition-colors duration-300">Efficiency Gain</div>
                <div className="text-sm text-slate-400 mt-2 relative z-10 group-hover:text-indigo-300 transition-colors duration-300 font-medium">Process Optimization</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="glass-card p-8 rounded-3xl border border-slate-700/50 text-center group hover:border-cyan-400/60 transition-all duration-500 relative overflow-hidden cursor-pointer bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 via-cyan-500/10 to-cyan-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 right-3 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
                
                <motion.div 
                  className="text-5xl xl:text-6xl font-bold text-cyan-400 mb-4 relative z-10"
                  whileHover={{ scale: 1.15, rotateX: -15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  15+
                </motion.div>
                <div className="text-lg font-semibold text-slate-100 relative z-10 group-hover:text-white transition-colors duration-300">Projects</div>
                <div className="text-sm text-slate-400 mt-2 relative z-10 group-hover:text-cyan-300 transition-colors duration-300 font-medium">Successfully Delivered</div>
              </motion.div>
              
              <motion.div 
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: -5,
                  boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="glass-card p-8 rounded-3xl border border-slate-700/50 text-center group hover:border-purple-400/60 transition-all duration-500 relative overflow-hidden cursor-pointer bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-purple-500/10 to-purple-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 left-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.5s' }} />
                
                <motion.div 
                  className="text-4xl xl:text-5xl font-bold text-purple-400 mb-4 relative z-10"
                  whileHover={{ scale: 1.15, rotateZ: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  ₹2M+
                </motion.div>
                <div className="text-lg font-semibold text-slate-100 relative z-10 group-hover:text-white transition-colors duration-300">Cost Savings</div>
                <div className="text-sm text-slate-400 mt-2 relative z-10 group-hover:text-purple-300 transition-colors duration-300 font-medium">Generated for Clients</div>
              </motion.div>
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