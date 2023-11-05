import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { bookListBaseApi } from "./baseApi";

const store = configureStore({
  reducer: {
    userSlice: userReducer,
    [bookListBaseApi.reducerPath]: bookListBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookListBaseApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
