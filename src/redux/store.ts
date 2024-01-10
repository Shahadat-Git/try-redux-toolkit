import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice.tsx";
import Logger from "./middleware/Logger.ts";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
  //   devTools: false,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
