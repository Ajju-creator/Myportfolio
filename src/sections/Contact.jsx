import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code as CodeIcon, ExternalLink } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bhashaveniajayyadav@gmail.com',
      url: 'mailto:bhashaveniajayyadav@gmail.com',
      color: 'from-neon-pink to-neon-purple'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Ajaybhashaveni',
      url: 'https://github.com/Ajaybhashaveni',
      color: 'from-neon-blue to-neon-purple'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ajay-bhashaveni-3a2aa8288',
      url: 'https://www.linkedin.com/in/ajay-bhashaveni-3a2aa8288',
      color: 'from-neon-purple to-neon-pink'
    },
    {
      icon: CodeIcon,
      label: 'LeetCode',
      value: 'BAjay_1012',
      url: 'https://leetcode.com/u/BAjay_1012/',
      color: 'from-neon-pink to-neon-blue'
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
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 min-h-screen flex items-center justify-center bg-dark-800/30 border-y border-neon-blue/10">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className="text-4xl font-bold mb-4 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          className="text-center text-gray-400 text-lg mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's collaborate and create something amazing together!
        </motion.p>

        {/* Contact Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <motion.a
                key={idx}
                href={method.url}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="group"
              >
                <div className={`bg-gradient-to-r ${method.color} p-0.5 rounded-lg`}>
                  <div className="bg-dark-800 rounded-lg p-6 group-hover:bg-dark-700 transition-all">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="p-3 bg-dark-900 rounded-lg"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <Icon className="text-neon-blue w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">{method.label}</h3>
                        <p className="text-gray-400 truncate">{method.value}</p>
                      </div>
                      <motion.div 
                        className="text-neon-purple"
                        whileHover={{ x: 5, rotate: 45 }}
                      >
                        <ExternalLink size={20} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-dark-900 rounded-lg p-8 border border-neon-blue/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
          <p className="text-gray-400 mb-6">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <motion.a
            href="mailto:bhashaveniajayyadav@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold neon-glow transform hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-12 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <p>© 2024 Bhashaveni Ajay. All rights reserved.</p>
          <p className="mt-2">Crafted with <span className="text-neon-pink">❤</span> using React, Tailwind CSS & Framer Motion</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
