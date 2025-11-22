import api from "../lib/api";

const ENDPOINT = "/login/"; // Endpoint base del login Django

export type LoginPayload = {
  username: string;
  password: string;
};

// LOGIN
export const login = async (data: LoginPayload) => {
  const response = await api.post(ENDPOINT, data);
  return response.data; // retornamos el JSON del backend
};
