import { useForm } from "react-hook-form";
import { Card } from "../atoms/Card";
import { ErrorMessage } from "../atoms/ErrorMessage";
import { LoadingSpinner } from "../atoms/LoadingSpinner";
import { useItems } from "../hooks/item/useItem";
import { ItemForm } from "../organisms/ItemForm";
import { ItemList } from "../organisms/ItemList";
import { HomeTemplate } from "../templates/HomeTemplate";
import { AddItemDto } from "../../application/dto/item.dto";
import { useAddItem } from "../hooks/item/useAddItem";

export const Home = () => {
    const { data: items = [], error, isLoading, setLatestItem } = useItems();
    const { register, handleSubmit, reset } = useForm<AddItemDto>();
    const mutation = useAddItem(setLatestItem);
  
    const onSubmit = (data: AddItemDto) => {
      mutation.mutate(data, {
        onSuccess() {
          reset();
        },
      });
    };
  
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMessage error={error} />;
  
    return (
      <HomeTemplate>
        <ItemForm
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
        />
        <Card>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {items.length === 1 ? "Latest Item" : "Items List"}
          </h2>
          <ItemList items={items} />
        </Card>
      </HomeTemplate>
    );
  };