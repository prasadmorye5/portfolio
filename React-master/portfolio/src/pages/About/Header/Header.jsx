import React, { useEffect } from 'react'
import "./header.css"
import logo from "./../Navbar/assets/prasad.jpg"
import data_icons from './../../../data_icons';
import AOS from "aos"
import "aos/dist/aos.css"

const Header = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  })


  return (
   <>
    <header id='header'>
        <div className="container header_container">

         {/* hero-section-images */}
           <div className="header_profile" data-aos="fade-in">
            <img src={logo}  width="200px" />
          </div>
            <h3 data-aos="fade-up">Prasad Morye</h3>

            <p data-aos="fade-up" className='para'>
            Self-Motivated and Hardworking Software Engineer who is constantly Improving 1% at a time and always ready to take up challenging tasks.
            You will find me learning, exploring new technologies, new way to solve problems every time.
            Always ready for opportunities where there is more to Learn, more Problems to solve, and yet more to 
            Explore and Contribute.

            Will Definitely turn caffeine into software ;-).
            </p>

            {/* hero-section-buttons */}
            <div className="header_cta" data-aos="fade-up">
              <a href="#contact" className='btn primary'>Let's Talk</a>
              <a href="#portfolio" className='btn white'>My Work</a>
            </div>

            {/* hero-section-icons */}
            <div className="header_socials">
              {
                  data_icons.map(item=><a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>
                      {item.icon}
                  </a>)
              }
            </div>
           
        </div>
    </header>
   </>
  )
}

export default Header
