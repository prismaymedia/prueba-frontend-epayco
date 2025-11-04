import { useEffect, useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { useForm } from 'react-hook-form';
import { CreatePost } from '../../../domain/post/types';

const SuccessIcon = () => (
    <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 12 11 14 15 10" />
        <circle cx="12" cy="12" r="9" />
    </svg>
);

interface PostFormProps {
    onSubmit: (payload: CreatePost) => void;
    isSubmitting: boolean;
    isSuccess?: boolean;
    errorMessage?: string | null;
    onResetSuccess?: () => void;
}

export const PostForm = ({ onSubmit, isSubmitting, isSuccess, onResetSuccess }: PostFormProps) => {
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

    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (!isSuccess) {
            return;
        }

        setShowSuccess(true);
        if (typeof window === 'undefined') {
            return;
        }

        const timeout = window.setTimeout(() => {
            setShowSuccess(false);
            onResetSuccess?.();
        }, 3000);

        return () => window.clearTimeout(timeout);
    }, [isSuccess, onResetSuccess]);

    const submitHandler = handleSubmit(values => {
        onSubmit({
            title: values.title.trim(),
            body: values.body.trim(),
        });
        reset();
    });

    return (
        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <header className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">Crear publicación</h2>
                <p className="text-sm text-slate-500">Comparte tus ideas completando los campos del formulario.</p>
            </header>

            <form className="space-y-5" onSubmit={submitHandler} noValidate>
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
                    rows={5}
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
                            value.trim().length > 0 || 'El contenido no puede estar vacío o solo contener espacios.',
                    })}
                />

                {showSuccess ? (
                    <div className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-600">
                        <SuccessIcon />
                        <p>¡Publicación creada con éxito!</p>
                    </div>
                ) : null}

                <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={isSubmitting || formSubmitting}
                    isLoading={isSubmitting || formSubmitting}
                >
                    {isSubmitting || formSubmitting ? 'Guardando…' : 'Publicar post'}
                </Button>
            </form>
        </div>
    );
};