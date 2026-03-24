import React from 'react'
import './index.css'

const Hero = () => {
    return (
        <div className='hero-main-container'>
            <h2 className="h2-hero">South State Fire Department</h2>
            <h1 className="h1-hero">Servir e proteger, em qualquer hora,<br /> em qualquer lugar</h1>
            <p className="p-hero">Cada chamado é uma missão. Nossa equipe está sempre preparada para enfrentar desafios, salvar vidas e manter a cidade segura, não importa a hora ou o lugar. <br />Atuamos com coragem, disciplina e compromisso, garantindo respostas rápidas e eficazes em todas as situações.</p>
            <div className="hero-options">
                <button className="main-button">Nosso Discord</button>
                <button className="where-button">Onde Atuamos</button>
            </div>
        </div>
    )
}

export default Hero
