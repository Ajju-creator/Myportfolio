import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Deep Learning Intern',
      company: 'NIT Warangal',
      period: '2024',
      description: [
        'Worked on advanced deep learning research focused on video anomaly detection and intelligent systems',
        'Designed and implemented a Quantum Vision Transformer integrated with temporal attention mechanisms to capture sequential dependencies and improve anomaly localization',
        'Developed and experimented with multiple deep learning models including CNNs, RNNs, and transformer-based architectures to enhance detection accuracy and robustness',
        'Built scalable training pipelines using TensorFlow and PyTorch, incorporating sensor-fusion techniques for real-time applications',
        'Optimized models for performance under noisy and dynamic conditions, targeting real-world applications in surveillance, electronics systems, and signal processing'
      ],
      tags: ['TensorFlow', 'PyTorch', 'Quantum ML', 'Computer Vision', 'Transformers']
    },
    {
      title: 'AI/ML Intern',
      company: 'GemalNet',
      period: '2024',
      description: [
        'Developed machine learning and deep learning models for predictive analytics and classification tasks',
        'Performed advanced data preprocessing, feature engineering, and model evaluation to improve accuracy and generalization',
        'Worked on real-world datasets and implemented end-to-end ML pipelines including training, validation, and optimization',
        'Applied AI techniques to solve practical problems using Python, TensorFlow, and data-driven approaches',
        'Contributed to production-ready machine learning solutions with focus on performance and scalability'
      ],
      tags: ['ML', 'Python', 'Data Science', 'TensorFlow', 'Analytics']
    },
    {
      title: 'Deep Learning Intern',
      company: 'QManet (NIT Collaboration)',
      period: '2023',
      description: [
        'Worked on advanced deep learning models for anomaly detection and intelligent data analysis',
        'Designed and optimized neural network architectures for handling temporal and structured data',
        'Focused on hyperparameter tuning, model optimization, and improving inference efficiency for real-time systems',
        'Collaborated on research-oriented implementations involving modern deep learning techniques and model performance enhancement',
        'Implemented sophisticated anomaly detection algorithms for industrial and scientific applications'
      ],
      tags: ['Neural Networks', 'Anomaly Detection', 'Deep Learning', 'Optimization']
    },
    {
      title: 'Python Intern',
      company: 'CodeSoft',
      period: '2023',
      description: [
        'Developed Python-based applications and automation scripts for real-world use cases',
        'Strengthened programming fundamentals including data structures, logic building, and modular code design',
        'Implemented efficient and reusable solutions for small-scale software systems',
        'Gained hands-on experience in software development best practices and debugging techniques'
      ],
      tags: ['Python', 'Scripting', 'Automation', 'Software Development']
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 bg-dark-800/30 border-y border-neon-blue/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-dark-900 rounded-lg p-6 border-l-4 border-gradient-to-b from-neon-blue to-neon-purple hover:shadow-lg transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-800 rounded-lg">
                  <Briefcase className="text-neon-blue" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-neon-blue">{exp.title}</h3>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 font-semibold mb-3">{exp.company}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, descIdx) => (
                      <li key={descIdx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-purple mt-1">▸</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tagIdx}
                        className="px-2 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded border border-neon-blue/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
