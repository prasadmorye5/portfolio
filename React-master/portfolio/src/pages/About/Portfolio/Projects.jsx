import React from 'react'
import Project from './Project'
const Projects = ({project}) => {
  return (
    <>
        <div className="portfolio_projects">
            {
                project.map(item=>(
                    <Project key={item.id} project={item}/>
                ))
            }
        </div>
    </>
  )
}

export default Projects
