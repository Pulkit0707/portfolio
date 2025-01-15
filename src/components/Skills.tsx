import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "C++", "Solidity"]
    },
    {
      title: "Web Development",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Node.js", "Express.js", "Clerk"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "Firebase", "PostgreSQL", "Notion", "Supabase", "Neon", "SQL"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <Code2 className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium hover:bg-indigo-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}