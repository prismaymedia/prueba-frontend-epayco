import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  className,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${
        disabled ? styles.disabled : ""
      } ${className || ""}`}
    >
      {text}
    </button>
  );
};
