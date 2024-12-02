import React from "react";
import styles from "./Label.module.css";
import { LabelProps } from "./Label.types";

export const Label: React.FC<LabelProps> = ({ text, htmlFor, className }) => {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className || ""}`}>
      {text}
    </label>
  );
};
