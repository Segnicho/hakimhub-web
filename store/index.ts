import { ChatBot } from "@/store/features/chat/chat-api";
import IpSlice from "@/store/features/chat/ip-slice";
import ChatHistory from "@/store/features/chat/message-history";
import { configureStore } from "@reduxjs/toolkit";
import { hospitalDetailApi } from "./features/hospital/hospital-detail-api";
import { hospitalsApi } from "./features/hospital/hospitals-api";
import { doctorDetail } from "@/store/features/doctor-detail";
import { filterDoctorsApi } from "./features/doctors/doctors-api";

export const store = configureStore({
  reducer: {
    [ChatBot.reducerPath]: ChatBot.reducer,
    ChatHistory: ChatHistory.reducer,
    [hospitalDetailApi.reducerPath]: hospitalDetailApi.reducer,
    [hospitalsApi.reducerPath]: hospitalsApi.reducer,
    [doctorDetail.reducerPath]: doctorDetail.reducer,
    [filterDoctorsApi.reducerPath]: filterDoctorsApi.reducer,
    IpSlice: IpSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(hospitalDetailApi.middleware)
      .concat(hospitalsApi.middleware)
      .concat(doctorDetail.middleware)
      .concat(ChatBot.middleware)
      .concat(filterDoctorsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
