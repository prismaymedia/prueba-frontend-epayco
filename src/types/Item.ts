export type Item = {
  id?: number;
  title: string;
  body: string;
};

export type ItemCardProps = {
  item: Item;
};

export type ItemListProps = {
  items: Item[];
};
