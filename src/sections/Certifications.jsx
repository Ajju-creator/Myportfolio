import { motion } from 'framer-motion'
import { Certificate } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    { title: 'ISRO Remote Sensing & GIS', issuer: 'Indian Space Research Organisation' },
    { title: 'AWS Cloud Technical Essentials', issuer: 'Amazon Web Services' },
    { title: 'Microsoft Generative AI', issuer: 'Microsoft' },
    { title: 'Python Professional', issuer: 'HackerRank' },
    { title: 'Data Science Fundamentals', issuer: 'Coursera' },
    { title: 'Deep Learning Specialization', issuer: 'Coursera' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-dark-800 rounded-lg p-4 border border-neon-blue/20 hover:border-neon-purple/50 transition-all duration-300 flex items-center gap-4"
              whileHover={{ x: 10, boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)' }}
            >
              <motion.div 
                className="p-3 bg-dark-900 rounded-lg"
                whileHover={{ rotate: 10 }}
              >
                <Certificate className="text-neon-blue" size={24} />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-neon-blue">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
              <motion.div 
                className="text-neon-purple text-2xl"
                whileHover={{ scale: 1.2 }}
              >
                ✓
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Coursework */}
        <motion.div 
          className="mt-16 bg-dark-800 rounded-lg p-6 border border-neon-blue/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-neon-purple mb-4">Additional Coursework</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Advanced Machine Learning',
              'Quantum Computing Basics',
              'IoT System Design',
              'Embedded Systems Development',
              'Signal Processing',
              'Computer Vision'
            ].map((course, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-neon-blue">▸</span>
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
