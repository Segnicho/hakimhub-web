import { ChatBot } from "@/slices/chat/chat-api";
import  ChatHistory  from "@/slices/chat/message-history";
import { configureStore } from '@reduxjs/toolkit'
import { hospitalDetailApi } from './../store/hospital/hospital-detail-api'
import { hospitalsApi } from './features/hospital/hospitals-api'
import { doctorDetail } from "@/slices/doctors/doctor-detail-api";

export const store = configureStore({
  reducer: {
    [ChatBot.reducerPath] : ChatBot.reducer,
    ChatHistory: ChatHistory.reducer,
    [hospitalDetailApi.reducerPath]: hospitalDetailApi.reducer,
    [hospitalsApi.reducerPath]: hospitalsApi.reducer,
    [doctorDetail.reducerPath]: doctorDetail.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hospitalDetailApi.middleware)
    .concat(hospitalsApi.middleware)
  .concat(doctorDetail.middleware).concat(ChatBot.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch