import { UseFormRegister } from "react-hook-form";
import Input from "../atoms/Input";
import Button from "../atoms/Buttons";
import { newItem } from "../../domain/entities/Item";

interface FormProps {
  register: UseFormRegister<newItem>;
  onSubmit: (e?: React.BaseSyntheticEvent<object>) => Promise<void>;
}
const Form = ({ register, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
      <Input type="text" placeholder="Title" register={register("title")} />
      <Input type="text" placeholder="Body" register={register("body")} />
      <Button>Agregar post</Button>
    </form>
  );
};

export default Form;
