import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";

describe('Testing <App />', () => {

  const inputValue = "Saitama"

  test('Evaluar snapshot', () => {
    
    render(<App />)

    expect(screen.getByText('GifExpertApp')).toBeTruthy()
    
  })

  test('Debe mostrar el titulo de cada categoria', () => {
    
    render(<App />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(screen.getByText(inputValue)).toBeTruthy()
    
  })

})