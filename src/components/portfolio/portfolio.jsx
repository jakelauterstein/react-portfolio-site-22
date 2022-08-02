import React from 'react'
import './portfolio.css'
import IMG1books from '../../assets/projects/books.jpg'
import IMG2ISS from '../../assets/projects/ISS.jpg'
import IMG3maecenas from '../../assets/projects/maecenas.jpg'
import IMG4run from '../../assets/projects/run.jpg'
import IMG5tech from '../../assets/projects/techblog.jpg'
import IMG6weather from '../../assets/projects/weather.jpg'


const data = [
  {
    id: 1,
    image: IMG1books,
    title: 'Ecommerce Bookstore',
    tech: 'Handlebars.js and MySQL',
    github: 'https://github.com/jakelauterstein/books-of-alexandria',
    demo: 'https://cryptic-taiga-66100.herokuapp.com/',
  },
  {
    id: 2,
    image: IMG2ISS,
    title: 'International Space Station Tracker',
    tech: 'HTML/CSS/Javascript/REST-API',
    github: 'https://github.com/jakelauterstein/1.4-space-station-tracker-JSON',
    demo: 'https://jakelauterstein.github.io/1.4-space-station-tracker-JSON/',
  },
  {
    id: 3,
    image: IMG3maecenas,
    title: 'Patreon-Style Subscription Blog',
    tech: 'MERN stack',
    github: 'https://github.com/jakelauterstein/Maecenas-Devs',
    demo: 'https://gentle-citadel-11319.herokuapp.com/',
  },
  {
    id: 4,
    image: IMG4run,
    title: 'Personal Training Demo Site',
    tech: 'HTML and CSS',
    github: 'https://github.com/jakelauterstein/run-buddy',
    demo: 'https://jakelauterstein.github.io/run-buddy/',
  },
  {
    id: 5,
    image: IMG5tech,
    title: 'Tech Blog Content Brainstorm Site',
    tech:'Handlebars.js and MySQL',
    github: 'https://github.com/jakelauterstein/tech-blog-MVC',
    demo: 'https://secret-wildwood-81226.herokuapp.com/',
  },
  {
    id: 6,
    image: IMG6weather,
    title: 'Current and Forecast Weather Site',
    tech: 'Materialize CSS and Open Weather API',
    github: 'https://github.com/jakelauterstein/weather-dashboard-challenge-6',
    demo: 'https://jakelauterstein.github.io/weather-dashboard-challenge-6/',
  }

];

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, tech}) => {
            return (
              <article key={id} className='portfolio__item'>
                <a href={demo} target='_blank' rel="noreferrer">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                  <h3>{title}</h3>
                  <p>Using:</p><h5>{tech}</h5>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Deployed Site</a>
                  </div>
               </a>
              </article>

            )
          } )
        }
      </div>

    </section>
  )
}

// for future development - testimonials slider, using Slider JS 2:20-2:40
// import React from 'react'
// import './testimonials.css'

// const testimonials = () => {
//   return (
//     <section id="testimonials">Testimonials</section>
//   )
// }

// export default testimonials

export default portfolio