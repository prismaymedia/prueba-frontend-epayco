import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa6";
import * as Yup from "yup";
import { Input } from "../../Atoms/Input";
import { TextArea } from "../../Atoms/TextArea";
import { ItemData, ItemProps } from "./Item.types";

const colors = [
  "#FFB3BA",
  "#FFDFBA",
  "#FFFFBA",
  "#BAFFC9",
  "#BAE1FF",
  "#E3BFFB",
];
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export const useItem = (props: ItemProps) => {
  const { body, title, isCreating, onSubmit, className } = props;
  const color = useMemo(() => getRandomColor(), []);
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("El título es obligatorio")
      .min(3, "El título debe tener al menos 3 caracteres"),
    body: Yup.string()
      .required("El cuerpo es obligatorio")
      .min(10, "El cuerpo debe tener al menos 10 caracteres"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<ItemData, "id">>({
    mode: "all",
    defaultValues: { body: "", title: "" },
    resolver: yupResolver(validationSchema),
  });

  const onSubmitData = useCallback(
    (data: Omit<ItemData, "id">) => {
      onSubmit?.({ ...data });
      reset();
    },
    [reset, onSubmit]
  );

  const renderBody = isCreating ? (
    <form
      onSubmit={handleSubmit(onSubmitData)}
      className={clsx(
        "flex",
        "flex-col",
        "items-center",
        "h-full",
        "w-full",
        "justify-between"
      )}
    >
      <div className={clsx("flex", "flex-col", "gap-y-3", "w-full")}>
        <h2 className={clsx("text-center", "font-semibold", "text-lg")}>
          Add new items
        </h2>
        <Input {...register("title")} placeholder="Title" />
        {errors.title && (
          <p className={clsx("text-red-600", "font-medium")}>
            {errors.title.message}
          </p>
        )}
        <TextArea {...register("body")} placeholder="body" />
        {errors.body && (
          <p className={clsx("text-red-600", "font-medium")}>
            {errors.body?.message}
          </p>
        )}
      </div>
      <div className={clsx("flex", "w-full", "justify-end")}>
        <button
          type="submit"
          className={clsx(
            "absolute",
            "bottom-2",
            "right-2",
            "w-10",
            "h-10",
            "flex",
            "justify-center",
            "items-center",
            "shadow-[0px_0px_5px_rgba(0,0,0,0.6)]",
            "rounded-full",
            "text-xl",
            "font-bold"
          )}
        >
          <FaCheck />
        </button>
      </div>
    </form>
  ) : (
    <div
      className={clsx(
        "flex",
        "flex-col",
        "justify-between",
        "w-full",
        "h-full"
      )}
    >
      <div className={clsx("")}>
        <h3 className={clsx("text-2xl", "font-bold", "text-gray-800")}>
          {title}
        </h3>
        <p
          className={clsx(
            "text-gray-600",
            "text-lg",
            "leading-relaxed",
            "font-semibold"
          )}
        >
          {body}
        </p>
      </div>
    </div>
  );

  return { renderBody, className, color };
};
