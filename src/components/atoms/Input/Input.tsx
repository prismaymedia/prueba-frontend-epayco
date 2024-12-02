import React, { useState } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  type,
  placeholder = "",
  value,
  onChange,
  className,
  disabled = false,
  name,
  id,
}) => {
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  const validateInput = (value: string) => {
    if (!value.trim()) {
      return "This field is required.";
    }
    if (value.length < 5) {
      return "Minimum length is 5 characters.";
    }
    if (value.length > 50) {
      return "Maximum length is 50 characters.";
    }
    return "";
  };

  const handleBlur = () => {
    setTouched(true);
    const validationError = validateInput(value!);
    setError(validationError);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    onChange(e);
  };

  return (
    <div className={styles.input_container}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() => setTouched(false)}
        disabled={disabled}
        className={`${styles.input} ${disabled ? styles.disabled : ""} ${
          error ? styles.error_input : ""
        } ${className || ""}`}
        name={name}
        id={id}
      />
      {touched && error && <div className={styles.error_message}>{error}</div>}
    </div>
  );
};
