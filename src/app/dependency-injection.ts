import { AddItemUseCase } from "../application/use-cases/add-post-use-case";
import { GetItemsUseCase } from "../application/use-cases/get-posts-use-case";
import { PostApiRepository  } from "../infrastructure/repository/post-api.repository";


const itemRepository = new PostApiRepository ();

export const getItemsUseCase = new GetItemsUseCase(itemRepository);
export const addItemUseCase = new AddItemUseCase(itemRepository);
