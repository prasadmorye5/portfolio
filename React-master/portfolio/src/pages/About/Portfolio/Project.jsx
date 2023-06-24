import React from 'react'
import Card from './../../../components/Card';
const Project = ({project}) => {
 
  return (
        <Card className="portfolio_project">
            <div className="portfolio_image">
                <img src={project.image} width="100%" height="200rem"/>
            </div>

            <h4>{project.title}</h4>
            <p>{project.desc}</p>

                <div className="portfolio_project_cta">
                    <a href={project.demo} className='btn sm white' target="_blank" rel="noopener noreferrer">Demo</a>
                    <a href={project.github} className='btn sm primary' target="_blank" rel="noopener noreferrer">Github</a>

                </div>
        </Card>
  )
} 

export default Project
