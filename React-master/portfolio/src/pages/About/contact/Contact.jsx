import React from 'react'
import "./contact.css"
import contactdata from './contactdata'
const Contact = () => {
  
  return (
    <>
        <section id='contact'  data-aos="fade-in">
            <h2>Get In Touch</h2>
            <p>Shoot me a message via any of the links below!</p>

            <div className="container contact_container">
              {
                contactdata.map(item=>(
                   <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>
                ))
              }
            </div>
        </section>
    </>
  )
}

export default Contact
