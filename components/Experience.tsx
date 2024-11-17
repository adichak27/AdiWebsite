import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Co-founder',
    company: 'Take2',
    date: 'June 2024 – Present',
    description: 'Engineering the E2E development of a cross-platform social media app enabling movie enthusiasts to rank, track, and view movies within their social network. Developed a real-time Firebase backend for user authentication and media storage across iOS and Android. Integrated core features including comments, likes, and infinite scrolling inspired by TikTok.',
  },
  {
    title: 'Software Engineer',
    company: 'Validea Capital Management',
    date: 'March 2024 – July 2024',
    description: `Designed an advanced multi-agent Chatbot using Autogen, OpenAI, and Python providing personalized investment support for 50,000+ clients (Deployed using Docker and Azure). Created an AI model to analyze decades of Validea's financial content, delivering tailored investment insights.`,
  },
  {
    title: 'Software Engineer',
    company: 'Ametek Precitech',
    date: 'July 2023 – December 2023',
    description: 'Developed a programmable file browsing system (JavaScript, C++) allowing 5,000+ clients to conveniently upload and edit programs used for ultra-precision diamond milling machines. Presented new dashboard idea to senior leaders, secured approval, and implemented in C# (.Net). Resolved 50+ bugs relating to multi-threading, dependencies, memory leaks, and database contentions. Implemented CI/CD pipelines with Jenkins and Bitbucket, streamlining regression testing for 200+ test suites.',
  },
  {
    title: 'Database Systems Analyst',
    company: 'Bain Capital',
    date: 'July 2022 – December 2022',
    description: 'Developed complex SQL queries to analyze datasets of over 100,000 entries, delivering critical financial insights to JV partners weekly. Resolved 170 technical support inquiries through system enhancements, boosting operational efficiency.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Validea Capital Management',
    date: 'June 2021 – September 2021',
    description: 'Developed an advanced financial tool in R, analyzing 50+ investment strategies for optimal model selection on Municipal Bonds, evaluating risk, premium, and performance.',
  },
]

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-500" />
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-between items-center w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="order-1 w-5/12" />
              <div className="z-20">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                  <Briefcase size={16} />
                </div>
              </div>
              <div className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-xl mb-1">{experience.title}</h3>
                <h4 className="text-blue-400 text-md font-semibold mb-2">
                  {experience.company}
                </h4>
                <div className="text-sm text-gray-400 mb-2 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {experience.date}
                </div>
                <div className="flex items-center gap-3">
                  <motion.button
                    className="text-blue-500 text-sm font-semibold focus:outline-none"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedIndex === index ? 'Read Less' : 'Read More'}
                  </motion.button>
                  {experience.company === 'Take2' && (
                    <motion.a
                      href="https://www.take2-app.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors text-sm font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Website
                      <ExternalLink size={14} />
                    </motion.a>
                  )}
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.p
                      className="text-sm mt-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {experience.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience