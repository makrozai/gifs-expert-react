import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const handlerChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
    const value = inputValue.trim()
    if (value.length < 1) return
    
    onCategory(value)
    setInputValue('')
  }


  return (
    <form onSubmit={ handlerSubmit } aria-label="form" >
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={handlerChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onCategory: PropTypes.func.isRequired,
}