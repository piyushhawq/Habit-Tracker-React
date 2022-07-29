import { configureStore } from '@reduxjs/toolkit';
import updateHabitReducer from "../Redux/updateHabitSlice"

export const store = configureStore({
  // This the habit reducer which is used to update all the habits and days status.
  reducer: {
    updateHabit: updateHabitReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch