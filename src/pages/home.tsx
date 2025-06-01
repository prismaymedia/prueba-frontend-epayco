import { ItemList, useItemContext, useItems } from "../modules/items";
import { ItemForm } from "../modules/items/components/item-form";

export const Home = () => {
    const { data: items, error, isLoading } = useItems();
    const { items: itemsFromContext } = useItemContext();

    const itemsToDisplay =
        itemsFromContext.length > 0 ? itemsFromContext : items;

    return (
        <div className="max-w-screen mx-auto h-screen p-4">
            <div className="flex lg:flex-row flex-col items-start gap-4 h-full">
                <section className="w-full h-full bg-neutral-100 flex flex-col rounded-md p-4">
                    <ItemForm />
                </section>
                <section className="w-full lg:w-1/4 h-full lg:pb-10 pb-0">
                    <h2 className="title-section mb-4">Items List</h2>
                    {error && <div>Error: {(error as Error).message}</div>}
                    {isLoading && (
                        <div className="flex flex-col items-center mt-4">
                            <span>Loading...</span>
                        </div>
                    )}
                    {!isLoading && itemsToDisplay && (
                        <ItemList items={itemsToDisplay} />
                    )}
                    {!isLoading && !itemsToDisplay && <div>No items found</div>}
                </section>
            </div>
        </div>
    );
};
