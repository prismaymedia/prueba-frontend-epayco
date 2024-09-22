import clsx from "clsx";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { ItemList } from "../../Organisms/ItemList";
import { HomeTemplateProps } from "./HomeTemplate.types";

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  isCreating,
  items,
  onCreateButtonClick,
}) => {
  return (
    <div className={clsx("relative", "px-6", "flex", "flex-col", "h-full")}>
      <h1
        className={clsx(
          "text-center",
          "text-black",
          "text-5xl",
          "font-sans",
          "font-bold",
          "p-4",
          "mb-6"
        )}
      >
        My list items
      </h1>

      <ItemList items={items} />
      <button
        disabled={isCreating}
        onClick={onCreateButtonClick}
        type="button"
        className={clsx(
          "sticky",
          "w-20",
          "h-20",
          "flex",
          "bottom-5",
          "left-full",
          "z-10",
          "justify-center",
          "bg-white",
          "items-center",
          "shadow-[0px_0px_5px_rgba(0,0,0,0.6)]",
          "rounded-full",
          "text-4xl",
          "font-bold"
        )}
      >
        <FaPlus />
      </button>
    </div>
  );
};
