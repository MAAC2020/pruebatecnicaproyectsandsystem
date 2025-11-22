export interface Viaje {
    // Campos primarios
    id: number;
    tiempo_horas: number;
    fecha: string; // Se recibe como un string de fecha (ej: "2023-11-20")
    carro: number;
    ciudad_origen: number;
    ciudad_destino: number;
}