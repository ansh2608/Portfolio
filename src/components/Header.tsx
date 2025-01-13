import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Ansh Porwal
          </motion.h1>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-purple-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ansh2608" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-purple-600 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/ansh2608/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-purple-600 transition-colors" />
            </a>
            <a href="mailto:anshporwal2608@gmail.com">
              <Mail className="w-5 h-5 hover:text-purple-600 transition-colors" />
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}