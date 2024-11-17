import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

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
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="flex items-center mb-4">
                <Phone className="mr-4 text-blue-500" />
                <p>(860) - 709 – 1158</p>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="mr-4 text-blue-500" />
                <a href="mailto:adichak2002@gmail.com" className="hover:text-blue-400 transition-colors">adichak2002@gmail.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4 text-blue-500" />
                <p>Boston, MA</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact