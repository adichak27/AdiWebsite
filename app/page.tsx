'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp, Mail } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const [mounted, setMounted] = useState(false)

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })


  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50"
        style={{ scaleX }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <motion.button
        className="fixed bottom-8 right-8 p-2 bg-blue-500 rounded-full text-white shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      >
        <ArrowUp size={24} />
      </motion.button>
      <div className="fixed left-4 bottom-4 flex flex-col gap-4">
        <motion.a
          href="https://github.com/adichak27"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white text-gray-900 rounded-full shadow-lg"
        >
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/adi-chakravarthy/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white text-gray-900 rounded-full shadow-lg"
        >
          
        </motion.a>
        <motion.a
          href="mailto:adichak2002@gmail.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white text-gray-900 rounded-full shadow-lg"
        >
          <Mail size={24} />
        </motion.a>
      </div>
    </div>
  )
}