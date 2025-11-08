"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Trophy, Star, Target, Users, TrendingUp, Calendar, ExternalLink } from 'lucide-react'

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const achievements = [
    {
      id: 1,
      title: "B.E Civil Engineering",
      organization: "Visvesvaraya Technological University (VTU)",
      date: "2016 - 2020",
      description: "Bachelor of Engineering degree from S.J.C Institute of Technology, Chikkaballapur, Karnataka, providing strong analytical and problem-solving foundation.",
      icon: <Award size={24} />,
      color: "blue",
      type: "Education"
    },
    {
      id: 2,
      title: "Workflow Efficiency Champion",
      organization: "iTech Workshop",
      date: "2024",
      description: "Achieved 35% improvement in workflow efficiency and 20% enhancement in customer support ticket resolution through expEDIum Medical Billing optimization.",
      icon: <Trophy size={24} />,
      color: "gold",
      type: "Achievement"
    },
    {
      id: 3,
      title: "Business Analysis Specialist",
      organization: "Multiple Organizations",
      date: "2021 - Present",
      description: "Specialized expertise in requirement gathering, functional requirements documentation, gap analysis, and user acceptance testing.",
      icon: <Star size={24} />,
      color: "purple",
      type: "Expertise"
    },
    {
      id: 4,
      title: "Data Visualization Expert",
      organization: "Professional Practice",
      date: "2022 - Present",
      description: "Advanced proficiency in creating interactive Power BI dashboards and ETL processes for comprehensive business intelligence solutions.",
      icon: <Target size={24} />,
      color: "green",
      type: "Expertise"
    },
    {
      id: 5,
      title: "Cross-Functional Collaboration Leader",
      organization: "Various Projects",
      date: "2021 - Present",
      description: "Successfully led cross-functional teams to implement new features, bug fixes, and process improvements, enhancing customer satisfaction by 25%.",
      icon: <Users size={24} />,
      color: "orange",
      type: "Leadership"
    },
    {
      id: 6,
      title: "Process Optimization Innovator",
      organization: "iTech Workshop & Wolken Software",
      date: "2021 - Present",
      description: "Consistently identified process improvement opportunities, leading to seamless workflow transitions and enhanced operational efficiency.",
      icon: <TrendingUp size={24} />,
      color: "red",
      type: "Innovation"
    }
  ]

  const stats = [
    {
      number: "3.5+",
      label: "Years Experience",
      icon: <Calendar size={20} />,
      color: "blue"
    },
    {
      number: "35%",
      label: "Efficiency Improvement",
      icon: <Target size={20} />,
      color: "purple"
    },
    {
      number: "25%",
      label: "Customer Satisfaction Boost",
      icon: <Award size={20} />,
      color: "green"
    },
    {
      number: "100%",
      label: "Project Success Rate",
      icon: <Star size={20} />,
      color: "orange"
    }
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700",
      gold: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-700",
      purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-700",
      green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700",
      orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-700",
      red: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 border-red-200 dark:border-red-700"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section 
      id="achievements" 
      ref={ref}
      className="py-32 bg-gray-900 relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-600">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of certifications, awards, and recognitions that validate my expertise 
            in business analysis, data analytics, and delivering exceptional results.
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${getColorClasses(stat.color)}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${getColorClasses(achievement.color)}`}>
                    {achievement.icon}
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      achievement.type === 'Certification'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                    }`}>
                      {achievement.type}
                    </span>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {achievement.date}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <div className={`w-2 h-2 rounded-full ${
                      achievement.color === 'gold' ? 'bg-yellow-500' : `bg-${achievement.color}-500`
                    }`} />
                    {achievement.organization}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    View Details
                    <ExternalLink size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-600">Journey</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A timeline of key milestones and achievements throughout my career in business analysis and data analytics.
            </p>
          </motion.div>

          {/* Achievement Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-purple-600 transform md:-translate-x-1/2" />

            {achievements.slice().reverse().map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2 z-10 shadow-lg ${
                  achievement.color === 'gold' ? 'bg-yellow-500' : `bg-${achievement.color}-500`
                }`} />

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  } ml-12 md:ml-0`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${getColorClasses(achievement.color)}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                          {achievement.title}
                        </h4>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {achievement.organization} • {achievement.date}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Achieve Excellence Together?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Let&apos;s collaborate to deliver exceptional results and create meaningful impact through data-driven solutions.
          </p>
          <motion.a
            href="mailto:vishnuuk99@gmail.com?subject=Get In Touch - Portfolio Inquiry&body=Hi Vishnu,%0D%0A%0D%0AI saw your achievements and would like to get in touch.%0D%0A%0D%0ABest regards"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 cursor-pointer"
          >
            Get In Touch
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}