import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Adi Chakravarthy
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className="text-white hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.button
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={24} />
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header