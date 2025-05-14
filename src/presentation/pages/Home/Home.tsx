import { useForm } from 'react-hook-form';
import { useItems } from '../../../application/hooks/useItems';
import { useAddItem } from '../../../application/hooks/useAddItem';
import { Input } from '../../components/atoms/Input';
import { TextArea } from '../../components/atoms/TextArea';
import { Button } from '../../components/atoms/Button';
import { ItemList } from '../../components/organisms/ItemList';

 const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data: items = [], isLoading, error } = useItems();
  const { mutate } = useAddItem();

  const onSubmit = (data) => {
    mutate(data);
    reset();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
  <div className="p-6 max-w-xl mx-auto">
  <h1 className="text-2xl font-bold mb-4 text-center">Add New Item</h1>

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-4 rounded-lg shadow-md">
    <div>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
      <Input id="title" {...register('title')} placeholder="Title" required />
    </div>

    <div>
      <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
      <TextArea id="body" {...register('body')} placeholder="Descripción" required />
    </div>

    <Button type="submit" className="w-full">Add Item</Button>
  </form>

      <h2 className="text-lg font-semibold mt-6">Items List</h2>
      <ItemList items={items} />
    </div>
  );
};

export default Home;
