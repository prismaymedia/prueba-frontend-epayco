import { useForm } from 'react-hook-form';
import { useAddItem } from '@/application/hooks/useAddItem';
import { Button } from '../atoms/Button';
import { TitleField } from '../molecules/TitleField';
import { BodyField } from '../molecules/BodyField';
import type { Item } from '@/domain/models/Item';

interface Props {
    onAdd?: (item: Item) => void;
}

export const ItemForm = ({ onAdd }: Props) => {
    const { register, handleSubmit, reset } = useForm<Item>();
    const mutation = useAddItem();

    const onSubmit = (data: Item) => {
        mutation.mutate(data, {
            onSuccess: (newItem) => {
                onAdd?.(newItem);
                reset();
            },
        });
    };

    return (
        <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TitleField register={register} />
                <BodyField register={register} />

                <div className="md:col-span-2 flex justify-end">
                    <Button type="submit">Publicar</Button>
                </div>
            </form>
        </div>
    );
};
