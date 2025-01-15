import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export function CodingProfiles() {
  const profiles = [
    {
      platform: "LeetCode",
      solved: "1100+",
      link: "https://leetcode.com/u/pulkit0707chawla/"
    },
    {
      platform: "Codeforces",
      solved: "280+"
    },
    {
      platform: "CodeChef",
      link: "https://www.codechef.com/users/tiding_salt_96"
    },
    {
      platform: "GeeksForGeeks",
      solved: "980+",
      link: "https://www.geeksforgeeks.org/user/pulkit0707chawla/"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="coding-profiles">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <Code className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Coding Profiles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {profile.platform}
                </h3>
                {profile.solved && (
                  <p className="text-indigo-600 font-medium mb-3">
                    Solved: {profile.solved} questions
                  </p>
                )}
                {profile.link && (
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 underline"
                  >
                    View Profile
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}