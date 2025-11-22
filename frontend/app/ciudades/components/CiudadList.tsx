// import React from 'react'
// import CarroCard from './CarroCard'
import { Carro } from '../../interfaces/Carro'
import CiudadTabla from './CiudadTabla'

type Props = {
    ciudades: Carro[] //se va a recibir un arreglo de objetos  de Carros
}



const CiudadList = ({ ciudades }: Props) => {
    let columnas = ["id", "nombre", "activo"];

    return (

        <CiudadTabla columnas={columnas} data={ciudades}/>
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

export default CiudadList