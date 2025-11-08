"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Download,
  ExternalLink 
} from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`)
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )
      const mailtoLink = `mailto:vishnuuk99@gmail.com?subject=${subject}&body=${body}`
      
      // Open email client
      window.open(mailtoLink, '_self')
      
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'vishnuuk99@gmail.com',
      href: 'mailto:vishnuuk99@gmail.com',
      color: 'blue'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91-7892875635',
      href: 'tel:+917892875635',
      color: 'green'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Bengaluru, Karnataka',
      href: null,
      color: 'purple'
    }
  ]

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/vishnu-u-k-6b95281b4/',
      color: 'blue',
      username: 'vishnu-u-k-6b95281b4'
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

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-32 bg-gray-800 relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
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
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business challenges into data-driven opportunities? 
            Let&apos;s discuss how we can work together to achieve exceptional results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I&apos;m always interested in discussing new opportunities, collaborations, 
                and challenging projects. Whether you need business analysis expertise, 
                data visualization solutions, or strategic insights, I&apos;m here to help.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={containerVariants} className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl mr-4 ${
                    info.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' :
                    info.color === 'green' ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' :
                    'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                  }`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {info.value}
                      </div>
                    )}
                  </div>
                  {info.href && (
                    <ExternalLink size={16} className="text-gray-400 dark:text-gray-500" />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={containerVariants} className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <motion.h4 variants={itemVariants} className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </motion.h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    variants={itemVariants}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 ${
                      social.color === 'blue' ? 'hover:border-blue-300 dark:hover:border-blue-600' : 'hover:border-gray-300 dark:hover:border-gray-600'
                    } bg-white dark:bg-gray-900 hover:shadow-md transition-all duration-300 group`}
                  >
                    <div className={`${
                      social.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
                    } group-hover:scale-110 transition-transform`}>
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {social.platform}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {social.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div variants={itemVariants} className="pt-6">
              <motion.a
                href="/vishnu-uk-resume.pdf"
                download="Vishnu_UK_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.subject.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.message.message}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800"
                >
                  <CheckCircle size={18} />
                  Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800"
                >
                  <AlertCircle size={18} />
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Vishnu U K. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}