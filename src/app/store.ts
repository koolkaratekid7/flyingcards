import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import { productReducer } from "../slices/ProductSlice";


export const store = configureStore({
  reducer: {
    basket: basketReducer,
    product: productReducer, // add productReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;