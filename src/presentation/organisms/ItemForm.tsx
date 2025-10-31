import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Button } from '../atoms/Button';

const itemSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  body: z.string().min(5, 'Body must be at least 5 characters'),
});

type FormValues = z.infer<typeof itemSchema>;

type Props = {
  onSubmit: (data: FormValues) => void;
  isSubmitting?: boolean;
};

export function ItemForm({ onSubmit, isSubmitting = false }: Props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(itemSchema),
    mode: 'onBlur',
  });

  const submit = (data: FormValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-3">
      <Input {...register('title')} placeholder="Title" />
      {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
      <Textarea {...register('body')} placeholder="Body" />
      {errors.body && <p className="text-red-600 text-sm">{errors.body.message}</p>}
      <Button type="submit" disabled={isSubmitting}>Add Item</Button>
    </form>
  );
}


