import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FormProps, FormData } from "./Form.types";
import { Input } from "../../atoms/Input/Input";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Button } from "../../atoms/Button/Button";

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form className="max-w-md " onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        rules={{ required: "Title is required" }}
        render={({ field }) => (
          <Input {...field} placeholder="Title" id="title" />
        )}
      />
      {errors.title?.message && (
        <p className="text-red-500 mb-5">{errors.title.message}</p>
      )}

      <Controller
        name="body"
        control={control}
        defaultValue=""
        rules={{ required: "Body is required" }}
        render={({ field }) => (
          <Textarea {...field} placeholder="Body" id="body" />
        )}
      />
      {errors.body?.message && (
        <p className="text-red-500 mb-5">{errors.body.message}</p>
      )}

      <Button type="submit">Add Item</Button>
    </form>
  );
};
