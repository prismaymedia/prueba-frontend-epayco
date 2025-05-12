import { SubmitHandler, useForm } from "react-hook-form";
import { ItemInterface } from "../types/item";
import useAddItem from "./useAddItem";




export const useStubmit = () => {
    const { reset,handleSubmit,register,formState } = useForm<ItemInterface>();
    const mutation = useAddItem();

    const titleError = formState.errors.title?.message as string;
    const bodyError = formState.errors.body?.message as string;
    const titleRegister = register('title',{required:{value:true,message:'Title is required'},minLength:{value:3,message:'Title must be at least 3 characters'}});
    const bodyRegister = register('body',{required:{value:true,message:'Title is required'},minLength:{value:3,message:'Title must be at least 3 characters'}});
    
    
    
    const onSubmit: SubmitHandler<ItemInterface> = (data) => {
        
        mutation.mutate(data);
        reset();
    };

    return { onSubmit,handleSubmit,titleRegister,bodyRegister,titleError,bodyError };
};
