import api from "../lib/api";
import { Ciudad } from "../interfaces/Ciudad";

const ENDPOINT = "/ciudades"; // Endpoint base de Django

//se crea una nueva interfaz o type en base a Ciudad omitiendo el id y fecha de ingreso
//se excluye id y fecha ingreso ya que estos se generan en el backend
export type CiudadPayload = Omit<Ciudad, "id">;

// CREAR Ciudad
export const createCiudad = async (data: CiudadPayload) => {
  // CORRECCIÓN: Usar api.post() para crear
  const response = await api.post(`${ENDPOINT}/`, data);

  return response;
};

// ACTUALIZAR Ciudad POR ID
export const updateCiudad = async (id: string, data: CiudadPayload) => {
  const response = await api.put(`${ENDPOINT}/${id}/`, data);
  // CORRECCIÓN: Devolver los datos del Ciudad actualizado
  return response.data;
};

// ELIMINAR Ciudad POR ID
export const deleteCiudad = async (id: string) => {
  const response = await api.delete(`${ENDPOINT}/${id}/`);
  // CORRECTO: Devolvemos el objeto completo (response), aunque sea 204 No Content
  return response;
};

// OBTENER TODOS LOS CiudadS (LISTADO)
export const getCiudades = async () => {
  const response = await api.get(`${ENDPOINT}/`);
  return response.data;
};

// OBTENER UN Ciudad POR ID (DETALLE)
export const getCiudad = async (id: string) => {
  const response = await api.get(`${ENDPOINT}/${id}/`);
  return response.data;
};
