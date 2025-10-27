// ui/molecules/SearchBar.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

interface SearchFormInputs {
  query: string;
}

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>();

  const onSubmit = (data: SearchFormInputs) => {
    if (data.query.trim().length < 2) {
      alert("Por favor, ingresa al menos 2 caracteres para buscar.");
      return;
    }
    onSearch(data.query);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center gap-2 mb-6 px-4"
    >
      <Input {...register("query")} type="text" placeholder="Buscar película..." />
      <Button type="submit">Buscar</Button>
    </form>
  );
};