import { useForm } from "react-hook-form";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";
import { AddItemFormData, Item } from "../../types";
import { useAddItem } from "../../hooks/useAddItem";

interface AddItemFormProps {
  onItemAdded?: (item: Item) => void;
}

function AddItemForm({ onItemAdded }: AddItemFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<AddItemFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur'
  });
  const { mutate: addItem, isLoading } = useAddItem();
  const bodyValue = watch("body");

  const onSubmit = (data: AddItemFormData) => {
    addItem(data, {
      onSuccess: (newItem: Item) => {
        reset();
        onItemAdded?.(newItem);
      },
      onError: () => {
        // Error is handled by react-query
      }
    });
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-lg p-4 shadow-sm max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          label="Title"
          type="text"
          placeholder="Enter item title"
          error={errors.title?.message as string}
          required
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
          })}
        />

        <FormField
          label="Content"
          type="textarea"
          placeholder="Enter item content"
          error={errors.body?.message as string}
          required
          value={bodyValue}
          {...register("body", {
            required: "Content is required",
            minLength: {
              value: 10,
              message: "Content must be at least 10 characters",
            },
          })}
        />

        <div className="flex justify-end space-x-4">
          <Button type="submit" disabled={isLoading} variant="success">
            {isLoading ? "Saving..." : "Add Item"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export { AddItemForm };
