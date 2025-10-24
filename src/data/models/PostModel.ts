/**
 * Modelo de datos de la API para Post
 * Representa la estructura de datos que viene de la API
 */
export interface PostModel {
  id: number;
  title: string;
  body: string;
  userId: number;
}
