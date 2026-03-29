import { motion } from 'framer-motion'
import { Code, Zap, Target } from 'lucide-react'

const CodingProfiles = () => {
  const profiles = [
    {
      icon: Code,
      name: 'LeetCode',
      url: 'https://leetcode.com/u/BAjay_1012/',
      stats: 'Solved 200+ Problems',
      description: 'Active problem solver focusing on Data Structures and Algorithms',
      color: 'from-neon-blue to-neon-purple'
    },
    {
      icon: Zap,
      name: 'GitHub',
      url: 'https://github.com/Ajaybhashaveni',
      stats: '15+ Projects',
      description: 'Open source contributions and innovative projects',
      color: 'from-neon-purple to-neon-pink'
    },
    {
      icon: Target,
      name: 'HackerRank',
      url: '#',
      stats: '5 Star Badge',
      description: 'Proficient in Python and Problem Solving',
      color: 'from-neon-pink to-neon-blue'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 bg-dark-800/30 border-y border-neon-blue/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-4 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Coding Profiles
        </motion.h2>

        <motion.p 
          className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Active problem solver with strong foundation in Data Structures, Algorithms, and competitive programming.
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profiles.map((profile, idx) => {
            const Icon = profile.icon
            return (
              <motion.a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${profile.color} p-0.5 rounded-lg`}>
                  <div className="bg-dark-800 rounded-lg p-6 group-hover:bg-dark-700 transition-all">
                    <motion.div 
                      className="mb-4 inline-block"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Icon className="w-12 h-12 text-neon-blue" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-neon-purple font-semibold mb-3">{profile.stats}</p>
                    <p className="text-gray-400 text-sm mb-4">{profile.description}</p>

                    <motion.div 
                      className="flex items-center gap-2 text-neon-blue font-semibold group-hover:gap-3 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      Visit Profile →
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* DSA Focus */}
        <motion.div 
          className="bg-dark-900 rounded-lg p-8 border border-neon-purple/30 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-neon-purple mb-4">Strong Foundation in DSA</h3>
          <p className="text-gray-300 mb-4">
            Consistent practice and problem-solving across multiple platforms. Specialized in:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Arrays & Strings',
              'Linked Lists & Trees',
              'Graphs & DFS/BFS',
              'Dynamic Programming',
              'Sorting & Searching',
              'Greedy Algorithms'
            ].map((skill, idx) => (
              <motion.div 
                key={idx}
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-neon-blue text-xl">✦</span>
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfiles
