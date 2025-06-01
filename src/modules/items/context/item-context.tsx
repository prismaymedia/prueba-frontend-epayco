import { createContext, useState } from "react";

interface ItemContextType {
    items: Item[];
    addItem: (item: Item) => void;
}

export const ItemContext = createContext<ItemContextType>({
    items: [],
    addItem: () => {},
});

export const ItemProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = (item: Item) => {
        setItems([...items, item]);
    };

    return (
        <ItemContext.Provider value={{ items, addItem }}>
            {children}
        </ItemContext.Provider>
    );
};
