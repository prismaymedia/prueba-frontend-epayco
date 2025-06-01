import type { FC } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAddItem } from "../hooks/useAddItem";

interface ItemFormPros {}
export const ItemForm: FC<ItemFormPros> = () => {
    const { mutation } = useAddItem();
    const {
        register,
        handleSubmit,
        reset,
        formState: { isValid, isSubmitting },
    } = useForm<Item>();

    const onSubmit = (data: Item) => {
        mutation.mutate(data);
        reset();
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
                className="flex flex-col gap-2"
            >
                <div className="flex justify-between items-center">
                    <h1 className="title-section">Add New Item</h1>
                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className="btn-primary"
                    >
                        + Add Item
                    </button>
                </div>
                <input
                    {...register("title", { required: true, maxLength: 20 })}
                    placeholder="Item title"
                    required
                    className="border-none outline-0 p-2 text-4xl font-semibold"
                />
                <textarea
                    {...register("body", { required: true, maxLength: 100 })}
                    placeholder="Item description"
                    required
                    className="border-none outline-0 p-2 resize-none"
                />
            </form>
        </div>
    );
};
