import React from 'react'
import "./skill.css"
import {AiOutlineHtml5,AiFillGithub} from "react-icons/ai"
import {DiMongodb} from "react-icons/di"
import {TbBrandJavascript} from "react-icons/tb"
import {SiTailwindcss} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {SiExpress} from "react-icons/si"
const Skill = () => {
  return (
    <section id='skills' data-aos="fade-up">
    <h2 data-aos="fade-right">My Skills</h2>
    <p data-aos="fade-right">I give you the best in all the Skills below.</p>
        <div className="container skill_container" data-aos="fade-right">

           <h3 className='heading'>Full Stack Devloper (MERN Stack)</h3>
           <div className='skill_icon' >
                <AiOutlineHtml5 className='icon'/>
                <DiMongodb className='icon'/>
                <TbBrandJavascript className='icon'/>
                <SiTailwindcss className='icon'/>
                <FaReact className='icon'/>
                <AiFillGithub className='icon'/>
                <SiExpress className='icon'/>
           </div>
        </div>
    </section>
  )
}

export default Skill
