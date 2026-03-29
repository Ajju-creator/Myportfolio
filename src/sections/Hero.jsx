import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code } from 'lucide-react'

export default function Hero() {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/Ajaybhashaveni', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/ajay-bhashaveni-3a2aa8288', label: 'LinkedIn' },
    { icon: Code, url: 'https://leetcode.com/u/BAjay_1012/', label: 'LeetCode' },
    { icon: Mail, url: 'mailto:bhashaveniajayyadav@gmail.com', label: 'Email' },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto text-center z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div 
          className="mb-12 flex justify-center"
          variants={item}
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            {/* Animated Border Ring */}
            <motion.div 
              className="absolute inset-0 border-2 border-neon-blue rounded-full opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-20 rounded-full blur-lg"></div>
            
            {/* Profile Image */}
            <img 
              src="/profile.jpg" 
              alt="Bhashaveni Ajay"
              className="w-full h-full object-cover rounded-full border-4 border-dark-900 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
          variants={item}
        >
          Bhashaveni Ajay
        </motion.h1>

        {/* Title */}
        <motion.div 
          className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 font-light"
          variants={item}
        >
          <span className="text-neon-blue">AI/ML & Deep Learning</span> Engineer | <span className="text-neon-purple">Embedded Systems</span> Developer | <span className="text-neon-pink">RF & Antenna Engineering</span> | <span className="text-neon-blue">Java (DSA)</span>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={item}
        >
          I build intelligent systems combining AI, deep learning, embedded systems, and RF engineering to solve real-world problems. Passionate about Quantum Machine Learning, IoT innovation, cutting-edge technology, and data structure optimization.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={item}
        >
          <a 
            href="/resume.pdf" 
            download
            className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 neon-glow btn-glow text-dark-900"
          >
            Download Resume
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border-2 border-neon-blue rounded-lg font-semibold hover:bg-neon-blue/10 transition-all duration-300 text-neon-blue"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="flex gap-6 justify-center mb-12"
          variants={item}
        >
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-800 text-neon-blue hover:text-neon-purple hover:bg-dark-700 transition-all duration-300 neon-glow"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              title={link.label}
            >
              <link.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="border border-neon-blue rounded-full p-2">
            <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-neon-blue rounded-full mt-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
