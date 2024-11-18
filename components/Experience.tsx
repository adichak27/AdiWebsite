import { motion } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Co-founder',
    company: 'Take2',
    date: 'June 2024 – Present',
    description: 'Engineering the E2E development of a cross-platform social media app enabling movie enthusiasts to rank, track, and view movies within their social network. Developed a real-time Firebase backend for user authentication and media storage across iOS and Android. Integrated core features including comments, likes, and infinite scrolling inspired by TikTok.',
    skills: ['React Native', 'Firebase', 'TypeScript', 'Node.js', 'iOS', 'Android']
  },
  {
    title: 'Software Engineer',
    company: 'Validea Capital Management',
    date: 'March 2024 – July 2024',
    description: `Designed an advanced multi-agent Chatbot using Autogen, OpenAI, and Python providing personalized investment support for 50,000+ clients (Deployed using Docker and Azure). Created an AI model to analyze decades of Validea's financial content, delivering tailored investment insights.`,
    skills: ['AI/ML', 'Python', 'OpenAI', 'Docker', 'Azure', 'AutoGen']
  },
  {
    title: 'Software Engineer',
    company: 'Ametek Precitech',
    date: 'July 2023 – December 2023',
    description: 'Developed a programmable file browsing system (JavaScript, C++) allowing 5,000+ clients to conveniently upload and edit programs used for ultra-precision diamond milling machines. Presented new dashboard idea to senior leaders, secured approval, and implemented in C# (.Net). Resolved 50+ bugs relating to multi-threading, dependencies, memory leaks, and database contentions. Implemented CI/CD pipelines with Jenkins and Bitbucket, streamlining regression testing for 200+ test suites.',
    skills: ['C#', 'JavaScript', 'Jenkins', 'Bitbucket']
  },
  {
    title: 'Database Systems Analyst',
    company: 'Bain Capital',
    date: 'July 2022 – December 2022',
    description: 'Developed complex SQL queries to analyze datasets of over 100,000 entries, delivering critical financial insights to JV partners weekly. Resolved 170 technical support inquiries through system enhancements, boosting operational efficiency.',
    skills: ['SQL', 'Database Management']
  },
  {
    title: 'Software Engineer Intern',
    company: 'Validea Capital Management',
    date: 'June 2021 – September 2021',
    description: 'Developed an advanced financial tool in R, analyzing 50+ investment strategies for optimal model selection on Municipal Bonds, evaluating risk, premium, and performance.',
    skills: ['R', 'Financial Analysis']
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: "-100px" }}
        >
          Work Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-500" />
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-center items-center w-full relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ margin: "-50px" }}
            >
              <div className="w-5/12 text-right pr-8">
                <motion.div 
                  className="text-lg font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ margin: "-50px" }}
                >
                  <span className="text-blue-400">{experience.date.split('–')[0].trim()}</span>
                  <span className="text-gray-500 mx-2">–</span>
                  <span className="text-blue-400">{experience.date.split('–')[1].trim()}</span>
                </motion.div>
              </div>
              <div className="z-20 absolute">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
              </div>
              <div className="bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4 ml-auto">
                <h3 className="font-bold text-xl mb-1">{experience.title}</h3>
                <h4 className="text-blue-400 text-md font-semibold mb-2">
                  {experience.company}
                </h4>
                {experience.company === 'Take2' && (
                  <motion.a
                    href="https://www.take2-app.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors text-sm font-semibold mb-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Website
                    <ExternalLink size={14} />
                  </motion.a>
                )}
                <p className="text-sm mb-3">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {experience.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: skillIndex * 0.1 }}
                      viewport={{ margin: "-50px" }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience