// app/carros/error.tsx
'use client'; // ¡Es obligatorio!

import { useEffect } from 'react';

// El componente recibe el error y una función para intentar re-renderizar
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void; // Función para reintentar
}) {
  
  // Opcional: Registrar el error en un servicio de monitoreo (ej. Sentry)
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center p-10 border border-red-200 rounded-lg bg-red-50">
      <h2 className="text-xl font-bold text-red-700">Algo salió mal al cargar los carros.</h2>
      <p className="mt-2 text-sm text-gray-600">Mensaje: {error.message}</p>
      
      {/* Botón para intentar de nuevo */}
      <button
        className="btn btn-primary mt-4"
        onClick={
          // Intenta re-renderizar el segmento
          () => reset()
        }
      >
        Intentar de nuevo
      </button>
    </div>
  );
}