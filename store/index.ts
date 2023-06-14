import { configureStore } from "@reduxjs/toolkit";

// import { userApi } from "@pages/api/example";

export const store = configureStore({
  reducer: {
    // [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
    // .concat(userApi.miidleware)
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
