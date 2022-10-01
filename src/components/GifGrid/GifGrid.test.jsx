import { fireEvent, render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGrid } from "./GifGrid"

jest.mock('../../hooks/useFetchGifs')

describe('Testing <GifGrid />', () => {

  const category = "One Punch"

  test('Debe mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })
    
    render(<GifGrid category={category} />)
    
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))

  })

  test('Debe mostrar items cuando se cargan las imagenes  useFetchGifs', () => {
    
    const gifs = [
      {
        id: 'ABS',
        title: 'saitama',
        url: 'http://google.com/prueba.png'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'http://google.com/prusdasdsaeba.png'
      }
    ]
    
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />)

    expect(screen.getAllByRole('img').length).toBe(2)

  })

})