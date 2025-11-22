import React from 'react'
import { Ciudad } from '../../interfaces/Ciudad'

type Props = {
    columnas: string[],
    data: Ciudad[]
}

const CiudadTabla = ({ columnas, data }: Props) => {
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
                    {
                        data.map(el => (
                            <tr key={el.id}>
                                <th>{el.id}</th>
                                <td>{el.nombre}</td>

                                {/* Campo activo con color */}
                                <td>
                                    {el.activo ? (
                                        <span className="text-green-600 font-semibold">
                                            Activo
                                        </span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">
                                            Inactivo
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CiudadTabla
