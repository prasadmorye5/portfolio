import React, { useState } from 'react'
import Category from './Category'

const PortfolioCategory = ({categories,filterprojects}) => {
    const[activecategory,setActiveCategory]= useState("All")

    const changecategoryhandler =(activecat)=>{
        setActiveCategory(activecat);
        filterprojects(activecat);
    }
  return (
    <>
        <div className="portfolio_categories">
            {
                categories.map(item=>(
                    <Category key={item} item={item} className={`btn cat_btn ${activecategory===item ?`primary`: `white`}`} onchangecategory={()=>changecategoryhandler(item)}/>
                ))
            }
        </div>
    </>
  )
}

export default PortfolioCategory
