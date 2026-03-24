import React from 'react'
import './index.css'
import MainPhoto from '../../assets/img/MainPhoto.png'
import AboutImg1 from '../../assets/img/AboutImg1.png'
import AboutImg2 from '../../assets/img/AboutImg2.png'

const Operations = () => {
  const images = [
    MainPhoto,
    AboutImg1,
    AboutImg2,
    MainPhoto,
    AboutImg1,
    AboutImg2,
  ]

  return (
    <section id='operations' className='operations-section'>
      <div className='operations-container'>
        <div className='operations-header'>
          <p className='operations-label'>Operações</p>
          <h2 className='operations-title'>
            Nossa Galeria de <span className='red'>Heróis</span>
          </h2>
        </div>

        <div className='carousel-wrapper'>
          <div className='carousel'>
            {images.map((image, index) => (
              <div key={index} className='carousel-item'>
                <img src={image} alt={`Operation ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Operations
