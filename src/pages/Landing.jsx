import React from 'react'
import Navbar from '../components/Navbar'
import Particles1 from '../components/Particles1'
import Cardhome from '../components/Cardhome'
import Slide1 from '../components/Slide1'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Particles1/>

        <Cardhome/>
        <Slide1/>
        <Footer/>
    </div>
  )
}

export default Landing