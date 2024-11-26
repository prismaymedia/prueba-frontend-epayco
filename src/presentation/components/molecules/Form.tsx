import { useForm, SubmitHandler } from "react-hook-form";
import { useAddItem } from "../../../application/hooks";
import { Post } from "../../../domain/model/interfaces";

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Post>();
  const mutation = useAddItem();

  const onSubmit: SubmitHandler<Post> = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
      },
      onError: (error) => {
        console.error("Error adding item: ", error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-6">
      <input
        {...register("title", { required: true, maxLength: 20 })}
        aria-invalid={errors.title ? "true" : "false"}
        placeholder="Title"
        className="p-2 border border-ft-Gray-3 text-ft-Gray-4 rounded"
        required
      />
      {errors.title?.type === "required" && (
        <p role="alert">Campo es requerido</p>
      )}
      {errors.title?.type === 'maxLength' && (
        <p role="alert">Longitud maxima 20 caracteres</p>
      )}
      <textarea
        {...register("body", { required: true, maxLength: 200 })}
        placeholder="Body"
        className="p-2 border border-ft-Gray-3 text-ft-Gray-4 rounded"
        required
      />
      {errors.body?.type === "required" && (
        <p role="alert">Campo es requerido</p>
      )}
      {errors.body?.type === 'maxLength' && (
        <p role="alert">Longitud maxima 200 caracteres</p>
      )}
      <button
        type="submit"
        className="bg-ft-Pink hover:bg-ft-purple font-thin text-ft-Gray-1 py-2 px-4 rounded">
        Add Item
      </button>
    </form>
  );
}

export default Form;
