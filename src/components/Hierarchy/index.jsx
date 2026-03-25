import React, { useState } from 'react'
import './index.css'
import { hierarchyRanks } from './mocks'

const Hierarchy = () => {
  const ranks = hierarchyRanks

  const [activeRankId, setActiveRankId] = useState(ranks[0].id)
  const activeRank = ranks.find((rank) => rank.id === activeRankId) || ranks[0]

  return (
    <section id='hierarchy' className='hierarchy-main-container'>
      <div className='hierarchy-header'>
        <h3 className='h3-hierarchy'>Hierarquia</h3>
        <h2 className='h2-hierarchy'>Conheça Nossos <span className='red'>Bombeiros</span></h2>
        <p className='p-hierarchy'>
          {activeRank.description}
        </p>
      </div>

      <div className='hierarchy-content'>
        <div className='hierarchy-gallery'>
          <div className='gallery-left'>
            {activeRank.images.slice(0, 3).map((imageSrc, index) => (
              <img
                key={`${activeRank.id}-left-${index}`}
                src={imageSrc}
                alt={`${activeRank.label} ${index + 1}`}
                className='gallery-image-small'
              />
            ))}
          </div>
          <div className='gallery-center'>
            <img
              src={activeRank.images[3]}
              alt={`${activeRank.label} destaque`}
              className='gallery-image-main'
            />
          </div>
        </div>

        <aside className='hierarchy-sidebar'>
          <nav className='ranks-menu'>
            {ranks.map((rank) => (
              <button
                key={rank.id}
                className={`rank-item ${activeRankId === rank.id ? 'active' : ''}`}
                onClick={() => setActiveRankId(rank.id)}
                type='button'
              >
                {rank.label}
              </button>
            ))}
          </nav>
        </aside>
      </div>
    </section>
  )
}

export default Hierarchy
