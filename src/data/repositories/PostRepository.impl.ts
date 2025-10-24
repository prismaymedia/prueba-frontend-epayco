import { IPostRepository } from '../../domain/repositories/PostRepository.interface';
import { Post, CreatePostDto } from '../../domain/entities/Post.entity';
import { PostApiDataSource } from '../dataSources/PostApiDataSource';
import { PostModel } from '../models/PostModel';

/**
 * Implementación del repositorio de Posts
 * Conecta el domain layer con el data layer
 */
export class PostRepositoryImpl implements IPostRepository {
  constructor(private dataSource: PostApiDataSource) {}

  /**
   * Obtiene todos los posts
   */
  async getAll(): Promise<Post[]> {
    const models = await this.dataSource.fetchPosts();
    return models.map(this.mapToEntity);
  }

  /**
   * Crea un nuevo post
   */
  async create(post: CreatePostDto): Promise<Post> {
    const model = await this.dataSource.createPost(post);
    return this.mapToEntity(model);
  }

  /**
   * Obtiene un post por ID
   */
  async getById(id: number): Promise<Post | null> {
    try {
      const model = await this.dataSource.fetchPostById(id);
      return this.mapToEntity(model);
    } catch (error) {
      return null;
    }
  }

  /**
   * Mapea un modelo de la API a una entidad de dominio
   */
  private mapToEntity(model: PostModel): Post {
    return {
      id: model.id,
      title: model.title,
      body: model.body,
      userId: model.userId,
      createdAt: new Date(),
    };
  }
}
