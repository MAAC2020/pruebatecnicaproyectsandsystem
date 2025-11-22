import React from 'react'
import { Carro } from '../../interfaces/Carro'

type Props = {
    columnas: string[],
    data: Carro[]
}

const CarroTabla = ({ columnas, data }: Props) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        {columnas.map((el, index) => (<th key={index}>{el}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data.map(el => (
                            <tr key={el.id}>
                                <th>{el.id}</th>
                                <td>{el.placa}</td>
                                <td>{el.color}</td>
                                <td>{new Date(el.fecha_ingreso).toLocaleDateString('es-CO', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                })}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CarroTabla