import React, { useEffect, useMemo, useState } from 'react'
import './index.css'
import LogoSSFD from '../../assets/img/LogoBombeirosR21.png'

const Header = () => {
  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'Sobre' },
      { id: 'services', label: 'Serviços' },
      { id: 'hierarchy', label: 'Hierarquia' },
      { id: 'operations', label: 'Operações' },
      { id: 'recruitment', label: 'Recrutamento' }
    ],
    []
  )

  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const resolveActiveSection = () => {
      setIsScrolled(window.scrollY > 8)

      const currentScroll = window.scrollY + 140
      let currentSection = 'home'

      navItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section && currentScroll >= section.offsetTop) {
          currentSection = item.id
        }
      })

      setActiveSection(currentSection)
    }

    resolveActiveSection()
    window.addEventListener('scroll', resolveActiveSection, { passive: true })

    return () => {
      window.removeEventListener('scroll', resolveActiveSection)
    }
  }, [navItems])

  return (
    <header className={`navbar-main-container ${isScrolled ? 'scrolled' : ''}`}>
      <a href='#home' aria-label='Ir para o inicio' className='logo-link'>
        <img src={LogoSSFD} alt="Logo SSFD" className='logo' />
      </a>
      <div className="navbar-container">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Header
