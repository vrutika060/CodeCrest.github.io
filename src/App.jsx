import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Contactus from './components/Contactus'
import FAQ from './components/FAQ'
export default function App() {
  
  return (
    <div>
     <Navbar/>
     <Home/>
     <Aboutus/>
     <Services/>
     <Contactus/>
     <FAQ/>
    </div>
  )
}
