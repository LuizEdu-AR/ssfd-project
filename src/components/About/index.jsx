import React from 'react'
import './index.css'
import About1 from '../../assets/img/about1.png'
import About2 from '../../assets/img/about2.png'
import About3 from '../../assets/img/about3.png'
import AboutImg1 from '../../assets/img/AboutImg1.png'
import AboutImg2 from '../../assets/img/AboutImg2.png'

const About = () => {
  return (
        <section id='about' className='about-main-container'>
            <div className="first-about-container">
                <h3 className="h3-about">Sobre o SSFD</h3>
                <h2 className="h2-about">Estamos Sempre <span className='red'>Prontos</span> Dia e Noite</h2>
                <p className="p-about">Somos um corpo de bombeiros atuante em servidores de GTA V Roleplay, dedicados à proteção da vida e ao atendimento de emergências com realismo e profissionalismo. Atualmente operamos na cidade Rua 2, prestando serviços essenciais com agilidade, organização e compromisso em todas as ocorrências.</p>
                <div className="about-options">
                    <div className="about-card">
                        <img src={About1} alt="about1" className='about-img' />
                        <h3 className="h3-card">Supressão de Incendios</h3>
                    </div>
                    <div className="about-card">
                        <img src={About2} alt="about2" className='about-img' />
                        <h3 className="h3-card">Atendimento de Emergências</h3>
                    </div>
                    <div className="about-card">
                        <img src={About3} alt="about3" className='about-img' />
                        <h3 className="h3-card">Serviço de Resgate</h3>
                    </div>
                </div>
            </div>

            <div className="second-about-container">
                <div className="about-collage">
                    <div className="about-collage-badge">
                        <strong>3 ANOS</strong>
                        <span>Experiencia</span>
                    </div>

                    <img src={AboutImg2} alt="Equipe SSFD" className='about-collage-main' />
                    <img src={AboutImg1} alt="Equipe SSFD destaque" className='about-collage-overlay' />
                </div>
            </div>
        </section>
  )
}

export default About
