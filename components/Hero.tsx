import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline/next';

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
      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-300/25 backdrop-blur-sm" />
    </motion.div>
  )
}

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0014] to-[#1A0B2E] opacity-100" />
        <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-5" />
      </div>

      {/* Updated Spline Scene */}
      

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
          
        </motion.div>
      </motion.div>

      {/* Updated Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-[48%] transform -translate-x-1/2 text-blue-400 z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
          y: [0, 10, 0],
        }}
        style={{ opacity }}
        transition={{
          opacity: {
            duration: 1,
            delay: 3.5, // Appears after the "Learn More" button
          },
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        }}
      >
        <ArrowDown size={64} />
      </motion.div>
    </section>
  )
}

export default Hero