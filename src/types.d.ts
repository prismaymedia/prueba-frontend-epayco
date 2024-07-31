export interface BaseItem {
  title: string
  body: string
}
export interface Item extends BaseItem {
  userId: number
  id: number
  isLoading?: boolean
}

export interface NewItem extends BaseItem {
  userId: number
}

export type ResponseItems = {
  data: Item[]
}

export type ResponseItem = {
  data: Item
}

export type ItemsProps = {
  items?: Item[]
}

export type ItemProps = {
  item: Item
}

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  handleFormSubmit: (data: NewItem) => void;
}
