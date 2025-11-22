// import React from 'react'
// import CarroCard from './CarroCard'
import { Carro } from '../../interfaces/Carro'
import CarroTabla from './CarroTabla'

type Props = {
    carros: Carro[] //se va a recibir un arreglo de objetos  de Carros
}



const CarroList = ({ carros }: Props) => {
    let columnas = ["id", "placa", "color", "fecha_creacion"];

    return (


        <CarroTabla columnas={columnas} data={carros}/>
        // <div className='grid grid-cols-4 gap-3'>

        //     {carros.map(el =>
        //     (
        //         <div className='col-span-4 md:col-span-1 mb-2' key={el.id}>

        //             <CarroCard carro={el} />
        //         </div>
        //     )
        //     )}
        // </div>
    )
}

export default CarroList