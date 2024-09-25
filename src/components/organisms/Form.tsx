import { Label } from "../atoms/Label.tsx";
import { Input } from "../atoms/Input.tsx";
import { TextArea } from "../atoms/TextArea.tsx";
import { Button } from "../atoms/Button.tsx";
import { useForm } from "react-hook-form";
import { ItemDto } from "../../types/Item";

interface Props {
  onSubmit: (data: ItemDto) => void;
}

export const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ItemDto>({
    mode: "onChange",
  });
  const isNotOnlyNumber = /^(?!\d+$).*/;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Label label="Title">
          <Input
            register={register("title", {
              required: "El Campo es Requerido.",
              pattern: {
                value: isNotOnlyNumber,
                message: "El campo debe incluir al menos una letra.",
              },
              minLength: {
                value: 3,
                message: "Mínimo 3 caracteres.",
              },
              maxLength: {
                value: 20,
                message: "Son máximo 20 caracteres",
              },
            })}
            placeholder="quien eres?"
            errors={errors.title}
          />
        </Label>

        <Label label="Comment">
          <TextArea
            register={register("body", {
              required: "El campo es requerido",
              pattern: {
                value: /^(?!\d+$).*/,
                message: "El campo debe incluir al menos una letra.",
              },
              minLength: {
                value: 3,
                message: "Mínimo 5 caracteres",
              },
              maxLength: {
                value: 70,
                message: "Son máximo 70 caracteres",
              },
            })}
            placeholder="cuentame algo..."
            errors={errors.body}
          />
        </Label>
        <Button label={"Add Item"} isDisabled={!isValid} />
      </form>
    </>
  );
};
