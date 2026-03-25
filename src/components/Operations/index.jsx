import React from 'react'
import './index.css'
import { Images } from '../../assets/img'

const Operations = () => {
  const images = [
    Images.AboutImg1,
    Images.AboutImg2,
    Images.MainPhoto,
    Images.Cadete1,
    Images.Bomb1,
    Images.Bomb2,
    Images.Lieutenant,
    Images.Captain,
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
