import { Typography } from "../atoms/Typography";
import Form from "./Form";
import ItemList from "./ItemList";
import { useItems, useAddItem } from "@/application/services/ItemsServices";

const Main = () => {
    const { data: items, error, isLoading } = useItems();
    const { mutate, data, isLoading: isLoadingAdd, isSuccess } = useAddItem();

    return (
        <div className="flex flex-col w-full items-center py-14">
            <Typography tag="h1" text="Add New Item" className="text-[32px] font-bold mb-4" />
            <Form mutate={mutate} />
            <ItemList items={isSuccess ? [data] : items} isLoading={isLoading || isLoadingAdd} error={error}/>
        </div>
    );
};

export default Main;