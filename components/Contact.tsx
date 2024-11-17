import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <motion.a
              href="mailto:adichak2002@gmail.com"
              className="flex items-center gap-2 text-lg text-blue-400 hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
              adichak2002@gmail.com
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/adi-chakravarthy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-blue-400 hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
              LinkedIn
            </motion.a>
            
            <motion.a
              href="https://github.com/adichak27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-blue-400 hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.05 }}
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