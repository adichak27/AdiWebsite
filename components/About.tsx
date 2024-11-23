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
    <section id="about" className="relative py-20 bg-cosmic-dark">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0A0014] to-cosmic-dark" />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white cosmic-glow"
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
            <div className="absolute -inset-4 bg-cosmic-glow/20 rounded-full blur-2xl"></div>
            <Image
              src={"/images/adiprofile.png"}
              alt="Adi Chakravarthy"
              width={380}
              height={380}
              className="rounded-full shadow-cosmic relative z-10"
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
              <p className="text-lg leading-relaxed text-white">
                Hello! I'm Adi Chakravarthy, a passionate software engineer with a strong foundation in Computer Science and Business Administration. I'm currently pursuing my Bachelor of Science at Northeastern University's Khoury College of Computer Science, specializing in Computer Science and FinTech.
              </p>
              <p className="text-lg leading-relaxed text-white">
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
                  className="inline-block bg-cosmic-primary text-white px-8 py-4 rounded-full font-semibold 
                           hover:bg-[#6B0F8F] transition-all duration-300
                           border border-transparent hover:border-cosmic-glow"
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