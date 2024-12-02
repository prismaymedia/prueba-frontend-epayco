import React from "react";
import styles from "./Title.module.css";
import { TitleProps } from "./Title.types";

export const Title: React.FC<TitleProps> = ({ text, level = 1, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${styles.title} ${styles[`h${level}`]} ${className || ""}`}>
      {text}
    </Tag>
  );
};