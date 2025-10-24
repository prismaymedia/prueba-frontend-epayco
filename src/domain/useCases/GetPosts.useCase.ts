import { Post } from '../entities/Post.entity';
import { IPostRepository } from '../repositories/PostRepository.interface';

/**
 * Use Case: Obtener todos los posts
 * Contiene la lógica de negocio para obtener posts
 */
export class GetPostsUseCase {
  constructor(private repository: IPostRepository) {}

  /**
   * Ejecuta el caso de uso
   * @returns Lista de posts
   */
  async execute(): Promise<Post[]> {
    try {
      const posts = await this.repository.getAll();
      return posts;
    } catch (error) {
      console.error('Error al obtener posts:', error);
      throw new Error('No se pudieron cargar los posts');
    }
  }
}
