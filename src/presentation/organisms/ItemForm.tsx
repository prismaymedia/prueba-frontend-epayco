import { AddItemDto } from "../../application/dto/item.dto";
import { Button } from "../atoms/Button";
import { Card } from "../atoms/Card";
import { FormField } from "../molecules/FormField";

interface ItemFormProps {
    onSubmit: (data: AddItemDto) => void;
    register: any;
    handleSubmit: any;
  }
  
  export const ItemForm = ({ onSubmit, register, handleSubmit }: ItemFormProps) => (
    <Card>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          register={register}
          name="title"
          label="Title"
          required
        />
        <FormField
          register={register}
          name="body"
          label="Body"
          type="textarea"
          required
        />
        <Button type="submit">Add Item</Button>
      </form>
    </Card>
  );