import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Item } from '../../../interfaces/Item.interface'; 

export type InputProps = {
  name: keyof Omit<Item, 'id'>;
  placeholder: string;
  register: UseFormRegister<Omit<Item, 'id'>>; 
  errors: FieldErrors<Omit<Item, 'id'>>;
  className: string;
};