import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../atoms/Input";
import { Textarea } from "../atoms/Textarea";
import { Button } from "../atoms/Button";
import { FormProps } from "../../types/Form";

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ title: string; body: string }>();

  const handleFormSubmit = (data: { title: string; body: string }) => {
    onSubmit(data, reset);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <Input
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters long",
            },
          })}
          placeholder="Title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>
      <div>
        <Textarea
          {...register("body", {
            required: "Body is required",
            minLength: {
              value: 10,
              message: "Body must be at least 10 characters long",
            },
          })}
          placeholder="Body"
        />
        {errors.body && (
          <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>
        )}
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
};
