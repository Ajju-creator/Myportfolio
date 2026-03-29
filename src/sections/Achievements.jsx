import { motion } from 'framer-motion'
import { Trophy, Star, Award } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Vice President - IoT Club',
      description: 'Leading innovation and technology initiatives',
      color: 'text-neon-blue'
    },
    {
      icon: Star,
      title: 'Department Topper',
      description: '4 consecutive semesters with distinction',
      color: 'text-neon-purple'
    },
    {
      icon: Award,
      title: 'HackerRank Runner-up',
      description: 'Strong performance in competitive programming',
      color: 'text-neon-pink'
    },
    {
      icon: Trophy,
      title: 'IoT Startup Co-founder',
      description: 'Building innovative IoT solutions',
      color: 'text-neon-blue'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 bg-dark-800/30 border-y border-neon-blue/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Achievements & Recognition
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-dark-900 rounded-lg p-6 border border-neon-blue/20 hover:border-neon-purple/50 transition-all duration-300 text-center"
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
              >
                <motion.div 
                  className="mb-4 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Icon className={`${achievement.color} w-12 h-12`} />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { number: '9.93', label: 'CGPA' },
            { number: '4', label: 'Semesters Topper' },
            { number: '5+', label: 'Projects Completed' },
            { number: '20+', label: 'Skills Developed' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
