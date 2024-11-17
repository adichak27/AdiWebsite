import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/adiprofile.png"  // Update this line
              alt="Adi Chakravarthy"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
              priority  // Add this to prioritize loading
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-4">
              Hello! I'm Adi Chakravarthy, a passionate software engineer with a strong foundation in Computer Science and Business Administration. I'm currently pursuing my Bachelor of Science at Northeastern University's Khoury College of Computer Science, specializing in Computer Science and FinTech.
            </p>
            <p className="text-lg mb-4">
              With a GPA of 3.7/4.0 and a place on the Dean's List, I've honed my skills in various areas of computer science, including Object-Oriented Design, Algorithms, Networks/Distributed Systems, Databases, and Mobile App Development. My diverse work experience spans from co-founding a startup to working with established companies like Validea Capital Management and Ametek Precitech.
            </p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About