// frontend/lib/api.ts
import axios from "axios";

// ⚠️ 1. URL Base de tu Backend de Django
// Esta es la parte de la URL que es común a todas tus peticiones (host, puerto y prefijo de API).
const DJANGO_BASE_URL = "http://127.0.0.1:8000/api/v1/api";
// NOTA: Basado en tu configuración de Django:
// router.register('api/carros', CarroViewSet, basename='carros') -> Esto resuelve a /api/v1/api/carros/
// Asegúrate de que esta URL sea accesible desde el entorno de ejecución de Next.js (servidor y cliente).

// 2. Crear y configurar la instancia de Axios
const api = axios.create({
  baseURL: DJANGO_BASE_URL,

  // Tiempo máximo de espera para la respuesta (10 segundos)
  timeout: 10000,

  // Headers que se enviarán con CADA petición
  headers: {
    // Especificamos que enviaremos y esperamos JSON
    "Content-Type": "application/json",
    Accept: "application/json",

    // Si Django estuviera en un dominio diferente, necesitarías credenciales:
    // withCredentials: true,
  },
});

// 3. Exportar la instancia configurada (Singleton)
export default api;
