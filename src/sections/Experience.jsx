import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Deep Learning Intern',
      company: 'NIT Warangal',
      period: '2024',
      description: [
        'Worked on video anomaly detection using advanced deep learning techniques and quantum-inspired models',
        'Developed Quantum Vision Transformer with temporal attention mechanisms to capture sequential dependencies and temporal patterns',
        'Implemented CNN, RNN, and Transformer models with focus on accuracy and real-time performance',
        'Built TensorFlow and PyTorch pipelines with sensor fusion for multi-modal learning and real-time inference',
        'Applied optimization techniques for noisy and dynamic conditions in surveillance and industrial systems'
      ],
      tags: ['TensorFlow', 'PyTorch', 'Quantum ML', 'Transformers', 'Computer Vision']
    },
    {
      title: 'AI/ML Intern',
      company: 'GemalNet',
      period: '2024',
      description: [
        'Developed ML models for prediction and classification on real-world business datasets',
        'Performed data preprocessing, feature engineering, and exploratory data analysis for improved model performance',
        'Built end-to-end ML pipelines including data preparation, model training, validation, and deployment',
        'Applied machine learning best practices to solve practical business problems and optimize model accuracy',
        'Collaborated with team to deliver production-ready solutions with focus on scalability and maintainability'
      ],
      tags: ['Machine Learning', 'Python', 'Data Science', 'TensorFlow', 'Analytics']
    },
    {
      title: 'Deep Learning Intern',
      company: 'QManet (NIT Collaboration)',
      period: '2023',
      description: [
        'Worked on neural networks and anomaly detection systems for intelligent data analysis',
        'Optimized deep learning models for performance and real-time inference on edge devices',
        'Applied hyperparameter tuning and model architecture optimization techniques',
        'Implemented sophisticated anomaly detection algorithms for industrial and scientific applications',
        'Collaborated on research implementations with focus on model efficiency and accuracy trade-offs'
      ],
      tags: ['Neural Networks', 'Anomaly Detection', 'Deep Learning', 'Model Optimization']
    },
    {
      title: 'Python Intern',
      company: 'CodeSoft',
      period: '2023',
      description: [
        'Developed automation scripts and Python applications for real-world problems',
        'Strengthened core programming skills including data structures, algorithms, and problem-solving',
        'Implemented efficient solutions using best practices and clean code principles',
        'Gained practical experience in software development lifecycle and debugging methodologies'
      ],
      tags: ['Python', 'Scripting', 'DSA', 'Automation']
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
