import React from 'react'
import { Tarjeta } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const TarjetasPage = () => {

    const {currentColor} = useStateContext();

  return (
    <div className="flex flex-wrap mt-20">
    <Tarjeta
      titulo="Card 1"
      altura="h-96"
      elevacion="md"
      fondo={currentColor}
      ancho="w-500 flex-grow flex-shrink"
      
    >
        <p>This is the contents of the card</p>

    </Tarjeta>
    <Tarjeta
      titulo="Card 2"
      altura="h-40 lg:h-96"
      fondo={currentColor}
      elevacion="md"
      ancho="w-400"
      
    >
        <p>This is the contents of the card</p>

    </Tarjeta>
    <Tarjeta
      titulo="Card 3"
      altura="h-40"
      fondo={currentColor}
      elevacion="md"
      ancho="w-400"
      
    >
        <p>This is the contents of the card</p>

    </Tarjeta>
    <Tarjeta
      titulo="Card 4"
      altura="h-40"
      fondo={currentColor}
      elevacion="md"
      
    >
        <p>This is the contents of the card</p>

    </Tarjeta>
    <Tarjeta
      titulo="Card 5"
      altura="h-40"
      fondo={currentColor}
      elevacion="md"
      
    >
        <p>This is the contents of the card</p>

    </Tarjeta>

  </div>
  )
}

export default TarjetasPage