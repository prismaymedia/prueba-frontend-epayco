import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Item } from '../../../interfaces/Item.interface';
import { ItemFormProps } from './ItemForm.types';
import { Input } from '../../atoms/Input';
import { TextArea } from '../../atoms/TextArea';
import { Button } from '../../atoms/Button';


const ItemForm: React.FC<ItemFormProps> = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    body: Yup.string().required('Body is required'),
  });

  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors, isSubmitting, isSubmitted, isValid } 
  } = useForm<Omit<Item, 'id'>>({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit', 
  });

  const handleFormSubmit = async (data: Omit<Item, 'id'>) => {
    await onSubmit(data);
    reset(); 
  };

  return (
    <form className='home__form' onSubmit={handleSubmit(handleFormSubmit)}>
      <Input 
        name="title"
        placeholder="Title"
        register={register}
        errors={errors}
        className="home__input"
      />
      
      <TextArea 
        name="body"
        placeholder="Body"
        register={register}
        errors={errors}
        className="home__textarea"
      />

      <Button
        isSubmitting={isSubmitting} 
        isDisabled={(!isValid && isSubmitted) || isSubmitting} 
      />
    </form>
  );
};

export default ItemForm;
