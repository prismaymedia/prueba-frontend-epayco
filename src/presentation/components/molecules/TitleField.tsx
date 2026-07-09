import { Input } from '../atoms/Input';
import type { UseFormRegister } from 'react-hook-form';
import type { Item } from '@/domain/models/Item';

interface Props {
    register: UseFormRegister<Item>;
}

export const TitleField = ({ register }: Props) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <Input {...register('title', { required: true })} placeholder="e.g. Fix bug in login" />
    </div>
);
