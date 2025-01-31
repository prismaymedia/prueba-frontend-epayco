import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ItemInterface } from '../interfaces/models'
import { ItemList } from '../molecules/ItemList';

import { useItems } from '../hooks/useItems';
import { useAddItem } from '../hooks/useAddItem';

export const Home = () => {
    const { data: items, error, isLoading } = useItems();
    const { register, handleSubmit, reset } = useForm<ItemInterface>();
    const mutation = useAddItem();
    const [listItems, setListItems] = useState<ItemInterface[]>([]);

    items

    useEffect(() => {
        if (items) {
            setListItems(items)
        }
    }, [items])

    const onSubmit = (data: ItemInterface) => {
        const newData = data;
        newData.id = Math.floor(Math.random() * 1000);
        const newItems = [data, ...listItems]
        setListItems(newItems)
        mutation.mutate(data);
        reset();
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return (
        <div className='relative'>
            <div className='bg-gray-50 border-2 border-gray-100 rounded-lg max-w-150 p-4 m-auto my-4 drop-shadow-2xl sticky top-5 transition-all z-10'>
                <h1 className='text-center my-3 text-2xl text-gray-500'>Add New Item</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex justify-between mb-2.5'>
                    <input {...register('title')} placeholder="Title" required className='h-10 border-2 border-gray-300 rounded-lg mx-1.5 flex justify-center items-center align-middle text-center' />
                    <textarea {...register('body')} placeholder="Body" required className='h-10 border-2 border-gray-300 rounded-lg mx-1.5 flex justify-center content-center align-middle text-center' />
                    <button type="submit" className='bg-green-500 w-30 h-10 mx-1.5 rounded-lg text-white'>Add Item</button>
                </form>
            </div>
            <h2 className='text-center my-3 text-2xl text-gray-500 mt-10'>Items List</h2>
            <ItemList items={listItems} />
        </div>
    );
};
