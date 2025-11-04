import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { useForm } from 'react-hook-form';
import { CreatePost } from '../../../domain/post/types';

interface PostFormProps {
    onSubmit: (payload: CreatePost) => void;
    isSubmitting: boolean;
}

export const PostForm = ({ onSubmit, isSubmitting }: PostFormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting: formSubmitting },
    } = useForm<CreatePost>({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            title: '',
            body: '',
        },
    });

    const submitHandler = handleSubmit(values => {
        onSubmit({
            title: values.title.trim(),
            body: values.body.trim(),
        });
        reset();
    });

    return (
        <form className="flex flex-col gap-4" onSubmit={submitHandler} noValidate>
            <Input
                label="Título"
                placeholder="Introduce un título descriptivo"
                aria-invalid={Boolean(errors.title)}
                errorMessage={errors.title?.message}
                {...register('title', {
                    required: 'El título es obligatorio.',
                    minLength: {
                        value: 3,
                        message: 'El título debe tener al menos 3 caracteres.',
                    },
                    maxLength: {
                        value: 120,
                        message: 'El título no puede superar los 120 caracteres.',
                    },
                    validate: value =>
                        value.trim().length > 0 || 'El título no puede estar vacío o solo contener espacios.',
                })}
            />

            <Input
                label="Contenido"
                placeholder="Describe el contenido"
                as="textarea"
                rows={4}
                aria-invalid={Boolean(errors.body)}
                errorMessage={errors.body?.message}
                {...register('body', {
                    required: 'El contenido es obligatorio.',
                    minLength: {
                        value: 10,
                        message: 'El contenido debe tener al menos 10 caracteres.',
                    },
                    maxLength: {
                        value: 500,
                        message: 'El contenido no puede superar los 500 caracteres.',
                    },
                    validate: value =>
                        value.trim().length > 0 ||
                        'El contenido no puede estar vacío o solo contener espacios.',
                })}
            />

            <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={isSubmitting || formSubmitting}
                isLoading={isSubmitting || formSubmitting}
            >
                Guardar
            </Button>
        </form>
    );
};