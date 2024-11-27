import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/atoms/Button";

const itemSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be less than 100 characters"),
  body: z
    .string()
    .min(10, "Body must be at least 10 characters")
    .max(500, "Body must be less than 500 characters"),
});

type ItemFormData = z.infer<typeof itemSchema>;

interface ItemFormProps {
  onSubmit: (data: ItemFormData) => void;
  isLoading: boolean;
}

export const ItemForm = ({ onSubmit, isLoading }: ItemFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ItemFormData>({
    resolver: zodResolver(itemSchema),
  });

  const handleFormSubmit = async (data: ItemFormData) => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      await onSubmit(data);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = isLoading || isSubmitting;

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <input
          {...register("title")}
          placeholder="Title"
          disabled={isDisabled}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("body")}
          placeholder="Body"
          disabled={isDisabled}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          rows={4}
        />
        {errors.body && (
          <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isDisabled}>
        {isSubmitting ? "Submitting..." : isLoading ? "Adding..." : "Add Item"}
      </Button>
    </form>
  );
};
