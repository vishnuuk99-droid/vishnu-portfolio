"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, ExternalLink, TrendingUp, Award, Target } from 'lucide-react'
import Image from 'next/image'

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      id: 1,
      title: "Associate Product Analyst",
      company: "ZeOmega Inc",
      location: "Bengaluru",
      duration: "Aug 2025 - Present",
      type: "Current",
      description: "Currently working as an Associate Product Analyst in the PA&BI team at ZeOmega, focusing on analytics of multiple reports and comprehensive requirement gathering for healthcare technology solutions.",
      achievements: [
        "Analyzing multiple reports to extract actionable business insights",
        "Leading comprehensive requirement gathering sessions with stakeholders",
        "Contributing to the Product Analytics & Business Intelligence team initiatives",
        "Supporting data-driven decision making processes across healthcare workflows"
      ],
      technologies: ["Analytics", "Power BI", "SQL", "Requirements Analysis", "Healthcare Data", "Business Intelligence"],
      color: "emerald",
      icon: TrendingUp,
      impact: "Current Role"
    },
    {
      id: 2,
      title: "Product Owner",
      company: "Wolken Software Pvt Ltd",
      location: "Bengaluru",
      duration: "Feb 2025 - Jul 2025",
      type: "Full-time",
      description: "Worked as a Product Owner at Wolken Software, where I gathered requirements, prioritized features, and guided the team to deliver the required enhancements as per the release cycle.",
      achievements: [
        "Led product feature prioritization and roadmap planning",
        "Gathered and documented comprehensive business requirements",
        "Guided cross-functional teams through agile development processes",
        "Ensured deliverables met business objectives and user expectations"
      ],
      technologies: ["Product Management", "Agile", "JIRA", "Confluence", "Requirements Analysis"],
      color: "blue",
      icon: Target,
      impact: "100% Feature Delivery"
    },
    {
      id: 3,
      title: "Business Analyst",
      company: "iTech Workshop Pvt Ltd",
      location: "Bengaluru",
      duration: "Sept 2021 - Jan 2025",
      type: "Full-time",
      description: "Gathered and documented user pain points and requirements for expEDIum Medical Billing (eMB), providing tailored solutions that improved workflow efficiency by 35% and enhanced customer support ticket resolution by 20%.",
      achievements: [
        "Authored functional requirement documents (FRDs) and monitored user stories through phases and sprints",
        "Performed in-depth Gap Analysis, identifying areas for improvement enabling seamless transition to optimized workflow",
        "Conducted comprehensive User Acceptance Testing (UAT) sessions, securing final approval for feature deployment",
        "Executed cross-functional team collaboration to define and implement customer change requests",
        "Authored detailed Functional Requirement Documents, guiding developers to achieve increase in code efficiency"
      ],
      technologies: ["SQL", "Excel", "Visio", "Balsamiq", "JIRA", "Draw.io", "Lucid Chart"],
      color: "purple",
      icon: Award,
      impact: "35% Efficiency Boost"
    },

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section 
      id="experience" 
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
        {/* Premium Header with Photo Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
            {/* Professional Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full p-1 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 p-1">
                  <Image 
                    src="/vishnu-professional-2.jpg" 
                    alt="Vishnu U K - Professional Experience" 
                    width={160} 
                    height={160} 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full p-2 shadow-lg">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
            </motion.div>

            {/* Header Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-5xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
                Professional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-light">
                  Journey
                </span>
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto lg:mx-0 mb-6" />
              <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
                Transforming business challenges into data-driven solutions through 
                strategic analysis and innovative thinking
              </p>
            </div>
          </div>
        </motion.div>

        {/* Premium Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Premium Timeline Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 via-purple-400/50 to-cyan-400/50 transform lg:-translate-x-1/2 shadow-lg" />
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent transform lg:-translate-x-1/2 blur-sm" />

          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center mb-20 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:flex-row`}
              >
                {/* Premium Timeline Node */}
                <motion.div 
                  className={`absolute left-6 lg:left-1/2 w-12 h-12 transform lg:-translate-x-1/2 z-20`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl flex items-center justify-center backdrop-blur-sm">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                      exp.color === 'emerald' ? 'from-emerald-400 to-teal-400' :
                      exp.color === 'blue' ? 'from-blue-400 to-cyan-400' :
                      'from-purple-400 to-pink-400'
                    } flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${
                    exp.color === 'emerald' ? 'from-emerald-400/20 to-teal-400/20' :
                    exp.color === 'blue' ? 'from-blue-400/20 to-cyan-400/20' :
                    'from-purple-400/20 to-pink-400/20'
                  } blur-xl animate-pulse`} />
                </motion.div>

                {/* Premium Content Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                  } ml-20 lg:ml-0`}
                >
                  <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
                    {/* Premium Header */}
                    <div className="mb-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-light text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-3 text-blue-400 font-medium mb-3">
                            <Briefcase size={18} />
                            <span className="text-lg">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`px-4 py-2 text-sm font-medium rounded-full glass-panel border ${
                            exp.type === 'Current' ? 'border-emerald-400/30 text-emerald-400' :
                            'border-blue-400/30 text-blue-400'
                          } shadow-lg`}>
                            {exp.type}
                          </span>
                          <span className="text-sm text-slate-400 font-medium bg-slate-800/50 px-3 py-1 rounded-full">
                            {exp.impact}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-blue-400" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed text-lg font-light">
                        {exp.description}
                      </p>
                    </div>

                    {/* Premium Achievements */}
                    <div className="mb-8">
                      <h4 className="font-medium text-white mb-4 text-lg">Key Achievements</h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.1 * achIndex }}
                            className="flex items-start gap-4 text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 ${
                              exp.color === 'emerald' ? 'bg-emerald-400' :
                              exp.color === 'blue' ? 'bg-blue-400' :
                              'bg-purple-400'
                            }`} />
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Premium Technologies */}
                    <div>
                      <h4 className="font-medium text-white mb-4 text-lg">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`px-4 py-2 text-sm font-medium rounded-full glass-panel border-white/10 text-slate-300 hover:text-white hover:border-${
                              exp.color === 'emerald' ? 'emerald' :
                              exp.color === 'blue' ? 'blue' :
                              'purple'
                            }-400/50 transition-all duration-200 shadow-sm hover:shadow-lg`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Premium Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-24 pt-16 relative"
        >
          {/* Premium Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" />
          
          <div className="glass-panel rounded-3xl p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-4xl font-extralight text-white mb-6 tracking-tight">
              Ready to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-light">
                {" "}collaborate?
              </span>
            </h3>
            <p className="text-xl text-slate-400 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s transform your business challenges into data-driven opportunities 
              that drive real impact and measurable results.
            </p>
            <motion.a
              href="mailto:vishnuuk99@gmail.com?subject=Let's Connect - Portfolio Inquiry&body=Hi Vishnu,%0D%0A%0D%0AI found your portfolio and would like to connect with you.%0D%0A%0D%0ABest regards"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-10 py-4 rounded-2xl font-medium shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer text-lg"
            >
              <span>Let&apos;s Connect</span>
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}