import { ItemProps } from "./types";

export default function Item({ item }: { item: ItemProps }) {
  return (
    <div className="post-card">
      <div className="post-card-content">
        <h3 className="post-card-title">{item.title}</h3>
        <p className="post-card-body">{item.body}</p>
      </div>
    </div>
  );
};


