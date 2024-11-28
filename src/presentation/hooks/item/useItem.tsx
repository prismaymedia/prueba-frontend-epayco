import { useQuery } from "react-query";
import { ItemRepositoryImpl } from "../../../infrastructure/repository/ItemRepositoryImpl";
import { GetItemUseCase } from "../../../application/useCases/getItem.usecase";
import { useState } from "react";
import { Item } from "../../../domain/models/Item";

export const useItems = () => {
  const [latestItem, setLatestItem] = useState<Item | null>(null);
  const itemRepository = new ItemRepositoryImpl();
  const itemUseCase = new GetItemUseCase(itemRepository);

  const query = useQuery('items', () => itemUseCase.execute(), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });

  const items = latestItem ? [latestItem] : query.data || [];

  return {
    ...query,
    data: items,
    setLatestItem,
  };
};