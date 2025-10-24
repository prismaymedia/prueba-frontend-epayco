import { Post, CreatePostDto } from '../entities/Post.entity';
import { IPostRepository } from '../repositories/PostRepository.interface';

/**
 * Use Case: Agregar un nuevo post
 * Contiene la lógica de negocio para crear posts
 */
export class AddPostUseCase {
  constructor(private repository: IPostRepository) {}

  /**
   * Ejecuta el caso de uso
   * @param post DTO con los datos del post a crear
   * @returns El post creado
   */
  async execute(post: CreatePostDto): Promise<Post> {
    // Validaciones de negocio
    if (!post.title || post.title.trim().length === 0) {
      throw new Error('El título es requerido');
    }

    if (post.title.length < 5) {
      throw new Error('El título debe tener al menos 5 caracteres');
    }

    if (post.title.length > 100) {
      throw new Error('El título no puede exceder 100 caracteres');
    }

    if (!post.body || post.body.trim().length === 0) {
      throw new Error('El contenido es requerido');
    }

    if (post.body.length < 10) {
      throw new Error('El contenido debe tener al menos 10 caracteres');
    }

    if (post.body.length > 500) {
      throw new Error('El contenido no puede exceder 500 caracteres');
    }

    try {
      // Crear el post con valores por defecto
      const postToCreate: CreatePostDto = {
        ...post,
        userId: post.userId || 1, // Usuario por defecto
      };

      const createdPost = await this.repository.create(postToCreate);
      return createdPost;
    } catch (error) {
      console.error('Error al crear post:', error);
      throw new Error('No se pudo crear el post');
    }
  }
}
