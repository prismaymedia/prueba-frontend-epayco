import { RegisterOptions, UseFormRegister, FieldErrors } from "react-hook-form";
import { Item } from "../../../infrastructure/Item";

interface InputProps {
  name: keyof Item;
  placeholder?: string;
  register: UseFormRegister<Item>;
  errors: FieldErrors<Item>;
  validation?: RegisterOptions<Item, keyof Item>;
}
export const Input = ({
  name,
  placeholder = "Type here...",
  register,
  errors,
  validation,
}: InputProps) => {
  return (
    <section className="w-full">
       <input
        {...register(name, validation)}
        placeholder={placeholder}
        className="w-full border border-[#870412] bg-transparent rounded-md p-2 text-lg focus:outline-none focus:border-gray-900"
      />
      {errors.title && (
        <p className="text-[#e1111c] text-sm mt-1">{errors.title.message}</p>
      )}
    </section>
  );
};
