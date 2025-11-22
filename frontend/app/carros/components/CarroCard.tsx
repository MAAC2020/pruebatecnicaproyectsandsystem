import Image from 'next/image'
//importacion de la interfaz Carro
import { Carro } from '../../interfaces/Carro';

type Props = {
    carro: Carro
}

const CarroCard = ({ carro }: Props) => {
    //formatear fecha
    const fechaFormateada = new Date(carro.fecha_ingreso).toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    return (
        <div className="card bg-base-100 w-full shadow-sm hover:bg-base-200">
            <figure>
                <Image src={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                    alt={"project.titulo"}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full h-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Placa: {carro.placa}</h2>
                <p>color: {carro.color}</p>
                <p>fecha ingreso: {fechaFormateada}</p>
                <div className="card-actions justify-end md:flex md:flex-row md:gap-1">
                    <button className="btn btn-primary">Ver</button>
                    <button className="btn btn-success">Editar</button>

                </div>
            </div>
        </div>
    )
}

export default CarroCard