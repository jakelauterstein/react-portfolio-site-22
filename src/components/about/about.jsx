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

        <p>A little about myself: I'm a professioanl front-end web developer building visually engaging interfaces and attention-gaining applications. I received my training at the University of Texas at Austin's Full Stack Coding Bootcamp. I specialize in writing HTML, CSS, Javascript, React, and Wordpress, with an emphasis on responsive, mobile-friendly design. With each project, my goal is to create a seamless user experience across all features of the application. I'm currently working for White Hat Agency, a creative marketing company based in <div style={{ whiteSpace: 'nowrap' }}>{'Austin, TX. '}</div> 
</p>
          
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>

        </div>

         
      </div>
    </section>
  )
}

export default about