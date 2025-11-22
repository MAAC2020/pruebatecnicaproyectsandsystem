'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// Asumimos que has instalado sweetalert2
import Swal from 'sweetalert2';

// Importa tus servicios (asumiendo que también están en JS)
import { getCarros } from '../../services/CarroService';
import { getCiudades } from '../../services/CiudadService';
import { createViaje } from '../../services/ViajeService';

const ViajeForm = () => {
    const router = useRouter();

    // Estados para almacenar los datos de las claves foráneas
    const [carros, setCarros] = useState([]);
    const [ciudades, setCiudades] = useState([]);

    // Estado para los datos del formulario (sin tipos)
    const [formData, setFormData] = useState({
        carro: 0,
        ciudad_origen: 0,
        ciudad_destino: 0,
        tiempo_horas: 1,
        fecha: new Date().toISOString().split('T')[0], // Formato YYYY-MM-DD
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- Carga de Datos (Dependencias) ---
    useEffect(() => {
        const loadDependencies = async () => {
            try {
                // Peticiones concurrentes
                const [carrosData, ciudadesData] = await Promise.all([
                    getCarros(),
                    getCiudades()
                ]);

                setCarros(carrosData);
                // Filtra por ciudades activas (asumiendo que tienen el campo 'activo')
                setCiudades(ciudadesData.filter(c => c.activo));

                if (carrosData.length === 0 || ciudadesData.length < 2) {
                    setError('No hay suficientes Carros o Ciudades activas para crear un viaje.');
                    return;
                }

                // Establecer valores por defecto (la primera ID disponible)
                setFormData(prev => ({
                    ...prev,
                    carro: carrosData[0].id,
                    ciudad_origen: ciudadesData[0].id,
                    ciudad_destino: ciudadesData[1] ? ciudadesData[1].id : ciudadesData[0].id,
                }));

            } catch (err) {
                console.error(err);
                setError('Error al cargar dependencias (Carros/Ciudades). Verifique la consola.');
            } finally {
                setLoading(false);
            }
        };

        loadDependencies();
    }, []);

    // --- Manejo del Formulario ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            // Convertir a entero los campos numéricos
            [name]: ['carro', 'ciudad_origen', 'ciudad_destino', 'tiempo_horas'].includes(name)
                ? parseInt(value)
                : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // 1. Validaciones del Frontend
        if (formData.ciudad_origen === formData.ciudad_destino) {
            return Swal.fire('Error', 'La ciudad de Origen y Destino no pueden ser la misma.', 'error');
        }
        if (formData.tiempo_horas <= 0) {
            return Swal.fire('Error', 'El tiempo en horas debe ser un valor positivo.', 'error');
        }

        try {
            // 2. Llamada a la API de Django
            await createViaje(formData);

            // 3. Éxito
            await Swal.fire('Viaje creado', 'El viaje se ha guardado correctamente.', 'success');
            router.push('/viajes');
            router.refresh();

        } catch (err) {
            // 4. Manejo de errores 400 del Backend
            const backendError = err?.response?.data || {};
            let errorMessage = 'No se pudo guardar el viaje.';

            if (backendError.tiempo_horas) {
                errorMessage = `Tiempo en horas: ${backendError.tiempo_horas[0]}`;
            } else if (backendError.non_field_errors) {
                errorMessage = backendError.non_field_errors[0];
            }

            Swal.fire('Error', errorMessage, 'error');
        }
    };

    if (loading) return <div className='text-center mt-8'>Cargando Carros y Ciudades...</div>;
    if (error) return <div className='text-center mt-8 text-red-500'>{error}</div>;


    return (
        <div className='container sm:mx-auto py-2 px-4 lg:px-80 flex flex-col min-h-screen'>
            <div className='flex flex-col items-center justify-center'>
                <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-full border p-4">

                    <h1 className='text-4xl font-bold text-center mb-4'>Crear Viaje</h1>

                    {/* 1. CARRO (Dropdown) */}
                    <fieldset className="fieldset mb-3">
                        <label className="label">Carro</label>
                        <select name="carro" value={formData.carro} onChange={handleChange} className="select w-full">
                            {carros.map(carro => (
                                <option key={carro.id} value={carro.id}>
                                    {carro.placa} ({carro.color})
                                </option>
                            ))}
                        </select>
                    </fieldset>

                    {/* 2. CIUDAD ORIGEN (Dropdown) */}
                    <fieldset className="fieldset mb-3">
                        <label className="label">Ciudad Origen</label>
                        <select name="ciudad_origen" value={formData.ciudad_origen} onChange={handleChange} className="select w-full">
                            {ciudades.map(ciudad => (
                                <option key={ciudad.id} value={ciudad.id}>
                                    {ciudad.nombre}
                                </option>
                            ))}
                        </select>
                    </fieldset>

                    {/* 3. CIUDAD DESTINO (Dropdown) */}
                    <fieldset className="fieldset mb-3">
                        <label className="label">Ciudad Destino</label>
                        <select name="ciudad_destino" value={formData.ciudad_destino} onChange={handleChange} className="select w-full">
                            {ciudades.map(ciudad => (
                                <option key={ciudad.id} value={ciudad.id}>
                                    {ciudad.nombre}
                                </option>
                            ))}
                        </select>
                    </fieldset>

                    {/* 4. TIEMPO EN HORAS (Input Number) */}
                    <fieldset className="fieldset mb-3">
                        <label className="label">Tiempo estimado (horas)</label>
                        <input
                            type="number"
                            name="tiempo_horas"
                            value={formData.tiempo_horas}
                            onChange={handleChange}
                            min="1"
                            className="input w-full"
                            required
                        />
                    </fieldset>

                    {/* 5. FECHA DEL VIAJE (Input Date) */}
                    <fieldset className="fieldset mb-3">
                        <label className="label">Fecha del Viaje</label>
                        <input
                            type="date"
                            name="fecha"
                            value={formData.fecha}
                            onChange={handleChange}
                            className="input w-full"
                            required
                        />
                    </fieldset>

                    <button className="btn btn-neutral mt-4" type="submit">Crear Viaje</button>
                </form>
            </div>
        </div>
    );
};

export default ViajeForm;