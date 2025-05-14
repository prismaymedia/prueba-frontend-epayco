import { SubmitHandler, useForm } from 'react-hook-form';
import { useItems } from '../../../application/hooks/useItems';
import { useAddItem } from '../../../application/hooks/useAddItem';
import { Input } from '../../components/atoms/Input';
import { TextArea } from '../../components/atoms/TextArea';
import { Button } from '../../components/atoms/Button';
import { ItemList } from '../../components/organisms/ItemList';
import { ItemForm } from '../../../domain/models/item';

 const Home = () => {
  const { register, handleSubmit, reset } = useForm<ItemForm>();
  const { data: items = [], isLoading, error } = useItems();
  const { mutate } = useAddItem();

  const onSubmit: SubmitHandler<ItemForm> = (data) => {
    const isDuplicate = items.some((item) => item.title === data.title);

    if (isDuplicate) {
      alert('¡Duplicado no se puede crear!');
      return;
    }
    mutate(data);
    reset();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const listToShow =
  items.length > 100
    ? [items[0]]
    : items.length === 0
    ? null
    : items;

  return (
  <div className="p-6 max-w-xl mx-auto">
  <h1 className="text-2xl font-bold mb-4 text-center">Agregar Nuevo Item</h1>

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-4 rounded-lg shadow-md">
    <div>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Título</label>
      <Input id="title" {...register('title')} placeholder="Titulo" required />
    </div>

    <div>
      <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
      <TextArea id="body" {...register('body')} placeholder="Descripción" required />
    </div>

    <Button type="submit" className="w-full">Agregar</Button>
  </form>

      <h2 className="text-lg font-semibold mt-6">Lista de Items</h2>
      <ItemList items={listToShow} />
    </div>
  );
};

export default Home;
