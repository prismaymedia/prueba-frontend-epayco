import { Post, CreatePostDto } from '../entities/Post.entity';

/**
 * Interface del repositorio de Posts
 * Define el contrato que debe cumplir cualquier implementación del repositorio
 */
export interface IPostRepository {
  /**
   * Obtiene todos los posts
   */
  getAll(): Promise<Post[]>;

  /**
   * Crea un nuevo post
   */
  create(post: CreatePostDto): Promise<Post>;

  /**
   * Obtiene un post por su ID
   */
  getById(id: number): Promise<Post | null>;
}
