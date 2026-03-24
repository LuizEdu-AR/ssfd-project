import React, { useMemo, useState } from 'react'
import './index.css'
import AboutImg1 from '../../assets/img/AboutImg1.png'
import AboutImg2 from '../../assets/img/AboutImg2.png'
import MainPhoto from '../../assets/img/MainPhoto.png'

const Service = () => {
  const services = useMemo(
    () => [
      {
        id: 'operacoes',
        label: 'Operações Especiais',
        description:
          'Resposta taticamente coordenada para situações de alto risco, com foco em segurança, estratégia e eficiência operacional. Com disponibilidade de uma gama de automóveis e equipamentos especializados para cada tipo de ocorrência, garantindo a melhor resposta possível em cada situação.',
        images: [AboutImg1, MainPhoto, AboutImg2]
      },
      {
        id: 'prevencao',
        label: 'Prevenção de Incêndios',
        description:
          'Ações preventivas, vistoria de áreas críticas e orientação técnica para reduzir ocorrências e fortalecer a segurança coletiva. Atuando em todos os estabelecimentos, desde boates, restaurantes, motéis e mecânicas, garantindo a conformidade com as normas de segurança e a proteção da comunidade.',
        images: [AboutImg2, AboutImg1, MainPhoto]
      },
      {
        id: 'investigacao',
        label: 'Investigação de Incidentes',
        description:
          'Análise detalhada das ocorrências para identificar causas e gerar relatórios. Podendo atuar em conjunto com a polícia, realizando análises de cenas de crime, acidentes de trânsito e outros incidentes, contribuindo para a elucidação dos fatos e a segurança da comunidade.',
        images: [MainPhoto, AboutImg2, AboutImg1]
      },
      {
        id: 'emergencia',
        label: 'Emergência Médica Especializada',
        description:
          'Paramédicos especializados em atendimento pré-hospitalar, garantindo cuidados médicos de alta qualidade e suporte avançado em situações de emergência, contribuindo para a preservação da vida e a recuperação dos pacientes.',
        images: [AboutImg1, AboutImg2, MainPhoto]
      },
      {
        id: 'treinamento',
        label: 'Divisão de Treinamento',
        description:
          'Capacitação contínua das equipes com simulações realistas, padronização de condutas e desenvolvimento técnico constante. Levando a equipe a estar sempre preparada para enfrentar os desafios do dia a dia, garantindo a eficiência e a segurança em todas as operações.',
        images: [AboutImg2, MainPhoto, AboutImg1]
      }
    ],
    []
  )

  const [activeServiceId, setActiveServiceId] = useState(services[0].id)
  const activeService = services.find((service) => service.id === activeServiceId) || services[0]

  return (
    <section className='service-main-container'>
      <h3 className="h3-service">Services</h3>
      <h2 className="h2-service">Nossos <span className='red'>Deveres</span> e Funções</h2>

      <div className="services-options">
        {services.map((service) => (
          <button
            key={service.id}
            className={`service-button ${activeServiceId === service.id ? 'active' : ''}`}
            onClick={() => setActiveServiceId(service.id)}
            type='button'
          >
            {service.label}
          </button>
        ))}
      </div>

      <p className='service-description'>{activeService.description}</p>

      <div className='service-gallery'>
        {activeService.images.map((imageSrc, index) => (
          <img
            key={`${activeService.id}-${index}`}
            src={imageSrc}
            alt={`${activeService.label} ${index + 1}`}
            className={`service-image image-${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Service
