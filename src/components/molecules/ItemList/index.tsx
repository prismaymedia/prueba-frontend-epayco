import React from "react";
import { Post } from "../../../models/post";

interface ItemProps {
    posts: Post[];
    renderComponent?: (post: Post) => JSX.Element;
}

const ItemList = ({ posts, renderComponent }: ItemProps) => {
  return (
    <div className="mt-4 bg-gray-400 p-4 max-h-48 lg:max-h-[500px] min-h-20 overflow-y-auto rounded">
      {posts?.map(post => (
        <React.Fragment key={post.id}>
            {renderComponent?.(post)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ItemList;