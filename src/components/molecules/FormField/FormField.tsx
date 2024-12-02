import React from "react";
import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";
import { FormFieldProps } from "./FormField.types";
import styles from "./FormField.module.css";

export const FormField: React.FC<FormFieldProps> = ({
  label,
  input,
  errorMessage,
}) => {
  return (
    <div className={styles.field_container}>
      <Label text={label.text} htmlFor={label.htmlFor} />
      <Input
        type={input.type}
        value={input.value}
        onChange={input.onChange}
        placeholder={input.placeholder}
        disabled={input.disabled}
        className={input.className}
        name={input.name}
        id={input.id}
      />
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};
