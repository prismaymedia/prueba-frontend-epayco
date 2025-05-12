export interface ItemInterface {
    id?: number;
    title: string;
    body: string;
    userId?: number;
}
export interface ItemsInterface {
    items: ItemInterface[];
}