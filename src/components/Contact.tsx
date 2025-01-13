import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:anshporwal2608@gmail.com"
                className="flex items-center gap-4 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>anshporwal2608@gmail.com</span>
              </a>
              <a
                href="tel:+916386294431"
                className="flex items-center gap-4 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>+91 6386294431</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ansh2608/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>linkedin.com/in/ansh2608</span>
              </a>
              <a
                href="https://github.com/ansh2608"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>github.com/ansh2608</span>
              </a>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}