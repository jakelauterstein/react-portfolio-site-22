import React from 'react'
import './services.css'
import {BiCheck}from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
{/* START UX/UI */}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Professional Adobe-based wireframes outline a top-level view of your project.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Branding and Adobe Illustrator logo creation makes your logo scalable from billboard to business card.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Attention-gaining formats with optimized performance keep your users engaged on your page.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>High-quality photos, videos, and animations bring your page a cutting-edge, dynamic feel.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Easy to navigate pages with custom icons allow users to easily traverse your site and explore your offerings.</p>
            </li> 
          </ul>
        </article>
 {/* START Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Search engine optimization keeps your website on the top tier of google results.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Extensive modular components allow you to customize and edit your site with quick turnaround time.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database integration keeps your users personal data secure and your record-keeping stress-free</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Connect your site with large-scale applications to leverage data from all over the web.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cutting-edge plugins create high-level functionality with minimal overhead.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Continual support keeps your website and applications updated for all of your future developments.</p>
            </li> 
          </ul>
        </article>
 {/* START  Content Creation */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand-curated media assets bring a cohesive feel to your social media platforms.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Email marketing campaigns keep your users in-the-know about all of your latest offerings.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social media optimization keeps your business trending on all of the major apps.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Viral marketing campaigns lead to optimized cross-platform lead generation.</p>
            </li> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Merchandise assistance and event coordination promotes brand awareness in your community and abroad.</p>
            </li> 
          </ul>
        </article>

      </div>
    </section>
  )
}

export default services