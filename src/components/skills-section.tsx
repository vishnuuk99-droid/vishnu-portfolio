"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { BarChart3, Database, FileText, Palette, Code2, TrendingUp } from 'lucide-react'

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
      className="py-32 bg-gray-900 relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technical expertise, analytical capabilities, and interpersonal skills 
            developed through years of hands-on experience in business analysis and data analytics.
          </p>
        </motion.div>

        {/* Skill Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const isActive = activeCategory === key;
            let activeClasses = '';
            
            if (isActive) {
              if (category.color === 'blue') {
                activeClasses = 'bg-blue-500 text-white shadow-lg';
              } else if (category.color === 'purple') {
                activeClasses = 'bg-purple-500 text-white shadow-lg';
              } else if (category.color === 'green') {
                activeClasses = 'bg-green-500 text-white shadow-lg';
              }
            }

            return (
              <button
                key={key}
                onClick={() => handleTabClick(key)}
                type="button"
                style={{ 
                  pointerEvents: 'auto',
                  zIndex: 10
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? activeClasses
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          key={`skills-${activeCategory}`}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div
              key={`${activeCategory}-${skill.name}-${index}`}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className={`text-lg font-bold ${
                  activeCategory === 'technical' ? 'text-blue-500' :
                  activeCategory === 'analytical' ? 'text-purple-500' : 'text-green-500'
                }`}>
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className={`h-full rounded-full transition-all duration-1000 ${
                      activeCategory === 'technical' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                      activeCategory === 'analytical' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                      'bg-gradient-to-r from-green-400 to-green-600'
                    }`}
                  />
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skill Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Mastery</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Expert-level proficiency in data analysis, visualization, and business intelligence tools
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="text-purple-600 dark:text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Process Excellence</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Strong analytical thinking and process optimization capabilities for business improvement
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Creative Solutions</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Innovative problem-solving approach with excellent communication and collaboration skills
            </p>
          </motion.div>
        </motion.div>

        {/* Technologies & Tools */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tools</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive arsenal of modern tools and technologies for data analysis, visualization, and business intelligence.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {[
              'Excel', 'Power BI', 'SQL', 'Python', 'Power Query', 'Pentaho',
              'Visio', 'Balsamiq', 'JIRA', 'Draw.io', 'Lucid Chart', 'Confluence',
              'UAT', 'Agile Methodology', 'FRDs', 'BRDs', 'ETL', 'Wireframing'
            ].map((tool, index) => (
              <motion.span
                key={tool}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}