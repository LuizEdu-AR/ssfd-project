import React from 'react'
import './index.css'
import FooterBadge from '../../assets/img/LogoBombeirosR23.png'

const Footer = () => {
  return (
    <footer className='footer-main-container'>
      <div className='footer-gradient-area'>
        <div className='footer-brand-area'>
          <img src={FooterBadge} alt='Brasao do South State Fire Department' className='footer-badge' />
        </div>
      </div>

      <p className='footer-copyright'>© Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer
