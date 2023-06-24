import React from 'react'
import "./footer.css"
import { links,socials } from './data'

const Footer = () => {
  return (
   <>
    <footer>
        <div className="container footer_container">
           <ul className='nav_menu'>
            {
              links.map(link=>(
                <li key={link.id}>
                  <a href={link.link}>
                    {
                      link.title
                    }
                  </a>
                </li>
              ))
            }
           </ul>

           <div className="footer_socials">
            {
              socials.map(social=><a key={social.id} link={social.id} href={social.link} target='_blank' rel='noopener noreferrer'>
                {
                  social.icon
                }
              </a>)
            }
           </div>
        </div>

        <div className="footer_copyright">
          <small>2023 Prasad &copy; All Rights Reserved</small>
        </div>
    </footer>
   </>
  )
}

export default Footer
