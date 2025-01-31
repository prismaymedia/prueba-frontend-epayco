export interface ItemListInterface {
    items: ItemInterface[]
}

export interface ItemInterface {
    body: string;
    id: number;
    title: string;
    userId: number;
}