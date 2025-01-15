import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Briefcase, GraduationCap, Code2, Trophy, Phone, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-indigo-50 to-white">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Scene />
        </Canvas>
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Pulkit Chawla
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Software Developer & Tech Enthusiast
          </p>
          
          {/* Contact Details */}
          <div className="flex justify-center space-x-8 mb-8">
            <a href="tel:+919818562778" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91 9818562778</span>
            </a>
            <a href="mailto:pulkit0707chawla@gmail.com" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              <span>pulkit0707chawla@gmail.com</span>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Pulkit0707" target="_blank" rel="noopener noreferrer" 
               className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-indigo-50">
              <Github className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors mr-2" />
              <span className="text-gray-700 hover:text-indigo-600">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/pulkit-chawla-3276001b0/" target="_blank" rel="noopener noreferrer"
               className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-indigo-50">
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors mr-2" />
              <span className="text-gray-700 hover:text-indigo-600">LinkedIn</span>
            </a>
            <a href="https://x.com/PulkitChaw31315" target="_blank" rel="noopener noreferrer"
               className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-indigo-50">
              <Twitter className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors mr-2" />
              <span className="text-gray-700 hover:text-indigo-600">Twitter</span>
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Code2 className="w-5 h-5" />
              <span>Projects</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('experience')}
              className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              <span>Experience</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('education')}
              className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Education</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('coding-profiles')}
              className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Trophy className="w-5 h-5" />
              <span>Coding Profiles</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}