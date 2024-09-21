import { UseFormRegisterReturn } from "react-hook-form";
import { UseMutateFunction } from "react-query";

interface ItemType {
    title: string;
    body: string;
    id?: number;
}

type ItemListProps = {
    items: ItemType[] | undefined;
    isLoading: boolean;
    error: Error | null;
  }
  
type InputProps = {
    placeholder: string;
    register: UseFormRegisterReturn<string>
    error?: boolean;
    errorMessage?: string;
}

type FormProps = {
    mutate: UseMutateFunction<unknown,unknown,ItemType>
}

type LayoutProps = {
    children: string | JSX.Element | JSX.Element[] 
}


export type { ItemType, InputProps, FormProps, ItemListProps, LayoutProps };