import React from 'react'
import './index.css'

const Recruitment = () => {
  return (
    <section id='recruitment' className='recruitment-main-container'>
      <div className='recruitment-content'>
        <h2 className='recruitment-title'>
          Temos Recrutamento Toda <span className='recruitment-highlight'>Terça-feira</span> às 20:30
        </h2>
        <a
          className='recruitment-discord-link'
          href='https://discord.gg/A4F3PeHsJK'
          target='_blank'
          rel='noreferrer'
        >
          Nosso Discord
        </a>
        <p className='recruitment-description'>
          No batalhão Sul do SSFD na Rua 2. Venha com camisa vermelha, short branco, tênis esportivo e venha
          fazer parte da equipe que mais preza pelo bem-estar da sociedade!
        </p>
      </div>

      <div className='recruitment-fire-band' aria-hidden='true' />
    </section>
  )
}

export default Recruitment
