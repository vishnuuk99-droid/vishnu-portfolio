"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye, ChevronRight, BarChart3, TrendingUp, Database, FileText } from 'lucide-react'

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "expEDIum Medical Billing (eMB)",
      category: "Healthcare Analytics",
      duration: "Ongoing project",
      client: "iTech Workshop",
      description: "Built new features by gathering requirements and pain points from existing clients, creating wireframes, documenting findings, and providing optimal solutions for medical billing workflow optimization.",
      challenge: "Existing medical billing system had workflow inefficiencies and user experience issues that were causing delays in billing processes and customer dissatisfaction.",
      solution: "Conducted comprehensive requirement analysis, developed functional requirement documents (FRDs), created user-friendly wireframes, and implemented new features through collaborative cross-functional development.",
      impact: [
        "Improved workflow efficiency by 35% through optimized processes",
        "Enhanced customer support ticket resolution by 20%",
        "Reduced processing errors by 30% through better user interface design",
        "Increased customer satisfaction through tailored solutions"
      ],
      technologies: ["SQL", "Excel", "Visio", "Balsamiq", "Power BI", "ETL tools"],
      features: [
        "Streamlined medical billing workflows",
        "Interactive user interface wireframes",
        "Customizable reporting dashboards",
        "Automated data validation processes",
        "Enhanced user experience design"
      ],
      metrics: {
        "Efficiency Improvement": "35%",
        "Ticket Resolution": "+20%",
        "Error Reduction": "30%",
        "User Satisfaction": "High"
      },
      image: "/api/placeholder/600/400",
      color: "blue"
    },
    {
      id: 2,
      title: "Power BI Interactive Dashboards",
      category: "Business Intelligence",
      duration: "Multiple projects",
      client: "Various Clients",
      description: "Developed new reporting modules with interactive, customizable reports using Power BI and ETL tools, working on writing detailed user stories and actively contributing to project success.",
      challenge: "Clients needed dynamic, interactive reporting solutions that could handle complex data transformations and provide real-time business insights for decision-making.",
      solution: "Created comprehensive Power BI dashboards with custom ETL processes, interactive visualizations, and automated data refresh capabilities to meet diverse business requirements.",
      impact: [
        "Enabled real-time data-driven decision making",
        "Reduced manual reporting time by 60%",
        "Improved data accessibility across organizations",
        "Enhanced business process efficiency through automation"
      ],
      technologies: ["Power BI", "ETL tools", "SQL", "Power Query", "Excel"],
      features: [
        "Interactive data visualizations",
        "Automated ETL data pipelines",
        "Customizable report templates",
        "Real-time data refresh capabilities",
        "Cross-functional dashboard integration"
      ],
      metrics: {
        "Time Reduction": "60%",
        "Data Accessibility": "Enhanced",
        "Automation Level": "High",
        "User Adoption": "Excellent"
      },
      image: "/api/placeholder/600/400",
      color: "purple"
    },
    {
      id: 3,
      title: "Cross-Functional Collaboration Projects",
      category: "Process Optimization",
      duration: "Ongoing initiatives",
      client: "Multiple Organizations",
      description: "Effectively collaborated with cross-functional teams for successful implementation of new features, bug fixes, and process improvements, leading to enhanced customer satisfaction and product functionality.",
      challenge: "Complex organizational structures required seamless coordination between multiple departments to deliver integrated solutions while maintaining quality and meeting tight deadlines.",
      solution: "Implemented agile collaboration methodologies, established clear communication channels, and developed standardized documentation processes to ensure successful cross-team project delivery.",
      impact: [
        "Increased customer satisfaction by 25% through enhanced product functionality",
        "Reduced project delivery time through improved coordination",
        "Minimized bugs and issues through collaborative testing approaches",
        "Enhanced team efficiency through standardized processes"
      ],
      technologies: ["Agile Methodology", "JIRA", "Confluence", "Project Management", "Quality Assurance"],
      features: [
        "Cross-functional team coordination",
        "Standardized documentation processes",
        "Collaborative testing frameworks",
        "Agile project management",
        "Quality assurance protocols"
      ],
      metrics: {
        "Customer Satisfaction": "+25%",
        "Delivery Efficiency": "Improved",
        "Bug Reduction": "Significant",
        "Team Collaboration": "Enhanced"
      },
      image: "/api/placeholder/600/400",
      color: "green"
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

  const currentProject = projects[selectedProject]

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-32 bg-gray-800 relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world case studies showcasing data analytics solutions that delivered measurable business impact 
            and transformed decision-making processes for organizations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Selection Panel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <div className="space-y-4 sticky top-24">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  variants={itemVariants}
                  onClick={() => setSelectedProject(index)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                    selectedProject === index
                      ? `bg-${project.color}-50 dark:bg-${project.color}-900/20 border-${project.color}-200 dark:border-${project.color}-700 shadow-lg`
                      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-2 ${
                        selectedProject === index 
                          ? `text-${project.color}-700 dark:text-${project.color}-300` 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          selectedProject === index
                            ? `bg-${project.color}-100 dark:bg-${project.color}-800 text-${project.color}-700 dark:text-${project.color}-300`
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                        }`}>
                          {project.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-500">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                    <ChevronRight 
                      size={20} 
                      className={`transition-transform ${
                        selectedProject === index ? 'rotate-90' : ''
                      } ${
                        selectedProject === index 
                          ? `text-${project.color}-500` 
                          : 'text-gray-400'
                      }`} 
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Project Details Panel */}
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Project Header */}
              <div className={`bg-gradient-to-r from-${currentProject.color}-500 to-${currentProject.color}-600 text-white p-8`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                    <div className="flex items-center gap-4 text-sm opacity-90">
                      <span>Client: {currentProject.client}</span>
                      <span>•</span>
                      <span>Duration: {currentProject.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Eye size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                  </div>
                </div>
                <p className="text-lg opacity-95 leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-8 space-y-8">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <FileText size={20} className="text-red-500" />
                      Challenge
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <TrendingUp size={20} className="text-green-500" />
                      Solution
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentProject.solution}
                    </p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <BarChart3 size={20} className={`text-${currentProject.color}-500`} />
                    Key Metrics & Results
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(currentProject.metrics).map(([key, value]) => (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`text-center p-4 rounded-xl bg-${currentProject.color}-50 dark:bg-${currentProject.color}-900/20 border border-${currentProject.color}-200 dark:border-${currentProject.color}-700`}
                      >
                        <div className={`text-2xl font-bold text-${currentProject.color}-600 dark:text-${currentProject.color}-400 mb-1`}>
                          {value}
                        </div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {key}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Impact & Features */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Business Impact
                    </h4>
                    <ul className="space-y-3">
                      {currentProject.impact.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <div className={`w-2 h-2 bg-${currentProject.color}-500 rounded-full mt-2 flex-shrink-0`} />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {currentProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <div className={`w-2 h-2 bg-${currentProject.color}-500 rounded-full mt-2 flex-shrink-0`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Database size={20} className={`text-${currentProject.color}-500`} />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {currentProject.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium bg-${currentProject.color}-100 dark:bg-${currentProject.color}-900/30 text-${currentProject.color}-700 dark:text-${currentProject.color}-300 border border-${currentProject.color}-200 dark:border-${currentProject.color}-700`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Similar Solutions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help transform your business challenges into data-driven opportunities.
          </p>
          <motion.a
            href="mailto:vishnuuk99@gmail.com?subject=Project Discussion - Portfolio Inquiry&body=Hi Vishnu,%0D%0A%0D%0AI would like to discuss a potential project with you.%0D%0A%0D%0AProject Details:%0D%0A%0D%0ABest regards"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 cursor-pointer"
          >
            Start a Project
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}