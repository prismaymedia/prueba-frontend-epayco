import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Item } from '../../types/itemType';
import { Input } from '../atoms/Input';
import { TextArea } from '../atoms/TextArea';
import { Button } from '../atoms/Button';

const schema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters long' }),
  body: z.string().min(10, { message: 'Body must be at least 10 characters long' }),
});

interface Props {
  onSubmit: (data: Item) => void;
}

const FormItem: React.FC<Props> = ({
  onSubmit
}) => {
  const {
    register, handleSubmit, reset, formState: { errors }
  } = useForm<Item>({
    resolver: zodResolver(schema),
  });

  return (
    <div className='sticky top-0 bg-white z-[10]'>
      <h1 className='text-3xl font-extrabold max-w-3xl mx-auto p-6 pb-3 pt-3'>Add New Item</h1>
      <form
        onSubmit={
          handleSubmit((data) => {
            onSubmit(data);
            reset();
          })
        }
        className='max-w-3xl mx-auto p-6'
      >
        <Input
          register={register}
          placeholder='Title'
          name={'title'}
          error={errors.title?.message}
        />
        <TextArea
          placeholder='Body'
          register={register}
          name={'body'}
          error={errors.body?.message}
        />
        <Button
          htmlType='submit'
          text='Add Item'
        />
      </form>
    </div>
  )
}

export default FormItem