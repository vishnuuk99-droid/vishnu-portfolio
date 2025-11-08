"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, Briefcase, Heart } from 'lucide-react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      {/* Premium Futuristic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/5 via-transparent to-indigo-600/5" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white tracking-tight"
              >
                About <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">Me</span>
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="w-32 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-60"
              />
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/80 leading-relaxed font-light"
            >
              I&apos;m a dedicated Business Analyst with 3.5+ years of experience in requirement gathering, 
              data analytics, and business process optimization. My expertise lies in transforming complex 
              business requirements into actionable solutions that drive measurable improvements.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/70 leading-relaxed font-light"
            >
              Proficient in <span className="font-medium text-blue-400">Power BI dashboards</span>, 
              <span className="font-medium text-indigo-400"> SQL analytics</span>, and 
              <span className="font-medium text-cyan-400"> functional requirements documentation</span>. 
              I excel at analyzing data to drive business decisions and creating interactive dashboards that enhance accessibility and understanding.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/70 leading-relaxed font-light"
            >
              With a <span className="font-medium text-blue-400">B.E in Civil Engineering from VTU</span> (2016-2020), 
              I bring a unique analytical mindset and problem-solving approach to business analysis, combining technical rigor with practical business insights.
            </motion.p>

            {/* Quick Info Cards */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            >
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl backdrop-blur-sm border border-blue-400/20 group-hover:border-blue-400/40 transition-colors duration-300">
                    <MapPin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-sm text-white/60">Bengaluru, Karnataka</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl backdrop-blur-sm border border-indigo-400/20 group-hover:border-indigo-400/40 transition-colors duration-300">
                    <Briefcase className="text-indigo-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Experience</p>
                    <p className="text-sm text-white/60">3.5+ Years</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl backdrop-blur-sm border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors duration-300">
                    <GraduationCap className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Education</p>
                    <p className="text-sm text-white/60">B.E Civil Engineering (VTU)</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl backdrop-blur-sm border border-purple-400/20 group-hover:border-purple-400/40 transition-colors duration-300">
                    <Heart className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Passion</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Data Analytics</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Premium Background Elements */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-3xl transform rotate-2 backdrop-blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tl from-indigo-500/10 to-blue-600/10 rounded-3xl transform -rotate-2 backdrop-blur-3xl" />
              
              {/* Main Glass Container */}
              <div className="relative glass-card p-8 rounded-3xl border border-white/10 shadow-2xl">
                {/* Premium Professional Photo */}
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-2xl" />
                  <img 
                    src="/vishnu-professional-2.jpg" 
                    alt="Vishnu U K - Professional Portrait"
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="fallback w-full h-full hidden items-center justify-center absolute inset-0 z-10">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500/80 to-indigo-600/80 backdrop-blur-xl rounded-full flex items-center justify-center ring-1 ring-white/20">
                        <span className="text-3xl font-extralight text-white">VUK</span>
                      </div>
                      <div>
                        <p className="text-sm text-white/60 font-light">Professional Photo</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Premium Floating Stats */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass-card rounded-2xl shadow-xl p-5 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-2xl font-extralight text-blue-400">40%</div>
                    <div className="text-xs text-white/60 font-light">Efficiency Gain</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 glass-card rounded-2xl shadow-xl p-5 border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-2xl font-extralight text-indigo-400">3.5+</div>
                    <div className="text-xs text-white/60 font-light">Years Exp</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 pt-20 relative"
        >
          {/* Premium Separator */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
              Beyond <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">Analytics</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              When I&apos;m not diving deep into data, you&apos;ll find me exploring new technologies, 
              contributing to open-source projects, and staying updated with the latest trends in business intelligence.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: "📊", label: "Data Visualization", color: "blue" },
              { icon: "🚀", label: "Innovation", color: "purple" },
              { icon: "🎯", label: "Problem Solving", color: "green" },
              { icon: "📚", label: "Continuous Learning", color: "orange" }
            ].map((interest, index) => (
              <motion.div
                key={interest.label}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)"
                }}
                className="text-center p-8 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all duration-500 group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{interest.icon}</div>
                <div className="font-light text-white text-sm group-hover:text-blue-300 transition-colors duration-300">
                  {interest.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}