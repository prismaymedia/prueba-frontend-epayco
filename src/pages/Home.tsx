import { useForm } from 'react-hook-form';
import { useItems } from '../domain/usecases/useItems';
import { useAddItem } from '../domain/usecases/useAddItem';
import ItemList from '../components/organisms/ItemList';

export const Home = () => {
  const { data: items, error, isLoading } = useItems();
  const { register, handleSubmit, reset } = useForm();
  const mutation = useAddItem();

  const onSubmit = (data) => {
    mutation.mutate(data);
    reset();
  };

  if (isLoading) return <div className="text-center text-gray-500 mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-600 mt-10">Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 underline mb-4">Add New Item</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register('title')}
            placeholder="Title"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <textarea
            {...register('body')}
            placeholder="Body"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Add Item
          </button>
        </form>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Items List</h2>
        <ItemList items={items} />
      </div>
    </div>
  );
};