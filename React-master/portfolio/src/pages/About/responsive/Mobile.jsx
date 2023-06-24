import React from 'react'
import "./mobile.css"
import data from './data'
import Scrollspy from "react-scrollspy"
import Nav from './Nav'
const Mobile = () => {
  return (
    <>
        <ul id='floating_nav'>
            <Scrollspy className='scrollspy' offset={-400} items={['header','about','skills','portfolio','contact']} currentClassName='active'>
              {
                data.map(item=><Nav key={item.id} item={item}></Nav>)
              }
            </Scrollspy>
        </ul>
    </>
  )
}

export default Mobile
