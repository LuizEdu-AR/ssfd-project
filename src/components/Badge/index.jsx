import React from 'react'
import './index.css'
import BadgeIcon from '../../assets/img/LogoBombeirosR25.png'

const Badge = () => {
  const badges = [
    'Emergência Médica Especializada',
    'Operações Especiais',
    'Prevenção de Incêndios',
    'Investigação de Incidentes',
    'Divisão de Treinamento'
  ]

  return (
    <div className='badge-main-container'>
      <div className='badge-carousel'>
        {[...badges, ...badges].map((badge, index) => (
          <div key={index} className="badge-card">
            <img src={BadgeIcon} alt="badge icon" className='badge-icon' />
            <p className="p-badge">{badge}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Badge
