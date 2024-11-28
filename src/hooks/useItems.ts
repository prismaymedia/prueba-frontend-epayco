import { useQuery } from "react-query";
import { Item } from "../domain/entities/Item";
import { GetItemsUseCase } from "../application/usecases/GetItemsUseCase";
import { ItemRepositoryImpl } from "../data/repositories/ItemRepositoryImpl";

const repository = new ItemRepositoryImpl();
const getItemsUseCase = new GetItemsUseCase(repository);

export const useItems = () => {
  return useQuery<Item[]>(
    "items",
    async () => await getItemsUseCase.execute(),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    }
  );
};
