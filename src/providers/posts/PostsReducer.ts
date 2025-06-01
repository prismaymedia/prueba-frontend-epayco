import { Action } from "../../models/action";
import { Post } from "../../models/post";

interface PostsState {
  posts: Post[];
  isLoading: boolean;
  error: boolean;
}

const postInitialState: PostsState = {
  posts: [],
  isLoading: false,
  error: false,
};

function PostsReducer(state: PostsState, action: Action): PostsState {
  switch (action.type) {
    case "ADD_POST":
      if (action.payload === undefined) {
        return state;
      }
      return {
        ...state,
        posts: [...state.posts, {
          ...action.payload,
          id: state.posts.length + 1,
        } as Post],
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload as boolean,
      }
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload as boolean
      }
    default:
      return state;
  }
}

export { PostsReducer as PostReducer, postInitialState };
