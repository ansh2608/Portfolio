import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, MousePointer, LineChart, ShoppingBag, Stethoscope } from 'lucide-react';

const projects = [
  {
    title: "Virtual Mouse",
    description: "Gesture-based human-computer interaction system using Python, enabling mouse and system control through hand gestures and voice commands.",
    tech: ["Python", "OpenCV", "PyAudio", "pywin32"],
    github: "https://github.com/ansh2608/Virtual-Mouse",
    image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
    icon: MousePointer,
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Hotel Booking Analysis",
    description: "Analyzed booking patterns and trends with pivot tables, enabling data-driven decisions and improving efficiency.",
    tech: ["Python", "Pandas", "Data Analysis"],
    github: "https://github.com/ansh2608/Data-Analysis",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    icon: LineChart,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Shoppers - E-Commerce",
    description: "Designed an e-commerce website using HTML, CSS, and JavaScript, integrating style and functionality for a seamless user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ansh2608/Shoppers-E-Commerce-Website",
    live: "https://ansh2608.github.io/Shoppers-E-Commerce-Website/",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    icon: ShoppingBag,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "TB Detection",
    description: "Developed ML models achieving 96.1% accuracy in identifying tuberculosis from chest X-rays using advanced analysis techniques.",
    tech: ["Python", "ML", "Image Processing"],
    github: "https://github.com/ansh2608/Tuberculosis-Detection",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    icon: Stethoscope,
    gradient: "from-rose-500 to-orange-500"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 animate-gradient">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-16 text-white text-shadow"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group glass-effect rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 neon-glow hover-neon-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-50`}></div>
                <div className="absolute top-4 right-4 glass-effect p-3 rounded-xl shadow-lg">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-indigo-100 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 glass-effect text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg transition-all neon-glow hover-neon-glow`}
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 glass-effect text-white rounded-lg transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}