'use client';
import { useForm, SubmitHandler } from "react-hook-form"
import Swal from 'sweetalert2';
import { createCiudad } from "../../services/CiudadService"; // <--- cambia el servicio
import { useRouter } from 'next/navigation';

type Inputs = {
  nombre: string,
  activo: boolean
}

const CiudadForm = () => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    try {
      console.log("data")
      console.log(data)
      const response = await createCiudad(data);

      if (response.status === 200 || response.status === 201) {

        await Swal.fire({
          title: 'Ciudad creada',
          text: 'La ciudad se ha guardado correctamente',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // Forzar la revalidación y re-ejecución de Server Components en la ruta actual
        router.refresh();
        // 2. Navegación explícita y forzada a la página de listado
        // Esto es más directo que router.back()
        router.push('/ciudades'); // <-- ¡Usar push a la ruta de listado!
      }

    } catch (error: any) {

      Swal.fire({
        title: 'Error',
        text: error?.response?.data?.message || 'No se pudo guardar la ciudad',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });

    }
  }

  return (
    <div className='container sm:mx-auto py-2 px-4 lg:px-80 flex flex-col min-h-screen'>
      <div className='flex flex-col items-center justify-center'>

        <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-full border p-4">

          <h1 className='text-4xl font-bold text-center mb-4'>Agregar Ciudad</h1>

          {/* Campo Nombre */}
          <fieldset className="fieldset mb-3">
            <label className="label">Nombre</label>

            <input
              type="text"
              className={`input validator md:w-full ${errors.nombre ? "input-error" : ""}`}
              placeholder="Ej: Medellín"
              {...register("nombre", {
                required: "El nombre es obligatorio",
                maxLength: { value: 50, message: "Máximo 50 caracteres" }
              })}
            />

            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
            )}
          </fieldset>

          {/* Campo Activo */}
          <fieldset className="fieldset mb-3">
            <label className="label">Activo</label>

            <select
              className={`select validator md:w-full ${errors.activo ? "select-error" : ""}`}
              {...register("activo", {
                required: "Debe seleccionar una opción"
              })}
            >
              <option value="">Seleccione una opción</option>
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </select>

            {errors.activo && (
              <p className="text-red-500 text-sm mt-1">{errors.activo.message}</p>
            )}
          </fieldset>

          <input className="btn btn-neutral mt-4" type="submit" value={"Guardar"} />
        </form>

      </div>
    </div>
  )
}

export default CiudadForm;
