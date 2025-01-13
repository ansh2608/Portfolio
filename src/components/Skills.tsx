import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Libraries & Frameworks",
    skills: ["Numpy", "Pandas", "Scikit-Learn", "Matplotlib", "OpenCV"]
  },
  {
    title: "Data Tools",
    skills: ["Power BI", "MySQL", "SQLite", "Microsoft Excel"]
  },
  {
    title: "Development Tools",
    skills: ["Conda", "PyCharm", "Jupyter Notebook", "Google Colab", "VS Code", "Git"]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-600">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}