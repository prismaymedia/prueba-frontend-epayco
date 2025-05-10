import { useForm } from 'react-hook-form';
import { NewItem } from '../../types/item';
import Input from '../atoms/Input';

interface Props {
  onAddItem: (item: NewItem) => void;
}

const AddItemForm = ({ onAddItem }: Props) => {
  const { register, handleSubmit, reset } = useForm<NewItem>();

  const onSubmit = (data: NewItem) => {
    onAddItem(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Input {...register('title', { required: true })} placeholder="Title" />
      
      <textarea {...register('body', { required: true })} placeholder="Body" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
