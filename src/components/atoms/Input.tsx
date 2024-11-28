import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn<"title" | "body">;
}

const Input = ({ type, placeholder, register }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 border border-gray-300 rounded text-black"
      {...register}
    />
  );
};

export default Input;
