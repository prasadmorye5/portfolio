import React from 'react'
import prasad from "../Navbar/assets/prasad.jpg"
import "./navbar.css"
import data from './../../../data';
import {TiWeatherSunny} from "react-icons/ti"
import {useModalContext} from "../../../context/modal-context"
const Navbar = () => {
  const {showModalHandler} = useModalContext()
  return (
   <>
    <nav>
       
       <div className="container nav_container">

          <a href="index.html" className='nav_logo'>
            <img src={prasad} className='nav_logo'/>
          </a>

          <ul className='nav_menu'>
             {
              data.map((item)=>(
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))
             }
          </ul>

          <button className='theme_icon' onClick={showModalHandler}>
            <TiWeatherSunny/>
          </button>
       </div>
    </nav>
   </>
  )
}

export default Navbar
