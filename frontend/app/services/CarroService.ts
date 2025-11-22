import api from "../lib/api";
import { Carro } from "../interfaces/Carro";

const ENDPOINT = "/carros"; // Endpoint base de Django

//se crea una nueva interfaz o type en base a carro omitiendo el id y fecha de ingreso
//se excluye id y fecha ingreso ya que estos se generan en el backend
export type CarroPayload = Omit<Carro, "id" | "fecha_ingreso">;

// CREAR CARRO
export const createCarro = async (data: CarroPayload) => {
  // CORRECCIÓN: Usar api.post() para crear
  const response = await api.post(`${ENDPOINT}/`, data);

  return response;
};

// ACTUALIZAR CARRO POR ID
export const updateCarro = async (id: string, data: CarroPayload) => {
  const response = await api.put(`${ENDPOINT}/${id}/`, data);
  // CORRECCIÓN: Devolver los datos del carro actualizado
  return response.data;
};

// ELIMINAR CARRO POR ID
export const deleteCarro = async (id: string) => {
  const response = await api.delete(`${ENDPOINT}/${id}/`);
  // CORRECTO: Devolvemos el objeto completo (response), aunque sea 204 No Content
  return response;
};

// OBTENER TODOS LOS CARROS (LISTADO)
export const getCarros = async () => {
  const response = await api.get(`${ENDPOINT}/`);
  return response.data;
};

// OBTENER UN CARRO POR ID (DETALLE)
export const getCarro = async (id: string) => {
  const response = await api.get(`${ENDPOINT}/${id}/`);
  return response.data;
};
