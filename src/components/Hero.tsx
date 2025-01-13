import { motion } from 'framer-motion';
import { Code, Database, Brain, Laptop, Sparkles, Cpu } from 'lucide-react';

export default function Hero() {
  const floatingIcons = [
    { Icon: Code, color: "text-cyan-400", delay: 0 },
    { Icon: Database, color: "text-purple-400", delay: 0.2 },
    { Icon: Brain, color: "text-pink-400", delay: 0.4 },
    { Icon: Laptop, color: "text-indigo-400", delay: 0.6 },
    { Icon: Sparkles, color: "text-amber-400", delay: 0.8 },
    { Icon: Cpu, color: "text-emerald-400", delay: 1 }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-indigo-950 to-purple-950 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-conic from-purple-500/30 via-cyan-500/30 to-purple-500/30 animate-spin-slow mix-blend-overlay filter blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 relative"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                Ansh Porwal
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-300 mb-12 leading-relaxed"
            >
              Full Stack Developer & Data Science Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-3 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 transition-all duration-300 animate-gradient-xy" />
                <span className="relative text-white font-semibold">Get in Touch</span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating Icons */}
          <div className="relative mt-20">
            <div className="absolute inset-0 flex items-center justify-center">
              {floatingIcons.map(({ Icon, color, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay }}
                  className="absolute"
                  style={{
                    transform: `rotate(${index * (360 / floatingIcons.length)}deg) translateY(-100px)`
                  }}
                >
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    className={`glass-effect p-4 rounded-xl ${color}`}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}