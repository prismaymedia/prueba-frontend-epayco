import { Textarea } from '../atoms/Textarea';
import type { UseFormRegister } from 'react-hook-form';
import type { Item } from '@/domain/models/Item';

interface Props {
    register: UseFormRegister<Item>;
}

export const BodyField = ({ register }: Props) => (
    <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Body</label>
        <Textarea {...register('body', { required: true })} placeholder="Describe the issue or feature..." />
    </div>
);
