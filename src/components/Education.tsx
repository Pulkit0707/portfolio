import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section className="py-20 bg-white" id="education">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <GraduationCap className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Education</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              B.Tech in Electronics and Communication Engineering
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Netaji Subhas University of Technology (NSUT)
            </p>
            <div className="flex items-center justify-between text-gray-600">
              <span>Graduating 2025</span>
              <span className="font-semibold">GPA: 8.66</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}