import { motion } from 'framer-motion'
import Image from 'next/image'

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: "-100px" }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <motion.div
            className="md:w-2/5 -mt-4 md:-ml-8 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ margin: "-100px" }}
          >
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl"></div>
            <Image
              src="/images/adiprofile.png"
              alt="Adi Chakravarthy"
              width={380}
              height={380}
              className="rounded-full shadow-xl relative z-10"
              priority
            />
          </motion.div>
          <motion.div
            className="md:w-3/5 max-w-2xl pt-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ margin: "-100px" }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                Hello! I'm Adi Chakravarthy, a passionate software engineer with a strong foundation in Computer Science and Business Administration. I'm currently pursuing my Bachelor of Science at Northeastern University's Khoury College of Computer Science, specializing in Computer Science and FinTech.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                With a GPA of 3.7/4.0 and a place on the Dean's List, I've honed my skills in various areas of computer science, including Object-Oriented Design, Algorithms, Networks/Distributed Systems, Databases, and Mobile App Development. My diverse work experience spans from co-founding a startup to working with established companies like Validea Capital Management and Ametek Precitech.
              </p>
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ margin: "-100px" }}
              >
                <motion.a
                  href="#contact"
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-semibold 
                           hover:bg-blue-600 transition-all duration-300 
                           shadow-lg hover:shadow-blue-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in touch
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About