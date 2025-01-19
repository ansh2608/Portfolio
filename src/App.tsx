import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Award, BookOpen, Briefcase, GraduationCap, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <nav className="p-6 flex justify-between items-center backdrop-blur-sm z-10 fixed w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold gradient-text"
          >
            AP
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-x-8"
          >
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#contact" className="nav-link">Contact</a>
          </motion.div>
        </nav>

        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-violet-400"
            >
              Hi, I'm
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-4 gradient-text"
            >
              Ansh Porwal
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative inline-block mb-8"
            >
              <span className="text-xl md:text-2xl text-gray-400">
                Software Engineer & 
              </span>
              <span className="text-xl md:text-2xl gradient-text font-semibold">
                Ex-Research Intern @IIT(BHU)
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-6"
            >
              <a 
                href="https://github.com/ansh2608" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ansh2608" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:anshporwal24@gmail.com" 
                className="social-icon-link"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex justify-center pb-8 relative z-10"
        >
          <ChevronDown size={24} className="text-violet-400" />
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 relative">
        <motion.div 
          className="absolute top-40 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
          <div className="card-glow">
            <div className="glass-card rounded-lg p-8">
              <p className="text-lg text-gray-300 mb-6">
                I'm a Computer Science and Engineering student with a passion for software development and data analysis. With over 1,000+ DSA problems solved across multiple platforms, I bring a strong foundation in problem-solving and technical expertise.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-violet-400 mb-2">Programming Languages</h4>
                      <p className="text-gray-300">Python, Java, SQL, HTML, CSS, JavaScript</p>
                    </div>
                    <div>
                      <h4 className="text-violet-400 mb-2">Libraries & Frameworks</h4>
                      <p className="text-gray-300">Numpy, Pandas, Scikit-Learn, Matplotlib, OpenCV</p>
                    </div>
                    <div>
                      <h4 className="text-violet-400 mb-2">Development Tools</h4>
                      <p className="text-gray-300">AWS, Git, GitHub, VS Code, PyCharm, Jupyter</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Achievements</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="achievement-item">1000+ DSA problems solved</li>
                    <li className="achievement-item">Google HashCode Rank: 3450/25000+</li>
                    <li className="achievement-item">5 stars in Java, C++, Python on HackerRank</li>
                    <li className="achievement-item">Top 25 in National B-plan Competition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-20 relative">
        <motion.div 
          className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">Experience</h2>
          <div className="space-y-8">
            <div className="card-glow">
              <div className="glass-card rounded-lg p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold gradient-text">Research Intern</h3>
                  <span className="text-gray-400">May 2022 - June 2022</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">IIT (BHU), Varanasi</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Analyzed 25,000+ Twitter sentences for abusive language detection using Python and NLP</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Conducted data cleaning and preprocessing to enhance model accuracy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-glow">
              <div className="glass-card rounded-lg p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold gradient-text">Founder & President</h3>
                  <span className="text-gray-400">July 2023 - June 2024</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">Blockchain Club, VIT Bhopal</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Led 50+ team members across six divisions, improving efficiency by 30%</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Built data-driven tools improving operations by 25%</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-glow">
              <div className="glass-card rounded-lg p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold gradient-text">Computer Science Tutor</h3>
                  <span className="text-gray-400">October 2022 - October 2023</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4">Chegg Inc.</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Provided solutions to complex academic problems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-violet-400">•</span>
                    <span>Received consistent positive feedback for solution quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20 relative">
        <motion.div 
          className="absolute top-40 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="card-glow"
            >
              <div className="glass-card rounded-lg p-6">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Virtual Mouse"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">Virtual Mouse</h3>
                <p className="text-gray-300 mb-4">
                  Gesture-based human-computer interaction system using Python, enabling mouse control through hand gestures and voice commands.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Python • OpenCV • PyAudio</span>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/ansh2608/Virtual-Mouse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="card-glow"
            >
              <div className="glass-card rounded-lg p-6">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Tuberculosis Detection"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">Tuberculosis Detection</h3>
                <p className="text-gray-300 mb-4">
                  ML-powered system achieving 96.1% accuracy in detecting tuberculosis from chest X-rays using Deep CNN.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Python • Machine Learning</span>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/ansh2608/Tuberculosis-Detection" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="card-glow"
            >
              <div className="glass-card rounded-lg p-6">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Data Analysis"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">Hotel Booking Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive analysis of booking patterns and trends using pivot tables for data-driven decision making.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Python • Data Analysis</span>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/ansh2608/Data-Analysis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 md:px-20 relative">
        <motion.div 
          className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="card-glow"
            >
              <div className="glass-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Microsoft Certifications</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Award className="text-violet-400" size={20} />
                    <a href="https://learn.microsoft.com/en-gb/users/anshporwal-0052/credentials/542900808fb92281" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-300 hover:text-violet-400 transition-colors">
                      Azure AI Fundamentals
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Award className="text-violet-400" size={20} />
                    <a href="https://learn.microsoft.com/api/credentials/share/en-gb/anshporwal-0052/9779F62B4E6ACEC8" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-300 hover:text-violet-400 transition-colors">
                      Security, Compliance and Identity
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="card-glow"
            >
              <div className="glass-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Other Certifications</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Award className="text-violet-400" size={20} />
                    <a href="https://courses.cognitiveclass.ai/certificates/acc539e53beb424bbcc8cb9ecff5d2fe" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-300 hover:text-violet-400 transition-colors">
                      IBM - Python for Data Science
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Award className="text-violet-400" size={20} />
                    <a href="https://www.coursera.org/account/accomplishments/verify/GR9UACCJL3C4" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-300 hover:text-violet-400 transition-colors">
                      Coursera - Applied Machine Learning in Python
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 relative">
        <motion.div 
          className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">Get In Touch</h2>
          <div className="card-glow inline-block">
            <div className="glass-card rounded-lg p-8">
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="button-glow">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:anshporwal24@gmail.com"
                    className="text-white font-semibold"
                  >
                    <span>Email Me</span>
                  </motion.a>
                </div>
                <div className="button-glow">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+916386294431"
                    className="text-white font-semibold"
                  >
                    <span>Call Me</span>
                  </motion.a>
                </div>
              </div>
              <div className="mt-8 flex justify-center space-x-6">
                <a href="https://leetcode.com/u/ansh2608/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors">LeetCode</a>
                <a href="https://www.geeksforgeeks.org/user/ansh2608/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors">GeeksforGeeks</a>
                <a href="https://www.codechef.com/users/ansh2608" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors">CodeChef</a>
                <a href="https://www.hackerrank.com/profile/ansh2608" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors">HackerRank</a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>Designed & Built by Ansh Porwal</p>
      </footer>
    </div>
  );
}

export default App;