'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { getViajes } from '../services/ViajeService';
import ViajeTable from './components/ViajeTable';

type FormData = {
  placa: string;
};

const ViajesPage = () => {

  const { register, handleSubmit } = useForm<FormData>();

  const [viajes, setViajes] = useState([]);
  const [loading, setLoading] = useState(false);

  // --- Buscar viajes usando React Hook Form ---
  const onSubmit = async (data: FormData) => {
    
    setLoading(true);

    //se envia la placa si la placa esta vacia se envia vacia y ya el servicio esta controlando la validacion de que hacer
    const response = await getViajes(data.placa);
    setViajes(response);

    setLoading(false);


  };

  return (
    <div className='container sm:mx-auto py-2 px-4 lg:px-80'>

      <div className='flex mb-4 items-center justify-between'>
        <h1 className='text-4xl font-bold'>Viajes</h1>
        <Link href={'/viajes/new'} className='btn btn-primary'>
          Agregar Viaje
        </Link>
      </div>

      {/* Buscador usando React Hook Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2'>

        <input
          type="text"
          placeholder="Buscar viajes por placa..."
          {...register("placa", { required: true })}
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-secondary">
          Buscar
        </button>
      </form>

      {/* ESTADO PARA MOSTRAR BUSCANDO BIAJES */}
      {loading
        ? 
        <span className="loading loading-bars loading-xs text-white"></span>
        : <ViajeTable viajes={viajes} />
      }
    </div>
  );
};

export default ViajesPage;
