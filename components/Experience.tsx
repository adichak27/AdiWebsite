import { motion } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Deloitte',
    date: 'September 2024 – Present',
    description: 'Led the enterprise-wide migration of client’s HR services from SAP to ServiceNow, successfully integrating 20+ workflows and migrating 100,000+ employee records using JavaScript, SQL, and Restful APIs',
    skills: ['React Native', 'Firebase', 'TypeScript', 'Node.js', 'iOS', 'Android']
  },
  {
    title: 'Co-founder',
    company: 'Take2',
    date: 'June 2024 – December 2024',
    description: 'Engineered the E2E development of a cross-platform social media app enabling movie enthusiasts to rank, track, and view movies within their social network. Developed a real-time Firebase backend for user authentication and media storage across iOS and Android. Integrated core features including comments, likes, and infinite scrolling inspired by TikTok.',
    skills: ['React Native', 'Firebase', 'TypeScript', 'Node.js', 'iOS', 'Android']
  },
  {
    title: 'AI Solutions Developer',
    company: 'Validea Capital Management',
    date: 'March 2024 – July 2024',
    description: `Designed an advanced multi-agent Chatbot using Autogen, OpenAI, and Python providing personalized investment support for 50,000+ clients (Deployed using Docker and Azure). Created an AI model to analyze decades of Validea's financial content, delivering tailored investment insights.`,
    skills: ['AI/ML', 'Python', 'OpenAI', 'Docker', 'Azure', 'AutoGen']
  },
  {
    title: 'Back-End Software Engineer',
    company: 'Ametek Precitech',
    date: 'July 2023 – December 2023',
    description: 'Developed a programmable file browsing system allowing 5,000+ clients to conveniently upload and edit programs used for ultra-precision diamond milling machines. Presented new dashboard idea to senior leaders, secured approval, and implemented in C# (.Net). Resolved 50+ bugs relating to multi-threading, dependencies, memory leaks, and database contentions. Implemented CI/CD pipelines with Jenkins and Bitbucket, streamlining regression testing for 200+ test suites.',
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
    <section id="experience" className="py-20 bg-cosmic-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center cosmic-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
        >
          Work Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-cosmic-primary" />
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
                  <span className="text-cosmic-glow">{experience.date.split('–')[0].trim()}</span>
                  <span className="text-gray-500 mx-2">–</span>
                  <span className="text-cosmic-glow">{experience.date.split('–')[1].trim()}</span>
                </motion.div>
              </div>
              <div className="z-20 absolute">
                <div className="w-3 h-3 bg-cosmic-primary rounded-full shadow-cosmic" />
              </div>
              <div className="bg-cosmic-dark/80 rounded-lg shadow-cosmic hover:shadow-cosmic-lg cosmic-border 
                            w-5/12 px-6 py-4 ml-auto transition-all">
                <h3 className="font-bold text-xl mb-1 cosmic-glow">{experience.title}</h3>
                <h4 className="text-cosmic-light text-md font-semibold mb-2">
                  {experience.company}
                </h4>
                {experience.company === 'Take2' && (
                  <motion.a
                    href="https://www.take2-app.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cosmic-glow hover:text-cosmic-light 
                             transition-colors text-sm font-semibold mb-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Website
                    <ExternalLink size={14} />
                  </motion.a>
                )}
                <p className="text-sm mb-3 text-gray-300">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {experience.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-cosmic-primary/10 text-cosmic-glow rounded-full text-xs 
                               font-semibold hover:bg-cosmic-accent/20 transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: skillIndex * 0.1 }}
                      viewport={{ margin: "-50px" }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(159, 43, 104, 0.2)'
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