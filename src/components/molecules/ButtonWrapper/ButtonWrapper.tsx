import React from "react";
import { Button } from "../../atoms/Button/Button";
import styles from "./ButtonWrapper.module.css";
import { ButtonWrapperProps } from "./ButtonWrapper.types";

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  button,
  className,
}) => {
  return (
    <div className={`${styles.button_container} ${className}`}>
      <Button text={button.text} onClick={button.onClick} type={button.type} />
    </div>
  );
};
