import React from "react";
import { Title } from "../../atoms/Title/Title";
import { Description } from "../../atoms/Description/Description";

interface TitleWithDescriptionProps {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const TitleWithDescription: React.FC<TitleWithDescriptionProps> = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
  as = "h2",
}) => {
  return (
    <div className="space-y-2">
      <Title text={title} className={titleClassName} as={as} />
      <Description text={description} className={descriptionClassName} />
    </div>
  );
};
