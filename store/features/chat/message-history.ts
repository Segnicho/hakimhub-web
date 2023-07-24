import { ChatResponse } from '@/types/chat/chat-types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface MessageHistory {
    messages:(string|ChatResponse)[];
}
const initialState: MessageHistory = {
    messages: [], 
};
const ChatHistory = createSlice({
    name: 'ChatHistory',
    initialState,
    reducers: {
      pushMessage(state, action: PayloadAction<string | ChatResponse>) {
        state.messages.push(action.payload);
      },
      removeAllMessage(state) {
        state.messages = [];
      },
    },
  });
export const {pushMessage, removeAllMessage} = ChatHistory.actions
export default ChatHistory