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
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
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
            <div className="space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
              >
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              />
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              I&apos;m a dedicated Business Analyst with 3.5+ years of experience in requirement gathering, 
              data analytics, and business process optimization. My expertise lies in transforming complex 
              business requirements into actionable solutions that drive measurable improvements.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Proficient in <span className="font-semibold text-blue-600 dark:text-blue-400">Power BI dashboards</span>, 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> SQL analytics</span>, and 
              <span className="font-semibold text-green-600 dark:text-green-400"> functional requirements documentation</span>. 
              I excel at analyzing data to drive business decisions and creating interactive dashboards that enhance accessibility and understanding.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              With a <span className="font-semibold text-blue-600 dark:text-blue-400">B.E in Civil Engineering from VTU</span> (2016-2020), 
              I bring a unique analytical mindset and problem-solving approach to business analysis, combining technical rigor with practical business insights.
            </motion.p>

            {/* Quick Info Cards */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bengaluru, Karnataka</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Briefcase className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Experience</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">3.5+ Years</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <GraduationCap className="text-green-600 dark:text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Education</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">B.E Civil Engineering (VTU)</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                    <Heart className="text-red-600 dark:text-red-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Passion</p>
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
              {/* Background Decorations */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-3 opacity-20" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tl from-purple-400 to-blue-600 rounded-2xl transform -rotate-3 opacity-20" />
              
              {/* Main Image Container */}
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl">
                {/* Professional photo */}
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  <img 
                    src="/vishnu-professional-2.jpg" 
                    alt="Vishnu U K - Professional Portrait"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="fallback w-full h-full hidden items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">VUK</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Professional Photo</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-600"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">40%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Efficiency Gain</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-600"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3.5+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Years Exp</div>
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
          className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Analytics</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                whileHover={{ scale: 1.05, y: -5 }}
                className={`text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-4xl mb-3">{interest.icon}</div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">
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