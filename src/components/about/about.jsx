import React from 'react'
import './about.css'
import ME from '../../assets/about-port.jpg'
import {BiNetworkChart} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">

          <article className="about__card">
            <BiNetworkChart className='about__icon' />
            <h5>Experience</h5>
            <small>3+ Years Working Experience</small>
          </article>

          <article className="about__card">
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>Local Businesses and National Corporations Alike</small>
          </article>

          <article className="about__card">
            <AiOutlineFundProjectionScreen className='about__icon' />
            <h5>Projects</h5>
            <small>40+ Completed Projects</small>
          </article>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus aspernatur placeat fugiat voluptate rem dicta? Aut quos consectetur harum saepe, obcaecati veniam ullam error ipsum tempore tenetur rerum expedita?</p>
          
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>

        </div>

         
      </div>
    </section>
  )
}

export default about