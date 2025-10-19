import { useAddItem } from '@/hooks/useAddItem';
import { useForm } from 'react-hook-form';
import { ButtonUI } from '../ui/button';
import { InputUI } from '../ui/input';
import { TextareaUI } from '../ui/textarea';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z
    .string()
    .min(1, "Title is required.")
    .max(80, "Title cannot exceed 80 characters."),
  body: z
    .string()
    .min(5, "Body must be at least 5 characters.")
    .max(500, "Body cannot exceed 500 characters."),
});

type CreateItemForm = z.infer<typeof schema>;

export default function FormPost() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<CreateItemForm>({
    resolver: zodResolver(schema),
  });
  const mutation = useAddItem();

  const onSubmit = (data: CreateItemForm) => {
    mutation.mutate(data);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputUI
        {...register("title")}
        placeholder="Title"
        isRequired
        errorMessage={errors.title?.message}
        description="Add a catchy title for your item. Maximum 80 characters."
      />
      <TextareaUI
        {...register("body")}
        placeholder="Body"
        isRequired
        errorMessage={errors.body?.message}
        description="Provide detailed information about your item. Maximum 500 characters."
      />
      <ButtonUI
        color="primary"
        type="submit"
        isDisabled={isSubmitting}
        isLoading={isSubmitting}
      >
        Add Item
      </ButtonUI>
    </form>
  );
}
