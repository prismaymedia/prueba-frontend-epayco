import { ItemList } from "../components/organisms/ItemList";
import { useForm } from "react-hook-form";
import { useItems } from "../hooks/useItems";
import { useAddItem } from "../hooks/useAddItem";
import { Item } from "../../infrastructure/Item";
import { useState } from "react";
import { StatusView } from "../components/organisms/StatusView";
import { ItemForm } from "../components/organisms/ItemForm";
import { Header } from "../components/atoms/Header";

export const Home = () => {
  const [newItem, setNewItem] = useState<Item | null>(null);

  const { data: items, error, isLoading } = useItems();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Item>();

  const mutation = useAddItem((item) => {
    setNewItem(item);
  });
  const onSubmit = (data: Item) => {
    mutation.mutate(data);
    reset();
  };

  const handleBack = () => {
    setNewItem(null)
  }
  
if (isLoading || error) return <StatusView isLoading={isLoading} error={error} />;

  return (
    <div className="min-h-screen font-mono text-gray-800">
      <Header title={'Prueba-FrontEnd-Epayco'} position={'text-center'} size={'text-xl'} rounded={false}/>
      <article className="flex flex-col justify-center items-center ">
        <ItemForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
        />
       <ItemList items={newItem ? [newItem] : items ?? []} onBack={newItem ? handleBack : undefined} />
      </article>
    </div>
  );
};
