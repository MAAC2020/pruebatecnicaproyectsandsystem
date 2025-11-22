import Link from 'next/link';
import CiudadList from './components/CiudadList';
import { getCiudades } from '../services/CiudadService';
type Props = {}

const page = async (props: Props) => {
  //se llama al servicio para obtener los datos del backend
  const ciudades = await getCiudades();

  return (
    <div className='container sm:mx-auto py-2 px-4 lg:px-80'>

      <div className='flex mb-2'>
        <div className='justify-start w-full'>
          <h1 className='text-4xl font-bold'>Ciudades</h1>

        </div>
        <div className='justify-end'>
          <Link href={'/ciudades/new'} className='btn btn-primary'>Agregar</Link>
        </div>
      </div>

      {/* se pasa el arreglo de objetos de la peticion al backend a el componente de lista */}
      <CiudadList ciudades={ciudades} />
    </div>
  )
}

export default page