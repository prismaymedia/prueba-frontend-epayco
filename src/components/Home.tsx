import { ItemList } from './ItemList';
import { useForm } from 'react-hook-form';
import { Register } from '../models/models';
import { useAddItem, useItems } from '../hooks/useItem';
import { useState } from 'react';


export const Home = () => {

    const { data: items, error, isLoading } = useItems();
    const { register, handleSubmit, reset } = useForm<Register>();
    const [ currentItem, setCurrentItem ] = useState([...items,{
      body: "",
      id: 1,
      title: "",
      userId: 1,
    }])
    const mutation = useAddItem();
  
    const onSubmit = (data: any) => {
      setCurrentItem((prev) => ([{
        ...prev,
        ...data,
      }]));
      mutation.mutate(data);
      reset({
        body: "",
        title: "",
      });
    };
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: { error as string }</div>;
  
    return (
      <div className="grid grid-flow-dense gap-6 w-4/5 justify-self-center p-14 mx-auto">
        <h1 className='col-span-12 text-xl text-center font-bold text-[#042A44]'>Add New Item</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='text-sm grid grid-flow-row-dense col-span-12 justify-self-center gap-4 w-4/5'>
          <input {...register('title')} placeholder="Title" className="border-blue-200 border-2 p-4" required />
          <textarea {...register('body')} placeholder="Body" className="border-blue-200 border-2 p-4 resize-none" required />
          <button type="submit" className='w-1/2 bg-green-500 p-2 font-medium text-white rounded-full'>Add Item</button>
        </form>
        <h2 className='col-span-12 text-lg font-bold text-[#042A44]'>Items List</h2>
        <ItemList items={currentItem} id={0} />
      </div>
    );
  };