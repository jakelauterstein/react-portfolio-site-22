import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiBasketball} from 'react-icons/bi'
import {FaGithub} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jake Lauterstein - Web Developer</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Potfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/jake-lauterstein/" target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
      <a href="https://dribbble.com/jake_atx_dev" target='_blank' rel='noreferrer'><BiBasketball /></a>
      <a href="https://github.com/jakelauterstein" target='_blank' rel='noreferrer'><FaGithub /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; All rights reserved. {new Date().getFullYear()}</small>
    </div>
    
    </footer>
  )
}

export default footer