export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface IFormInput {
  "title": string,
  "body": string,
  "id": number
}

export interface ItemsListProps {
  items: Post[] | undefined;
}