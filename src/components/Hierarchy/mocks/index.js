import { Images } from "../../../assets/img";

export const hierarchyRanks = [
  {
    id: 'chefe',
    label: 'Bombeiro Chefe',
    description:
      'Liderança máxima da corporação, responsável pelas decisões estratégicas e operacionais. Coordena todas as operações e garante a excelência no atendimento à comunidade.',
    images: [Images.MainPhoto, Images.MainPhoto, Images.MainPhoto, Images.MainPhoto],
  },
  {
    id: 'chefe-adj',
    label: 'Chefe Adjunto',
    description:
      'Suporta o Bombeiro Chefe no comando da corporação, atuando como substituto em sua ausência. Responsável pela supervisão de todas as divisões da corporação.',
    images: [Images.AboutImg1, Images.AboutImg1, Images.AboutImg1, Images.AboutImg1],
  },
  {
    id: 'chefes-bat',
    label: 'Chefes de Batalhão',
    description:
      'Comandam cada batalhão da corporação, garantindo a organização e eficiência operacional de suas equipes. Elo de comunicação entre a liderança e os bombeiros.',
    images: [Images.MainPhoto, Images.MainPhoto, Images.MainPhoto, Images.MainPhoto],
  },
  {
    id: 'capitaes',
    label: 'Capitães',
    description:
      'Supervisores de operações e treinamento. Garantem o cumprimento dos protocolos e coordenam as equipes em ocorrências de grande porte.',
    images: [Images.Captain, Images.Captain, Images.Captain, Images.Captain],
  },
  {
    id: 'tenentes',
    label: 'Tenentes',
    description:
      'Officiais de média patente, responsáveis pela liderança e coordenação de equipes. Atuam como treinadores e supervisores.',
    images: [Images.Lieutenant, Images.Lieutenant, Images.Lieutenant, Images.Lieutenant],
  },
  {
    id: 'bombeiros-3',
    label: 'Bombeiros III',
    description:
      'Bombeiros experientes com qualificação avançada. Atuam em operações críticas e possuem responsabilidades de supervisão sobre bombeiros juniores.',
    images: [Images.AboutImg2, Images.AboutImg2, Images.AboutImg2, Images.AboutImg2],
  },
  {
    id: 'bombeiros-2',
    label: 'Bombeiros II',
    description:
      'Profissionais qualificados em atendimento a emergências. Possuem experiência consolidada e executam todas as funções operacionais.',
    images: [Images.Bomb2, Images.Bomb2, Images.Bomb2, Images.Bomb2],
  },
  {
    id: 'bombeiros-1',
    label: 'Bombeiros I',
    description:
      'Bombeiros em fase de consolidação. Atuam sob supervisão e participam de todo tipo de operação com treinamento em andamento.',
    images: [Images.Bomb1, Images.Bomb1, Images.Bomb1, Images.Bomb1],
  },
  {
    id: 'cadetes',
    label: 'Cadetes',
    description:
      'Novas esperanças da corporação em fase de formação continuada. Ingressam com dedicação ao aprendizado e cumprimento dos protocolos.',
    images: [Images.Cadete1, Images.Cadete1, Images.Cadete1, Images.Cadete1],
  },
];
