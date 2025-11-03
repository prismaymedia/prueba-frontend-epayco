import { RegisterOptions, UseFormRegister, FieldErrors } from "react-hook-form";
import { Item } from "../../../infrastructure/Item";

interface TextAreaProps {
  name: keyof Item;
  placeholder?: string;
  register: UseFormRegister<Item>;
  errors: FieldErrors<Item>;
  validation?: RegisterOptions<Item, keyof Item>;
}

export const TextArea = ({
  name,
  placeholder = "Type here...",
  register,
  errors,
  validation,
}: TextAreaProps) => {
  return (
    <section className="w-full">
      <textarea
        {...register(name, validation)}
        placeholder={placeholder}
        className="w-full border  border-[#870412] rounded-md p-2 h-24 resize-none focus:border-gray-900"
      />
      {errors.body && (
        <p className="text-[#e1111c] text-sm mt-1">{errors.body.message}</p>
      )}
    </section>
  );
};
