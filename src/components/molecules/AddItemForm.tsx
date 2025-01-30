import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";

interface AddItemFormProps {
  onSubmit: (data: { title: string; body: string }) => void;
  isLoading: boolean;
}

const validationSchema = yup.object().shape({
  title: yup.string().min(5, "Title must be at least 5 characters").max(50).required("Title is required"),
  body: yup.string().min(10, "Body must be at least 10 characters").max(200).required("Body is required"),
});

const AddItemForm: React.FC<AddItemFormProps> = ({ onSubmit, isLoading }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => { onSubmit(data); reset(); })} className="space-y-4">
      <Input placeholder="Title" register={register("title")} error={errors.title?.message} />
      <TextArea placeholder="Body" register={register("body")} error={errors.body?.message} />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Item"}
      </Button>
    </form>
  );
};

export default AddItemForm;
