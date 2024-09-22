export interface ItemProps extends ItemData {
  isCreating?: boolean;
  onSubmit?: (data: Omit<ItemData, "id">) => void;
  className?: string;
}

export interface ItemData {
  id: number;
  title: string;
  body: string;
}
