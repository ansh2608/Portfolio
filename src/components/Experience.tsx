import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Award } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Experience & Achievements
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-600 before:rounded-full">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Research Intern</h4>
                    <p className="text-purple-600">IIT BHU</p>
                  </div>
                  <p className="text-sm text-gray-500">May 2022 - June 2022</p>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Analyzed 25,000+ Twitter sentences using Python and NLP</li>
                  <li>Enhanced model accuracy through data preprocessing</li>
                </ul>
              </div>

              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-600 before:rounded-full">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Blockchain Club</h4>
                    <p className="text-purple-600">VIT - Founder & President</p>
                  </div>
                  <p className="text-sm text-gray-500">July 2023 - June 2024</p>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Led 50+ team members across six divisions</li>
                  <li>Improved efficiency by 30% in three months</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Achievements</h3>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Problem Solving</h4>
                <p className="text-gray-600">Solved 1000+ DSA problems on LeetCode, CodeChef, GFG, and HackerRank</p>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Google HashCode 2022</h4>
                <p className="text-gray-600">Global rank of 3450 out of 25,000+ participants</p>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">QOTB at NIT Delhi</h4>
                <p className="text-gray-600">Top 10 finish among 1,000+ teams</p>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">NIT Bhopal Business Plan</h4>
                <p className="text-gray-600">Ranked in top quarter nationwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}