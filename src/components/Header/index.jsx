import React from 'react'
import './index.css'
import LogoSSFD from '../../assets/img/LogoBombeirosR21.png'

const Header = () => {
  return (
    <div className='navbar-main-container'>
      <img src={LogoSSFD} alt="Logo SSFD" className='logo' />
      <div className="navbar-container">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">Sobre</a>
        <a href="#services" className="nav-link">Serviços</a>
        <a href="#hierarchy" className="nav-link">Hierarquia</a>
        <a href="#operations" className="nav-link">Operações</a>
        <a href="#recruitment" className="nav-link">Recrutamento</a>
      </div>
    </div>
  )
}

export default Header
