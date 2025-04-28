import {
  UseFormRegister,
  UseFormHandleSubmit,
  SubmitHandler,
  FieldErrors,
} from "react-hook-form";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import type { Item } from "../../types/Item";
import Textarea from "../atoms/Textarea";

interface ItemFormProps {
  register: UseFormRegister<Omit<Item, "id">>;
  handleSubmit: UseFormHandleSubmit<Omit<Item, "id">>;
  onSubmit: SubmitHandler<Omit<Item, "id">>;
  errors: FieldErrors<Omit<Item, "id">>;
  isLoading: boolean;
}

const ItemForm = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isLoading,
}: ItemFormProps) => (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div>
      <Input
        {...register("title", {
          required: "Title is required",
          minLength: { value: 3, message: "Minimum 3 characters" },
          maxLength: { value: 50, message: "Maximum 50 characters" },
        })}
        placeholder="Item Title"
      />
      {errors.title && (
        <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
      )}
    </div>
    <div>
      <Textarea
        {...register("body", {
          required: "Body is required",
          minLength: { value: 10, message: "Minimum 10 characters" },
          maxLength: { value: 500, message: "Maximum 400 characters" },
        })}
        placeholder="Insert a body for your Item"
      />
      {errors.body && (
        <p className="text-red-600 text-sm mt-1">{errors.body.message}</p>
      )}
    </div>
    <Button type="submit" disabled={isLoading}>
      {isLoading ? "Adding… item" : "Add Item"}
    </Button>
  </form>
);

export default ItemForm;
