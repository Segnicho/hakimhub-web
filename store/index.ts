import { ChatBot } from "@/slices/chat/chat-api";
import  ChatHistory  from "@/slices/chat/message-history";
import { configureStore } from "@reduxjs/toolkit";

// import { userApi } from "@pages/api/example";

export const store = configureStore({
  reducer: {
    // [userApi.reducerPath]: userApi.reducer,
    [ChatBot.reducerPath] : ChatBot.reducer,
    ChatHistory: ChatHistory.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
     .concat(ChatBot.middleware)
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
