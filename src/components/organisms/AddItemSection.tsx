import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  SubmitHandler,
} from "react-hook-form";
import ItemForm from "../molecules/ItemForm";
import type { Item } from "../../types/Item";

interface AddItemSectionProps {
  register: UseFormRegister<Omit<Item, "id">>;
  handleSubmit: UseFormHandleSubmit<Omit<Item, "id">>;
  onSubmit: SubmitHandler<Omit<Item, "id">>;
  errors: FieldErrors<Omit<Item, "id">>;
  isLoading: boolean;
  isError: boolean;
  error?: Error;
}

const AddItemSection = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isLoading,
  isError,
  error,
}: AddItemSectionProps) => (
  <section className="mb-8">
    <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
    {isError && <p className="text-red-600 mb-2">Error: {error?.message}</p>}
    <ItemForm
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      isLoading={isLoading}
    />
    {isLoading && <p className="mt-2">Adding item…</p>}
  </section>
);

export default AddItemSection;
