import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-cosmic-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold cosmic-glow">Adi Chakravarthy</h3>
            <p className="text-cosmic-light">Software Engineer & Problem Solver</p>
          </motion.div>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.a
              href="https://github.com/adichak27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-cosmic-primary text-cosmic-light rounded-full 
                        hover:bg-[#6B0F8F] transition-all duration-300
                        border border-transparent hover:border-cosmic-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/adi-chakravarthy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-cosmic-primary text-cosmic-light rounded-full 
                        hover:bg-[#6B0F8F] transition-all duration-300
                        border border-transparent hover:border-cosmic-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:adichak2002@gmail.com"
              className="p-2 bg-cosmic-primary text-cosmic-light rounded-full 
                        hover:bg-[#6B0F8F] transition-all duration-300
                        border border-transparent hover:border-cosmic-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="text-center mt-8 text-cosmic-light/70 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false }}
        >
          &copy; {new Date().getFullYear()} Adi Chakravarthy. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer