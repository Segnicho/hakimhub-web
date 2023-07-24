import { ChatResponse, MessageBody } from "@/types/chat/chat-types"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const API_BASE_URL = 'https://hakim-hub.onrender.com'
export const ChatBot = createApi({
    reducerPath:'ChatBot',
    baseQuery:fetchBaseQuery({baseUrl:API_BASE_URL}),
    endpoints:(builder) => ({
        postChatBot: builder.mutation<ChatResponse, MessageBody>({
            query: (body) => ({
                url:'/api/chat',
                method:"POST",
                body:body

            }),
          }),
    })
})

export const {usePostChatBotMutation} = ChatBot