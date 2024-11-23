'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUp, Mail } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Spline from '@splinetool/react-spline'

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setIsTypingComplete(true)
      }
    }, 100) // Adjust typing speed here (lower = faster)

    return () => clearInterval(timer)
  }, [text])

  return (
    <motion.h1 
      className="text-5xl md:text-7xl font-bold mb-4 text-white"
    >
      {displayText}
      {!isTypingComplete && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="ml-1 inline-block w-[4px] h-[60px] bg-white"
        />
      )}
    </motion.h1>
  )
}

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const protipOpacity = useTransform(scrollY, [0, 200], [1, 0])
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const FloatingShape = ({ delay, className }: { delay: number; className: string }) => {
    const angle = Math.random() * Math.PI * 2
    const speed = 100
    const xSpeed = Math.cos(angle) * speed
    const ySpeed = Math.sin(angle) * speed
    const duration = 5 + Math.random() * 10
    
    return (
      <motion.div
        className={`absolute ${className}`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, xSpeed * duration],
          y: [0, ySpeed * duration],
          rotate: [-20, 20, -20],
        }}
        transition={{
          opacity: {
            duration: 1,
            delay: delay * 0.2, // Stagger the fade-in of each dot
          },
          x: {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          },
          y: {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          },
          rotate: {
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "linear"
          }
        }}
      >
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-cosmic-glow/25 backdrop-blur-sm" />
      </motion.div>
    )
  }

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

  return ( //min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50"
        style={{ scaleX }}
      />
      <Header />
      <main>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients and patterns */}
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0014] to-[#1A0B2E] opacity-100" />
        <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-5" />
      </div> 

      {/* Updated Spline Scene with larger size */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isSplineLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Spline
          scene="https://prod.spline.design/yPh8qe-tYKsur8rB/scene.splinecode"
          className="absolute inset-0 scale-125"
          onLoad={() => setIsSplineLoaded(true)}
        />
      </motion.div>

      {/* Floating shapes with varied starting positions */}
      <FloatingShape delay={0} className="top-[10%] left-[10%]" />
      <FloatingShape delay={0.5} className="top-[80%] left-[15%]" />
      <FloatingShape delay={1} className="top-[20%] left-[80%]" />
      <FloatingShape delay={1.5} className="top-[65%] left-[70%]" />
      <FloatingShape delay={2} className="top-[35%] left-[25%]" />
      <FloatingShape delay={2.5} className="top-[50%] left-[90%]" />
      <FloatingShape delay={3} className="top-[75%] left-[40%]" />
      <FloatingShape delay={3.5} className="top-[15%] left-[60%]" />
      <FloatingShape delay={4} className="top-[90%] left-[85%]" />
      <FloatingShape delay={4.5} className="top-[45%] left-[15%]" />
      <FloatingShape delay={5} className="top-[5%] left-[40%]" />
      <FloatingShape delay={5.5} className="top-[70%] left-[5%]" />
      <FloatingShape delay={6} className="top-[25%] left-[95%]" />
      <FloatingShape delay={6.5} className="top-[85%] left-[75%]" />
      <FloatingShape delay={7} className="top-[30%] left-[45%]" />
      <FloatingShape delay={7.5} className="top-[60%] left-[30%]" />
      <FloatingShape delay={8} className="top-[40%] left-[65%]" />
      <FloatingShape delay={8.5} className="top-[95%] left-[20%]" />
      <FloatingShape delay={9} className="top-[10%] left-[55%]" />
      <FloatingShape delay={9.5} className="top-[55%] left-[85%]" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <TypewriterText text="Adi Chakravarthy" />

        <motion.div
          className="text-xl md:text-2xl mb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Building Global Solutions, One Line at a Time
          </motion.div>
        </motion.div>

        {/* Add the protip here */}
        <motion.div
          className="fixed bottom-24 right-8 text-sm md:text-base text-gray-300/80 z-10
                       max-w-[200px] text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ opacity: protipOpacity }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <span className="text-purple-300/90 font-medium">Pro tip: </span>
          <span className="italic">Click and drag to explore the globe</span>
        </motion.div>
      </motion.div>

      {/* Updated Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-[48%] transform -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
          y: [0, 10, 0],
        }}
        style={{ opacity }}
        transition={{
          opacity: {
            duration: 1,
            delay: 3.5,
          },
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="[&>svg]:stroke-[url(#purple-gradient)] [&>svg]:stroke-2">
          <svg width="0" height="0">
            <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D8B4FE" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </svg>
          <ArrowDown size={64} strokeWidth={2.5} />
        </div>
      </motion.div>
    </section>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <motion.button
        className="fixed bottom-8 right-8 p-3 bg-cosmic-primary text-white 
                  rounded-full
                  border border-transparent hover:border-cosmic-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      >
        <ArrowUp size={28} />
      </motion.button>
      <div className="fixed left-4 bottom-4 flex flex-col gap-4">
        <motion.a
          href="https://github.com/adichak27"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-cosmic-primary text-cosmic-light rounded-full 
                    hover:bg-[#6B0F8F] transition-all duration-300
                    border border-transparent hover:border-cosmic-glow"
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/adi-chakravarthy/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-cosmic-primary text-cosmic-light rounded-full 
                    hover:bg-[#6B0F8F] transition-all duration-300
                    border border-transparent hover:border-cosmic-glow"
        >
          <FaLinkedinIn size={24} />
        </motion.a>
        <motion.a
          href="mailto:adichak2002@gmail.com"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-cosmic-primary text-cosmic-light rounded-full 
                    hover:bg-[#6B0F8F] transition-all duration-300
                    border border-transparent hover:border-cosmic-glow"
        >
          <Mail size={24} />
        </motion.a>
      </div>
    </div>
  )
}