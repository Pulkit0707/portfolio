import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: "GoDaddy",
      position: "SDE Intern",
      period: "Current",
      team: "Online Appointments Team",
      description: "Currently working as an SDE Intern at GoDaddy as part of the online appointments team."
    },
    {
      company: "Tech Mahindra",
      position: "SDE Intern",
      period: "Jun 2024 - Sep 2024",
      description: [
        "Designed and documented 5+ High-Level and Low-Level architectural components for a Mailing/Chatting system, increasing scalability and maintainability by 30% through modular design principles.",
        "Identified and resolved 20+ potential test cases, addressing functional and non-functional errors to enhance system reliability by 40% and minimize risks in production.",
        "Acquired in-depth knowledge of the Software Development Life Cycle (SDLC) and implemented 3+ key testing methodologies, improving system reliability by 25% through structured planning and analysis."
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {exp.position} at {exp.company}
                </h3>
                <p className="text-lg text-indigo-600 mb-4">{exp.period}</p>
                {exp.team && (
                  <p className="text-gray-600 mb-4">{exp.team}</p>
                )}
                {typeof exp.description === 'string' ? (
                  <p className="text-gray-600">{exp.description}</p>
                ) : (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}