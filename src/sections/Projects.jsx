import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Quantum Vision Transformer',
      description: 'Advanced deep learning model for video anomaly detection using quantum-inspired transformer architecture with temporal attention mechanisms',
      longDesc: 'Advanced deep learning model for video anomaly detection using quantum-inspired transformer architecture with temporal attention mechanisms. The system captures spatial and temporal patterns to detect and localize anomalies in surveillance footage with exceptional accuracy. Deployed for real-time monitoring in surveillance and industrial automation systems.',
      tags: ['TensorFlow', 'PyTorch', 'Transformers', 'Quantum ML', 'Computer Vision'],
      color: 'from-neon-blue to-neon-purple'
    },
    {
      title: 'Smart Helmet System',
      description: 'Innovative IoT-based rider safety system with real-time accident and alcohol detection using embedded sensors',
      longDesc: 'Innovative IoT-based rider safety system with real-time accident and alcohol detection using embedded sensors. The system sends GPS coordinates and SMS alerts to emergency contacts through GSM module integration. Features accident detection, continuous monitoring, and instant emergency notification for comprehensive rider protection on roads.',
      tags: ['Arduino', 'ESP32', 'IoT', 'GSM', 'GPS', 'Embedded C'],
      color: 'from-neon-purple to-neon-pink'
    },
    {
      title: 'PCB Defect Detection',
      description: 'Advanced CNN-based computer vision system for automated PCB defect classification and detection',
      longDesc: 'Advanced CNN-based computer vision system for automated PCB defect classification and detection. The system analyzes PCB images to identify manufacturing defects with high precision and recall. Significantly improves production quality assurance and reduces manual inspection time in semiconductor manufacturing.',
      tags: ['TensorFlow', 'CNN', 'Computer Vision', 'Python', 'Deep Learning'],
      color: 'from-neon-pink to-neon-blue'
    },
    {
      title: 'Smart Pesticide Sprinkler',
      description: 'Intelligent agricultural IoT system powered by deep learning for automated plant health analysis and pest control',
      longDesc: 'Intelligent agricultural IoT system powered by deep learning for automated plant health analysis and pest control. Uses CNN-based plant disease detection to trigger automated pesticide spraying. Significantly reduces chemical usage, minimizes environmental impact, and optimizes crop protection in smart farming applications.',
      tags: ['Deep Learning', 'IoT', 'Computer Vision', 'Arduino', 'Python'],
      color: 'from-neon-blue to-neon-pink'
    },
    {
      title: 'Quasi-Elliptic Bandpass FSS',
      description: 'Precision RF engineering project designing a quasi-elliptic bandpass frequency selective surface optimized for satellite communication',
      longDesc: 'Precision RF engineering project designing a quasi-elliptic bandpass frequency selective surface optimized for satellite communication systems. Comprehensive electromagnetic simulation using HFSS with parametric sweeps for frequency response optimization. Validated theoretical performance through MATLAB analysis and surface current investigation.',
      tags: ['HFSS', 'RF Engineering', 'MATLAB', 'Antenna Design', 'EM Simulation'],
      color: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'House Price Prediction',
      description: 'Comprehensive machine learning regression model for predicting house prices using real-world real estate datasets',
      longDesc: 'Comprehensive machine learning regression model for predicting house prices using real-world real estate datasets. Implements complete ML pipeline including exploratory data analysis, feature engineering, model selection, hyperparameter optimization, and performance evaluation.',
      tags: ['Python', 'Scikit-Learn', 'Machine Learning', 'Data Science', 'Regression'],
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
