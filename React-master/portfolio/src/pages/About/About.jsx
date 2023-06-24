import React from 'react'
import "./about.css"
import logo from './Navbar/assets/prasad.jpg';
import {BsCloudDownload} from "react-icons/bs"
import aboutdata from './aboutdata';
import Card from '../../components/Card';
const About = () => {
  return (
   <>
    <section id='about' data-aos="fade-in">
        <div className="container about_container">

        {/* left-side-container */}
              <div className="about__left">

                <div className='about_portrait'>
                    <img src={logo}  width=""/>
                </div> 
              </div>
           

            {/* right-side-container */}
            <div className="about_right">
              <h2>About Me</h2>

              <div className="about_cards">
                {
                  aboutdata.map(item=>(
                    <Card key={item.id} className="about_card">
                      <span className='about_card-icon'>
                        {item.icon}
                      </span>
                      <h5>{item.title}</h5>
                      <small>{item.desc}</small>
                    </Card>
                  ))
                }
              </div>


               <p>
               As a Full Stack MERN Developer with 2 years of experience, I possess a strong foundation in front-end and back-end development, utilizing technologies such as React.js, Node.js, Express.js, and MongoDB. I am dedicated to producing high-quality, scalable, and maintainable code while keeping up with the latest industry trends and best practices.

               </p>
               <p> 
               Throughout my projects, I have collaborated closely with cross-functional teams, including designers, product managers, and other developers. I am comfortable working in Agile environments, participating in sprint planning, and delivering high-quality code within tight deadlines. I am also proficient in version control systems like Git, allowing for efficient code collaboration and management.
               </p>

               <a href="/" download className='btn primary'> Download Cv <BsCloudDownload/></a>
            </div>
        </div>
    </section>
   </>
  )
}

export default About
