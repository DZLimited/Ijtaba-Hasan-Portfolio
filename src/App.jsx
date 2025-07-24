import { useState } from 'react'

import Hero from './pages/Hero'
import About from './pages/About'
import Portfolio from './pages/portfolio'
import Stack from './pages/Stack'
import Footer from './components/Footer'
import Navbar from './components/Navbar'



function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Stack/>
      <Footer/>
    </>
  )
}

export default App
