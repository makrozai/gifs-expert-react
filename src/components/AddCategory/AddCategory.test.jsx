import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "./AddCategory"

describe('Testing <AddCategory />', () => {

  const inputValue = "Saitama"

  test('Debe cambiar el valor de la caja de texto', () => {

    render(<AddCategory onCategory={() => { }} />)

    const input = screen.getByRole('textbox')
    
    fireEvent.input(input, { target: { value: inputValue } })
    
    expect(input.value).toBe(inputValue)
    
  })

  test('Debe llamar onCategory si el input tiene un valor', () => {
    
    const onCategory = jest.fn()

    render(<AddCategory onCategory={onCategory} />)
    
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onCategory).toHaveBeenCalledTimes(1)
    expect(onCategory).toHaveBeenCalledWith( inputValue )

  })

  test('No debe llamar onCategory si esta vacio el input', () => {

    const onCategory = jest.fn()
    render(<AddCategory onCategory={onCategory} />)
    
    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(onCategory).not.toHaveBeenCalled()

  })

})