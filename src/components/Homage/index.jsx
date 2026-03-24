import React from 'react'
import './index.css'
import PauloImage from '../../assets/img/Paulo.png'

const Homage = () => {
  const legends = [
    {
      id: 1,
      name: 'Paulo Lovegood',
      phrase: 'Servir e Proteger'
    },
    {
      id: 2,
      name: 'Paulo Lovegood',
      phrase: 'Servir e Proteger'
    },
    {
      id: 3,
      name: 'Paulo Lovegood',
      phrase: 'Servir e Proteger'
    }
  ]

  return (
    <section className='homage-main-container'>
      <div className='homage-header'>
        <h3 className='homage-label'>Homenagem</h3>
        <h2 className='homage-title'>
          As <span className='homage-highlight'>Lendas</span> do SSFD
        </h2>
      </div>

      <div className='homage-cards'>
        {legends.map((legend) => (
          <article className='homage-card-item' key={legend.id}>
            <div className='homage-card'>
              <span className='homage-quote' aria-hidden='true'>“</span>
              <p className='homage-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className='homage-stars' aria-label='avaliacao cinco estrelas'>★★★★★</p>
            </div>

            <img src={PauloImage} alt={legend.name} className='homage-avatar' />
            <h4 className='homage-name'>{legend.name}</h4>
            <p className='homage-role'>{legend.phrase}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Homage
