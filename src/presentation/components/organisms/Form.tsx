import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import { FormProps, ItemType } from "@/shared/types";

const Form = ({mutate}: FormProps) => {
    const { handleSubmit, reset, register, formState: {errors} } = useForm<ItemType>();

    const onSubmit:SubmitHandler<ItemType> = (data: ItemType) => {
        mutate(data);
        reset();
    };
    
    return (
        <form className="flex flex-col w-80" onSubmit={handleSubmit(onSubmit)}>
            <Input 
                placeholder="Title" 
                register={register('title', {required: "Este campo es requerido"})}
                error={errors.title!==undefined}
                errorMessage={errors.title?.message}
            />
            <TextArea 
                placeholder="Body" 
                register={register('body', {required: "Este campo es requerido"})}
                error={errors.body!==undefined}
                errorMessage={errors.body?.message}
            />
            <Button title="Add New Item"/>
        </form>
    );
};

export default Form;