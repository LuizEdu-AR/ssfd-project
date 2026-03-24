import React, { useState, useMemo } from 'react'
import './index.css'
import AboutImg1 from '../../assets/img/AboutImg1.png'
import AboutImg2 from '../../assets/img/AboutImg2.png'
import MainPhoto from '../../assets/img/MainPhoto.png'

const Hierarchy = () => {
  const ranks = useMemo(
    () => [
      {
        id: 'chefe',
        label: 'Bombeiro Chefe',
        description: 'Liderança máxima da corporação, responsável pelas decisões estratégicas e operacionais. Coordena todas as operações e garante a excelência no atendimento à comunidade.',
        images: [AboutImg1, MainPhoto, AboutImg2, AboutImg1]
      },
      {
        id: 'chefe-adj',
        label: 'Chefe Adjunto',
        description: 'Suporta o Bombeiro Chefe no comando da corporação, atuando como substituto em sua ausência. Responsável pela supervisão de todas as divisões da corporação.',
        images: [AboutImg2, AboutImg1, MainPhoto, AboutImg2]
      },
      {
        id: 'chefes-bat',
        label: 'Chefes de Batalhão',
        description: 'Comandam cada batalhão da corporação, garantindo a organização e eficiência operacional de suas equipes. Elo de comunicação entre a liderança e os bombeiros.',
        images: [MainPhoto, AboutImg2, AboutImg1, MainPhoto]
      },
      {
        id: 'capitaes',
        label: 'Capitães',
        description: 'Supervisores de operações e treinamento. Garantem o cumprimento dos protocolos e coordenam as equipes em ocorrências de grande porte.',
        images: [AboutImg1, AboutImg2, MainPhoto, AboutImg2]
      },
      {
        id: 'tenentes',
        label: 'Tenentes',
        description: 'Officiais de média patente, responsáveis pela liderança e coordenação de equipes. Atuam como treinadores e supervisores.',
        images: [AboutImg2, MainPhoto, AboutImg1, AboutImg1]
      },
      {
        id: 'bombeiros-3',
        label: 'Bombeiros III',
        description: 'Bombeiros experientes com qualificação avançada. Atuam em operações críticas e possuem responsabilidades de supervisão sobre bombeiros juniores.',
        images: [MainPhoto, AboutImg1, AboutImg2, AboutImg2]
      },
      {
        id: 'bombeiros-2',
        label: 'Bombeiros II',
        description: 'Profissionais qualificados em atendimento a emergências. Possuem experiência consolidada e executam todas as funções operacionais.',
        images: [AboutImg1, MainPhoto, AboutImg2, MainPhoto]
      },
      {
        id: 'bombeiros-1',
        label: 'Bombeiros I',
        description: 'Bombeiros em fase de consolidação. Atuam sob supervisão e participam de todo tipo de operação com treinamento em andamento.',
        images: [AboutImg2, AboutImg1, MainPhoto, AboutImg1]
      },
      {
        id: 'cadetes',
        label: 'Cadetes',
        description: 'Novas esperanças da corporação em fase de formação continuada. Ingressam com dedicação ao aprendizado e cumprimento dos protocolos.',
        images: [MainPhoto, AboutImg2, AboutImg1, AboutImg2]
      }
    ],
    []
  )

  const [activeRankId, setActiveRankId] = useState(ranks[0].id)
  const activeRank = ranks.find((rank) => rank.id === activeRankId) || ranks[0]

  return (
    <section className='hierarchy-main-container'>
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
