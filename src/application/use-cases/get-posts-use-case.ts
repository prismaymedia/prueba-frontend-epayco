import { Post } from "../../domain/entities/post";
import { PostRepository } from "../../domain/repositories/post-repository";


export class GetItemsUseCase {
  constructor(private itemRepository: PostRepository) {}

  async execute():Promise<Post[]> {
    return this.itemRepository.fetchItems();
  }
}
