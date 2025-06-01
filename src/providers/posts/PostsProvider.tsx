import { useReducer } from 'react';
import { postInitialState, PostReducer } from './PostsReducer';
import {PostsContext, PostsContextType} from './PostsContext';

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [postState, dispatch] = useReducer(PostReducer, postInitialState);

  const addPost = async (title: string, body: string) => {
    dispatch({ type: "ADD_POST", payload: {title, body}})
  }

  const value: PostsContextType = {
    posts: postState.posts,
    isLoading: postState.isLoading,
    error: postState.error,
    addPost,
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};
