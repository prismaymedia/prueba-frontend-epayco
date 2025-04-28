import { useItems } from "../hooks/useItems";
import { useForm } from "react-hook-form";
import type { Item } from "../types/Item";
import HomeTemplate from "../components/templates/HomeTemplate";
import AddItemSection from "../components/organisms/AddItemSection";
import { useAddItem } from "../hooks/useAdditem";
import ItemsSection from "../components/organisms/ItemsSection";

const HomePage = () => {
  const {
    data: items = [],
    isLoading: loadingItems,
    error: itemsError,
    refetch,
  } = useItems();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<Item, "id">>({
    mode: "onTouched",
  });

  const {
    mutate: addItem,
    isPending: adding,
    isError: addError,
    error,
  } = useAddItem();

  const onSubmit = (data: Omit<Item, "id">) => {
    addItem(data);
    reset();
  };

  return (
    <HomeTemplate>
      <AddItemSection
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        isLoading={adding}
        isError={addError}
        error={error as Error}
      />

      {loadingItems ? (
        <div>Loading…</div>
      ) : itemsError ? (
        <div>Error: {(itemsError as Error).message}</div>
      ) : (
        <ItemsSection
          items={items}
          onReload={() => refetch()}
          isLoading={loadingItems}
        />
      )}
    </HomeTemplate>
  );
};

export default HomePage;
