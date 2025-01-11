import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-cosmic-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white cosmic-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <p className="text-xl text-white mb-8">
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <motion.a
              href="mailto:adichak2002@gmail.com"
              className="flex items-center gap-2 text-lg text-cosmic-glow hover:text-cosmic-light transition-colors"
              whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(178, 75, 243, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
              adichak2002@gmail.com
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/adi-chakravarthy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-cosmic-glow hover:text-cosmic-light transition-colors"
              whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(178, 75, 243, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
              LinkedIn
            </motion.a>
            
            <motion.a
              href="https://github.com/adichak27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-cosmic-glow hover:text-cosmic-light transition-colors"
              whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(178, 75, 243, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact