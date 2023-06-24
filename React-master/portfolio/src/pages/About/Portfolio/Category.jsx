import React from 'react'

const Category = ({item,className,onchangecategory}) => {
  return (
   <>
    <button className={className} onClick={()=>onchangecategory()}>{item}</button>
   </>
  )
}

export default Category
