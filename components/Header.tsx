import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  
  // Special case for home - scroll to top
  if (targetId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  // For other sections, use the existing logic
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-cosmic-dark/50 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
            <motion.li key={item}>
              <motion.a
                href={`#${item}`}
                className="text-gray-300 hover:text-cosmic-glow capitalize relative px-4 py-2 rounded-lg
                         transition-colors duration-300"
                onClick={(e) => handleScroll(e, item)}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(178, 75, 243, 0.5)",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
              >
                {item}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header