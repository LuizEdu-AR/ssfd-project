import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Divisor from './components/Divisor'
import About from './components/About'
import Badge from './components/Badge'
import Service from './components/ServiceContainer'
import Operations from './components/Operations'
import Hierarchy from './components/Hierarchy'

function App() {

  return (
    <div className='app-main-container'>
      <Header />
      <Hero />
      <Divisor />
      <About />
      <Badge />
      <Service />
      <Hierarchy />
      <Operations />
    </div>
  )
}

export default App
