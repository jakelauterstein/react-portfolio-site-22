import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiBasketball} from 'react-icons/bi'


const Contact = () => {

 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wyspfgj', 'template_ke2qmsa', form.current, 'UbQ_oZ7xZEusqOCQe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact-options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <p></p>
            <h5>jakelauterstein@gmail.com</h5>
            <a href="mailto:jakelauterstein@gmail.com">Send Email</a>
          </article>
          <article className="contact__option">
          <AiFillLinkedin className='contact__option-icon'/>
            <h4>Find me on LinkedIn</h4> 
            <p></p>
            <a href="https://www.linkedin.com/in/jake-lauterstein/" target="_blank" rel='noreferrer'>My LinkedIn Profile</a>
          </article>
          <article className="contact__option">
          <BiBasketball  className='contact__option-icon'/>
            <h4>Find me on Dribble</h4>
            <p></p>
            <a href="https://dribbble.com/jake_atx_dev" target='_blank' rel='noreferrer'>My Dribble Profile</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your First and Last Name' required />
          <input type="email" name='email'placeholder='Your Email Address' required />
          <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact