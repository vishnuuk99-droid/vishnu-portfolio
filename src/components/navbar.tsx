"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => setMounted(true), [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 w-full z-50 glass-card border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Premium Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 cursor-pointer"
          >
            <span className="text-2xl font-light tracking-wider text-white gradient-text">
              VUK
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative text-white/80 hover:text-white px-4 py-2 rounded-xl text-sm font-light tracking-wide transition-all duration-300 cursor-pointer group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-8 group-hover:-translate-x-1/2 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-xl glass text-white/80 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  whileHover={{ x: 10 }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}