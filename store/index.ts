import { doctorDetail } from "@/slices/doctors/doctor-detail-api";
import { configureStore } from "@reduxjs/toolkit";

// import { userApi } from "@pages/api/example";

export const store = configureStore({
  reducer: {
    // [userApi.reducerPath]: userApi.reducer,
    [doctorDetail.reducerPath]: doctorDetail.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    .concat(doctorDetail.middleware)
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
