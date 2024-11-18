import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'
import { 
  FaJava, FaReact, FaPython, FaHtml5, FaCss3, FaNodeJs, FaAws, FaDocker, 
  FaGitAlt, FaDatabase 
} from 'react-icons/fa'
import { 
  SiCsharp, SiCplusplus, SiJavascript, SiMongodb, SiKotlin, 
  SiTypescript, SiMysql, SiFirebase, SiHeroku, SiJenkins, 
  SiPostgresql, SiR, SiMicrosoftazure 
} from 'react-icons/si'

const skills = [
  { 
    name: 'Databases', 
    icon: Database, 
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql }
    ]
  },
  { 
    name: 'Languages', 
    icon: Code, 
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'C# (.Net)', icon: SiCsharp },
      { name: 'C++', icon: SiCplusplus },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: FaPython },
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'HTML/CSS', icon: FaHtml5 },
      { name: 'R', icon: SiR },
      { name: 'TypeScript', icon: SiTypescript }
    ]
  },
  { 
    name: 'Frameworks & Tools', 
    icon: Globe, 
    items: [
      { name: 'React', icon: FaReact },
      { name: 'React Native', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Azure', icon: SiMicrosoftazure },
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: FaDocker },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Heroku', icon: SiHeroku },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Git', icon: FaGitAlt }
    ]
  },
  { 
    name: 'Other', 
    icon: Smartphone, 
    items: ['RESTful API', 'Linux', 'CI/CD', 'Agile Methodologies']
  },
]
// ... existing imports ...

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, margin: "-250px" }}
        >
          Skills & Technologies
          <p className="text-gray-400 text-sm italic">
            Hover over each skill
          </p>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
              viewport={{ once: false, margin: "-250px" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <skill.icon size={24} className="text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <ul className="grid grid-cols-3 gap-4">
                {Array.isArray(skill.items) && skill.items.map((item) => (
                  <motion.li
                    key={typeof item === 'string' ? item : item.name}
                    className="flex flex-col items-center text-center group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {typeof item === 'string' ? (
                      <span className="text-sm text-gray-300 hover:text-blue-400 transition-colors">{item}</span>
                    ) : (
                      <>
                        <motion.div
                          className="relative p-3 rounded-lg bg-gray-700/50 mb-2 group-hover:bg-blue-500/10 transition-colors"
                          whileHover={{ 
                            rotate: 360,
                            transition: { duration: 0.6, ease: "easeInOut" }
                          }}
                        >
                          <item.icon 
                            className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" 
                          />
                          <motion.div
                            className="absolute inset-0 rounded-lg bg-blue-400/10 opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </motion.div>
                        <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </span>
                      </>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills