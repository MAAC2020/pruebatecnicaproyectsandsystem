import api from "../lib/api";
// Asume que estas interfaces existen en app/interfaces

import { Viaje } from "../interfaces/Viaje";

const ENDPOINT = "/viajes";


export type ViajePayload = Omit<Viaje, "id">;


/**
 * @description Crea un nuevo viaje en la API.
 * @param data Los datos del nuevo viaje (Payload).
 */
export const createViaje = async (data: ViajePayload) => {
  // Llama al endpoint POST /api/viajes/
  const response = await api.post(`${ENDPOINT}/`, data);

  return response;
};

/**
 * @description Obtiene una lista de viajes, con opción de filtrar por la placa del carro.
 * @param placa (Opcional) La placa del carro para filtrar.
 * @returns Un arreglo de objetos Viaje.
 */
export const getViajes = async (placa?: string) => {
  // 1. Inicia la URL base.
  let url = `${ENDPOINT}/`;

  // si existe una placa en el parametro entonces implementar la lógica de filtrado del Backend: GET /api/viajes/?placa=AAA123
  if (placa) {
    url = `${url}?placa=${placa}`;
  }

  // 3. Realiza la petición.
  const response = await api.get(url);

  // 4. Asegura la devolución de un arreglo de Viaje
  return response.data;
};
