import { FieldError, UseFormRegisterReturn } from "react-hook-form";
interface Props {
  register: UseFormRegisterReturn;
  placeholder: string;
  errors?: FieldError;
}

export const Input = ({ register, placeholder, errors }: Props) => {
  return (
    <>
      <input
        {...register}
        placeholder={placeholder}
        className={`input ${errors ? "input--error" : ""}`}
      />

      {errors && errors.message && (
        <span className="input__error">{errors.message} </span>
      )}
    </>
  );
};