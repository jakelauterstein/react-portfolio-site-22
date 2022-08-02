import React from 'react'
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
   <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
   </>
  )
}

export default App