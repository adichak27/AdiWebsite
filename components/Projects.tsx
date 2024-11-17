import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Covey Town',
    description: 'A live web app enabling users to create avatars, chat, and play interactive games in a virtual setting.',
   // image: '/path/to/coveytown-image.jpg',
    technologies: ['TypeScript', 'React', 'PostgreSQL', 'Heroku'],
    liveUrl: 'https://coveytown.example.com',
    githubUrl: 'https://github.com/adichak27/coveytown',
  },
  {
    title: 'Spotify to MP3 Converter',
    description: 'An automation tool to convert songs to .mp3 for seamless offline music playback. Leverages Spotify\'s API to retrieve comprehensive song metadata and BeautifulSoup4 for web scraping.',
   // image: '/path/to/spotify-converter-image.jpg',
    technologies: ['Python', 'Flask', 'JavaScript', 'Spotify API', 'BeautifulSoup4'],
    liveUrl: 'https://spotify-converter.example.com',
    githubUrl: 'https://github.com/adichak27/spotify-converter',
  },
  {
    title: 'Take Two',
    description: 'A cross-platform social media app enabling movie enthusiasts to rank, track, and view movies within their social network.',
   // image: '/path/to/taketwo-image.jpg',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    liveUrl: 'https://taketwo.example.com',
    githubUrl: 'https://github.com/adichak27/taketwo',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects