import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      color: 'from-neon-blue to-neon-purple',
      skills: ['Python', 'C', 'Java', 'MATLAB', 'SQL']
    },
    {
      title: 'AI/ML',
      color: 'from-neon-purple to-neon-pink',
      skills: ['TensorFlow', 'PyTorch', 'Pennylane', 'Qiskit']
    },
    {
      title: 'Embedded & IoT',
      color: 'from-neon-pink to-neon-blue',
      skills: ['Arduino', 'ESP32', 'GSM', 'GPS', 'Sensors']
    },
    {
      title: 'Tools & Platforms',
      color: 'from-neon-blue to-neon-purple',
      skills: ['LTSpice', 'HSpice', 'Tinkercad', 'Xilinx ISE', 'Cadence']
    },
    {
      title: 'Core Concepts',
      color: 'from-neon-purple to-neon-pink',
      skills: ['Data Structures', 'Machine Learning', 'Deep Learning', 'Signal Processing']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-dark-800 rounded-lg p-6 border border-neon-blue/20 hover:border-neon-purple/50 transition-all duration-300 neon-glow"
              whileHover={{ y: -5 }}
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    className="px-3 py-1 bg-dark-900 rounded-full text-sm text-gray-300 border border-neon-blue/30 hover:border-neon-blue hover:text-neon-blue transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Bars */}
        <motion.div 
          className="mt-16 space-y-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">Proficiency Level</h3>
          {[
            { name: 'Python & Data Science', level: 95 },
            { name: 'AI/ML & Deep Learning', level: 90 },
            { name: 'Embedded Systems', level: 85 },
            { name: 'IoT & Robotics', level: 85 },
          ].map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-neon-blue">{skill.level}%</span>
              </div>
              <div className="h-2 bg-dark-800 rounded-full overflow-hidden border border-neon-blue/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
