import { useState, useEffect } from 'react'
import { ChevronDown, Download } from 'lucide-react'

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('Full-Stack Developer')
  const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver']
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      setTypewriterText(roles[currentRoleIndex])
    }, 2000)

    return () => clearInterval(interval)
  }, [currentRoleIndex])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ... rest of your Hero component JSX ... */}
    </div>
  )
}

export default Hero