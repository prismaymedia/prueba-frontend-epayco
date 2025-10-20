
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { Post } from "../../../../domain/entities/post";

import { Input } from "../../atoms/input/input";
import { Textarea } from "../../atoms/textarea/textarea";
import { Button } from "../../atoms/button/button";
import { UseMutationResult } from "@tanstack/react-query";



type Props = {
    isValid: boolean;
    errors: FieldErrors<FormData>;
    mutation: UseMutationResult<Post, Error, Omit<Post, "id">>;
    showOnlyNew: boolean;
    onSubmit: SubmitHandler<FormData>;
    handleShowAll: () => void;
    handleSubmit: UseFormHandleSubmit<FormData>;
    register: UseFormRegister<FormData>;
};
type FormData = Omit<Post, "id">;

export const PostForm = ({ showOnlyNew, mutation, errors, isValid, register, onSubmit, handleShowAll, handleSubmit }: Props): JSX.Element => {

    return (
        <form
            aria-live="polite"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col bg-gray-800 shadow-md p-4 rounded-lg mb-6 w-xs sm:w-2xl "
        >
            <h2 className="text-xl font-semibold mb-4 mx-auto dark:text-white">Agregar Nuevo Post</h2>

            <Input
                label={
                    <>
                        Título <span className="text-red-500">*</span>
                    </>
                }
                placeholder="Título"
                {...register("title", {
                    required: "El título es obligatorio",
                    minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
                    setValueAs: (value) => value.trim(),
                })}
                error={errors.title?.message ?? ''}
            />
            <Textarea
                label={
                    <>
                        Contenido <span className="text-red-500">*</span>
                    </>
                }
                placeholder="Escribe algo..."
                {...register("body", {
                    required: "El cuerpo es obligatorio",
                    minLength: { value: 10, message: "Debe tener al menos 10 caracteres" },
                    setValueAs: (value) => value.trim(),
                })}
                error={errors.body?.message}
            />

            {!showOnlyNew &&
                <Button className="p-3.5  " type="submit" loading={mutation.isPending} disabled={!isValid || mutation.isPending}>
                    Nuevo Post
                </Button>}

            {showOnlyNew && (
                <Button
                    onClick={handleShowAll}
                    className="mt-2   bg-gray-200 text-black hover:bg-gray-300"
                > Mostrar Todos </Button>
            )}
        </form>
    );
};
