import React from "react";
import styles from "./Description.module.css";
import { DescriptionProps } from "./Description.types";

export const Description: React.FC<DescriptionProps> = ({
  text,
  className,
}) => {
  return <p className={`${styles.description} ${className || ""}`}>{text}</p>;
};
