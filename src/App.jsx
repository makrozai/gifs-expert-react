import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const App = () => {

  const [categories, setCategories] = useState([])
  
  const onAddCategory = (element) => {
    if (categories.includes(element)) return
    setCategories([...categories, element])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onCategory={ onAddCategory } />

      {
        categories.map((category,index) => (
          <GifGrid
            key={index}
            category={category}
          />
        ))
      }
    </>
  )
}
