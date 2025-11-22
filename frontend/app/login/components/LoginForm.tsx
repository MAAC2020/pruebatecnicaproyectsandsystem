'use client';

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { login } from '../../services/LoginService';
import { useRouter } from "next/navigation";

type Inputs = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      username: "administrador",
      password: "root"
    }
  });

  const onSubmit = async (data: Inputs) => {
    try {
      const result = await login(data);

      await Swal.fire({
        title: "Bienvenido",
        text: result.message,
        icon: "success",
        confirmButtonText: "OK",
      });

      // 🚀 REDIRECCIÓN INMEDIATA A /carros
      router.push("/carros");

    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: error?.response?.data?.error || "Credenciales incorrectas",
        icon: "error",
      });
    }
  };

  return (
    <div className='container sm:mx-auto py-2 px-4 lg:px-80 flex flex-col min-h-screen'>
      <div className='flex flex-col items-center justify-center'>

        <div className='flex justify-start mb-2'>
          <h1 className='text-4xl font-bold'>Login</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-full border p-4"
        >
          {/* Username */}
          <fieldset className="fieldset mb-3">
            <label className="label">Usuario</label>
            <input
              type="text"
              className={`input validator md:w-full ${errors.username ? "input-error" : ""}`}
              placeholder="Ej: administrador"
              {...register("username", { required: "El usuario es obligatorio" })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset mb-3">
            <label className="label">Contraseña</label>
            <input
              type="password"
              className={`input validator md:w-full ${errors.password ? "input-error" : ""}`}
              placeholder="Password"
              {...register("password", { required: "La contraseña es obligatoria" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn btn-neutral mt-4" type="submit">Login</button>
          <button className="btn btn-ghost mt-1" type="reset">Reset</button>
        </form>

      </div>
    </div>
  );
};

export default LoginForm;
