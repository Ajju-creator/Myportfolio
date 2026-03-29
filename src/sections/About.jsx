import { motion } from 'framer-motion'

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-20 px-4 bg-dark-800/30 border-y border-neon-blue/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="space-y-6 text-gray-300 text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.p variants={fadeInUp}>
            I am an Electronics and Communication Engineering student at SR University with a CGPA of <span className="text-neon-blue font-semibold">9.93</span>, passionate about building intelligent systems that combine AI, deep learning, and embedded technologies.
          </motion.p>

          <motion.p variants={fadeInUp}>
            I specialize in <span className="text-neon-purple font-semibold">AI/ML, deep learning, embedded systems, RF engineering, and antenna design</span>, with strong problem-solving skills and hands-on experience in real-world applications. My work bridges theoretical knowledge with practical implementations across multiple domains.
          </motion.p>

          <motion.p variants={fadeInUp}>
            My portfolio includes <span className="text-neon-pink font-semibold">Quantum Vision Transformers</span> for video anomaly detection, IoT-based smart systems, RF frequency selective surfaces, and machine learning models that solve complex real-world problems.
          </motion.p>

          <motion.p variants={fadeInUp}>
            I am passionate about integrating hardware and software to build innovative and impactful solutions. Whether designing neural networks, developing embedded firmware, optimizing RF systems, or solving algorithmic challenges, I am committed to pushing technological boundaries.
          </motion.p>

          <motion.div 
            className="pt-6 space-y-4"
            variants={fadeInUp}
          >
            <h3 className="text-neon-blue font-semibold">Key Highlights:</h3>
            <ul className="list-none space-y-2">
              {[
                '📊 CGPA: 9.93 (Department Topper - 4 semesters)',
                '🤖 Expertise: Quantum Machine Learning, Deep Learning, Embedded Systems',
                '🔬 Research: Quantum Vision Transformers, Anomaly Detection',
                '🏆 Leadership: Vice President of IoT Club',
              ].map((highlight, idx) => (
                <motion.li 
                  key={idx}
                  className="text-gray-300 flex items-center gap-2"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-neon-blue">▸</span> {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
