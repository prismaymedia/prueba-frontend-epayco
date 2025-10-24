/**
 * Post Entity - Domain Layer
 * Representa la entidad de dominio Post con sus propiedades
 */
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt?: Date;
}

/**
 * DTO para crear un nuevo Post
 */
export interface CreatePostDto {
  title: string;
  body: string;
  userId?: number;
}
