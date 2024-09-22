import clsx from "clsx";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = (props) => (
  <div
    {...props}
    className={clsx(
      "relative",
      "flex",
      "w-full",
      "h-[350px]",
      "min-w-[250px]",
      "max-w-[400px]",
      "border-2",
      "p-4",
      "border-black",
      "rounded-lg",
      props.className
    )}
  >
    {props.children}
  </div>
);
