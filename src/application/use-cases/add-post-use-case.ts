import { Post } from "../../domain/entities/post";
import { PostRepository } from "../../domain/repositories/post-repository";


export class AddItemUseCase {
  constructor(private itemRepository: PostRepository) {}

  async execute(newItem: Post):Promise<Post> {
    return this.itemRepository.addItem(newItem);
  }
}