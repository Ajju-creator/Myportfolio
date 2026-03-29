import { useRef } from 'react'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Certifications from './sections/Certifications'
import CodingProfiles from './sections/CodingProfiles'
import Contact from './sections/Contact'
import './index.css'

function App() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const achievementsRef = useRef(null)
  const certificationsRef = useRef(null)
  const codingRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToRef = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-dark-900 min-h-screen text-white font-inter">
      <Navbar 
        references={{
          hero: heroRef,
          about: aboutRef,
          skills: skillsRef,
          experience: experienceRef,
          projects: projectsRef,
          achievements: achievementsRef,
          certifications: certificationsRef,
          coding: codingRef,
          contact: contactRef
        }}
      />
      
      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={achievementsRef}><Achievements /></div>
      <div ref={certificationsRef}><Certifications /></div>
      <div ref={codingRef}><CodingProfiles /></div>
      <div ref={contactRef}><Contact /></div>
      
      <BackToTop scrollToRef={() => heroRef?.current?.scrollIntoView({ behavior: 'smooth' })} />
    </div>
  )
}

export default App
