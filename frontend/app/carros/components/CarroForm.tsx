'use client';
import { useForm, SubmitHandler } from "react-hook-form"
import Swal from 'sweetalert2';
import { createCarro } from "../../services/CarroService";
// Importar el hook useRouter
import { useRouter } from 'next/navigation';
type Inputs = {
  placa: string
  color: string
}

const CarroForm = () => {
  //Inicializar el router
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    try {
      //@param {Object} se pasa las propiedades placa , color del carro a guardar
      let response = await createCarro(data);

      console.log("response");
      console.log(response)
      //aqui validar si el status es 200 | 201 mostrar alerta de creado con exito y redireccionar a la pagina de atras
      if (response.status === 200 || response.status === 201) {

        // Alerta de éxito
        await Swal.fire({
          title: 'Carro creado',
          text: 'El carro se ha guardado correctamente',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        // Forzar la revalidación y re-ejecución de Server Components en la ruta actual
        router.refresh();
        // 2. Navegación explícita y forzada a la página de listado
        // Esto es más directo que router.back()
        router.push('/carros'); // <-- ¡Usar push a la ruta de listado!
      }

    } catch (error) {

      console.error(error)
      //si hay un error status es 400 entonces mostrar alerta y no redireccionar
      Swal.fire({
        title: 'Error',
        text: error?.response?.data?.message || 'No se pudo guardar el carro',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });

    } finally {

    }
  }

  return (
    <div className='container sm:mx-auto py-2 px-4 lg:px-80 flex flex-col min-h-screen'>
      <div className='flex flex-col items-center justify-center'>

        <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-full border p-4">

          <h1 className='text-4xl font-bold text-center mb-4'>Agregar Carro</h1>

          {/* Campo Placa */}
          <fieldset className="fieldset mb-3">
            <label className="label">Placa</label>

            <input
              type="text"
              className={`input validator md:w-full ${errors.placa ? "input-error" : ""}`}
              placeholder="Ej: ABC123"
              {...register("placa", {
                required: "La placa es obligatoria",
                maxLength: { value: 10, message: "Máximo 10 caracteres" }
              })}
            />

            {errors.placa && (
              <p className="text-red-500 text-sm mt-1">{errors.placa.message}</p>
            )}
          </fieldset>

          {/* Campo Color */}
          <fieldset className="fieldset mb-3">
            <label className="label">Color</label>

            <input
              type="text"
              className={`input validator md:w-full ${errors.color ? "input-error" : ""}`}
              placeholder="Ej: Azul"
              {...register("color", {
                required: "El color es obligatorio",
                maxLength: { value: 30, message: "Máximo 30 caracteres" }
              })}
            />

            {errors.color && (
              <p className="text-red-500 text-sm mt-1">{errors.color.message}</p>
            )}
          </fieldset>

          <input className="btn btn-neutral mt-4" type="submit" value={"Guardar"} />
        </form>

      </div>
    </div>
  )
}

export default CarroForm
