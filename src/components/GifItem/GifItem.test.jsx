import { render, screen } from "@testing-library/react";
import { GifItem } from "./GifItem"

describe('Testing <GifItem />', () => {
  
  const title = "Imagen de prueba"
  const url = "http://google.com/prueba.png"
  
  test('Evaluar snapshot', () => {

    const { container } = render(<GifItem title={title} url={ url }  />)
    expect(container).toMatchSnapshot()

  })

  test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
    
    render(<GifItem title={title} url={url} />)

    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)

  })

  test('Debe de mostrar el titulo en el componente', () => {

    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
    
  })
  
})