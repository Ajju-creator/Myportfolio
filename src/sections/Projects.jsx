import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Quantum Vision Transformer for Video Anomaly Detection',
      description: 'Advanced deep learning architecture combining Vision Transformers with quantum-enhanced temporal attention',
      longDesc: 'Developed a novel deep learning architecture combining Vision Transformers with quantum-enhanced temporal attention. Improved anomaly detection accuracy by effectively capturing spatial and temporal patterns in video data. Implemented using TensorFlow and PyTorch with optimized training pipelines and evaluation strategies. Applicable in surveillance systems, industrial monitoring, and intelligent analytics.',
      tags: ['TensorFlow', 'PyTorch', 'Quantum ML', 'Computer Vision', 'Transformers', 'Anomaly Detection'],
      color: 'from-neon-blue to-neon-purple'
    },
    {
      title: 'Smart Helmet for Intelligent Vehicle Safety',
      description: 'IoT-based smart helmet system integrated with multiple safety sensors and emergency alert mechanisms',
      longDesc: 'Designed and developed an IoT-based smart helmet system to enhance rider safety. Integrated alcohol detection, accident detection, speed monitoring, and real-time GPS tracking. Implemented GSM-based emergency alert system to send live location to emergency contacts. Built using Embedded C, Arduino, and sensor modules ensuring real-time performance and reliability.',
      tags: ['Embedded C', 'IoT', 'Arduino', 'GSM', 'GPS', 'Sensors', 'Safety Systems'],
      color: 'from-neon-purple to-neon-pink'
    },
    {
      title: 'PCB Defect Detection using Computer Vision',
      description: 'Automated CNN-based defect detection system for industrial PCB inspection and quality assurance',
      longDesc: 'Developed an automated defect detection system using deep learning and computer vision techniques. Trained a CNN-based model using TensorFlow for accurate classification of PCB defects. Improved inspection efficiency and reduced manual errors in industrial environments. Real-time processing and high accuracy for production-line deployment.',
      tags: ['CNN', 'TensorFlow', 'Computer Vision', 'Deep Learning', 'Industrial Automation'],
      color: 'from-neon-pink to-neon-blue'
    },
    {
      title: 'Smart Pesticide Sprinkler System',
      description: 'IoT-enabled intelligent agricultural system using deep learning for automated pesticide application',
      longDesc: 'Built an IoT-enabled intelligent agricultural system using deep learning for plant condition analysis. Automated pesticide spraying based on real-time detection, reducing chemical usage and improving efficiency. Integrated computer vision with IoT modules for smart decision-making and sustainable farming.',
      tags: ['IoT', 'Deep Learning', 'Computer Vision', 'Agricultural Tech', 'Python'],
      color: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'Quasi-Elliptic Bandpass Frequency Selective Surface',
      description: 'High-performance RF engineering design for satellite communication with optimized electromagnetic properties',
      longDesc: 'Designed a high-performance bandpass FSS structure for satellite communication applications. Simulated electromagnetic behavior using HFSS and performed parametric analysis. Validated frequency response using MATLAB for accuracy and performance optimization. Advanced antenna design for next-generation communication systems.',
      tags: ['RF Engineering', 'HFSS', 'MATLAB', 'Antenna Design', 'Electromagnetic Simulation'],
      color: 'from-neon-blue to-neon-purple'
    },
    {
      title: 'House Price Prediction using Machine Learning',
      description: 'Regression-based ML model for accurate real estate price prediction with feature engineering',
      longDesc: 'Developed a regression-based machine learning model to predict housing prices. Used real-world datasets with comprehensive feature engineering and model evaluation techniques. Built a simple application interface for user-based predictions. Advanced data analysis and model optimization for real estate analytics.',
      tags: ['ML', 'Regression', 'Python', 'Data Analysis', 'Scikit-learn'],
      color: 'from-neon-pink to-neon-purple'
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-dark-800 rounded-lg overflow-hidden border border-neon-blue/20 hover:border-neon-purple/50 transition-all duration-300 group"
              whileHover={{ y: -10 }}
            >
              {/* Header Gradient */}
              <div className={`h-32 bg-gradient-to-r ${project.color} opacity-20`}></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-neon-blue mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-gray-300 text-sm mb-4">{project.longDesc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <motion.span
                      key={tagIdx}
                      className="px-3 py-1 bg-dark-900 text-xs rounded-full text-gray-300 border border-neon-blue/30 group-hover:border-neon-purple/50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded text-sm font-semibold text-dark-900 hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 border border-neon-blue rounded text-sm font-semibold text-neon-blue hover:bg-neon-blue/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
