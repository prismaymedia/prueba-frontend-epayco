import { SubmitHandler } from "react-hook-form";
import { ItemList } from "../molecules/ItemList.tsx";
import { Form } from "../organisms/Form.tsx";
import { Title } from "../atoms/Title.tsx";
import { useItem } from "../../hooks/useItem.tsx";
import { ItemDto } from "../../types/Item";

export const Home = () => {
  const { items, isLoading, isError, mutate } = useItem();

  const onSubmit: SubmitHandler<ItemDto> = (data) => {
    mutate(data);
  };

  return (
    <main className="home__container">
      <header className="home__header">
        <Title label="Add New Item" styles="text-[wheat] mb-4" />
        <Form onSubmit={onSubmit} />
      </header>

      <div className="home__body">
        <Title label="Items List" styles="text-[#407076] mb-5" />
        <ItemList items={items} isLoading={isLoading} isError={isError} />
      </div>
    </main>
  );
};
