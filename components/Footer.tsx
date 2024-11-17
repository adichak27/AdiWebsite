import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-center md:text-left mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">Adi Chakravarthy</h3>
            <p className="text-gray-400">Software Engineer & Problem Solver</p>
          </motion.div>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/adichak27"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/adi-chakravarthy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:adichak2002@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
        <motion.div
          className="text-center mt-8 text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Adi Chakravarthy. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer