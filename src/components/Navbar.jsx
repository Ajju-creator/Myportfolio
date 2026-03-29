import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar({ references }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', ref: references.hero },
    { label: 'About', ref: references.about },
    { label: 'Skills', ref: references.skills },
    { label: 'Experience', ref: references.experience },
    { label: 'Projects', ref: references.projects },
    { label: 'Achievements', ref: references.achievements },
    { label: 'Certifications', ref: references.certifications },
    { label: 'Coding', ref: references.coding },
    { label: 'Contact', ref: references.contact },
  ]

  const handleNavClick = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav 
      className="fixed w-full top-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-neon-blue/20 neon-glow"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          BA
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleNavClick(item.ref)}
              className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neon-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-dark-800 border-t border-neon-blue/20 px-4 py-4 space-y-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(item.ref)}
              className="block w-full text-left text-gray-300 hover:text-neon-blue transition-colors py-2"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
