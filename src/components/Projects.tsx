import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Pulkit Estate",
      description: "MERN Stack Real Estate App with advanced property search, viewing, and listing capabilities.",
      tech: ["NodeJS", "ReactJS", "MongoDB", "Express", "Firebase"],
      highlights: [
        "Processes 5,000+ queries daily with advanced filtering",
        "Secure authentication using JWT, Firebase, and Google OAuth",
        "99.9% uptime handling 1,000+ API requests weekly"
      ],
      live: "https://pulkit-estate.onrender.com/",
      code: "https://github.com/Pulkit0707/Pulkit-Estate"
    },
    {
      title: "SmartCA",
      description: "AI-Powered Smart Contract Auditing Tool (npm package) for smart contracts auditing with AI-powered analysis.",
      tech: ["NPM", "AI", "Hugging Face", "Solana", "Solidity"],
      highlights: [
        "25% improvement in auditing efficiency",
        "30% reduction in manual review time",
        "Comprehensive analysis across 4 parameters"
      ],
      live: "https://www.npmjs.com/package/smartca",
      code: "https://github.com/Pulkit0707/smart-ca-npm"
    },
    {
      title: "Currency For Coders",
      description: "VS Code extension displaying real-time prices of top stocks and cryptocurrencies directly in the editor.",
      tech: ["JavaScript", "VS Code API", "Alpha Vantage API", "CoinGecko API"],
      highlights: [
        "500+ downloads on VS Code marketplace",
        "4.8/5 user rating",
        "Real-time market data integration"
      ],
      live: "https://marketplace.visualstudio.com/items?itemName=Pulkit.currency-for-coders",
      code: "https://github.com/Pulkit0707/currency_for_coders"
    },
    {
      title: "Thinkk",
      description: "Social media platform for sharing thoughts, images, and engaging through likes and comments.",
      tech: ["ReactJS", "Firebase", "Firestore"],
      highlights: [
        "10,000+ posts and 15,000+ comments in first month",
        "98% secure user authentication",
        "30% reduction in data retrieval times"
      ],
      live: "https://thinkk-b71ef.web.app/",
      code: "https://github.com/Pulkit0707/Thinkk"
    },
    {
      title: "Hindi Word Clock",
      description: "Innovative clock displaying time in Hindi words using RGB LEDs, blending cultural heritage with technology.",
      tech: ["Arduino", "C++", "RTC"],
      highlights: [
        "144 RGB LEDs for dynamic display",
        "Memory-efficient time conversion algorithm",
        "Modular design for scalability"
      ]
    },
    {
      title: "Crowdfunding Decentralised App",
      description: "Blockchain-based platform for creating and contributing to funding campaigns.",
      tech: ["Lenia Sepolia", "ThirdWeb", "React.js", "MetaMask"],
      highlights: [
        "200+ active users",
        "30% reduction in deployment time",
        "40% increase in user engagement"
      ],
      code: "https://github.com/Pulkit0707/Crowdfund"
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <Code2 className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                
                <div className="flex space-x-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 hover:text-indigo-800"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 hover:text-indigo-800"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}