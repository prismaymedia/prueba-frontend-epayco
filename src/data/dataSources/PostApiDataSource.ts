import axios, { AxiosInstance } from 'axios';
import { API_CONFIG } from '../config/api.config';
import { PostModel } from '../models/PostModel';
import { CreatePostDto } from '../../domain/entities/Post.entity';

/**
 * Data Source para la API de Posts
 * Responsable de las llamadas HTTP a la API externa
 */
export class PostApiDataSource {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUTS.REQUEST,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Obtiene todos los posts de la API
   */
  async fetchPosts(): Promise<PostModel[]> {
    try {
      const response = await this.api.get<PostModel[]>(API_CONFIG.ENDPOINTS.POSTS);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Error al obtener posts de la API');
    }
  }

  /**
   * Crea un nuevo post en la API
   */
  async createPost(post: CreatePostDto): Promise<PostModel> {
    try {
      const response = await this.api.post<PostModel>(
        API_CONFIG.ENDPOINTS.POSTS,
        post
      );
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw new Error('Error al crear post en la API');
    }
  }

  /**
   * Obtiene un post por ID
   */
  async fetchPostById(id: number): Promise<PostModel> {
    try {
      const response = await this.api.get<PostModel>(
        `${API_CONFIG.ENDPOINTS.POSTS}/${id}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching post by id:', error);
      throw new Error('Error al obtener post por ID');
    }
  }
}
