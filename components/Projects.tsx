import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Covey Town',
    description: 'A live web app enabling users to create avatars, chat, and play interactive games in a virtual setting.',
   // image: '/path/to/coveytown-image.jpg',
    technologies: ['TypeScript', 'React', 'PostgreSQL', 'Heroku'],
    liveUrl: 'https://avatararcade.onrender.com/',
    githubUrl: 'https://github.com/adichak27/coveytown',
  },
  {
    title: 'Take2',
    description: 'A cross-platform social media app enabling movie enthusiasts to rank, track, and view movies within their social network.',
    // image: '/path/to/taketwo-image.jpg',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    liveUrl: 'https://www.take2-app.com/',
    githubUrl: 'https://github.com/adichak27/taketwo',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex-grow"></div>
              
              <div className="flex justify-start mt-4">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects