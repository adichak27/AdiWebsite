import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const TypewriterText = ({ text, delay }: { text: string; delay: number }) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, delay)

    return () => clearInterval(timer)
  }, [text, delay])

  return <span>{displayText}</span>
}

const FloatingShape = ({ delay, className }: { delay: number; className: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [-20, 20],
      x: [-10, 10],
      rotate: [-10, 10],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    }}
  >
    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-400/20 backdrop-blur-sm" />
  </motion.div>
)

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-30" />
        <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-10" />
      </div>

      {/* Floating shapes */}
      <FloatingShape delay={0} className="top-1/4 left-1/4" />
      <FloatingShape delay={1} className="top-1/3 right-1/4" />
      <FloatingShape delay={2} className="bottom-1/4 left-1/3" />
      <FloatingShape delay={3} className="bottom-1/3 right-1/3" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TypewriterText text="Adi Chakravarthy" delay={100} />
        </motion.h1>

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
            Crafting Solutions with Code and Creativity
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold 
                     hover:bg-blue-600 transition-all duration-300 
                     shadow-lg hover:shadow-blue-500/50"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  )
}

export default Hero