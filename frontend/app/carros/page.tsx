import Link from 'next/link';
import CarroList from './components/CarroList';
import { getCarros } from '../services/CarroService';
type Props = {}

const page = async (props: Props) => {
  //se llama al servicio para obtener los datos del backend
  const carros = await getCarros();

  return (
    <div className='container sm:mx-auto py-2 px-4 lg:px-80'>

      <div className='flex mb-2'>
        <div className='justify-start w-full'>
          <h1 className='text-4xl font-bold'>Carros</h1>

        </div>
        <div className='justify-end'>
          <Link href={'/carros/new'} className='btn btn-primary'>Agregar</Link>
        </div>
      </div>

      {/* se pasa el arreglo de objetos de la peticion al backend a el componente de lista */}
      <CarroList carros={carros} />
    </div>
  )
}

export default page