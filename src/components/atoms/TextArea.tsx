import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Props {
  register: UseFormRegisterReturn;
  placeholder: string;
  errors?: FieldError;
}

export const TextArea = ({ register, placeholder, errors }: Props) => {
  return (
    <>
      <textarea
        {...register}
        placeholder={placeholder}
        className={`textarea ${errors ? "textarea--error" : ""}`}
      />

      {errors && errors.message && (
        <span className="textarea__error">{errors.message} </span>
      )}
    </>
  );
};
