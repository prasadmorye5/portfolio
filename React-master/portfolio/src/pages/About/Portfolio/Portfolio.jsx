import React, { useState } from 'react'
import "./portfolio.css"
import PortfolioCategory from './PortfolioCategory'
import Projects from './Projects'
import portfoliodata from './portfoliodata'
const Portfolio = () => {
  const [projects,setProjects] = useState(portfoliodata)
  const categories = portfoliodata.map(item=>item.category)
  const uniquecategory =["All",...new Set(categories)]
  // console.log(uniquecategory)
  
  const filterprojects = (category)=>{
    if(category==="All")
    {
      setProjects(portfoliodata)
      return
    }
    const filterdata = portfoliodata.filter(project=>project.category===category)
    setProjects(filterdata)
  }
  return (
    <>
        <section id='portfolio'>
            <h2>Projects</h2>
            <p className='para'>Check out some of my projects that i have created so far.Use the buttons to toggle the different categories</p>
            
        
            <div className="container portfolio_container" data-aos="fade-up">

                  <PortfolioCategory categories={uniquecategory} filterprojects ={filterprojects}/>
                  <Projects project={projects}/>
            </div>

        </section>
    </>
  )
}

export default Portfolio
