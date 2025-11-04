import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { useForm } from "react-hook-form";
import { CreatePost } from "../../../domain/post/types";

interface PostFormProps {
    onSubmit: (payload: CreatePost) => void;
    isSubmitting: boolean;
}

export const PostForm = ({ onSubmit, isSubmitting }: PostFormProps) => {
    const { register, handleSubmit, reset } = useForm<CreatePost>();

    const submitHandler = handleSubmit(values => {
        onSubmit(values);
        reset();
    })

    return (
        <form onSubmit={submitHandler}>
            <Input {...register('title', { required: true })} placeholder="Título" />
            <Input {...register('body', { required: true })} placeholder="Contenido" as="textarea" />
            <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Guardando...' : 'Guardar'}</Button>
        </form>
    )
}