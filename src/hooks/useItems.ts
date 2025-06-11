import { useQuery, useMutation, useQueryClient } from 'react-query';
import { ApiItemRepository } from '../services/ApiItemRepository';
import { LocalStorageService } from '../services/LocalStorageService';
import { GetAllItemsUseCase, CreateItemUseCase } from '../domain/usecases/ItemUseCases';
import { Item } from '../domain/entities/Item';

const itemRepository = new ApiItemRepository();
const getAllItemsUseCase = new GetAllItemsUseCase(itemRepository);
const createItemUseCase = new CreateItemUseCase(itemRepository);

export const useItems = () => {
  return useQuery<Item[], Error>(
    'items',
    async () => {
      try {
        // Obtener elementos del servidor
        const serverItems = await getAllItemsUseCase.execute();
        
        // Obtener elementos creados localmente
        const localItems = LocalStorageService.getItems();
        
        // Combinar ambos, priorizando los elementos locales
        const allItems = [...serverItems, ...localItems];
        
        // Eliminar duplicados basándose en el ID
        const uniqueItems = allItems.reduce((acc: Item[], current) => {
          const exists = acc.find(item => item.id === current.id);
          if (!exists) {
            acc.push(current);
          }
          return acc;
        }, []);
        
        console.log('Items cargados:', uniqueItems.length, 'Local:', localItems.length, 'Server:', serverItems.length);
        console.log('IDs de elementos locales:', localItems.map(item => item.id));
        return uniqueItems;
      } catch (error) {
        console.error('Error en useItems:', error);
        // Si falla el servidor, al menos devolver los items locales
        return LocalStorageService.getItems();
      }
    },
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    }
  );
};

export const useAddItem = () => {
  const queryClient = useQueryClient();

  return useMutation<Item, Error, { title: string; body: string }>(
    async ({ title, body }) => {
      try {
        const newItem = await createItemUseCase.execute(title, body);
        
        const nextId = LocalStorageService.getNextId();
        const itemWithSequentialId = new Item(nextId, newItem.title, newItem.body, newItem.userId);

        return itemWithSequentialId;
      } catch (error) {
        console.error('Error al crear elemento:', error);
        throw error;
      }
    },
    {
      onSuccess: (newItem) => {
        console.log('Guardando elemento en localStorage:', newItem);
        
        // Guardar el nuevo elemento en localStorage
        LocalStorageService.addItem(newItem);
        
        // Actualizar inmediatamente la caché local con el nuevo elemento
        queryClient.setQueryData<Item[]>('items', (oldData) => {
          if (!oldData) {
            console.log('No hay datos previos, creando lista nueva');
            return [newItem];
          }
          
          // Verificar si el elemento ya existe para evitar duplicados
          const itemExists = oldData.some(item => item.id === newItem.id);
          if (itemExists) {
            console.log('El elemento ya existe en la caché');
            return oldData;
          }
          
          // Agregar el nuevo elemento al inicio de la lista
          const updatedData = [...oldData, newItem];
          console.log('Lista actualizada, total elementos:', updatedData.length);
          return updatedData;
        });
      },
      onError: (error) => {
        console.error('Error al agregar elemento:', error);
      }
    }
  );
};

// Eliminar este hook ya que no se está usando
// export const useLastCreatedItem = () => {
//   const [lastCreatedItem, setLastCreatedItem] = useState<Item | null>(null);
//   
//   const setLastItem = (item: Item | null) => {
//     setLastCreatedItem(item);
//   };

//   return { lastCreatedItem, setLastItem };
// };
