import { useQuery } from '@tanstack/react-query';
import { ItemRepository } from '@/infrastructure/repositories/ItemRepository';
import { GetItemsUseCase } from '@/domain/usecases/GetItemsUseCase';

const itemRepository = new ItemRepository();
const getItemsUseCase = new GetItemsUseCase(itemRepository);

export const useItems = () => {
  return useQuery({
    queryKey: ['items'],
    queryFn: () => getItemsUseCase.execute(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};